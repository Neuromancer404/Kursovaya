let canvasHeigth = 400 + 'px';
let canvasWidth = 400 + 'px';

function main() {
	const canvas = document.querySelector('canvasGL');
	
	canvas.height = canvasHeigth;
	canvas.width = canvasWidth;

	const renderer = new THREE.WebGLRenderer({canvas});
}

const fov = 75;
const aspect = 2;  // значение для canvas по умолчанию
const near = 0.1;
const far = 5;
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);