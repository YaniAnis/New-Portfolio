"use client";
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

// Component to load and render the GLTF model
function DesktopModel() {
    // Path should be relative to the public folder, use forward slashes and no spaces
    const gltf = useGLTF("/3D%20elemnts/scene.gltf");
    return <primitive object={gltf.scene} />;
}

export default function Desktop() {
    return (
        <div className="w-full flex justify-center items-center py-8 bg-gray-900">
            <div style={{ width: 500, height: 350 }}>
                <Canvas camera={{ position: [0, 1, 5], fov: 50 }}>
                    <ambientLight intensity={0.7} />
                    <directionalLight position={[5, 10, 7]} intensity={0.7} />
                    <Suspense fallback={null}>
                        <DesktopModel />
                    </Suspense>
                    <OrbitControls />
                </Canvas>
            </div>
        </div>
    );
}

// Preload the model for performance (optional)
useGLTF.preload && useGLTF.preload("/3D%20elemnts/scene.gltf");