import atmosphereVertexShader from '@/static/shaders/atmosphereVertex.glsl';
import atmosphereFragmentShader from '@/static/shaders/atmosphereFragment.glsl';

export default function atmosphere(three) {
    if (!three) return;
    const THREE = three;

    const atmosphereMaterial = new THREE.ShaderMaterial({
        vertexShader: atmosphereVertexShader,
        fragmentShader: atmosphereFragmentShader,
        blending: THREE.AdditiveBlending,
        side: THREE.BackSide,
    });

    return new THREE.Mesh(
        new THREE.SphereGeometry(8, 64, 32, 6),
        atmosphereMaterial
    );
}