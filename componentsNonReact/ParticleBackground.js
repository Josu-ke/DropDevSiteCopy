import { Box } from "@chakra-ui/react"
import Particles from "react-tsparticles"
import ParticlesConfig from "./particle-config"

export default function ParticleBackground() {
  const particlesInit = main => {
    console.log(main)

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  }

  const particlesLoaded = container => {
    console.log(container)
  }
  return <Particles id="tsparticles" init={particlesInit} loaded={particlesLoaded} options={ParticlesConfig} />
}
