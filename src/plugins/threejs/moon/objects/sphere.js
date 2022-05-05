import MoonTexture from '@/static/textures/moon.png';
import vertexShader from '@/static/shaders/vertex.glsl';
import fragmentShader from '@/static/shaders/fragment.glsl';

export default function sphere(three) {
    if (!three) return;
    const THREE = three;

    const material = new THREE.ShaderMaterial({
        vertexShader,
        fragmentShader,
        uniforms: {
            globeTexture: {
                value: new THREE.TextureLoader().load(MoonTexture),
            },
        },
    });

    return new THREE.Mesh(
        new THREE.SphereGeometry(8, 64, 32, 6),
        material,
    );
}