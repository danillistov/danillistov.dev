uniform sampler2D globeTexture;

varying vec2 vertexUV;
varying vec3 vertexNormal;

void main() {
    float intensity = 1.0 - dot(vertexNormal, vec3(0.0, 0.0, 1.0));

    vec3 atmosphere = vec3(1.0, 1.0, 1.0) * pow(intensity, 1.5);

    gl_FragColor = vec4(texture2D(globeTexture, vertexUV).xyz, 1.0);
}