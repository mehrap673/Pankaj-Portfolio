import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import Stats from 'stats.js';
import { GUI } from 'three/examples/jsm/libs/lil-gui.module.min.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { RectAreaLightHelper } from 'three/examples/jsm/helpers/RectAreaLightHelper.js';
import { RectAreaLightUniformsLib } from 'three/examples/jsm/lights/RectAreaLightUniformsLib.js';

const RectAreaLightExample = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    let renderer: THREE.WebGLRenderer;
    let scene: THREE.Scene;
    let camera: THREE.PerspectiveCamera;
    let stats: Stats;
    let gui: GUI;
    let meshKnot: THREE.Mesh;
    let animationId: number;

    // Light references
    let rectLight1: THREE.RectAreaLight;
    let rectLight2: THREE.RectAreaLight;
    let rectLight3: THREE.RectAreaLight;

    const init = () => {
      // Renderer with transparent background
      renderer = new THREE.WebGLRenderer({ 
        antialias: true, 
        alpha: true 
      });
      renderer.setClearColor(0x000000, 0); // Transparent
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(window.innerWidth, window.innerHeight);
      containerRef.current!.appendChild(renderer.domElement);

      // Camera
      camera = new THREE.PerspectiveCamera(
        45,
        window.innerWidth / window.innerHeight,
        1,
        1000
      );
      camera.position.set(0, 5, -15);

      // Scene
      scene = new THREE.Scene();

      // Initialize RectAreaLight uniforms
      RectAreaLightUniformsLib.init();

      // RectAreaLight 1 (Purple to match theme)
      rectLight1 = new THREE.RectAreaLight(0x9333ea, 5, 4, 10);
      rectLight1.position.set(-5, 5, 5);
      scene.add(rectLight1);

      // RectAreaLight 2 (Cyan to match theme)
      rectLight2 = new THREE.RectAreaLight(0x06b6d4, 5, 4, 10);
      rectLight2.position.set(0, 5, 5);
      scene.add(rectLight2);

      // RectAreaLight 3 (Purple-Pink blend)
      rectLight3 = new THREE.RectAreaLight(0xa855f7, 5, 4, 10);
      rectLight3.position.set(5, 5, 5);
      scene.add(rectLight3);

      // Add helpers
      const helper1 = new RectAreaLightHelper(rectLight1);
      const helper2 = new RectAreaLightHelper(rectLight2);
      const helper3 = new RectAreaLightHelper(rectLight3);
      scene.add(helper1);
      scene.add(helper2);
      scene.add(helper3);

      // Floor with darker color
      const geoFloor = new THREE.BoxGeometry(2000, 0.1, 2000);
      const matStdFloor = new THREE.MeshStandardMaterial({
        color: 0x1a1a2e,
        roughness: 0.2,
        metalness: 0.1,
      });
      const mshStdFloor = new THREE.Mesh(geoFloor, matStdFloor);
      scene.add(mshStdFloor);

      // Torus Knot
      const geoKnot = new THREE.TorusKnotGeometry(1.5, 0.5, 200, 16);
      const matKnot = new THREE.MeshStandardMaterial({
        color: 0xe0e7ff,
        roughness: 0.1,
        metalness: 0.8,
      });
      meshKnot = new THREE.Mesh(geoKnot, matKnot);
      meshKnot.position.set(0, 5, 0);
      scene.add(meshKnot);

      // Controls
      const controls = new OrbitControls(camera, renderer.domElement);
      controls.target.copy(meshKnot.position);
      controls.update();

      // Stats
      stats = new Stats();
      stats.showPanel(0);
      containerRef.current!.appendChild(stats.dom);

      // GUI Controls
      initGUI();

      // Resize handler
      window.addEventListener('resize', onWindowResize);
    };

    const initGUI = () => {
      gui = new GUI({ width: 310 });

      // Light 1 (Purple) Controls
      const light1Folder = gui.addFolder('Purple Light');
      const light1Params = {
        color: 0x9333ea,
        intensity: 5,
        width: 4,
        height: 10,
        posX: -5,
        posY: 5,
        posZ: 5,
      };

      light1Folder.addColor(light1Params, 'color').onChange((value: number) => {
        rectLight1.color.setHex(value);
      });
      light1Folder.add(light1Params, 'intensity', 0, 20, 0.1).onChange((value: number) => {
        rectLight1.intensity = value;
      });
      light1Folder.add(light1Params, 'width', 1, 20, 0.1).onChange((value: number) => {
        rectLight1.width = value;
      });
      light1Folder.add(light1Params, 'height', 1, 20, 0.1).onChange((value: number) => {
        rectLight1.height = value;
      });
      light1Folder.add(light1Params, 'posX', -20, 20, 0.1).onChange((value: number) => {
        rectLight1.position.x = value;
      });
      light1Folder.add(light1Params, 'posY', 0, 20, 0.1).onChange((value: number) => {
        rectLight1.position.y = value;
      });
      light1Folder.add(light1Params, 'posZ', -20, 20, 0.1).onChange((value: number) => {
        rectLight1.position.z = value;
      });

      // Light 2 (Cyan) Controls
      const light2Folder = gui.addFolder('Cyan Light');
      const light2Params = {
        color: 0x06b6d4,
        intensity: 5,
        width: 4,
        height: 10,
        posX: 0,
        posY: 5,
        posZ: 5,
      };

      light2Folder.addColor(light2Params, 'color').onChange((value: number) => {
        rectLight2.color.setHex(value);
      });
      light2Folder.add(light2Params, 'intensity', 0, 20, 0.1).onChange((value: number) => {
        rectLight2.intensity = value;
      });
      light2Folder.add(light2Params, 'width', 1, 20, 0.1).onChange((value: number) => {
        rectLight2.width = value;
      });
      light2Folder.add(light2Params, 'height', 1, 20, 0.1).onChange((value: number) => {
        rectLight2.height = value;
      });
      light2Folder.add(light2Params, 'posX', -20, 20, 0.1).onChange((value: number) => {
        rectLight2.position.x = value;
      });
      light2Folder.add(light2Params, 'posY', 0, 20, 0.1).onChange((value: number) => {
        rectLight2.position.y = value;
      });
      light2Folder.add(light2Params, 'posZ', -20, 20, 0.1).onChange((value: number) => {
        rectLight2.position.z = value;
      });

      // Light 3 (Purple-Pink) Controls
      const light3Folder = gui.addFolder('Purple-Pink Light');
      const light3Params = {
        color: 0xa855f7,
        intensity: 5,
        width: 4,
        height: 10,
        posX: 5,
        posY: 5,
        posZ: 5,
      };

      light3Folder.addColor(light3Params, 'color').onChange((value: number) => {
        rectLight3.color.setHex(value);
      });
      light3Folder.add(light3Params, 'intensity', 0, 20, 0.1).onChange((value: number) => {
        rectLight3.intensity = value;
      });
      light3Folder.add(light3Params, 'width', 1, 20, 0.1).onChange((value: number) => {
        rectLight3.width = value;
      });
      light3Folder.add(light3Params, 'height', 1, 20, 0.1).onChange((value: number) => {
        rectLight3.height = value;
      });
      light3Folder.add(light3Params, 'posX', -20, 20, 0.1).onChange((value: number) => {
        rectLight3.position.x = value;
      });
      light3Folder.add(light3Params, 'posY', 0, 20, 0.1).onChange((value: number) => {
        rectLight3.position.y = value;
      });
      light3Folder.add(light3Params, 'posZ', -20, 20, 0.1).onChange((value: number) => {
        rectLight3.position.z = value;
      });

      // Knot Material Controls
      const knotFolder = gui.addFolder('Torus Knot Material');
      const knotParams = {
        color: 0xe0e7ff,
        roughness: 0.1,
        metalness: 0.8,
      };

      knotFolder.addColor(knotParams, 'color').onChange((value: number) => {
        (meshKnot.material as THREE.MeshStandardMaterial).color.setHex(value);
      });
      knotFolder.add(knotParams, 'roughness', 0, 1, 0.01).onChange((value: number) => {
        (meshKnot.material as THREE.MeshStandardMaterial).roughness = value;
      });
      knotFolder.add(knotParams, 'metalness', 0, 1, 0.01).onChange((value: number) => {
        (meshKnot.material as THREE.MeshStandardMaterial).metalness = value;
      });

      // Open first folder by default
      light1Folder.open();
    };

    const onWindowResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    };

    const animate = (time: number) => {
      animationId = requestAnimationFrame(animate);

      meshKnot.rotation.y = time / 1000;
      meshKnot.rotation.x = time / 2000;

      renderer.render(scene, camera);
      stats.update();
    };

    // Initialize and start animation
    init();
    animate(0);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', onWindowResize);
      if (gui) gui.destroy();
      if (containerRef.current) {
        if (renderer.domElement.parentNode === containerRef.current) {
          containerRef.current.removeChild(renderer.domElement);
        }
        if (stats.dom.parentNode === containerRef.current) {
          containerRef.current.removeChild(stats.dom);
        }
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-purple-900/10 via-cyan-700/15 to-purple-800/20">
      <div
        ref={containerRef}
        className="w-full h-full"
      />
      <div className="absolute top-4 left-0 right-0 text-center z-10">
        <h1 className="text-white text-xl font-semibold tracking-wide">
          THREE.RectAreaLight - Interactive Studio
        </h1>
        <p className="text-purple-200 text-sm mt-1">
          Use the controls to adjust lights and materials
        </p>
      </div>
    </div>
  );
};

export default RectAreaLightExample;
