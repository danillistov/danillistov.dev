import gsap from 'gsap';
import * as THREE from 'three';
import createAtmosphereObject from './objects/atmosphere';
import createSphereObject from './objects/sphere';

import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';


import noiseVertexShader from '@/static/shaders/noiseVertex.glsl';
import noiseFragmentShader from '@/static/shaders/noiseFragment.glsl';

export function initSphere(elem) {
    const scene = new THREE.Scene();

    scene.background = new THREE.Color(0x0d0d0d);

    const camera = new THREE.PerspectiveCamera(45, window.innerWidth  / window.innerHeight, 0.1, 1000);

    const renderer = new THREE.WebGLRenderer({
        canvas: elem,
        antialias: true,
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    camera.position.setZ(25);

    // Composer

    const composer = new EffectComposer(renderer);
    composer.addPass(new RenderPass(scene, camera));

    let counter = 0.0;
    const effect = {
        uniforms: {
            'tDiffuse': {
                value: null,
            },
            'amount': {
                value: counter,
            },
        },
        vertexShader: noiseVertexShader,
        fragmentShader: noiseFragmentShader,
    };

    const customPass = new ShaderPass(effect);
    customPass.renderToScreen = false;
    composer.addPass(customPass);

    const group = new THREE.Group();

    scene.add(group);

    const sphere = createSphereObject(THREE);

    group.add(sphere);

    const atmosphere = createAtmosphereObject(THREE);
    atmosphere.scale.set(1.01, 1.01, 1.01);
    group.add(atmosphere);

    const mouse = {
        x: 0,
        y: 0,
    };

    function animate() {
        counter += 0.01;
        customPass.uniforms["amount"].value = counter;

        sphere.rotation.y += 0.001;

        gsap.to(group.rotation, {
            x: -mouse.y * 0.3,
            y: mouse.x * 0.5,
            duration: 2,
        });

        composer.render();

        requestAnimationFrame(animate);
    }

    animate();

    addEventListener('mousemove', (event) => {
        mouse.x = (event.clientX / innerHeight) * 2 - 1;
        mouse.y = -(event.clientY / innerHeight) * 2 + 1;
    });
}

