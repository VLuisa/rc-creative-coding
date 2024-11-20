import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.150.0/build/three.module.js";

// Create scene
const scene = new THREE.Scene();

// Create camera
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

// Create renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create geometry and material
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 });

// Add a light source
const light = new THREE.PointLight(0xffffff, 1, 100); // white light, intensity of 1, and distance of 100
light.position.set(0, 0, 10); // Position the light in 3D space
scene.add(light);

// Add cube to the scene
const cubes = [];

for (let i = -5; i < 5; i++) {
  for (let j = -5; j < 5; j++) {
    const cube = new THREE.Mesh(geometry, material);
    cube.position.set(i * 2 + 1, j * 2 + 1, -10);
    cubes.push(cube);
    scene.add(cube);
  }
}

// Set camera position
camera.position.z = 5;

// Animation loop
function animate() {
  requestAnimationFrame(animate);

  // Rotate cube
  cubes.forEach((cube) => {
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
  });

  // Render scene
  renderer.render(scene, camera);
}

animate();
