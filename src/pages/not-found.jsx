import styled from 'styled-components'
import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { Control, Flex, Icon, MicroFont500 } from '../components/global.jsx'
import image404 from './../assets/404.gif?inline'
import arrowLeftIcon from './../assets/icons/arrow-left.svg?react'
import { LanguageContext } from '../contexts/language/index.jsx'

const Image404 = styled.div`
  background-image: url('${image404}');
  width: 176px;
  height: 181px;
`

const NotFound = () => {
  const [timer, setTimer] = useState(null)
      , navigate = useNavigate()
      , lang = useContext(LanguageContext)
      
  useEffect(() => {
    const timeId = setTimeout(() => {
      setTimer(11)
    }, 2000)

    const intervalId = setInterval(() => {
      setTimer(s => {
        if (s === 0) {
          navigate('/bio')
        }

        if (s > 0) {
          return s - 1
        }

        return s
      })
    }, 1000)

    return () => {
      clearTimeout(timeId)
      clearInterval(intervalId)
    }
  }, [navigate])

  return (
    <Flex style={{ width: '100%', height: '100vh' }} justify='center' align='center'>
      <Flex gap='var(--spaces-normal)'>
        <Image404 />
        <Control 
          whileTap={{ y: 2, scale: 0.97 }}
          onTap={() => navigate('/bio')}
        >
          <Flex 
            gap='var(--spaces-small)' 
            padding='var(--spaces-small) var(--spaces-normal)' 
            direction='row' 
            justify='center' 
            align='center'
          >
            <Icon src={arrowLeftIcon} />
            <MicroFont500 style={{ color: 'var(--colors-controll-default-color)', userSelect: 'none' }}>{lang.data.backBtn} {timer ? `(${timer})` : ''}</MicroFont500>
          </Flex>
        </Control>
      </Flex>
    </Flex>
  )
}

export default NotFound