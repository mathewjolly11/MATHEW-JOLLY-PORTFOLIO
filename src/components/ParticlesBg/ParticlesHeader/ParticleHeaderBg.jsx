import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function ParticleHeaderBg() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      className="particles-2-css"
      options={{
        background: {
          color: "#000",
          position: "50% 50%",
          repeat: "no-repeat",
          size: "cover",
        },
        fullScreen: { enable: false },
        interactivity: {
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 10,
            },
            grab: { distance: 400 },
            repulse: {
              divs: { distance: 200, duration: 0.4, speed: 1 },
            },
          },
        },
        particles: {
          number: { value: 25, density: { enable: true } },
          move: { enable: true, outModes: { default: "out" } },
          opacity: { value: { min: 0.3, max: 1 } },
          shape: {
            type: "image",
            options: {
              image: [
                {
                  src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
                  width: 20,
                  height: 20,
                },
                {
                  src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg",
                  width: 20,
                  height: 20,
                },
                {
                  src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg",
                  width: 20,
                  height: 20,
                },
                {
                  src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
                  width: 20,
                  height: 20,
                },
                {
                  src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
                  width: 20,
                  height: 20,
                },
                {
                  src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg",
                  width: 20,
                  height: 20,
                },
                {
                  src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
                  width: 20,
                  height: 20,
                },
                {
                  src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
                  width: 20,
                  height: 20,
                }, // GitHub white
                {
                  src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
                  width: 20,
                  height: 20,
                },
                {
                  src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
                  width: 20,
                  height: 20,
                }, // Vercel white
                {
                  src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg",
                  width: 20,
                  height: 20,
                }, // Photoshop blue
                {
                  src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
                  width: 20,
                  height: 20,
                }, // VS Code blue
                {
                  src: "https://www.easyicon.net/api/resizeApi.php?id=1181176&size=128",
                  width: 20,
                  height: 20,
                }, // WampServer pink
                {
                  src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
                  width: 20,
                  height: 20,
                },
              ],
            },
          },
          size: { value: 40, animation: { speed: 20 } },
        },
      }}
    />
  );
}
