import * as THREE from 'three';
import MoonTexture from '@/static/textures/moon.png';
import vertexShader from '@/static/shaders/vertex.glsl';
import fragmentShader from '@/static/shaders/fragment.glsl';
import atmosphereVertexShader from '@/static/shaders/atmosphereVertex.glsl';
import atmosphereFragmentShader from '@/static/shaders/atmosphereFragment.glsl';

export function initSphere(elem) {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    const renderer = new THREE.WebGLRenderer({
        canvas: elem,
        antialias: true,
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    camera.position.setZ(30);

    renderer.render(scene, camera);

    const geometry = new THREE.SphereGeometry(8, 64, 32, 6);
    const texture = new THREE.TextureLoader().load(MoonTexture);
    const material = new THREE.ShaderMaterial({
        vertexShader,
        fragmentShader,
        uniforms: {
            globeTexture: {
                value: texture,
            },
        },
     });
    const sphere = new THREE.Mesh(geometry, material);

    scene.add(sphere);

    const atmosphereGeometry = new THREE.SphereGeometry(8, 64, 32, 6);
    const atmosphereMaterial = new THREE.ShaderMaterial({
        vertexShader: atmosphereVertexShader,
        fragmentShader: atmosphereFragmentShader,
        blending: THREE.AdditiveBlending,
        side: THREE.BackSide,
    });

    const atmosphere = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial);

    atmosphere.scale.set(1.1, 1.1, 1.1);

    scene.add(atmosphere);

    function animate() {
        requestAnimationFrame(animate);

        sphere.rotation.y += 0.001;

        renderer.render(scene, camera);
    }

    animate();
}