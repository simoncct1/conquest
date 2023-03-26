import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { InteractionManager } from 'three.interactive';
// scene
var scene = new THREE.Scene();
// camera
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, .1, 1000);



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
scene.background = new THREE.Color( 0x1C1D1D );
//interaction
const interactionManager = new InteractionManager(
    renderer,
    camera,
    renderer.domElement
  );
//control
const controls = new OrbitControls( camera, renderer.domElement );
controls.update();
//scene 

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );
interactionManager.add(cube);
cube.addEventListener('click', (event) => {
    
    function init() {
        // create a scene, that will hold all our elements such as objects, cameras and lights.
        let scene = new THREE.Scene();
        // create a camera, which defines where we're looking at
        let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);
        // tell the camera where to look
        camera.position.set(0, 0, 10);
        // create a render and set the size
        const sizes = {
            width: window.innerWidth,
            height: window.innerHeight,
        }
        let renderer = new THREE.WebGLRenderer();
        renderer.setSize(sizes.width, sizes.height);
        // add the output of the render function to the HTML
        document.body.appendChild(renderer.domElement);
    
        // var clock = new THREE.Clock();
        // function for re-rendering/animating the scene
        function tick() {
            requestAnimationFrame(tick);
            renderer.render(scene, camera);
        }
        tick();
    }
    init();
  });
camera.position.z = 5;


//anim
function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
    interactionManager.update();
}
animate();