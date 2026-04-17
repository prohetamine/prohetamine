import { Control, Flex, MicroFont500 } from "./global"
import * as Redstone from '@prohetamine/redstone'
//import * as Redstone from '/Users/stas/Desktop/redstone'

const Emotion = ({ emoji }) => {
    const { isConnected, open } = Redstone.useApp() 
        , emotion = Redstone.useCounter(`emotion-${emoji}`)

    const handleEmotion = async () => {
        if (isConnected) {
           await emotion.updateValue() 
        } else {
            open()
        }
    }

    return (
        <Control 
            whileTap={{ y: 2, scale: 0.97 }}
            onTap={handleEmotion}
            style={{ 
                order: -emotion.value.count
            }}
        >
            <Flex gap='var(--spaces-small)' padding='var(--spaces-normal) var(--spaces-big)' direction='row' justify='center' align='center'>
                <MicroFont500 style={{ color: 'var(--colors-controll-default-color)' }}>{emoji}</MicroFont500>
                {
                    emotion.value.count 
                        ? (
                            <MicroFont500 style={{ color: 'var(--colors-controll-default-color)' }}>{emotion.value.count}</MicroFont500>
                        )
                        : null
                }
            </Flex>
        </Control> 
    )
}

const Web3Emotions = () => (
    <Flex 
        gap='var(--spaces-normal)' 
        direction='row' 
        style={{ width: '100%', flexWrap: 'wrap' }}
    >
        <Emotion emoji='ツ' />
        <Emotion emoji='⌬ʲˢ³' />
        <Emotion emoji='٩(×̯×)۶' />
        <Emotion emoji='★' />
        <Emotion emoji='✖' />
    </Flex>
)


export default Web3Emotions