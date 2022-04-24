import * as THREE from 'three';
import MoonTexture from '@/static/textures/moon.png';

export function initSphere(elem) {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    const renderer = new THREE.WebGLRenderer({
        canvas: elem,
    });

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);

    camera.position.setZ(30);

    renderer.render(scene, camera);

    const geometry = new THREE.SphereGeometry(8, 64, 32, 6);
    const texture = new THREE.TextureLoader().load(MoonTexture);
    const material = new THREE.MeshBasicMaterial({ map: texture });
    const sphere = new THREE.Mesh(geometry, material);



    scene.add(sphere);

    function animate() {
        requestAnimationFrame(animate);

        sphere.rotation.x += 0.01;
        sphere.rotation.y += 0.001;
        sphere.rotation.z += 0.01;

        renderer.render(scene, camera);
    }

    animate();
}