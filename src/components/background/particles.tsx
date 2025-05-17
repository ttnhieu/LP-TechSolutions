import { useEffect, useMemo, useState } from 'react'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import {
  // type Container,
  type ISourceOptions,
  MoveDirection,
  OutMode
} from '@tsparticles/engine'

import { loadSlim } from '@tsparticles/slim'
import { useTheme } from 'next-themes'

export const ParticlesComponent = () => {
  const [init, setInit] = useState(false)
  const { resolvedTheme } = useTheme()

  const isDark = useMemo(() => {
    return resolvedTheme === 'dark'
  }, [resolvedTheme])

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine)
      //await loadBasic(engine);
    }).then(() => {
      setInit(true)
    })
  }, [])

  // const particlesLoaded = async (container?: Container): Promise<void> => {
  //   console.log('container')
  // }

  const options: ISourceOptions = useMemo(
    () => ({
      background: isDark
        ? {
            image: `linear-gradient(
          252deg,
          rgba(25, 35, 53, 0) 35.97%,
          rgba(47, 87, 239, 0.3) 100.98%
        ),
        linear-gradient(
          110deg,
          rgba(25, 35, 53, 0) 38.37%,
          rgba(185, 102, 231, 0.4) 102.05%
        )`,
            size: 'cover',
            position: 'center',
            repeat: 'no-repeat'
            // color: {
            //   value: 'transparent'
            // }
          }
        : {
            image: "url('/images/backgrounds/bg-g1.webp')",
            size: 'cover',
            position: 'center',
            repeat: 'no-repeat'
          },
      style: {
        position: 'absolute',
        'z-index': '-10'
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: 'push'
          },
          onHover: {
            enable: true,
            mode: 'repulse'
          }
        },
        modes: {
          push: {
            quantity: 4
          },
          repulse: {
            distance: 200,
            duration: 0.4
          }
        }
      },
      particles: {
        color: {
          value: isDark ? '#ffffff1f' : '#ae97efa1'
        },
        links: {
          color: isDark ? '#ffffff1f' : '#ae97efa1',
          distance: 150,
          enable: true,
          opacity: 0.3,
          width: 1
        },
        move: {
          direction: MoveDirection.none,
          enable: true,
          outModes: {
            default: OutMode.out
          },
          random: false,
          speed: 6,
          straight: false
        },
        number: {
          density: {
            enable: true
          },
          value: 100
        },
        opacity: {
          value: 0.3
        },
        shape: {
          type: 'circle'
        },
        size: {
          value: { min: 1, max: 3 }
        }
      },
      detectRetina: true
    }),
    [isDark]
  )

  if (init) {
    return (
      <Particles
        id="tsparticles"
        options={options}
        // particlesLoaded={particlesLoaded}
      />
    )
  }

  return <></>
}
