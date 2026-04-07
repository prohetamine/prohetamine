import { useState } from "react"
import { Dot, Flex, MicroFont400, MicroFont500 } from "./global"

const Footer = () => {
    const [show, setShow] = useState(false)

    return show 
            ? (
                <Flex gap='var(--spaces-small)' direction='row'>
                    <MicroFont500 style={{ color: 'var(--colors-based-black)', userSelect: 'none', cursor: 'pointer' }}>prohetamine.ru</MicroFont500>
                    <Dot />
                    <MicroFont500 style={{ color: 'var(--colors-placeholder)', userSelect: 'none', cursor: 'pointer' }}>cделано в 2026 году с ❤ клавиатуры</MicroFont500>
                </Flex>
            )
            : (
                <Flex 
                    onTap={() => setShow(true)}
                    gap='var(--spaces-small)'
                >
                    <MicroFont400 style={{ color: 'var(--colors-based-black)', userSelect: 'none', cursor: 'pointer' }}>...</MicroFont400>
                </Flex>
            )
}

export default Footer