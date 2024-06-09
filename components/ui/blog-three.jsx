"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";

const HomeThree = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const currentRef = mountRef.current;

    const width = currentRef.offsetWidth;
    const height = Math.min(width, currentRef.offsetHeight);

    // Constants
    const CUBE_SIZE = 8;
    const VERTEX_SIZE = 0.4;
    const PARTICLES_COLOR = new THREE.Color(0.28, 0.28, 0.28);
    const PARTICLES_COLOR_VEC3 = `${PARTICLES_COLOR.r}, ${PARTICLES_COLOR.g}, ${PARTICLES_COLOR.b}`;

    let scene, camera, controls, composer, renderer;
    let mainGroup;

    // Initialize Scene
    function initScene() {
      scene = new THREE.Scene();
      scene.background = new THREE.Color(0x000000);

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
      controls.autoRotateSpeed = 1.1;

      let target = new THREE.WebGLRenderTarget(width, height, {
        samples: 10,
      });

      const renderScene = new RenderPass(scene, camera);
      const bloomPass = new UnrealBloomPass(
        new THREE.Vector2(width, height),
        2.05,
        0.8,
        0.65
      );

      // Use the target in your EffectComposer
      composer = new EffectComposer(renderer, target);
      composer.addPass(renderScene);
      composer.addPass(bloomPass);
      composer.setSize(width, height);
      composer.setPixelRatio(window.devicePixelRatio);
    }

    // Create Cube with dotted edges, small cubes, and particles
    function createCubeWithDottedEdgesAndSmallCubes() {
      const cubeGeometry = new THREE.BoxGeometry(
        CUBE_SIZE,
        CUBE_SIZE,
        CUBE_SIZE
      );
      const cubeMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });
      const edgeGeometry = new THREE.EdgesGeometry(cubeGeometry);
      const edgeMaterial = new THREE.LineDashedMaterial({
        color: 0x808080,
        dashSize: 0.15,
        gapSize: 0.3,
      });
      const vertexGeometry = new THREE.BoxGeometry(
        VERTEX_SIZE,
        VERTEX_SIZE,
        VERTEX_SIZE
      );
      const vertexMaterial = new THREE.MeshBasicMaterial({
        color: 0xffffff,
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

      let pts = new Array(4500).fill().map((p) => {
        sizes.push(Math.random() * 2 + 0.5);
        pushShift();
        return new THREE.Vector3(
          (Math.random() - 0.5) * CUBE_SIZE,
          (Math.random() - 0.5) * CUBE_SIZE,
          (Math.random() - 0.5) * CUBE_SIZE
        );
      });

      for (let i = 0; i < 4500; i++) {
        sizes.push(Math.random() * 1 + 1);
        pushShift();
      }

      let g = new THREE.BufferGeometry().setFromPoints(pts);
      g.setAttribute("sizes", new THREE.Float32BufferAttribute(sizes, 1));
      g.setAttribute("shift", new THREE.Float32BufferAttribute(shift, 4));
      let m = new THREE.PointsMaterial({
        size: 0.125,
        transparent: true,
        depthTest: false,
        blending: THREE.AdditiveBlending,
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

    // Initialize and start the scene
    function init() {
      mainGroup = new THREE.Group();
      initScene();

      const singleCube = createCubeWithDottedEdgesAndSmallCubes();
      mainGroup.add(singleCube);
      scene.add(mainGroup);

      mainGroup.rotation.x = THREE.MathUtils.degToRad(-110);
      mainGroup.rotation.y = THREE.MathUtils.degToRad(-31);
      mainGroup.rotation.z = THREE.MathUtils.degToRad(-30);

      renderer.setAnimationLoop(() => {
        controls.update();
        composer.render();
      });
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
