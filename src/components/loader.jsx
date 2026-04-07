import { useEffect, useState } from 'react'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import styled from 'styled-components'
import { Flex } from './global.jsx'

import logoLoader from './../assets/logo-loader.gif?inline'

const Image = styled.div`
  background-image: url('${logoLoader}');
  width: 180px;
  height: 180px;
`

THREE.Cache.enabled = true
const loader = new GLTFLoader()

const Loader = ({ children }) => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const handleLoad = async () => {
      await new Promise(res => loader.load('./logo.glb', res))
      setIsLoaded(true)
    }

    const timeId = setTimeout(handleLoad)
    return () => clearTimeout(timeId)
  }, [])

  return isLoaded 
            ? (
              children
            )
            : (
              <Flex style={{ width: '100%', height: '100vh', background: `var(--colors-background)` }} justify='center' align='center'>
                <Flex gap='var(--spaces-normal)'>
                  <Image />
                </Flex>
              </Flex>
            )
}

export default Loader