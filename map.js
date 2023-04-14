import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { InteractionManager } from 'three.interactive';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
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
scene.background = new THREE.Color( 0x000000 );
camera.position.set(0, 30, 0);
        camera.lookAt(0,0,0);
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
   camera.position.set(0, 30, 0);
        camera.lookAt(0,0,0);
   const alight = new THREE.AmbientLight( 0x404040, 3.5, 3800 ); // soft white light
   alight.position.y = 2;
   scene.add( alight );
   const loader = new GLTFLoader();
   var map= new THREE.Object3D();
loader.load("/sources/map.glb",
    function ( gltf ) {
        map = gltf.scene
        scene.add( gltf.scene );
      
       gltf.scene.position.set(-1.5, 0, -0.5);
        gltf.scene.scale.set(1,1,1);
    },
    function onError(err) {
        console.log('An error happened');
    }
   );


const radargeo = new THREE.CircleGeometry(50, 102);
const texture = new THREE.TextureLoader().load( "/sources/radar.png" );
const bumpTexture = new THREE.TextureLoader().load('sources/bump.jpg')
const materiale = new THREE.MeshBasicMaterial( { map: texture} );



let geometry = new THREE.BoxGeometry(1,1,1);
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const floor = new THREE.Mesh( radargeo, materiale);
const cube = new THREE.Mesh( geometry, material );
const cube2 = new THREE.Mesh( geometry, material );
scene.add( cube );
scene.add( cube2 );
scene.add(floor);
cube2.position.set( 2, 0, 0 );
floor.rotateX(-Math.PI / 2);
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
   interactionManager.destroy;
   const alight = new THREE.AmbientLight( 0x404040, 3.5, 3800 ); // soft white light
   alight.position.y = 2;
   scene.add( alight );
   const loader = new GLTFLoader();
   var map= new THREE.Object3D();
   loader.load("/sources/map.glb",
       function ( gltf ) {
           map = gltf.scene
           scene.add( gltf.scene );
         
          gltf.scene.position.set(-1.5, 0, -0.5);
           gltf.scene.scale.set(1,1,1);
       },
       function onError(err) {
           console.log('An error happened');
       }
      );
   
   
   const radargeo = new THREE.CircleGeometry(50, 102);
   const texture = new THREE.TextureLoader().load( "/sources/radar.png" );
   const materiale = new THREE.MeshBasicMaterial( { map: texture } );
   const floor = new THREE.Mesh( radargeo, materiale);
   scene.add(floor);

floor.rotateX(-Math.PI / 2);
}
document.getElementById("3").addEventListener('click', construct3);

function construct3(){
    for( var i = scene.children.length - 1; i >= 0; i--) { 
        var obj = scene.children[i];
        scene.remove(obj); 
   }
   interactionManager.destroy;
   const alight = new THREE.AmbientLight( 0x404040, 3.5, 3800 ); // soft white light
   alight.position.y = 2;
   scene.add( alight );
   const loader = new GLTFLoader();
   var map= new THREE.Object3D();
   loader.load("/sources/map.glb",
       function ( gltf ) {
           map = gltf.scene
           scene.add( gltf.scene );
         
          gltf.scene.position.set(-1.5, 0, -0.5);
           gltf.scene.scale.set(1,1,1);
       },
       function onError(err) {
           console.log('An error happened');
       }
      );
   
   
   const radargeo = new THREE.CircleGeometry(50, 102);
   const texture = new THREE.TextureLoader().load( "/sources/radar.png" );
   const materiale = new THREE.MeshBasicMaterial( { map: texture } );
   const floor = new THREE.Mesh( radargeo, materiale);
   scene.add(floor);

floor.rotateX(-Math.PI / 2);
}



//anim
function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
    interactionManager.update();
}
animate();
construct3();