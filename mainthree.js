import * as THREE from 'three';
// scene
var scene = new THREE.Scene();
// camera
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, .1, 1000);
// renderer
const sizes = {
     width: window.innerWidth,
     height: window.innerHeight,
}
let renderer = new THREE.WebGLRenderer();
renderer.setSize(sizes.width, sizes.height);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.render(scene, camera);
document.body.appendChild(renderer.domElement);