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
renderer.domElement.id = 'main';
document.getElementById("interface").appendChild(renderer.domElement);
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

document.getElementById("1").addEventListener('click',construct1);
function construct1(){
    for( var i = scene.children.length - 1; i >= 0; i--) { 
        var obj = scene.children[i];
        scene.remove(obj); 
   }
const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
const cube2 = new THREE.Mesh( geometry, material );
scene.add( cube );
scene.add( cube2 );
cube2.position.set( 2, 0, 0 );
interactionManager.add(cube);
interactionManager.add(cube2);
var one = false;
cube.addEventListener('click', (event) => {
     one = !one;
    if(one== true){
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
        let renderer1 = new THREE.WebGLRenderer();
        renderer1.setSize(sizes.width, sizes.height);
        // add the output of the render function to the HTML
        renderer1.domElement.id = 'bite';
        document.getElementById("interface").appendChild(renderer1.domElement);
        scene.background = new THREE.Color( 0xFFBBFF );
        // var clock = new THREE.Clock();
        // function for re-rendering/animating the scene
        function tick() {
            requestAnimationFrame(tick);
            renderer1.render(scene, camera);
        }
        tick();
        console.log(one);
    }
    init();}
    else{
        
        var map1 = document.getElementById("interface");
        map1.removeChild(map1.children[2]);
      
    }
  });
  cube2.addEventListener('click', (event) => {
    one = !one;
   if(one== true){
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
       let renderer1 = new THREE.WebGLRenderer();
       renderer1.setSize(sizes.width, sizes.height);
       // add the output of the render function to the HTML
       renderer1.domElement.id = 'map2';
       document.getElementById("interface").appendChild(renderer1.domElement);
       scene.background = new THREE.Color( 0xFFBBFF );
       // var clock = new THREE.Clock();
       // function for re-rendering/animating the scene
       function tick() {
           requestAnimationFrame(tick);
           renderer1.render(scene, camera);
       }
       tick();
       console.log(one);
   }
   init();}
   else{
       
       var map1 = document.getElementById("interface");
       map1.removeChild(map1.children[2]);
     
   }
 });
}



 document.getElementById("2").addEventListener('click', construct2);

function construct2(){

    for( var i = scene.children.length - 1; i >= 0; i--) { 
        var obj = scene.children[i];
        scene.remove(obj); 
        
   }
    const geometrieee = new THREE.BoxGeometry( 1, 1, 1 );
const materialeee = new THREE.MeshBasicMaterial( { color: 0x244f55 } );
const cubez = new THREE.Mesh( geometrieee, materialeee );
const cubezz = new THREE.Mesh( geometrieee, materialeee );
scene.add( cubez );
scene.add( cubezz );
cubezz.position.set( 3, 0, 0 );
}
document.getElementById("3").addEventListener('click', construct3);

function construct3(){
    for( var i = scene.children.length - 1; i >= 0; i--) { 
        var obj = scene.children[i];
        scene.remove(obj); 
   }
   interactionManager.destroy;
    const geometrieee = new THREE.BoxGeometry( 1, 1, 1 );
const materialeee = new THREE.MeshBasicMaterial( { color: 0x244f55 } );
const cubez = new THREE.Mesh( geometrieee, materialeee );
const cubezz = new THREE.Mesh( geometrieee, materialeee );
scene.add( cubez );
scene.add( cubezz );
cubezz.position.set( 2, 0, 0 );
}
camera.position.z = 5;


//anim
function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
    interactionManager.update();
}
animate();
construct3();