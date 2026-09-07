"use client";

import * as React from "react";
import { Canvas, useFrame, useThree, type ThreeElements } from "@react-three/fiber";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import * as THREE from "three";

/* ---- Golden Ring (signature torus) ---- */
function GoldenRing() {
  const ref = React.useRef<THREE.Mesh>(null!);
  useFrame((_, delta) => {
    if (ref.current) {
      // ~8s per revolution on X axis, slow drift on Y
      ref.current.rotation.x += delta * (Math.PI * 2) / 8;
      ref.current.rotation.y += delta * 0.08;
    }
  });
  return (
    <mesh ref={ref} rotation={[Math.PI / 2.6, 0, 0]} position={[0, 0.2, 0]}>
      <torusGeometry args={[2.0, 0.09, 32, 200]} />
      <meshStandardMaterial
        color="#F5A623"
        emissive="#F5A623"
        emissiveIntensity={2.4}
        metalness={1}
        roughness={0.18}
        toneMapped={false}
      />
    </mesh>
  );
}

/* ---- Ember particle field (rising sparks) ---- */
function EmberParticles({ count }: { count: number }) {
  const pointsRef = React.useRef<THREE.Points>(null!);

  const { positions, colors, speeds, seeds } = React.useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const speeds = new Float32Array(count);
    const seeds = new Float32Array(count);
    const flame = new THREE.Color("#DC2626");
    const gold = new THREE.Color("#F5A623");
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 9;
      const y = Math.random() * 7 - 3.5;
      const z = (Math.random() - 0.5) * 5 - 1;
      positions.set([x, y, z], i * 3);
      const isGold = Math.random() > 0.55;
      const c = isGold ? gold : flame;
      // slight color variance
      colors.set(
        [c.r * (0.7 + Math.random() * 0.5), c.g * (0.7 + Math.random() * 0.5), c.b * (0.7 + Math.random() * 0.5)],
        i * 3,
      );
      speeds[i] = 0.2 + Math.random() * 0.55;
      seeds[i] = Math.random() * Math.PI * 2;
    }
    return { positions, colors, speeds, seeds };
  }, [count]);

  useFrame((state, delta) => {
    const pts = pointsRef.current;
    if (!pts) return;
    const pos = pts.geometry.attributes.position.array as Float32Array;
    const t = state.clock.elapsedTime;
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      pos[i3 + 1] += speeds[i] * delta;
      // gentle horizontal sway
      pos[i3] += Math.sin(t * 0.6 + seeds[i]) * delta * 0.08;
      // reset to bottom when above top
      if (pos[i3 + 1] > 3.6) {
        pos[i3 + 1] = -3.6;
        pos[i3] = (Math.random() - 0.5) * 9;
      }
    }
    pts.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        sizeAttenuation
        vertexColors
        transparent
        opacity={0.92}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
        toneMapped={false}
      />
    </points>
  );
}

/* ---- Pointer parallax group (desktop only, max 3 degrees) ----
   Rotates a wrapping group (never the camera) based on pointer, clamped to 3 deg. */
const ParallaxGroup = React.forwardRef<
  THREE.Group,
  { enabled: boolean; children: React.ReactNode }
>(function ParallaxGroup({ enabled, children }, ref) {
  const localRef = React.useRef<THREE.Group>(null!);
  const { pointer } = useThree();
  useFrame(() => {
    const g = (ref as React.RefObject<THREE.Group>)?.current ?? localRef.current;
    if (!g) return;
    if (!enabled) {
      g.rotation.x = THREE.MathUtils.lerp(g.rotation.x, 0, 0.06);
      g.rotation.y = THREE.MathUtils.lerp(g.rotation.y, 0, 0.06);
      return;
    }
    const targetX = pointer.y * THREE.MathUtils.degToRad(3);
    const targetY = -pointer.x * THREE.MathUtils.degToRad(3);
    g.rotation.x = THREE.MathUtils.lerp(g.rotation.x, targetX, 0.06);
    g.rotation.y = THREE.MathUtils.lerp(g.rotation.y, targetY, 0.06);
  });
  return (
    <group ref={(node: THREE.Group | null) => {
      localRef.current = node as THREE.Group;
      if (typeof ref === "function") ref(node as THREE.Group);
      else if (ref) (ref as React.MutableRefObject<THREE.Group | null>).current = node as THREE.Group;
    }}>
      {children}
    </group>
  );
});

type EmberSceneProps = {
  parallax: boolean;
  particleCount: number;
};

export function EmberScene({ parallax, particleCount }: EmberSceneProps) {
  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ position: [0, 0, 6], fov: 45 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      style={{ background: "transparent" }}
    >
      <ambientLight intensity={0.25} />
      <pointLight position={[3, 2, 4]} intensity={2.2} color="#DC2626" />
      <pointLight position={[-3, -1, 2]} intensity={1.2} color="#F5A623" />

      <ParallaxGroup enabled={parallax}>
        <GoldenRing />
        <EmberParticles count={particleCount} />
      </ParallaxGroup>

      <EffectComposer>
        <Bloom
          intensity={1.15}
          luminanceThreshold={0.65}
          luminanceSmoothing={0.22}
          mipmapBlur
          radius={0.7}
        />
      </EffectComposer>
    </Canvas>
  );
}

export default EmberScene;
