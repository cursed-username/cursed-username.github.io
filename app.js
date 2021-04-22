import * as THREE from 'https://unpkg.com/three@0.127.0/build/three.module.js';
import { GLTFLoader } from 'https://unpkg.com/three@0.127.0/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'https://unpkg.com/three@0.127.0/examples/jsm/controls/OrbitControls.js';

let scene, camera, renderer, controls;



    scene = new THREE.Scene();

    const loader = new GLTFLoader().setPath('models/');

    loader.load('./teapo4.gltf', function (gltf) {
        scene.add(gltf.scene);

    }, function (xhr) {

        console.log((xhr.loaded / xhr.total * 100) + '% loaded');

    },
        // called when loading has errors
        function (error) {

            console.log('An error happened' + error);

        })

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x00000);
    document.body.appendChild(renderer.domElement);

    camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.name = "camera1";
    camera.position.set(0, 1, 11);

    const light = new THREE.AmbientLight(0xffffff, 1.5);
    light.position.set(80, 100, 100);
    scene.add(light);

    controls = new OrbitControls(camera, renderer.domElement);



function animation() {
    requestAnimationFrame( animation );
    renderer.render(scene, camera);
    controls.update();
}


animation();
