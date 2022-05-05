import gsap from 'gsap';
import * as THREE from 'three';
import createAtmosphereObject from './objects/atmosphere';
import createSphereObject from './objects/sphere';

export function initSphere(elem) {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0d0d0d);

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth  / window.innerHeight, 0.1, 1000);

    const renderer = new THREE.WebGLRenderer({
        canvas: elem,
        antialias: true,
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    renderer.render(scene, camera);

    camera.position.setZ(25);
    const group = new THREE.Group();

    scene.add(group);

    const sphere = createSphereObject(THREE);
    group.add(sphere);

    const atmosphere = createAtmosphereObject(THREE);
    atmosphere.scale.set(1.1, 1.1, 1.1);
    group.add(atmosphere);

    const mouse = {
        x: 0,
        y: 0,
    };

    function animate() {
        requestAnimationFrame(animate);

        sphere.rotation.y += 0.001;

        gsap.to(group.rotation, {
            x: -mouse.y * 0.3,
            y: mouse.x * 0.5,
            duration: 2,
        });

        renderer.render(scene, camera);
    }

    animate();

    addEventListener('mousemove', (event) => {
        mouse.x = (event.clientX / innerHeight) * 2 - 1;
        mouse.y = -(event.clientY / innerHeight) * 2 + 1;
    });
}