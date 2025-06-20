import { Canvas } from '@react-three/fiber';
import { Html, OrbitControls } from '@react-three/drei';

export default function ImageTile3D({ iconSrc, label }) {
  return (
    <div className="w-24 h-24 md:w-28 md:h-28">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={1.2} />
        <directionalLight position={[2, 2, 2]} intensity={1.2} />

        <mesh>
          <boxGeometry args={[1.6, 1.6, 0.3]} />
          <meshStandardMaterial color="#1e1e1e" />
          <Html center>
            <img
              src={iconSrc}
              alt={label}
              style={{
                width: 48,
                height: 48,
                objectFit: 'contain',
                userSelect: 'none',
                pointerEvents: 'none',
              }}
            />
          </Html>
        </mesh>

        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
}
