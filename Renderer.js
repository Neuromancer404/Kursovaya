import * as THREE from 'https://unpkg.com/three@0.126.1/build/three.module.js';
import { OrbitControls } from 'https://unpkg.com/three@0.126.1/examples/jsm/controls/OrbitControls.js';

function main (){

    let canvasWidth = 500;
    let canvasHeith = 400;

    const canvas = document.getElementById("canvasGL");

    canvas.height = canvasHeith;
    canvas.width = canvasWidth;

    const renderer = new THREE.WebGLRenderer({canvas});
    renderer.setSize(canvasWidth, canvasHeith);

    const fov = 45;
    const aspect = 2;  // the canvas default
    const near = 0.1;
    const far = 100;
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.set(0, 10, 20);

    const controls = new OrbitControls( camera, renderer.domElement );
    controls.target.set(0, 5, 0);
    controls.update();

    const scene = new THREE.Scene();
    scene.background = new THREE.Color('blue');

}
main();