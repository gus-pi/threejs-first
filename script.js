import * as THREE from 'three';

//Scene
const scene = new THREE.Scene();

// Objects
const cube1 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0xff0000 })
);

scene.add(cube1);

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
cube1.position.set(0, 0, 0);

//Time
// let time = Date.now();

//Clock
const clock = new THREE.Clock();

//Animation
const tick = () => {
  //Time
  // const currentTime = Date.now();
  // const deltaTime = currentTime - time;
  // time = currentTime;

  //Clock
  const elapsedTime = clock.getElapsedTime();

  //Update objects
  cube1.rotation.y = elapsedTime * Math.PI * 2;
  cube1.position.y = Math.cos(elapsedTime);

  //Render
  renderer.render(scene, camera);

  //Call tick again on the next frame
  window.requestAnimationFrame(tick);
};

tick();
