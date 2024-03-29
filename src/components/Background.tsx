import React, { FC, PropsWithChildren, useState } from 'react'
import { Scrollbars } from 'react-custom-scrollbars-2'

const Background: FC<PropsWithChildren<{}>> = ({ children }) => {
  const getColorMix = (color1: string, color2: string, ratio = 0.5) => {
    const hex = function (x: any) {
      x = x.toString(16)
      return (x.length === 1) ? '0' + x : x
    }

    color1 = color1.slice(1)
    color2 = color2.slice(1)

    const r = Math.ceil(parseInt(color1.substring(0, 2), 16) * ratio + parseInt(color2.substring(0, 2), 16) * (1 - ratio))
    const g = Math.ceil(parseInt(color1.substring(2, 4), 16) * ratio + parseInt(color2.substring(2, 4), 16) * (1 - ratio))
    const b = Math.ceil(parseInt(color1.substring(4, 6), 16) * ratio + parseInt(color2.substring(4, 6), 16) * (1 - ratio))

    return `#${hex(r)}${hex(g)}${hex(b)}`
  }

  const constructBackground = (color: string) => `radial-gradient(circle, ${color} 0%, ${black} 90%)`

  const black = '#1B1C1D'
  const olive = '#32CD32'
  const cyan = '#5EC4D8'
  const blue = '#0E6EB8'
  const backgrounds = [cyan, blue, olive]

  const handleScroll = (e: React.UIEvent<HTMLElement>) => {
    const { scrollTop } = e!.currentTarget
    const viewportHeight = window.innerHeight

    const screenNr = Math.floor(scrollTop / viewportHeight)

    if (screenNr > 1) {
      setBackground(constructBackground(backgrounds[2]))
      return
    }

    const mixRatio = 1 - (scrollTop % viewportHeight) / viewportHeight
    const backgroundMix = getColorMix(backgrounds[screenNr], backgrounds[screenNr + 1], mixRatio)

    setBackground(constructBackground(backgroundMix))
  }

  const [background, setBackground] = useState(constructBackground(backgrounds[0]))

  return (
    <div
      style={{ background }}
    >
      <Scrollbars
        onScroll={handleScroll}
      >
        {children}
      </Scrollbars>
    </div>
  )
}

export default Background
