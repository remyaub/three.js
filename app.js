// Variables for set up

let container;
let camera;
let renderer;
let scene;
let house;

function init() {
	container = document.querySelector(".scene");

	//Create scene
	scene = new THREE.Scene();

	const fov = 35;
	const aspect = container.clientWidth / container.clientHeight;
	const near = 0.1;
	const far = 500;

	//Camera setup
	camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
	camera.position.set(0, 0, 20);

	//Renderer
	renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
	renderer.setSize(container.clientWidth, container.clientHeight);
	renderer.setPixelRation(window.devicePixelRatio);

	container.appendChild(render.domElement);

	//Load Model
	let loader = new GLTFLoader();
	loader.load("./3d/scene.gltf", function (gltf) {
		scene.add(gltf.scene);
		renderer.render(scene, camera);
		console.log(loader);
	});
}
init();
