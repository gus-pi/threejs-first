import * as THREE from 'three';
console.log(THREE);

//Scene
const scene = new THREE.Scene();

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);

scene.add(mesh);

// Sizes
const sizes = {
  width: 800,
  height: 600,
};

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

// Canvas
const canvas = document.querySelector('canvas.webgl');

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);

//Axes helper
const axesHelper = new THREE.AxesHelper();
scene.add(axesHelper);

//Move cube
mesh.position.set(1, -1, 0);

//Scale cube
mesh.scale.set(2, 0.5, 0.5);

//Rotate cube
mesh.rotation.y = Math.PI / 2; //rotates 90 degrees

renderer.render(scene, camera);
