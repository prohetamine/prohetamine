import { useContext, useState } from 'react'
import { Dot, Flex, MicroFont400, MicroFont500 } from './global'
import { LanguageContext } from '../contexts/language'
import { useNavigate } from 'react-router'

const Footer = () => {
    const [show, setShow] = useState(false)
        , lang = useContext(LanguageContext)
        , navigate = useNavigate()

    return show 
            ? (
                <Flex 
                    gap='var(--spaces-small)' 
                    direction='row'
                    onTap={() => navigate('/')}
                >
                    <MicroFont500 style={{ color: 'var(--colors-based-black)', userSelect: 'none', cursor: 'pointer' }}>prohetamine.ru</MicroFont500>
                    <Dot />
                    <MicroFont500 style={{ color: 'var(--colors-placeholder)', userSelect: 'none', cursor: 'pointer' }}>{lang.data.footer}</MicroFont500>
                </Flex>
            )
            : (
                <Flex 
                    onTap={() => setShow(true)}
                    onHoverStart={() => setShow(true)}
                    gap='var(--spaces-small)'
                >
                    <MicroFont400 style={{ color: 'var(--colors-based-black)', userSelect: 'none', cursor: 'pointer' }}>...</MicroFont400>
                </Flex>
            )
}

export default Footer