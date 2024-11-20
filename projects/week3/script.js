import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.150.0/build/three.module.js";

// Create scene
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xeeef92);

// Create camera
const zoom = 0.035;
const camera = new THREE.OrthographicCamera(
  (-window.innerWidth / 2) * zoom,
  (window.innerWidth / 2) * zoom,
  (window.innerHeight / 2) * zoom,
  (-window.innerHeight / 2) * zoom,
  0.1,
  1000
);
camera.position.set(0, 0, 10);
camera.lookAt(0, 0, 0);

// Create renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create geometry and material
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshStandardMaterial({ color: 0x9392ef });

// Add a light source
const ambientLight = new THREE.AmbientLight(0x404040);
scene.add(ambientLight);

const light = new THREE.PointLight(0xffffff, 2, 100);
light.position.set(1, 1, 10);
scene.add(light);

// Add cube to the scene
const cubes = [];

for (let i = -5; i < 5; i++) {
  for (let j = -5; j < 5; j++) {
    const cube = new THREE.Mesh(geometry, material);
    cube.position.set(i * 2 + 1, j * 2 + 1, -10);
    cubes.push(cube);

    scene.add(cube);
    cube.rotation.x = Math.random(10);
    cube.rotation.y = Math.random(10);
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
