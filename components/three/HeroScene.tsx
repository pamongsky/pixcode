'use client'

import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, Float } from '@react-three/drei'
import * as THREE from 'three'

function HexCrystal() {
  const groupRef = useRef<THREE.Group>(null)
  const innerRef = useRef<THREE.Mesh>(null)
  const ringRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    const t = state.clock.elapsedTime
    if (groupRef.current) {
      groupRef.current.rotation.y = t * 0.25
    }
    if (innerRef.current) {
      innerRef.current.rotation.y = -t * 0.6
      innerRef.current.rotation.x = t * 0.4
    }
    if (ringRef.current) {
      ringRef.current.rotation.z = t * 0.15
    }
  })

  return (
    <group ref={groupRef}>
      {/* Bottom hex base */}
      <mesh position={[0, -0.6, 0]}>
        <cylinderGeometry args={[1.5, 1.3, 0.2, 6]} />
        <meshPhysicalMaterial
          color="#1A1A16"
          metalness={0.95}
          roughness={0.05}
          envMapIntensity={2}
        />
      </mesh>

      {/* Main hex column body */}
      <mesh position={[0, 0.1, 0]}>
        <cylinderGeometry args={[1.2, 1.5, 1.2, 6]} />
        <meshPhysicalMaterial
          color="#242420"
          metalness={0.85}
          roughness={0.1}
          envMapIntensity={1.8}
          iridescence={0.6}
          iridescenceIOR={1.3}
        />
      </mesh>

      {/* Hex top pyramid cap */}
      <mesh position={[0, 0.9, 0]}>
        <cylinderGeometry args={[0, 1.2, 0.9, 6]} />
        <meshPhysicalMaterial
          color="#FE6037"
          metalness={0.9}
          roughness={0.05}
          envMapIntensity={2.5}
          iridescence={1}
          iridescenceIOR={1.5}
          emissive="#1B3A8C"
          emissiveIntensity={0.2}
        />
      </mesh>

      {/* Blue accent ring */}
      <mesh ref={ringRef} position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.7, 0.04, 8, 6]} />
        <meshPhysicalMaterial
          color="#FE6037"
          metalness={1}
          roughness={0}
          emissive="#FE6037"
          emissiveIntensity={0.8}
        />
      </mesh>

      {/* Inner floating octahedron core */}
      <mesh ref={innerRef} position={[0, 0.1, 0]}>
        <octahedronGeometry args={[0.45]} />
        <meshPhysicalMaterial
          color="#FE6037"
          metalness={0.6}
          roughness={0}
          emissive="#FE6037"
          emissiveIntensity={1.2}
          envMapIntensity={1}
        />
      </mesh>

      {/* Teal glow plane (fake glow at bottom) */}
      <mesh position={[0, -0.72, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[2, 6]} />
        <meshBasicMaterial
          color="#FE6037"
          transparent
          opacity={0.06}
        />
      </mesh>
    </group>
  )
}

function Particles({ count = 120 }: { count?: number }) {
  const pointsRef = useRef<THREE.Points>(null)

  const positions = new Float32Array(
    Array.from({ length: count * 3 }, (_, i) => {
      const axis = i % 3
      if (axis === 0) return (Math.random() - 0.5) * 12
      if (axis === 1) return (Math.random() - 0.5) * 12
      return (Math.random() - 0.5) * 6
    })
  )

  useFrame((state) => {
    if (!pointsRef.current) return
    pointsRef.current.rotation.y = state.clock.elapsedTime * 0.03
    pointsRef.current.rotation.x = state.clock.elapsedTime * 0.015
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        color="#FE6037"
        transparent
        opacity={0.5}
        sizeAttenuation
      />
    </points>
  )
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0.5, 7], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 2]}
      onCreated={({ gl, scene }) => {
        gl.setClearColor(0x000000, 0)
        scene.background = null
      }}
    >
      {/* Lights */}
      <ambientLight intensity={0.15} />
      <pointLight position={[5, 5, 5]} color="#FE6037" intensity={8} />
      <pointLight position={[-5, -3, 4]} color="#FE6037" intensity={6} />
      <pointLight position={[0, 8, 2]} color="#ffffff" intensity={1.5} />
      <pointLight position={[0, -3, 2]} color="#FE6037" intensity={3} />

      {/* Environment for reflections — background=false agar tidak override bg */}
      <Environment preset="city" background={false} />

      {/* Floating 3D hex crystal */}
      <Float speed={1.8} rotationIntensity={0.2} floatIntensity={0.8}>
        <HexCrystal />
      </Float>

      {/* Background particles */}
      <Particles count={100} />
    </Canvas>
  )
}
