import { Control, Flex, MicroFont500 } from "./global"


const Web3Emotions = () => {
    
    return (
        <Flex gap='var(--spaces-normal)' direction='row' style={{ width: '100%', flexWrap: 'wrap' }}>
            <Control whileTap={{ y: 2, scale: 0.97 }}>
            <Flex gap='var(--spaces-small)' padding='var(--spaces-normal) var(--spaces-big)' direction='row' justify='center' align='center'>
                <MicroFont500 style={{ color: 'var(--colors-controll-default-color)' }}>ツ</MicroFont500>
                <MicroFont500 style={{ color: 'var(--colors-controll-default-color)' }}>0</MicroFont500>
            </Flex>
            </Control>
            <Control whileTap={{ y: 2, scale: 0.97 }}>
            <Flex gap='var(--spaces-small)' padding='var(--spaces-normal) var(--spaces-big)' direction='row' justify='center' align='center'>
                <MicroFont500 style={{ color: 'var(--colors-controll-default-color)' }}>٩(×̯×)۶</MicroFont500>
                <MicroFont500 style={{ color: 'var(--colors-controll-default-color)' }}>0</MicroFont500>
            </Flex>
            </Control>
            <Control whileTap={{ y: 2, scale: 0.97 }}>
            <Flex gap='var(--spaces-small)' padding='var(--spaces-normal) var(--spaces-big)' direction='row' justify='center' align='center'>
                <MicroFont500 style={{ color: 'var(--colors-controll-default-color)' }}>★</MicroFont500>
                <MicroFont500 style={{ color: 'var(--colors-controll-default-color)' }}>0</MicroFont500>
            </Flex>
            </Control>
            <Control whileTap={{ y: 2, scale: 0.97 }}>
            <Flex gap='var(--spaces-small)' padding='var(--spaces-normal) var(--spaces-big)' direction='row' justify='center' align='center'>
                <MicroFont500 style={{ color: 'var(--colors-controll-default-color)' }}>⌬ʲˢ³</MicroFont500>
                <MicroFont500 style={{ color: 'var(--colors-controll-default-color)' }}>0</MicroFont500>
            </Flex>
            </Control>
            <Control whileTap={{ y: 2, scale: 0.97 }}>
            <Flex gap='var(--spaces-small)' padding='var(--spaces-normal) var(--spaces-big)' direction='row' justify='center' align='center'>
                <MicroFont500 style={{ color: 'var(--colors-controll-default-color)' }}>✖</MicroFont500>
                <MicroFont500 style={{ color: 'var(--colors-controll-default-color)' }}>0</MicroFont500>
            </Flex>
            </Control>
        </Flex>
    )
}

export default Web3Emotions