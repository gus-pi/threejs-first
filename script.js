import * as THREE from 'three';
console.log(THREE);

//Scene
const scene = new THREE.Scene();

// Objects
const group = new THREE.Group();
scene.add(group);

const cube1 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0xff0000 })
);

group.add(cube1);

const cube2 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0x00ff00 })
);
cube2.position.set(-2, 0, 0);
group.add(cube2);

const cube3 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0x0000ff })
);
cube3.position.set(2, 0, 0);
group.add(cube3);

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

//Move group
group.position.set(0, 1, 0);

//Scale group
group.scale.set(1, 1.5, 1);

//Rotate group
group.rotation.y = 1;

renderer.render(scene, camera);
