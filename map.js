import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { InteractionManager } from 'three.interactive';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { Reflector } from 'three/examples/jsm/objects/Reflector'
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
renderer.antialias = true;
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
   camera.position.set(0, 40, 18);
        camera.lookAt(0,0,0);
   const alight = new THREE.AmbientLight( 0xbbbbbb, 2.5, 4800 ); 
   
   alight.position.y = 3;
 
   scene.add( alight );
 
   const loader = new GLTFLoader();
   var map= new THREE.Object3D();
loader.load("/sources/map1.glb",
    function ( gltf ) {
        map = gltf.scene
        scene.add( gltf.scene );
      
    //    gltf.scene.position.set(-1.5, 0, -0.5);
        gltf.scene.scale.set(0.1,0.1,0.1);
    },
    function onError(err) {
        console.log('An error happened');
    }
   );


const radargeo = new THREE.CircleGeometry(50, 102);
const texture = new THREE.TextureLoader().load( "/sources/radar.png" );
const bumpTexture = new THREE.TextureLoader().load('sources/bump.jpg')
const materiale = new THREE.MeshBasicMaterial( { map: texture} );

// let geometrie, groundMirror;

// geometrie = new THREE.CircleGeometry( 1000, 64 );
// groundMirror = new Reflector( geometrie, {
//     clipBias: 0.003,
//     textureWidth: window.innerWidth * window.devicePixelRatio,
//     textureHeight: window.innerHeight * window.devicePixelRatio,
//     color: 0xb5b5b5
// } );
// groundMirror.position.y = 0.5;
// groundMirror.rotateX( - Math.PI / 2 );
// scene.add( groundMirror );

let geometry = new THREE.CylinderGeometry( 0.6,0.6, 1, 32 ); 
const material = new THREE.MeshBasicMaterial( { color: 0xdd0000 } );
const floor = new THREE.Mesh( radargeo, materiale);
const cube = new THREE.Mesh( geometry, material );
const cube2 = new THREE.Mesh( geometry, material );
// groundMirror =new THREE.Mesh(geometrie, material);
// groundMirror.position.y = 0.5;
// groundMirror.rotateX( - Math.PI / 2 );
// scene.add(groundMirror);
scene.add( cube );
scene.add( cube2 );
// scene.add(floor);
cube.position.set( 0, 25, 0 );
cube2.position.set( 2, 24.6, 4 );
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
           let camera = new THREE.PerspectiveCamera(55,window.innerWidth/window.innerHeight,45,30000);
           // tell the camera where to look
           camera.position.set(-900,-200,-900);
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
           const controls2 = new OrbitControls( camera, renderer1.domElement );
           controls2.update();
           
           let materialArray = [];
           let texture_ft = new THREE.TextureLoader().load( '/sources/winterskydayft.png');
           let texture_bk = new THREE.TextureLoader().load( '/sources/winterskydaybk.png');
           let texture_up = new THREE.TextureLoader().load( '/sources/winterskydayup.png');
           let texture_dn = new THREE.TextureLoader().load( '/sources/winterskydaydn.png');
           let texture_rt = new THREE.TextureLoader().load( '/sources/winterskydayrt.png');
           let texture_lf = new THREE.TextureLoader().load( '/sources/winterskydaylf.png'); 
    
           materialArray.push(new THREE.MeshBasicMaterial( { map: texture_ft }));
           materialArray.push(new THREE.MeshBasicMaterial( { map: texture_bk }));
           materialArray.push(new THREE.MeshBasicMaterial( { map: texture_up }));
           materialArray.push(new THREE.MeshBasicMaterial( { map: texture_dn }));
           materialArray.push(new THREE.MeshBasicMaterial( { map: texture_rt }));
           materialArray.push(new THREE.MeshBasicMaterial( { map: texture_lf }));
      
           for (let i = 0; i < 6; i++)
              materialArray[i].side = THREE.BackSide;
           let skyboxGeo = new THREE.BoxGeometry( 10000, 10000, 10000);
           let skybox = new THREE.Mesh( skyboxGeo, materialArray );
           scene.add( skybox );  
         
         
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
       let camera = new THREE.PerspectiveCamera(55,window.innerWidth/window.innerHeight,45,30000);
       // tell the camera where to look
       camera.position.set(-900,-200,-900);
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
       const controls2 = new OrbitControls( camera, renderer1.domElement );
       controls2.update();
       
       let materialArray = [];
       let texture_ft = new THREE.TextureLoader().load( '/sources/winterskyday3ft.png');
       let texture_bk = new THREE.TextureLoader().load( '/sources/winterskyday3bk.png');
       let texture_up = new THREE.TextureLoader().load( '/sources/winterskyday3up.png');
       let texture_dn = new THREE.TextureLoader().load( '/sources/winterskyday3dn.png');
       let texture_rt = new THREE.TextureLoader().load( '/sources/winterskyday3rt.png');
       let texture_lf = new THREE.TextureLoader().load( '/sources/winterskyday3lf.png'); 

       materialArray.push(new THREE.MeshBasicMaterial( { map: texture_ft }));
       materialArray.push(new THREE.MeshBasicMaterial( { map: texture_bk }));
       materialArray.push(new THREE.MeshBasicMaterial( { map: texture_up }));
       materialArray.push(new THREE.MeshBasicMaterial( { map: texture_dn }));
       materialArray.push(new THREE.MeshBasicMaterial( { map: texture_rt }));
       materialArray.push(new THREE.MeshBasicMaterial( { map: texture_lf }));
  
       for (let i = 0; i < 6; i++)
          materialArray[i].side = THREE.BackSide;
       let skyboxGeo = new THREE.BoxGeometry( 10000, 10000, 10000);
       let skybox = new THREE.Mesh( skyboxGeo, materialArray );
       scene.add( skybox );  
     
     
       
         
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
   camera.position.set(0, 40, 18);
        camera.lookAt(0,0,0);
   const alight = new THREE.AmbientLight( 0xbbbbbb, 2.5, 4800 ); 
   alight.position.y = 2;
   scene.add( alight );
   const loader = new GLTFLoader();
   var map= new THREE.Object3D();
   loader.load("/sources/map2.glb",
   function ( gltf ) {
       map = gltf.scene
       scene.add( gltf.scene );
     
    //   gltf.scene.position.set(-1.5, 0, -0.5);
       gltf.scene.scale.set(0.1,0.1,0.1);
   },
   function onError(err) {
       console.log('An error happened');
   }
  );
   
   
   const radargeo = new THREE.CircleGeometry(50, 102);
   const texture = new THREE.TextureLoader().load( "/sources/radar.png" );
   const materiale = new THREE.MeshBasicMaterial( { map: texture } );
   const floor = new THREE.Mesh( radargeo, materiale);
//    scene.add(floor);

floor.rotateX(-Math.PI / 2);
}
document.getElementById("3").addEventListener('click', construct3);

function construct3(){
    for( var i = scene.children.length - 1; i >= 0; i--) { 
        var obj = scene.children[i];
        scene.remove(obj); 
   }
   interactionManager.destroy;
   camera.position.set(0, 40, 18);
        camera.lookAt(0,0,0);
   const alight = new THREE.AmbientLight( 0xffffff, 1.5, 1800 ); 
   alight.position.y = 2;
   scene.add( alight );
   const loader = new GLTFLoader();
   var map= new THREE.Object3D();
   loader.load("/sources/map1.glb",
   function ( gltf ) {
       map = gltf.scene
       scene.add( gltf.scene );
     
      gltf.scene.position.set(-1.5, 0, -0.5);
       gltf.scene.scale.set(0.1,0.1,0.1) ;
   },
   function onError(err) {
       console.log('An error happened');
   }
  );
   
   const radargeo = new THREE.CircleGeometry(50, 102);
   const texture = new THREE.TextureLoader().load( "/sources/radar.png" );
   const materiale = new THREE.MeshBasicMaterial( { map: texture } );
   const floor = new THREE.Mesh( radargeo, materiale);
//    scene.add(floor);

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