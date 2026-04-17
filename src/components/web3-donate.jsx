import { Control, Flex, Icon, MicroFont500 } from "./global"
import * as Redstone from '@prohetamine/redstone'
//import * as Redstone from '/Users/stas/Desktop/redstone'
import { useStasPay } from 'stas-pay'
import coinsIcon from './../assets/icons/coins.svg?react'
import { useContext } from "react"
import { LanguageContext } from "../contexts/language"
import { ModalWindowContext } from "../contexts/modal-window"

const paymentAddress = '0xbcfA1b80C39F9a378b12b257934BE409Bc93eC60'

const Web3Donate = () => {
    const { isConnected, open } = Redstone.useApp() 
        , confirm = useStasPay()
        , cert = Redstone.useCertificate('donate-small', { paymentAddress })
        , donate = Redstone.useCounter(`donate-small`, {
            stas: true,
            paymentAddress
        })

    const showModalWindow = useContext(ModalWindowContext)
        , lang = useContext(LanguageContext)

    const handleDonate = async () => {
        if (isConnected) {
            if (cert.value === 0) {
                const commisson = await cert.getCommission()
                    , isConfirm = await confirm(commisson)

                if (isConfirm) {
                    await cert.updateValue(5000)
                } else {
                    return
                }
            }

            const commisson = await donate.getCommission()
                , isConfirm = await confirm(commisson)

            if (isConfirm) {
                const isDonated = await donate.updateValue()
            
                await showModalWindow('Notify', { value: [
                    isDonated 
                        ? lang.data.sendDonateOk 
                        : lang.data.sendDonateError 
                    ] 
                })
            }
        } else {
            open()
        }
    }

    return (
        <Flex gap='var(--spaces-normal)' direction='row' style={{ width: '100%', flexWrap: 'wrap' }}>
            <Control 
                onTap={handleDonate}
                whileTap={{ y: 2, scale: 0.97 }} 
                style={{ background: 'var(--colors-controll-default-background-alt-yellow)' }}
                >
                <Flex gap='var(--spaces-small)' padding='var(--spaces-small) var(--spaces-normal)' direction='row' justify='center' align='center'>
                    <MicroFont500 style={{ color: 'var(--colors-controll-default-color)' }}>Donate $STAS</MicroFont500>
                    <Icon src={coinsIcon} />
                </Flex>
                </Control>
        </Flex>
    )
}


export default Web3Donate