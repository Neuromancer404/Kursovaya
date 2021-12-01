let canvasHeigth = 400;
let canvasWidth = 400;

window.onload = function () {
   go(); 
};
window.onresize = function () {
    go();
};

function go() {
	const canvas = document.querySelector('#canvasGL');
	
	canvas.width = canvasWidth;
	canvas.height = canvasHeigth;

	const renderer = new THREE.WebGLRenderer({canvas});

	renderer.setSize(canvasWidth, canvasHeigth);
	renderer.setClearColor(0xDDDDDD, 1);
	document.body.appendChild(renderer.domElement);
}

const fov = 75;
const aspect = 2;  // значение для canvas по умолчанию
const near = 0.1;
const far = 5;
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);