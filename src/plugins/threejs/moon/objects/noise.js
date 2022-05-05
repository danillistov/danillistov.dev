import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';


import noiseVertexShader from '@/static/shaders/noiseVertex.glsl';
import noiseFragmentShader from '@/static/shaders/noiseFragment.glsl';

export default function noise(renderer, scene, camera) {
    if (!renderer) return;
    const composer = new EffectComposer(renderer);
    const renderPass = new RenderPass(scene, camera);
    composer.addPass(renderPass);

    let counter = 0.0;
    const effect = {
        uniforms: {
            'tDiffus': { value: null },
            'amount': { value: counter },
        },
        vertexShader: noiseVertexShader,
        fragmentShader: noiseFragmentShader,
    };

    const customPass = new ShaderPass(effect);
    customPass.renderToScreen = true;
    composer.addPass(customPass);

    return () => {
        counter += 0.01;
        customPass.uniforms["amount"].value = counter;

        requestAnimationFrame( render );
        composer.render();
    }
}