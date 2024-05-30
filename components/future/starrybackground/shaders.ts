export const vertexShader = `
varying vec2 vUv;
{ 
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

export const fragmentShader = `  
unifrom float time;
uniform vec3 color; 
varying vec2 vUv;
void main() {
    float strength = 0.5 * sin(vUv.y * 10.0 + time) + 0.5;
    gl_FragColor = vec4(color * strength, 1.0);
}
`;
