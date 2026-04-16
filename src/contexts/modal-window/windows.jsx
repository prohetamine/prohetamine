/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/set-state-in-effect */
import styled from 'styled-components'
import { useContext, useEffect, useState } from 'react'
import { motion, time } from 'framer-motion'
import { Bold, Control, Flex, Icon, MicroFont500, Text } from '../../components/global'
import copy from 'copy-to-clipboard'

import { LanguageContext } from './../language'

import networkIcon from './../../assets/icons/network.svg?react'
import dexIcon from './../../assets/icons/dex.svg?react'
import telegramIcon from './../../assets/icons/telegram.svg?react'
import contactsIcon from './../../assets/icons/contacts.svg?react'
import addNetworkAndToken from '../../lib/add-network-and-token'

export const BuyCoin = ({ onData }) => {
    const lang = useContext(LanguageContext)

    return (
        <Flex gap='var(--spaces-normal)'>
            <Bold>Uniswap</Bold>
            <Text>{lang.data.selectNetworkForBuyCoins}</Text>
            <Control 
                onTap={() => window.location = 'https://app.uniswap.org/explore/tokens/bnb/0xd566886eb93500e2ba464bd48c8d5a2556569253?inputCurrency=NATIVE'}
                whileTap={{ y: 2, scale: 0.97 }} 
                style={{ background: 'var(--colors-controll-default-background-alt-yellow)', width: '100%' }}
            >
                <Flex gap='var(--spaces-small)' padding='var(--spaces-small) var(--spaces-normal)' direction='row' justify='center' align='center'>
                    <MicroFont500 style={{ color: 'var(--colors-controll-default-color)' }}>$STAS {lang.data.in} BSC</MicroFont500>
                    <Icon src={networkIcon} />
                </Flex>
            </Control>
            <Control 
                onTap={() => window.location = 'https://app.uniswap.org/explore/tokens/polygon/0xd566886eb93500e2ba464bd48c8d5a2556569253?inputCurrency=NATIVE'}
                whileTap={{ y: 2, scale: 0.97 }} 
                style={{ background: 'var(--colors-controll-default-background-alt-purple)', width: '100%' }}
            >
                <Flex gap='var(--spaces-small)' padding='var(--spaces-small) var(--spaces-normal)' direction='row' justify='center' align='center'>
                    <MicroFont500 style={{ color: 'var(--colors-controll-default-color)' }}>$STAS {lang.data.in} Polygon</MicroFont500>
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
                        <MicroFont500 style={{ color: 'var(--colors-controll-default-color)' }}>{lang.data.closeBtn}</MicroFont500>
                    </Flex>
                </Control>
            </Flex>
        </Flex>
    )
}

export const DEX = ({ onData }) => {
    const lang = useContext(LanguageContext)

    return (
        <Flex gap='var(--spaces-normal)'>
            <Bold>DEX Screener</Bold>
            <Control 
                onTap={() => window.location = 'https://dexscreener.com/bsc/0xD566886eB93500e2BA464bd48c8D5A2556569253'}
                whileTap={{ y: 2, scale: 0.97 }} 
                style={{ background: 'var(--colors-controll-default-background-alt-yellow)', width: '100%' }}
            >
                <Flex gap='var(--spaces-small)' padding='var(--spaces-small) var(--spaces-normal)' direction='row' justify='center' align='center'>
                    <MicroFont500 style={{ color: 'var(--colors-controll-default-color)' }}>$STAS {lang.data.in} BSC</MicroFont500>
                    <Icon src={dexIcon} />
                </Flex>
            </Control>
            <Control 
                onTap={() => window.location = 'https://dexscreener.com/polygon/0xD566886eB93500e2BA464bd48c8D5A2556569253'}
                whileTap={{ y: 2, scale: 0.97 }} 
                style={{ background: 'var(--colors-controll-default-background-alt-purple)', width: '100%' }}
            >
                <Flex gap='var(--spaces-small)' padding='var(--spaces-small) var(--spaces-normal)' direction='row' justify='center' align='center'>
                    <MicroFont500 style={{ color: 'var(--colors-controll-default-color)' }}>$STAS {lang.data.in} Polygon</MicroFont500>
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
                        <MicroFont500 style={{ color: 'var(--colors-controll-default-color)' }}>{lang.data.closeBtn}</MicroFont500>
                    </Flex>
                </Control>
            </Flex>
        </Flex>
    )
}

export const Notify = ({ onData, value }) => {
    const lang = useContext(LanguageContext)

    return (
        <Flex gap='var(--spaces-normal)'>
            <Bold>{lang.data.notify}</Bold>
            <Text>{value[0]}</Text>
            <Flex gap='var(--spaces-normal)' direction='row' justify='flex-end' style={{ width: '100%', flexWrap: 'wrap' }}>
                <Control 
                    onTap={() => onData(false)}
                    whileTap={{ y: 2, scale: 0.97 }} 
                    style={{ background: 'var(--colors-controll-default-background)' }}
                >
                    <Flex gap='var(--spaces-small)' padding='var(--spaces-small) var(--spaces-normal)' direction='row' justify='center' align='center'>
                        <MicroFont500 style={{ color: 'var(--colors-controll-default-color)' }}>{lang.data.closeBtn}</MicroFont500>
                    </Flex>
                </Control>
            </Flex>
        </Flex>
    )
}


export const AddNetworks = ({ onData }) => {
    const lang = useContext(LanguageContext)

    return (
        <Flex gap='var(--spaces-normal)'>
            <Bold>{lang.data.addNetwork}</Bold>
            <Text>{lang.data.selectNetworkForImportToWallet}</Text>
            <Control 
                onTap={async () => {
                    const isAdded = await addNetworkAndToken({
                        chainId: 97,
                        chainName: 'BNB Chain Testnet',
                        rpcUrls: ['https://bsc-testnet-rpc.publicnode.com'],
                        blockExplorerUrls: ['https://testnet.bscscan.com'],
                        nativeCurrency: {
                            name: 'tBNB',
                            symbol: 'tBNB',
                            decimals: 18,
                        }
                    })
                    
                    onData(true, isAdded)
                }}
                whileTap={{ y: 2, scale: 0.97 }} 
                style={{ background: 'var(--colors-controll-default-background-alt-dark)', width: '100%' }}
            >
                <Flex gap='var(--spaces-small)' padding='var(--spaces-small) var(--spaces-normal)' direction='row' justify='center' align='center'>
                    <MicroFont500 style={{ color: 'var(--colors-controll-default-color)' }}>Testnet BSC</MicroFont500>
                    <Icon src={networkIcon} />
                </Flex>
            </Control>
            <Control 
                onTap={async () => {
                    const isAdded = await addNetworkAndToken({
                        chainId: 56,
                        chainName: 'BNB Chain',
                        rpcUrls: ['https://bsc-rpc.publicnode.com'],
                        blockExplorerUrls: ['https://bscscan.com'],
                        nativeCurrency: {
                            name: 'BNB',
                            symbol: 'BNB',
                            decimals: 18,
                        }
                    })

                    onData(true, isAdded)
                }}
                whileTap={{ y: 2, scale: 0.97 }} 
                style={{ background: 'var(--colors-controll-default-background-alt-yellow)', width: '100%' }}
            >
                <Flex gap='var(--spaces-small)' padding='var(--spaces-small) var(--spaces-normal)' direction='row' justify='center' align='center'>
                    <MicroFont500 style={{ color: 'var(--colors-controll-default-color)' }}>BSC</MicroFont500>
                    <Icon src={networkIcon} />
                </Flex>
            </Control>
            <Control 
                onTap={async () => {
                    const isAdded = await addNetworkAndToken({
                        chainId: 137,
                        chainName: 'Polygon',
                        rpcUrls: ['https://polygon-bor-rpc.publicnode.com'],
                        blockExplorerUrls: ['https://polygonscan.com'],
                        nativeCurrency: {
                            name: 'POL',
                            symbol: 'POL',
                            decimals: 18,
                        }
                    })

                    onData(true, isAdded)
                }}
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
                    onTap={() => onData(false, false)}
                    whileTap={{ y: 2, scale: 0.97 }} 
                    style={{ background: 'var(--colors-controll-default-background)' }}
                >
                    <Flex gap='var(--spaces-small)' padding='var(--spaces-small) var(--spaces-normal)' direction='row' justify='center' align='center'>
                        <MicroFont500 style={{ color: 'var(--colors-controll-default-color)' }}>{lang.data.closeBtn}</MicroFont500>
                    </Flex>
                </Control>
            </Flex>
        </Flex>
    )
}

export const TestnetDrop = ({ onData }) => {
    const lang = useContext(LanguageContext)

    return (
        <Flex gap='var(--spaces-normal)'>
            <Bold>{lang.data.manual}</Bold>
            <Text>
                {lang.data.testnetDropCoins[0]} <Bold>BSC</Bold>{lang.data.testnetDropCoins[1]} <Bold>BSC</Bold> {lang.data.testnetDropCoins[2]}
            </Text>
            <Control 
                onTap={() => window.location = 'https://t.me/prohetamines/372'}
                whileTap={{ y: 2, scale: 0.97 }} 
                style={{ background: 'var(--colors-controll-default-background-alt-blue)', width: '100%' }}
            >
                <Flex gap='var(--spaces-small)' padding='var(--spaces-small) var(--spaces-normal)' direction='row' justify='center' align='center'>
                    <MicroFont500 style={{ color: 'var(--colors-controll-default-color)' }}>{lang.data.openInTelegram}</MicroFont500>
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
                        <MicroFont500 style={{ color: 'var(--colors-controll-default-color)' }}>{lang.data.closeBtn}</MicroFont500>
                    </Flex>
                </Control>
            </Flex>
        </Flex>
    )
}

export const Airdrop = ({ onData }) => {
    const lang = useContext(LanguageContext)

    return (
        <Flex gap='var(--spaces-normal)'>
            <Bold>{lang.data.manual}</Bold>
            <Text>
                {lang.data.airdropSubscribe[0]} <Bold>10 $STAS</Bold> {lang.data.airdropSubscribe[1]}
            </Text>
            <Control 
                onTap={() => window.location = 'https://t.me/prohetamines/370'}
                whileTap={{ y: 2, scale: 0.97 }} 
                style={{ background: 'var(--colors-controll-default-background-alt-blue)', width: '100%' }}
            >
                <Flex gap='var(--spaces-small)' padding='var(--spaces-small) var(--spaces-normal)' direction='row' justify='center' align='center'>
                    <MicroFont500 style={{ color: 'var(--colors-controll-default-color)' }}>{lang.data.openInTelegram}</MicroFont500>
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
                        <MicroFont500 style={{ color: 'var(--colors-controll-default-color)' }}>{lang.data.closeBtn}</MicroFont500>
                    </Flex>
                </Control>
            </Flex>
        </Flex>
    )
}

export const Email = ({ onData, value }) => {
    const lang = useContext(LanguageContext)

    useEffect(() => {
        const timeId = setTimeout(() => {
            copy(value[0])
        }, 100)

        return () => clearTimeout(timeId)
    }, [value])

    return (
        <Flex gap='var(--spaces-normal)'>
            <Bold>{lang.data.email}</Bold>
            <Text>
                {lang.data.emailAddressCopy[0]} <Bold>{value[0]}</Bold> {lang.data.emailAddressCopy[1]}
            </Text>
            <Control 
                onTap={() => window.location = `https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=${value[0]}${value[1] ? `&su=${value[1]}` : ''}`}
                whileTap={{ y: 2, scale: 0.97 }} 
                style={{ background: 'var(--colors-controll-default-background-alt-green)', width: '100%' }}
            >
                <Flex gap='var(--spaces-small)' padding='var(--spaces-small) var(--spaces-normal)' direction='row' justify='center' align='center'>
                    <MicroFont500 style={{ color: 'var(--colors-controll-default-color)' }}>{lang.data.openInGmail}</MicroFont500>
                    <Icon src={contactsIcon} />
                </Flex>
            </Control>
            <Control 
                onTap={() => window.location = `mailto:${value}`}
                whileTap={{ y: 2, scale: 0.97 }} 
                style={{ background: 'var(--colors-controll-default-background)', width: '100%' }}
            >
                <Flex gap='var(--spaces-small)' padding='var(--spaces-small) var(--spaces-normal)' direction='row' justify='center' align='center'>
                    <MicroFont500 style={{ color: 'var(--colors-controll-default-color)' }}>{lang.data.openInMail}</MicroFont500>
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
                        <MicroFont500 style={{ color: 'var(--colors-controll-default-color)' }}>{lang.data.closeBtn}</MicroFont500>
                    </Flex>
                </Control>
            </Flex>
        </Flex>
    )
}

export const BugReport = ({ onData }) => {
    const lang = useContext(LanguageContext)

    return (
        <Flex gap='var(--spaces-normal)'>
            <Bold>{lang.data.reportBug}</Bold>
            <Text>{lang.data.contactReportBug}</Text>
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
                        <MicroFont500 style={{ color: 'var(--colors-controll-default-color)' }}>{lang.data.closeBtn}</MicroFont500>
                    </Flex>
                </Control>
            </Flex>
        </Flex>
    )
}