import Particles from "react-tsparticles";
import particlesOptions from "./config/particles-config"

const ParticlesBackground = () => {
    return (
        <Particles params={particlesOptions}>
        </Particles>
    )
}

export default ParticlesBackground;