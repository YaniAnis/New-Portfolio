"use client"
import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, useGLTF } from "@react-three/drei"
import { motion } from "framer-motion"

// Component to load and render the GLTF model
function DesktopModel() {
  const gltf = useGLTF("/3D%20elemnts/scene.gltf")
  return <primitive object={gltf.scene} />
}

export default function Desktop() {
  return (
    <section className="w-full flex justify-center items-center py-20 relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r bg-gray-900"></div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent mb-4">
            Interactive 3D Experience
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Explore my workspace in 3D - drag to rotate, scroll to zoom
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative"
          style={{ width: "100%", height: "60vw", maxHeight: 600, minHeight: 300 }}
        >
          {/* Decorative border */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-teal-500/20 rounded-3xl blur-sm"></div>
          <div className="relative bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-3xl overflow-hidden">
            {/* Top overlay text */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="absolute top-6 left-1/2 -translate-x-1/2 z-20 text-center"
            >
              <div className="bg-gradient-to-r from-purple-500/20 to-teal-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full px-6 py-2">
                <span className="text-purple-300 font-medium">My Digital Workspace</span>
              </div>
            </motion.div>

            <Canvas camera={{ position: [7, 2, 0], fov: 25 }} style={{ background: "transparent", height: "60vw", maxHeight: 600, minHeight: 300 }}>
              <ambientLight intensity={0.8} />
              <directionalLight position={[5, 10, 7]} intensity={0.8} />
              <pointLight position={[-5, 5, 5]} intensity={0.3} color="#8b5cf6" />
              <pointLight position={[5, -5, -5]} intensity={0.3} color="#14b8a6" />
              <Suspense fallback={null}>
                <DesktopModel />
              </Suspense>
              <OrbitControls
                enableZoom={true}
                enablePan={false}
                minPolarAngle={Math.PI / 2.5}
                maxPolarAngle={Math.PI / 1.8}
                autoRotate
                autoRotateSpeed={0.5}
              />
            </Canvas>

            {/* Bottom overlay text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
              className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 text-center"
            >
              <p className="text-gray-300 text-lg">Drag to explore • Scroll to zoom</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

useGLTF.preload && useGLTF.preload("/3D%20elemnts/scene.gltf")
