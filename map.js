import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
// scene
var scene = new THREE.Scene();
// camera
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, .1, 1000);

//control

// renderer
const sizes = {
     width: window.innerWidth/4,
     height: window.innerHeight/4,
}
let renderer = new THREE.WebGLRenderer();
renderer.setSize(sizes.width, sizes.height);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.render(scene, camera);
document.body.appendChild(renderer.domElement);

const controls = new OrbitControls( camera, renderer.domElement );
controls.update();
//scene 

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;




//anim
function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
}
animate();