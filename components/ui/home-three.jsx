"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";

function isSafariOrIOS() {
  const navigator = window.navigator;
  const ua = navigator.userAgent.toLowerCase();

  const isSafariOrIOS =
    (/safari/.test(ua) && !/chrome/.test(ua) && /version\//.test(ua)) ||
    /iPad|iPhone|iPod/.test(navigator.platform) ||
    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1); // Added check for iOS devices

  return isSafariOrIOS;
}

const HomeThree = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const currentRef = mountRef.current;

    const width = currentRef.offsetWidth;
    const height = Math.min(width, currentRef.offsetHeight);

    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

    // Dark mode
    var BACKGROUND_COLOR = new THREE.Color(0x000000);
    var LINE_COLOR = new THREE.Color(0.8, 1.0, 1.0);
    var EDGE_COLOR = new THREE.Color(0x808080);
    var CUBE_COLOR = new THREE.Color(0x000000);
    var VERTEX_COLOR = new THREE.Color(0xffffff);
    var PARTICLE_COLOR_INITIAL = new THREE.Color(0.28, 0.28, 0.28);
    var PARTICLE_COLOR_TRANSITION = new THREE.Color(0.98, 0.98, 0.98);
    var BLOOM_STRENGTH = 2.05;
    var PARTICLE_SIZE = 0.125;
    var BLENDING = THREE.NormalBlending;
    var PARTICLE_COUNT = 4500;

    if (!prefersDarkScheme.matches) {
      // Light theme
      BACKGROUND_COLOR = new THREE.Color(0xfafafa);
      LINE_COLOR = new THREE.Color(0, 0, 0);
      EDGE_COLOR = new THREE.Color(0x000000);
      CUBE_COLOR = new THREE.Color(0xfafafa);
      VERTEX_COLOR = new THREE.Color(0x393b3c);
      PARTICLE_COLOR_INITIAL = new THREE.Color(0.55, 0.55, 0.55);
      PARTICLE_COLOR_TRANSITION = new THREE.Color(1, 1, 1);
      BLOOM_STRENGTH = 0;
      PARTICLE_SIZE = 0.05;
      BLENDING = THREE.SubtractiveBlending;
      PARTICLE_COUNT = 8500;
    }

    // Other constants
    const ROTATE_SPEED = 0.85;
    var PARTICLES_COLOR_VEC3 = `${PARTICLE_COLOR_INITIAL.r}, ${PARTICLE_COLOR_INITIAL.g}, ${PARTICLE_COLOR_INITIAL.b}`;
    const BROWSER_FACTOR = isSafariOrIOS() ? 1.6 : 3.5;
    const CUBE_SIZE = 8;
    const VERTEX_SIZE = 0.4;
    const GRID_SIZE = 5;
    const SPACING = 8.0028;
    const MAX_ITERATIONS = 13;
    const FADE_IN_DURATION = 0.95; // seconds
    const FADE_OUT_DELAY = 700; // milliseconds
    const INTERVAL = 700; // delay between iterations
    const FADE_OUT_DURATION = 0.95; // seconds
    const START_VERTEX_INDEX = 0; // Starting vertex index
    const TRANSITION_DELAY = 65; // Delay between cube color transitions in milliseconds

    const VERTEX_OFFSETS = [
      { position: new THREE.Vector3(-4, -4, 4), label: "bottom front right" },
      { position: new THREE.Vector3(-4, 4, 4), label: "top front right" },
      { position: new THREE.Vector3(-4, 4, -4), label: "top front left" },
      { position: new THREE.Vector3(-4, -4, -4), label: "bottom front left" },
      { position: new THREE.Vector3(4, 4, 4), label: "top back right" },
      { position: new THREE.Vector3(4, 4, -4), label: "top back left" },
      { position: new THREE.Vector3(4, -4, 4), label: "bottom back right" },
      { position: new THREE.Vector3(4, -4, -4), label: "bottom back left" },
    ];

    let scene, camera, controls, composer, clock, renderer;
    let mainGroup,
      group,
      cubeLocations = [],
      activeLines = [],
      connectedVertices = new Map(),
      uniqueConnections = new Set();
    let currentStartCubeIndex = 1;

    // Initialize Scene
    function initScene() {
      scene = new THREE.Scene();
      scene.background = BACKGROUND_COLOR;

      camera = new THREE.PerspectiveCamera(45, width / height, 1, 1000);
      camera.position.set(66, 0, 0);

      renderer = new THREE.WebGLRenderer({
        powerPreference: "high-performance",
      });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(width, height);
      currentRef.appendChild(renderer.domElement);

      controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.dampingFactor = 0.03;
      controls.enablePan = false;
      controls.enableZoom = false;
      controls.maxPolarAngle = Math.PI / 2;
      controls.minPolarAngle = Math.PI / 2;
      controls.autoRotate = true;
      controls.autoRotateSpeed = ROTATE_SPEED;

      let target = new THREE.WebGLRenderTarget(width, height, {
        samples: 10,
      });

      const renderScene = new RenderPass(scene, camera);
      const bloomPass = new UnrealBloomPass(
        new THREE.Vector2(width, height),
        BLOOM_STRENGTH,
        0.8,
        0.65
      );

      // Use the target in your EffectComposer
      composer = new EffectComposer(renderer, target);
      composer.addPass(renderScene);
      composer.addPass(bloomPass);
      composer.setSize(width, height);
      composer.setPixelRatio(window.devicePixelRatio);

      clock = new THREE.Clock();

      function animate() {
        controls.update();
        const elapsedTime = clock.getElapsedTime();

        // Update the time uniform
        cubeLocations.forEach((location) => {
          location.gu.time.value = elapsedTime;
        });

        // Animate line opacity with easing
        activeLines.forEach((lineObj) => {
          const elapsed = elapsedTime - lineObj.startTime;
          if (!lineObj.line.userData.fadingOut) {
            if (elapsed < FADE_IN_DURATION) {
              lineObj.line.material.uniforms.opacity.value = easeInOutQuad(
                elapsed / FADE_IN_DURATION
              );
            } else {
              lineObj.line.material.uniforms.opacity.value = 1.0;
            }
          } else {
            const fadeOutElapsed =
              elapsedTime - lineObj.line.userData.fadeOutStartTime;
            if (fadeOutElapsed < FADE_OUT_DURATION) {
              lineObj.line.material.uniforms.opacity.value =
                1.0 - easeInOutQuad(fadeOutElapsed / FADE_OUT_DURATION);
            } else {
              lineObj.line.material.uniforms.opacity.value = 0.0;
            }
          }
        });

        // Check if all lines have faded out
        if (
          activeLines.length > 0 &&
          activeLines.every(
            (lineObj) => lineObj.line.material.uniforms.opacity.value === 0.0
          )
        ) {
          resetConnections();
        }

        composer.render();
      }

      renderer.setAnimationLoop(animate);
    }

    // Line material definition
    const lineMaterial = new THREE.ShaderMaterial({
      uniforms: {
        opacity: { value: 0.0 },
      },
      vertexShader: `
    varying vec3 vPosition;
    void main() {
      vPosition = position;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
      fragmentShader: `
    uniform float opacity;
    varying vec3 vPosition;
    void main() {
      gl_FragColor = vec4(${LINE_COLOR.r}, ${LINE_COLOR.g}, ${LINE_COLOR.b}, opacity);
    }
  `,
      transparent: true,
    });

    // Create Cube with dotted edges, small cubes, and particles
    function createCubeWithDottedEdgesAndSmallCubes() {
      const cubeGeometry = new THREE.BoxGeometry(
        CUBE_SIZE,
        CUBE_SIZE,
        CUBE_SIZE
      );
      const cubeMaterial = new THREE.MeshBasicMaterial({ color: CUBE_COLOR });
      const edgeGeometry = new THREE.EdgesGeometry(cubeGeometry);
      const edgeMaterial = new THREE.LineDashedMaterial({
        color: EDGE_COLOR,
        dashSize: 0.2,
        gapSize: 0.3,
      });
      const vertexGeometry = new THREE.BoxGeometry(
        VERTEX_SIZE,
        VERTEX_SIZE,
        VERTEX_SIZE
      );
      const vertexMaterial = new THREE.MeshBasicMaterial({
        color: VERTEX_COLOR,
      });

      const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
      const edges = new THREE.LineSegments(edgeGeometry, edgeMaterial);
      edges.computeLineDistances(); // Ensure the dashed lines are rendered correctly

      const cubeGroup = new THREE.Group();
      cubeGroup.add(cube);
      cubeGroup.add(edges);

      const uniqueVertices = [
        [-4, -4, 4],
        [-4, 4, 4],
        [-4, 4, -4],
        [-4, -4, -4],
        [4, 4, 4],
        [4, 4, -4],
        [4, -4, 4],
        [4, -4, -4],
      ];

      const instancedMesh = new THREE.InstancedMesh(
        vertexGeometry,
        vertexMaterial,
        uniqueVertices.length
      );
      const dummy = new THREE.Object3D();

      uniqueVertices.forEach((vertex, i) => {
        dummy.position.set(vertex[0], vertex[1], vertex[2]);
        dummy.updateMatrix();
        instancedMesh.setMatrixAt(i, dummy.matrix);
      });

      cubeGroup.add(instancedMesh);

      // Create individual gu object for each particle cube
      const gu = {
        time: { value: 0 },
        color: { value: new THREE.Color(0.4, 0.4, 0.4) },
      };

      // Add particle cube
      const particleCube = createParticleCube(gu);
      cubeGroup.add(particleCube);

      cubeGroup.userData.particleCube = particleCube;
      cubeGroup.userData.gu = gu;

      return cubeGroup;
    }

    // Create particle cube
    function createParticleCube(gu) {
      let sizes = [];
      let shift = [];
      let pushShift = () => {
        shift.push(
          Math.random() * Math.PI,
          Math.random() * Math.PI * 2,
          (Math.random() * 0.9 + 0.1) * Math.PI * 0.1,
          Math.random() * 0.9 + 0.1
        );
      };

      let pts = new Array(PARTICLE_COUNT).fill().map((p) => {
        sizes.push(Math.random() * 2 + 0.5);
        pushShift();
        return new THREE.Vector3(
          (Math.random() - 0.5) * CUBE_SIZE,
          (Math.random() - 0.5) * CUBE_SIZE,
          (Math.random() - 0.5) * CUBE_SIZE
        );
      });

      for (let i = 0; i < PARTICLE_COUNT; i++) {
        sizes.push(Math.random() * 1 + 1);
        pushShift();
      }

      let g = new THREE.BufferGeometry().setFromPoints(pts);
      g.setAttribute("sizes", new THREE.Float32BufferAttribute(sizes, 1));
      g.setAttribute("shift", new THREE.Float32BufferAttribute(shift, 4));
      let m = new THREE.PointsMaterial({
        size: PARTICLE_SIZE,
        transparent: true,
        depthTest: false,
        blending: BLENDING,
        onBeforeCompile: (shader) => {
          shader.uniforms.time = gu.time;
          shader.uniforms.color = gu.color;
          shader.vertexShader = `
        uniform float time;
        attribute float sizes;
        attribute vec4 shift;
        varying vec3 vColor;
        ${shader.vertexShader}
      `
            .replace(`gl_PointSize = size;`, `gl_PointSize = size * sizes;`)
            .replace(
              `#include <color_vertex>`,
              `#include <color_vertex>
          float d = length(abs(position) / vec3(40., 10., 40));
          d = clamp(d, 0., 1.);
          vColor = vec3(${PARTICLES_COLOR_VEC3});
        `
            )
            .replace(
              `#include <begin_vertex>`,
              `#include <begin_vertex>
          float t = time;
          float moveT = mod(shift.x + shift.z * t, PI2);
          float moveS = mod(shift.y + shift.z * t, PI2);
          transformed += vec3(cos(moveS) * sin(moveT), cos(moveT), sin(moveS) * sin(moveT)) * shift.w;

          // Keep particles within the cube boundaries
          transformed = clamp(transformed, vec3(-${CUBE_SIZE / 2}), vec3(${
                CUBE_SIZE / 2
              }));
        `
            );
          shader.fragmentShader = `
        uniform vec3 color;
        varying vec3 vColor;
        ${shader.fragmentShader}
      `
            .replace(
              `#include <clipping_planes_fragment>`,
              `#include <clipping_planes_fragment>
          float d = length(gl_PointCoord.xy - 0.5);
        `
            )
            .replace(
              `vec4 diffuseColor = vec4( diffuse, opacity );`,
              `vec4 diffuseColor = vec4( color, smoothstep(0.5, 0.1, d) );`
            );
        },
      });

      return new THREE.Points(g, m);
    }

    // Create grid of cubes
    function createGrid() {
      group = new THREE.Group();
      cubeLocations = [];

      for (let i = 0; i < GRID_SIZE; i++) {
        for (let j = 0; j < GRID_SIZE; j++) {
          if ((i + j) % 2 === 1) {
            const cubeWithDottedEdgesAndSmallCubes =
              createCubeWithDottedEdgesAndSmallCubes();
            cubeWithDottedEdgesAndSmallCubes.position.set(
              0,
              i * SPACING - ((GRID_SIZE - 1) * SPACING) / 2,
              j * SPACING - ((GRID_SIZE - 1) * SPACING) / 2
            );
            group.add(cubeWithDottedEdgesAndSmallCubes);
            cubeLocations.push({
              cube: cubeWithDottedEdgesAndSmallCubes,
              position: { x: 0, y: i, z: j },
              gu: cubeWithDottedEdgesAndSmallCubes.userData.gu,
            });
          }
        }
      }

      mainGroup.add(group);
      scene.add(mainGroup);
    }

    // Create line between vertices
    function createLine(fromVertex, toVertex) {
      const lineGeometry = new THREE.BufferGeometry().setFromPoints([
        fromVertex,
        toVertex,
      ]);
      const line = new THREE.Line(lineGeometry, lineMaterial.clone());
      mainGroup.add(line);

      // Find the cube that contains the `toVertex`
      const containingCube = cubeLocations.find((location) => {
        return VERTEX_OFFSETS.some((offset) =>
          offset.position.clone().add(location.cube.position).equals(toVertex)
        );
      });

      if (containingCube) {
        transitionParticleColors(
          containingCube.cube.userData.particleCube,
          containingCube.gu
        );
      }

      return line;
    }

    // Find connecting vertices within a sphere radius
    function findConnectingVertices(fromVertex) {
      const sphere = new THREE.Sphere(fromVertex, SPACING);
      const newConnectingVertices = [];

      cubeLocations.forEach((location) => {
        VERTEX_OFFSETS.forEach((offset) => {
          const vertex = offset.position.clone().add(location.cube.position);
          if (sphere.containsPoint(vertex) && !fromVertex.equals(vertex)) {
            newConnectingVertices.push(vertex);
          }
        });
      });

      return newConnectingVertices;
    }

    // Generate a unique key for a vertex connection
    function getConnectionKey(vertex1, vertex2) {
      return `${vertex1.x},${vertex1.y},${vertex1.z}-${vertex2.x},${vertex2.y},${vertex2.z}`;
    }

    // Initiate new connections from a starting vertex
    function initiateNewConnections(currentVertex, depth = 0) {
      if (depth >= MAX_ITERATIONS) return; // Limit iterations of lines drawing

      const newVertices = findConnectingVertices(currentVertex);
      if (!connectedVertices.has(currentVertex)) {
        connectedVertices.set(currentVertex, new Set());
      }

      newVertices.forEach((vertex, i) => {
        const connectionKey = getConnectionKey(currentVertex, vertex);
        if (
          !connectedVertices.get(currentVertex).has(vertex) &&
          !uniqueConnections.has(connectionKey)
        ) {
          setTimeout(() => {
            const line = createLine(currentVertex, vertex);
            activeLines.push({
              line,
              startTime: clock.getElapsedTime(),
              fadingOut: false,
              fadeOutStartTime: null,
            });

            setTimeout(() => {
              line.userData.fadeOutStartTime = clock.getElapsedTime();
              line.userData.fadingOut = true;
            }, FADE_OUT_DELAY); // delay before starting line fade-out

            if (depth < MAX_ITERATIONS) {
              initiateNewConnections(vertex, depth + 1);
            }
          }, i * TRANSITION_DELAY); // delay between connections

          connectedVertices.get(currentVertex).add(vertex);
          if (!connectedVertices.has(vertex)) {
            connectedVertices.set(vertex, new Set());
          }
          connectedVertices.get(vertex).add(currentVertex); // Avoid back connections
          uniqueConnections.add(connectionKey); // Store the connection to avoid duplicates
          uniqueConnections.add(getConnectionKey(vertex, currentVertex)); // Store the reverse connection to avoid duplicates
        }
      });
    }

    // Reset connections and initiate new ones
    function resetConnections() {
      activeLines.forEach((lineObj) => {
        scene.remove(lineObj.line);
      });

      activeLines = [];
      connectedVertices.clear();
      uniqueConnections.clear();

      currentStartCubeIndex =
        (currentStartCubeIndex + 1) % cubeLocations.length;

      const startCube = cubeLocations[currentStartCubeIndex];
      const startVertex = VERTEX_OFFSETS[START_VERTEX_INDEX].position
        .clone()
        .add(startCube.cube.position);
      setTimeout(() => {
        initiateNewConnections(startVertex);
      }, INTERVAL);
    }

    // Easing function for smooth animation
    const easeInOutQuad = (t) =>
      t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;

    // Function to transition particle colors
    function transitionParticleColors(particleCube, gu) {
      const originalColor = PARTICLE_COLOR_INITIAL;

      let start = {
        r: gu.color.value.r,
        g: gu.color.value.g,
        b: gu.color.value.b,
      };
      let end = {
        r: PARTICLE_COLOR_TRANSITION.r,
        g: PARTICLE_COLOR_TRANSITION.g,
        b: PARTICLE_COLOR_TRANSITION.b,
      };
      let duration = FADE_IN_DURATION * 1000 * BROWSER_FACTOR; // Particle color transition duration
      let elapsed = 0;
      let easing = easeInOutQuad;

      function animateColorTransition() {
        elapsed += TRANSITION_DELAY;
        let t = elapsed / duration;
        if (t > 1) t = 1;
        let easedT = easing(t);

        gu.color.value.r = start.r + (end.r - start.r) * easedT;
        gu.color.value.g = start.g + (end.g - start.g) * easedT;
        gu.color.value.b = start.b + (end.b - start.b) * easedT;

        if (elapsed < duration) {
          requestAnimationFrame(animateColorTransition);
        } else {
          // Revert color after a delay
          setTimeout(() => {
            start = {
              r: gu.color.value.r,
              g: gu.color.value.g,
              b: gu.color.value.b,
            };
            end = {
              r: originalColor.r,
              g: originalColor.g,
              b: originalColor.b,
            };
            elapsed = 0;

            function animateColorReversion() {
              elapsed += TRANSITION_DELAY;
              let t = elapsed / duration;
              if (t > 1) t = 1;
              let easedT = easing(t);

              gu.color.value.r = start.r + (end.r - start.r) * easedT;
              gu.color.value.g = start.g + (end.g - start.g) * easedT;
              gu.color.value.b = start.b + (end.b - start.b) * easedT;

              if (elapsed < duration) {
                requestAnimationFrame(animateColorReversion);
              }
            }

            animateColorReversion();
          }, FADE_OUT_DELAY); // Delay before reverting color
        }
      }

      animateColorTransition();
    }

    // Initialize and start animation
    function init() {
      mainGroup = new THREE.Group();
      initScene();
      createGrid();
      const startCube = cubeLocations[currentStartCubeIndex];
      const startVertex = VERTEX_OFFSETS[START_VERTEX_INDEX].position
        .clone()
        .add(startCube.cube.position);
      initiateNewConnections(startVertex);

      mainGroup.rotation.x = THREE.MathUtils.degToRad(-110);
      mainGroup.rotation.y = THREE.MathUtils.degToRad(-31);
      mainGroup.rotation.z = THREE.MathUtils.degToRad(-30);
    }

    // Start the script
    init();

    // Handle window resize
    window.addEventListener("resize", () => onWindowResize(renderer), false);

    function onWindowResize() {
      const width = currentRef.offsetWidth;
      const height = Math.min(width, currentRef.offsetHeight);

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      composer.setSize(width, height);
    }

    return () => {
      window.removeEventListener(
        "resize",
        () => onWindowResize(renderer),
        false
      );

      currentRef?.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef}></div>;
};

export default HomeThree;
