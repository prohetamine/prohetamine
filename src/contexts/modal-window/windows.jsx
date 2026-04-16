/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/set-state-in-effect */
import styled from 'styled-components'
import { useEffect, useState } from 'react'
import { motion, time } from 'framer-motion'
import { Bold, Control, Flex, Icon, MicroFont500, Text } from '../../components/global'
import copy from 'copy-to-clipboard'

import networkIcon from './../../assets/icons/network.svg?react'
import dexIcon from './../../assets/icons/dex.svg?react'
import telegramIcon from './../../assets/icons/telegram.svg?react'
import contactsIcon from './../../assets/icons/contacts.svg?react'

export const BuyCoin = ({ onData }) => {

    return (
        <Flex gap='var(--spaces-normal)'>
            <Bold>Uniswap</Bold>
            <Text>Выберите сеть в которой хотите купить монеты.</Text>
            <Control 
                onTap={() => window.location = 'https://app.uniswap.org/explore/tokens/bnb/0xd566886eb93500e2ba464bd48c8d5a2556569253?inputCurrency=NATIVE'}
                whileTap={{ y: 2, scale: 0.97 }} 
                style={{ background: 'var(--colors-controll-default-background-alt-yellow)', width: '100%' }}
            >
                <Flex gap='var(--spaces-small)' padding='var(--spaces-small) var(--spaces-normal)' direction='row' justify='center' align='center'>
                    <MicroFont500 style={{ color: 'var(--colors-controll-default-color)' }}>$STAS в BSC</MicroFont500>
                    <Icon src={networkIcon} />
                </Flex>
            </Control>
            <Control 
                onTap={() => window.location = 'https://app.uniswap.org/explore/tokens/polygon/0xd566886eb93500e2ba464bd48c8d5a2556569253?inputCurrency=NATIVE'}
                whileTap={{ y: 2, scale: 0.97 }} 
                style={{ background: 'var(--colors-controll-default-background-alt-purple)', width: '100%' }}
            >
                <Flex gap='var(--spaces-small)' padding='var(--spaces-small) var(--spaces-normal)' direction='row' justify='center' align='center'>
                    <MicroFont500 style={{ color: 'var(--colors-controll-default-color)' }}>$STAS в Polygon</MicroFont500>
                    <Icon src={networkIcon} />
                </Flex>
            </Control>
            <Flex gap='var(--spaces-normal)' direction='row' justify='flex-end' style={{ width: '100%', flexWrap: 'wrap' }}>
                <Control 
                    onTap={() => onData(false)}
                    whileTap={{ y: 2, scale: 0.97 }} 
                    style={{ background: 'var(--colors-controll-default-background)' }}
                >
                    <Flex gap='var(--spaces-small)' padding='var(--spaces-small) var(--spaces-normal)' direction='row' justify='center' align='center'>
                        <MicroFont500 style={{ color: 'var(--colors-controll-default-color)' }}>Закрыть</MicroFont500>
                    </Flex>
                </Control>
            </Flex>
        </Flex>
    )
}

export const DEX = ({ onData }) => {

    return (
        <Flex gap='var(--spaces-normal)'>
            <Bold>DEX Screener</Bold>
            <Control 
                onTap={() => window.location = 'https://dexscreener.com/bsc/0xD566886eB93500e2BA464bd48c8D5A2556569253'}
                whileTap={{ y: 2, scale: 0.97 }} 
                style={{ background: 'var(--colors-controll-default-background-alt-yellow)', width: '100%' }}
            >
                <Flex gap='var(--spaces-small)' padding='var(--spaces-small) var(--spaces-normal)' direction='row' justify='center' align='center'>
                    <MicroFont500 style={{ color: 'var(--colors-controll-default-color)' }}>$STAS в BSC</MicroFont500>
                    <Icon src={dexIcon} />
                </Flex>
            </Control>
            <Control 
                onTap={() => window.location = 'https://dexscreener.com/polygon/0xD566886eB93500e2BA464bd48c8D5A2556569253'}
                whileTap={{ y: 2, scale: 0.97 }} 
                style={{ background: 'var(--colors-controll-default-background-alt-purple)', width: '100%' }}
            >
                <Flex gap='var(--spaces-small)' padding='var(--spaces-small) var(--spaces-normal)' direction='row' justify='center' align='center'>
                    <MicroFont500 style={{ color: 'var(--colors-controll-default-color)' }}>$STAS в Polygon</MicroFont500>
                    <Icon src={dexIcon} />
                </Flex>
            </Control>
            <Flex gap='var(--spaces-normal)' direction='row' justify='flex-end' style={{ width: '100%', flexWrap: 'wrap' }}>
                <Control 
                    onTap={() => onData(false)}
                    whileTap={{ y: 2, scale: 0.97 }} 
                    style={{ background: 'var(--colors-controll-default-background)' }}
                >
                    <Flex gap='var(--spaces-small)' padding='var(--spaces-small) var(--spaces-normal)' direction='row' justify='center' align='center'>
                        <MicroFont500 style={{ color: 'var(--colors-controll-default-color)' }}>Закрыть</MicroFont500>
                    </Flex>
                </Control>
            </Flex>
        </Flex>
    )
}

export const AddNetworks = ({ onData }) => {

    const addNetwork = async () => {

        /*if (!window.ethereum) {
            alert("Кошелек не найден");
            return;
        }

        const chainId = "0x61"; 

        try {
            const currentChainId = await window.ethereum.request({
                method: "eth_chainId"
            });

            if (currentChainId === chainId) {
                alert("Сеть уже выбрана");
                return;
            }

            await window.ethereum.request({
                method: "wallet_switchEthereumChain",
                params: [{ chainId }]
            });
        } catch (switchError) {
            if (switchError.code === 4902) {
                try {
                    await window.ethereum.request({
                    method: "wallet_addEthereumChain",
                    params: [{
                        chainId: chainId,
                        chainName: "BNB Smart Chain Testnet",
                        nativeCurrency: {
                        name: "BNB",
                        symbol: "BNB",
                        decimals: 18
                        },
                        rpcUrls: ["https://data-seed-prebsc-1-s1.bnbchain.org:8545"],
                        blockExplorerUrls: ["https://testnet.bscscan.com"]
                    }]
                    });

                    console.log("Сеть добавлена");

                } catch (addError) {
                    console.error("Ошибка добавления:", addError);
                }
            } else {
                console.error("Ошибка переключения:", switchError);
            }
        }*/
    }

    return (
        <Flex gap='var(--spaces-normal)'>
            <Bold>Добавить сеть</Bold>
            <Text>Выберите сеть которая будет импортирована в ваш кошелек.</Text>
            <Control 
                onTap={() => addNetwork()}
                whileTap={{ y: 2, scale: 0.97 }} 
                style={{ background: 'var(--colors-controll-default-background-alt-dark)', width: '100%' }}
            >
                <Flex gap='var(--spaces-small)' padding='var(--spaces-small) var(--spaces-normal)' direction='row' justify='center' align='center'>
                    <MicroFont500 style={{ color: 'var(--colors-controll-default-color)' }}>Testnet BSC</MicroFont500>
                    <Icon src={networkIcon} />
                </Flex>
            </Control>
            <Control 
                onTap={() => addNetwork()}
                whileTap={{ y: 2, scale: 0.97 }} 
                style={{ background: 'var(--colors-controll-default-background-alt-yellow)', width: '100%' }}
            >
                <Flex gap='var(--spaces-small)' padding='var(--spaces-small) var(--spaces-normal)' direction='row' justify='center' align='center'>
                    <MicroFont500 style={{ color: 'var(--colors-controll-default-color)' }}>BSC</MicroFont500>
                    <Icon src={networkIcon} />
                </Flex>
            </Control>
            <Control 
                onTap={() => addNetwork()}
                whileTap={{ y: 2, scale: 0.97 }} 
                style={{ background: 'var(--colors-controll-default-background-alt-purple)', width: '100%' }}
            >
                <Flex gap='var(--spaces-small)' padding='var(--spaces-small) var(--spaces-normal)' direction='row' justify='center' align='center'>
                    <MicroFont500 style={{ color: 'var(--colors-controll-default-color)' }}>Polygon</MicroFont500>
                    <Icon src={networkIcon} />
                </Flex>
            </Control>
            <Flex gap='var(--spaces-normal)' direction='row' justify='flex-end' style={{ width: '100%', flexWrap: 'wrap' }}>
                <Control 
                    onTap={() => onData(false)}
                    whileTap={{ y: 2, scale: 0.97 }} 
                    style={{ background: 'var(--colors-controll-default-background)' }}
                >
                    <Flex gap='var(--spaces-small)' padding='var(--spaces-small) var(--spaces-normal)' direction='row' justify='center' align='center'>
                        <MicroFont500 style={{ color: 'var(--colors-controll-default-color)' }}>Закрыть</MicroFont500>
                    </Flex>
                </Control>
            </Flex>
        </Flex>
    )
}

export const TestnetDrop = ({ onData }) => {

    return (
        <Flex gap='var(--spaces-normal)'>
            <Bold>Инструкция</Bold>
            <Text>
                Чтобы получить монеты в тестнете <Bold>BSC</Bold>, нужно отправить в комментарии к посту в телеграм, адрес своего <Bold>BSC</Bold> кошелька.
            </Text>
            <Control 
                onTap={() => window.location = 'https://t.me/prohetamines/372'}
                whileTap={{ y: 2, scale: 0.97 }} 
                style={{ background: 'var(--colors-controll-default-background-alt-blue)', width: '100%' }}
            >
                <Flex gap='var(--spaces-small)' padding='var(--spaces-small) var(--spaces-normal)' direction='row' justify='center' align='center'>
                    <MicroFont500 style={{ color: 'var(--colors-controll-default-color)' }}>Открыть в telegram</MicroFont500>
                    <Icon src={telegramIcon} />
                </Flex>
            </Control>
            <Flex gap='var(--spaces-normal)' direction='row' justify='flex-end' style={{ width: '100%', flexWrap: 'wrap' }}>
                <Control 
                    onTap={() => onData(false)}
                    whileTap={{ y: 2, scale: 0.97 }} 
                    style={{ background: 'var(--colors-controll-default-background)' }}
                >
                    <Flex gap='var(--spaces-small)' padding='var(--spaces-small) var(--spaces-normal)' direction='row' justify='center' align='center'>
                        <MicroFont500 style={{ color: 'var(--colors-controll-default-color)' }}>Закрыть</MicroFont500>
                    </Flex>
                </Control>
            </Flex>
        </Flex>
    )
}

export const Airdrop = ({ onData }) => {

    return (
        <Flex gap='var(--spaces-normal)'>
            <Bold>Инструкция</Bold>
            <Text>
                Чтобы получать ежедневный airdrop <Bold>10 $STAS</Bold> нужно быть подписанным на телеграм канал.
            </Text>
            <Control 
                onTap={() => window.location = 'https://t.me/prohetamines/370'}
                whileTap={{ y: 2, scale: 0.97 }} 
                style={{ background: 'var(--colors-controll-default-background-alt-blue)', width: '100%' }}
            >
                <Flex gap='var(--spaces-small)' padding='var(--spaces-small) var(--spaces-normal)' direction='row' justify='center' align='center'>
                    <MicroFont500 style={{ color: 'var(--colors-controll-default-color)' }}>Открыть в telegram</MicroFont500>
                    <Icon src={telegramIcon} />
                </Flex>
            </Control>
            <Flex gap='var(--spaces-normal)' direction='row' justify='flex-end' style={{ width: '100%', flexWrap: 'wrap' }}>
                <Control 
                    onTap={() => onData(false)}
                    whileTap={{ y: 2, scale: 0.97 }} 
                    style={{ background: 'var(--colors-controll-default-background)' }}
                >
                    <Flex gap='var(--spaces-small)' padding='var(--spaces-small) var(--spaces-normal)' direction='row' justify='center' align='center'>
                        <MicroFont500 style={{ color: 'var(--colors-controll-default-color)' }}>Закрыть</MicroFont500>
                    </Flex>
                </Control>
            </Flex>
        </Flex>
    )
}

export const Email = ({ onData, value }) => {
    useEffect(() => {
        const timeId = setTimeout(() => {
            copy(value[0])
        }, 100)

        return () => clearTimeout(timeId)
    }, [value])

    return (
        <Flex gap='var(--spaces-normal)'>
            <Bold>Почта</Bold>
            <Text>
                Адрес <Bold>{value[0]}</Bold> скопирован в буфер обмена.
            </Text>
            <Control 
                onTap={() => window.location = `https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=${value[0]}${value[1] ? `&su=${value[1]}` : ''}`}
                whileTap={{ y: 2, scale: 0.97 }} 
                style={{ background: 'var(--colors-controll-default-background-alt-green)', width: '100%' }}
            >
                <Flex gap='var(--spaces-small)' padding='var(--spaces-small) var(--spaces-normal)' direction='row' justify='center' align='center'>
                    <MicroFont500 style={{ color: 'var(--colors-controll-default-color)' }}>Открыть в gmail</MicroFont500>
                    <Icon src={contactsIcon} />
                </Flex>
            </Control>
            <Control 
                onTap={() => window.location = `mailto:${value}`}
                whileTap={{ y: 2, scale: 0.97 }} 
                style={{ background: 'var(--colors-controll-default-background)', width: '100%' }}
            >
                <Flex gap='var(--spaces-small)' padding='var(--spaces-small) var(--spaces-normal)' direction='row' justify='center' align='center'>
                    <MicroFont500 style={{ color: 'var(--colors-controll-default-color)' }}>Открыть в почте</MicroFont500>
                    <Icon src={contactsIcon} />
                </Flex>
            </Control>
            <Flex gap='var(--spaces-normal)' direction='row' justify='flex-end' style={{ width: '100%', flexWrap: 'wrap' }}>
                <Control 
                    onTap={() => onData(false)}
                    whileTap={{ y: 2, scale: 0.97 }} 
                    style={{ background: 'var(--colors-controll-default-background)' }}
                >
                    <Flex gap='var(--spaces-small)' padding='var(--spaces-small) var(--spaces-normal)' direction='row' justify='center' align='center'>
                        <MicroFont500 style={{ color: 'var(--colors-controll-default-color)' }}>Закрыть</MicroFont500>
                    </Flex>
                </Control>
            </Flex>
        </Flex>
    )
}

export const BugReport = ({ onData }) => {

    return (
        <Flex gap='var(--spaces-normal)'>
            <Bold>Сообщить о баге</Bold>
            <Text>Вы можете связаться со мной через один из способов связи.</Text>
            <Control 
                onTap={() => window.location = 'tg://resolve?domain=prohetamine'}
                whileTap={{ y: 2, scale: 0.97 }} 
                style={{ background: 'var(--colors-controll-default-background-alt-blue)', width: '100%' }}
            >
                <Flex gap='var(--spaces-small)' padding='var(--spaces-small) var(--spaces-normal)' direction='row' justify='center' align='center'>
                    <MicroFont500 style={{ color: 'var(--colors-controll-default-color)' }}>Telegram DM</MicroFont500>
                    <Icon src={telegramIcon} />
                </Flex>
            </Control>
            <Control 
                onTap={() => onData(true)}
                whileTap={{ y: 2, scale: 0.97 }} 
                style={{ background: 'var(--colors-controll-default-background-alt-green)', width: '100%' }}
            >
                <Flex gap='var(--spaces-small)' padding='var(--spaces-small) var(--spaces-normal)' direction='row' justify='center' align='center'>
                    <MicroFont500 style={{ color: 'var(--colors-controll-default-color)' }}>Email</MicroFont500>
                    <Icon src={contactsIcon} />
                </Flex>
            </Control>
            <Flex gap='var(--spaces-normal)' direction='row' justify='flex-end' style={{ width: '100%', flexWrap: 'wrap' }}>
                <Control 
                    onTap={() => onData(false)}
                    whileTap={{ y: 2, scale: 0.97 }} 
                    style={{ background: 'var(--colors-controll-default-background)' }}
                >
                    <Flex gap='var(--spaces-small)' padding='var(--spaces-small) var(--spaces-normal)' direction='row' justify='center' align='center'>
                        <MicroFont500 style={{ color: 'var(--colors-controll-default-color)' }}>Закрыть</MicroFont500>
                    </Flex>
                </Control>
            </Flex>
        </Flex>
    )
}




/*
const Controll = styled(motion.div)`
    border: 1px solid var(--interface-dark-background-border);
    background: var(--interface-background-primary);
    border-radius: 8px;
    padding: 16px 12px;
    width: 100%;
    box-sizing: border-box;
`

const Input = styled.input`
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 16px;
    padding: 0px;
    color: var(--text-gray);
    border: none;
    outline: none;
    background: none;
    width: 100%;
    box-sizing: border-box;
    
    &::placeholder {
        color: var(--text-placeholder);
    }
`

const Textarea = styled.textarea`
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 16px;
    color: var(--text-gray);
    border: none;
    outline: none;
    background: none;
    width: 100%;
    box-sizing: border-box;
    resize: none;
    height: 130px;
    
    &::placeholder {
        color: var(--text-placeholder);
    }
`

const Button = styled(motion.div)`
    border: 1px solid var(--interface-background-border);
    border-radius: 8px;
    padding: 12px 16px;
    background: var(--interface-color-second);
    cursor: pointer;
    user-select: none;
`

const CheckboxControll = styled.div`
    background: var(--interface-background-primary);
    border: 1px solid var(--interface-dark-background-border);
    border-radius: 8px;
    font-size: 0px;
    width: 36px;
    height: 36px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`

const Wrapper = styled.div`
    height: 48px;
    width: 100%;
    position: relative;
    z-index: 99;
    user-select: none;
`

export const EditProfile = ({ value, onData }) => {
    const [name, setName] = useState(value[0])

    return (
        <Flex gap='12px'>
            <Flex gap='6px' style={{ alignItems: 'flex-start', width: '100%' }}>
                <NormalFont600 style={{ color: 'var(--text-gray)' }}>Rename Profile</NormalFont600>
                <NormalFont500 style={{ color: 'var(--text-light)' }}>Update the profile name. This won’t affect linked accounts or data.</NormalFont500>
            </Flex>
            <Flex gap='6px' style={{ alignItems: 'flex-start', width: '100%' }}>
                <NanoFont700 style={{ color: 'var(--text-light)' }}>Title</NanoFont700>
                <Controll>
                    <Input 
                        value={name} 
                        onChange={({ target: { value } }) => {
                            setName(value)
                        }}
                        placeholder='Stas, Prohetamine, etc...' 
                    />
                </Controll>
            </Flex>
            <Flex gap='12px' direction='row' justify='flex-end' style={{ width: '100%' }}>
                <Button
                    onTap={() => onData(true, name)}
                    whileTap={{ scale: 0.9 }}
                >
                    <NormalFont600 style={{ color: 'var(--interface-color-primary)' }}>Save</NormalFont600>
                </Button>
                <Button
                    onTap={() => onData(false, name)}
                    whileTap={{ scale: 0.9 }}
                >
                    <NormalFont600 style={{ color: 'var(--interface-color-primary)' }}>Cancel</NormalFont600>
                </Button>
            </Flex>
        </Flex>
    )
}
*/