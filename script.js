// Scene Setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById("container").appendChild(renderer.domElement);

// Lighting
const ambientLight = new THREE.AmbientLight(0xffffff, 2);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
directionalLight.position.set(1, 1, 1);
scene.add(directionalLight) 

// Load Lumi-Chan GLB Model
const loader = new THREE.GLTFLoader();
loader.load('https://raw.githubusercontent.com/Luna984/LumiChan-3D/main/Lumi.glb', function (gltf) {
    let model = gltf.scene;
    model.position.set(0, -1, 0);  // Adjust model position
    scene.add(model);

    console.log("Lumi-Chan Loaded Successfully!") 

    // Rotate Animation
    function animateModel() {
        requestAnimationFrame(animateModel);
        model.rotation.y += 0.01;  // Lumi-Chan will slowly rotate
        renderer.render(scene, camera);
    }
    animateModel();

}, undefined, function (error) {
    console.error("GLB Load Error:", error);
});

// Camera Position
camera.position.z = 3;

// Resize Fix
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});
