import React, { FC, useState } from 'react'
import {
  Button
} from 'semantic-ui-react'
import { useSpring, animated, interpolate } from 'react-spring'

import styles from './Nav.module.scss'
import jsonData from '../assets/data/contact.json'

const AniButton = animated(Button)

const Nav: FC = () => {
  const [proximityScaling, setProximityScaling] = useState(Array(jsonData.length).fill(1))
  const { scale, translate } = useSpring({
    from: {
      scale: 0,
      translate: -7
    },
    scale: 1,
    translate: 0
  })

  const handleProximity = (idx: number) => {
    const s = Array(jsonData.length).fill('')
    s[idx] = 'button3x'
    s[idx - 1] = s[idx + 1] = 'button2x'
    setProximityScaling(s.slice(0, jsonData.length))
  }
  return (
    <nav className={styles.position}>
      {jsonData.map((d, i) => (
        <AniButton
          key={i}
          as="a"
          circular
          color={d.color as any}
          icon={d.icon}
          href={d.href}
          rel="noreferrer"
          target="_blank"
          className={`${styles.button} ${styles[proximityScaling[i]]}`}
          onMouseEnter={() => handleProximity(i)}
          onMouseLeave={() => setProximityScaling(Array(jsonData.length).fill(1))}
          style={{
            transform: interpolate([scale, translate], (s: number, tl: number) => `scale(${s}) translateX(${tl}rem)`)
          }}
        />
      ))}
    </nav>
  )
}

export default Nav
