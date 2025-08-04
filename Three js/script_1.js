let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.z = 5;
scene.add(camera);

let box = new THREE.BoxGeometry(1, 1, 1);
let material = new THREE.MeshBasicMaterial({ color: 'red' });
let mesh = new THREE.Mesh(box, material);

// mesh.position.z = -2; // Move the mesh back along the z-axis
// mesh.position.x = 1; // Move the mesh to the right along the x-axis
// mesh.position.y = 1; // Move the mesh up along the y-axis

// mesh.rotation.z = 1.3; 
// mesh.rotation.y = Math.PI / 4; // Rotate the mesh 45 degrees around the y-axis
// mesh.rotation.x = Math.PI / 2; // Rotate the mesh 90 degrees around the x-axis

// mesh.scale.y = 2; // Scale the mesh along the y-axis

scene.add(mesh);

const canvas = document.querySelector('canvas');
let renderer = new THREE.WebGLRenderer({ canvas: canvas , antialising: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.render(scene, camera);  


let clock = new THREE.Clock();
function animate() {
    window.requestAnimationFrame(animate);
    renderer.render(scene, camera);
    // mesh.rotation.z += 0.01; // Rotate the mesh around the y-axis
    mesh.rotation.y = clock.getElapsedTime() * 1; // Rotate the mesh around the y-axis based on elapsed time
}

animate();