import { Flex, MicroFont400 } from "./global"

const Footer = () => {

    return (
        <Flex gap='var(--spaces-normal)'>
            <MicroFont400 style={{ color: 'var(--colors-based-black)', userSelect: 'none', cursor: 'pointer' }}>...</MicroFont400>
        </Flex>
    )
}

export default Footer