
const ParticlesConfig = {
    particles: {
      number: {
        value: 100,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: '#F31559',
      },
      fullScreen: {
        enable: true,
        zIndex: 0,
      },
    
      opacity: {
        value: 0.5,
        random: true,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false
        }
      },
      
  
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false,
      
      }
    },
  
  
    // retina_detect: true
  }
  
  // const ParticlesConfig1 = {  autoPlay: true,
  
  //   backgroundMask: {
  //     composite: "destination-out",
  //     cover: {
  //       color: {
  //         value: theme === "dark" ? "#fff" : "#000",
  //       },
  //       opacity: 1,
  //     },
  //     enable: false,
  //   },
  //   defaultThemes: {},
  //   delay: 0,
  //   fullScreen: {
  //     enable: true,
  //     zIndex: 0,
  //   },
  //   detectRetina: true,
  //   duration: 0,
  //   fpsLimit: 60,
  //   interactivity: {
  //     detectsOn: "window",
  //     events: {
  //       onClick: {
  //         enable: false,
  //         mode: "push",
  //       },
  //       onDiv: {
  //         selectors: "#repulse-div",
  //         enable: false,
  //         mode: "repulse",
  //         type: "circle",
  //       },
  //       onHover: {
  //         enable: false,
  //         mode: "connect",
  //         parallax: {
  //           enable: false,
  //           force: 60,
  //           smooth: 10,
  //         },
  //       },
  //       resize: {
  //         delay: 0.5,
  //         enable: true,
  //       },
  //     },
  //     modes: {
  //       trail: {
  //         delay: 1,
  //         pauseOnStop: false,
  //         quantity: 1,
  //       },
  //       attract: {
  //         distance: 200,
  //         duration: 0.4,
  //         easing: "ease-out-quad",
  //         factor: 1,
  //         maxSpeed: 50,
  //         speed: 1,
  //       },
  //       bounce: {
  //         distance: 200,
  //       },
  //       bubble: {
  //         distance: 100,
  //         duration: 1,
  //         mix: false,
  //         opacity: 1,
  //         size: 10,
  //         divs: {
  //           distance: 200,
  //           duration: 0.4,
  //           mix: false,
  //           selectors: [],
  //         },
  //       },
  //       connect: {
  //         distance: 80,
  //         links: {
  //           opacity: 1,
  //         },
  //         radius: 60,
  //       },
  
  //       push: {
  //         default: true,
  //         groups: [],
  //         quantity: 4,
  //       },
  //       remove: {
  //         quantity: 2,
  //       },
  //       repulse: {
  //         distance: 200,
  //         duration: 0.4,
  //         factor: 100,
  //         speed: 1,
  //         maxSpeed: 50,
  //         easing: "ease-out-quad",
  //         divs: {
  //           distance: 200,
  //           duration: 0.4,
  //           factor: 100,
  //           speed: 1,
  //           maxSpeed: 50,
  //           easing: "ease-out-quad",
  //           selectors: [],
  //         },
  //       },
  //       slow: {
  //         factor: 1,
  //         radius: 200,
  //       },
  //       light: {
  //         area: {
  //           gradient: {
  //             start: {
  //               value: "#ffffff",
  //             },
  //             stop: {
  //               value: "#000000",
  //             },
  //           },
  //           radius: 1000,
  //         },
  //       },
  //     },
  //   },
  //   manualParticles: [],
  //   particles: {
  //     bounce: {
  //       horizontal: {
  //         random: {
  //           enable: false,
  //           minimumValue: 0.1,
  //         },
  //         value: 1,
  //       },
  //       vertical: {
  //         random: {
  //           enable: false,
  //           minimumValue: 0.1,
  //         },
  //         value: 1,
  //       },
  //     },
  //     collisions: {
  //       absorb: {
  //         speed: 2,
  //       },
  //       bounce: {
  //         horizontal: {
  //           random: {
  //             enable: false,
  //             minimumValue: 0.1,
  //           },
  //           value: 1,
  //         },
  //         vertical: {
  //           random: {
  //             enable: false,
  //             minimumValue: 0.1,
  //           },
  //           value: 1,
  //         },
  //       },
  //       enable: false,
  //       maxSpeed: 50,
  //       mode: "bounce",
  //       overlap: {
  //         enable: true,
  //         retries: 0,
  //       },
  //     },
  //     color: {
  //       value: theme === "dark" ? "#fff" : "#000",
  
  //       animation: {
  //         h: {
  //           count: 0,
  //           enable: true,
  //           offset: 0,
  //           speed: 1,
  //           delay: 0,
  //           decay: 0,
  //           sync: true,
  //         },
  //         s: {
  //           count: 0,
  //           enable: true,
  //           offset: 0,
  //           speed: 1,
  //           delay: 0,
  //           decay: 0,
  //           sync: true,
  //         },
  //         l: {
  //           count: 0,
  //           enable: true,
  //           offset: 0,
  //           speed: 1,
  //           delay: 0,
  //           decay: 0,
  //           sync: true,
  //         },
  //       },
  //     },
  //     groups: {},
  //     move: {
  //       angle: {
  //         offset: 0,
  //         value: 90,
  //       },
  //       attract: {
  //         distance: 200,
  //         enable: false,
  //         rotate: {
  //           x: 600,
  //           y: 1200,
  //         },
  //       },
  //       center: {
  //         x: 50,
  //         y: 50,
  //         mode: "percent",
  //         radius: 0,
  //       },
  //       decay: 0,
  //       distance: {},
  //       direction: "none",
  //       drift: 0,
  //       enable: true,
  //       gravity: {
  //         acceleration: 9.81,
  //         enable: false,
  //         inverse: false,
  //         maxSpeed: 50,
  //       },
  //       path: {
  //         clamp: true,
  //         delay: {
  //           random: {
  //             enable: false,
  //             minimumValue: 0,
  //           },
  //           value: 0,
  //         },
  //         enable: false,
  //         options: {},
  //       },
  //       outModes: {
  //         default: "out",
  //         bottom: "out",
  //         left: "out",
  //         right: "out",
  //         top: "out",
  //       },
  //       random: false,
  //       size: false,
  //       speed: 0.5,
  //       spin: {
  //         acceleration: 0,
  //         enable: false,
  //       },
  //       straight: false,
  //       trail: {
  //         enable: false,
  //         length: 10,
  //         fill: {},
  //       },
  //       vibrate: false,
  //       warp: false,
  //     },
  //     number: {
  //       density: {
  //         enable: true,
  //         width: 1920,
  //         height: 1080,
  //       },
  //       limit: 500,
  //       value: 300,
  //     },
  //     opacity: {
  //       random: {
  //         enable: false,
  //         minimumValue: 0.1,
  //       },
  //       value: 0.1,
  //       animation: {
  //         count: 0,
  //         enable: true,
  //         speed: 10,
  //         decay: 0,
  //         delay: 0,
  //         sync: false,
  //         mode: "auto",
  //         startValue: "random",
  //         destroy: "none",
  //         minimumValue: 0.1,
  //       },
  //     },
  //     reduceDuplicates: false,
  //     shadow: {
  //       blur: 0,
  //       color: {
  //         value: theme === "dark" ? "#fff" : "#000",
  //       },
  //       enable: false,
  //       offset: {
  //         x: 0,
  //         y: 0,
  //       },
  //     },
  //     shape: {
  //       close: true,
  //       fill: true,
  //       options: {},
  //       type: "circle",
  //     },
  //     size: {
  //       random: {
  //         enable: true,
  //         minimumValue: 1,
  //       },
  //       value: {
  //         min: 1,
  //         max: 5,
  //       },
  //       animation: {
  //         count: 0,
  //         enable: true,
  //         speed: 3,
  //         decay: 0,
  //         delay: 0,
  //         sync: true,
  //         mode: "auto",
  //         startValue: "random",
  //         destroy: "none",
  //         minimumValue: 0.1,
  //       },
  //     },
  //     stroke: {
  //       width: 0,
  //     },
  //     zIndex: {
  //       random: {
  //         enable: false,
  //         minimumValue: 0,
  //       },
  //       value: 0,
  //       opacityRate: 1,
  //       sizeRate: 1,
  //       velocityRate: 1,
  //     },
  
  //     life: {
  //       count: 0,
  //       delay: {
  //         random: {
  //           enable: false,
  //           minimumValue: 0,
  //         },
  //         value: 0,
  //         sync: false,
  //       },
  //       duration: {
  //         random: {
  //           enable: false,
  //           minimumValue: 0.001,
  //         },
  //         value: 0,
  //         sync: false,
  //       },
  //     },
  //     rotate: {
  //       random: {
  //         enable: false,
  //         minimumValue: 0,
  //       },
  //       value: 0,
  //       animation: {
  //         enable: false,
  //         speed: 0,
  //         decay: 0,
  //         sync: false,
  //       },
  //       direction: "clockwise",
  //       path: false,
  //     },
  //     orbit: {
  //       animation: {
  //         count: 0,
  //         enable: true,
  //         speed: 1,
  //         decay: 0,
  //         delay: 0,
  //         sync: false,
  //       },
  //       enable: false,
  //       opacity: 1,
  //       rotation: {
  //         random: {
  //           enable: false,
  //           minimumValue: 0,
  //         },
  //         value: 45,
  //       },
  //       width: 1,
  //     },
  //     links: {
  //       blink: true,
  //       color: {
  //         value: theme === "dark" ? "#fff" : "#000",
  //       },
  //       consent: true,
  //       distance: 150,
  //       enable: false,
  //       frequency: 1,
  //       opacity: 1,
  //       shadow: {
  //         blur: 5,
  //         color: {
  //           value: theme === "dark" ? "#fff" : "#000",
  //         },
  //         enable: false,
  //       },
  //       triangles: {
  //         enable: false,
  //         frequency: 1,
  //       },
  //       width: 1,
  //       warp: false,
  //     },
  //     repulse: {
  //       random: {
  //         enable: false,
  //         minimumValue: 0,
  //       },
  //       value: 0,
  //       enabled: false,
  //       distance: 1,
  //       duration: 1,
  //       factor: 1,
  //       speed: 1,
  //     },
  //   },
  //   pauseOnBlur: true,
  //   pauseOnOutsideViewport: true,
  //   responsive: [],
  //   smooth: false,
  //   style: {},
  //   themes: [],
  //   zLayers: 100,
  //   motion: {
  //     disable: false,
  //     reduce: {
  //       factor: 4,
  //       value: true,
  //     },
  //   },}
  
  export default ParticlesConfig;