import { useWindowSize } from 'usehooks-ts'
import { useLocation, useNavigate } from 'react-router'
import { useContext, useRef } from 'react'
import { LanguageContext } from '../contexts/language/index.jsx'
import { ModalWindowContext } from '../contexts/modal-window/index.jsx'

import { Bold, Control, Dot, FakeLink, Flex, HorizontalLine, Icon, Link, MicroFont500, NanoFont500, Text } from '../components/global.jsx'

import dexIcon from './../assets/icons/dex.svg?react'
import swapIcon from './../assets/icons/swap.svg?react'
import dappsIcon from './../assets/icons/dapps.svg?react'
import requestCoinsIcon from './../assets/icons/request-coins.svg?react'
import airdropIcon from './../assets/icons/airdrop.svg?react'
import bugIcon from './../assets/icons/bug.svg?react'
import networkIcon from './../assets/icons/network.svg?react'

import Web3Emotions from '../components/web3-emotions.jsx'
import Footer from '../components/footer.jsx'
import List from '../components/list.jsx'

import appsMainnet from '../assets/apps-mainnet.js'
import appsTestnet from '../assets/apps-testnet.js'
import sleep from 'sleep-promise'

const Web3 = () => {
  const { width } = useWindowSize()
      , navigate = useNavigate()
      , location = useLocation()
      , contactsRef = useRef()

  const showModalWindow = useContext(ModalWindowContext)
      , lang = useContext(LanguageContext)

  const isMainnet = location.pathname === '/web3'

  return (
    <Flex 
      style={{ position: 'relative', zIndex: 1, maxWidth: '640px', minWidth: '100px', width: '100%', boxSizing: 'border-box' }} 
      gap='var(--spaces-big)' 
      padding='124px var(--spaces-big) var(--spaces-normal) var(--spaces-big)'
    >
      <Flex gap='var(--spaces-normal)' style={{ width: '100%' }}>
        <Flex gap='var(--spaces-small)' style={{ width: '100%' }} align='flex-start'>
          <Flex gap='var(--spaces-small)' direction='row'>
            <Flex gap='var(--spaces-nano)' direction='row'>
              <NanoFont500 style={{ color: 'var(--colors-placeholder)' }}>{lang.data.lang}:</NanoFont500>
              <Flex gap='var(--spaces-micro)' direction='row'>
                <FakeLink 
                  whileTap={lang.lang !== 'ru' ? { scale: 0.9 } : {}} 
                  onTap={() => lang.setLang('ru')}
                  active={lang.lang !== 'ru' ? 'underline' : 'none'}
                >ru</FakeLink>
                <FakeLink 
                  whileTap={lang.lang !== 'en' ? { scale: 0.9 } : {}} 
                  onTap={() => lang.setLang('en')}
                  active={lang.lang !== 'en' ? 'underline' : 'none'}
                >en</FakeLink>
              </Flex>
            </Flex>
            <Dot />
            <NanoFont500 style={{ color: 'var(--colors-placeholder)' }}>{lang.data.web3Update}</NanoFont500>
          </Flex>
          <HorizontalLine />
        </Flex>
        <Flex gap='var(--spaces-normal)' justify='flex-start' style={{ width: '100%' }}>
          {
            isMainnet
              ? (
                <Text>
                  <Bold>{lang.data.web3MainnetPage[0]}</Bold> {lang.data.web3MainnetPage[1]} <Link whileTap={{ scale: 0.9 }} onTap={() => navigate('/stas')}>{lang.data.web3MainnetPage[2]}</Link> {lang.data.web3MainnetPage[3]}
                </Text>
              )
              : (
                <Text>
                  <Bold>{lang.data.web3TestnetPage[0]}</Bold> {lang.data.web3TestnetPage[1]} <Link whileTap={{ scale: 0.9 }} onTap={() => navigate('/stas')}>{lang.data.web3TestnetPage[2]}</Link> 
                </Text>
              )
          } 
          <Flex ref={contactsRef} gap='var(--spaces-normal)' direction='row' style={{ width: '100%', flexWrap: 'wrap' }}>
            <Control 
              onTap={() => navigate(isMainnet ? '/testnet' : '/web3')}
              whileTap={{ y: 2, scale: 0.97 }} 
              style={{ background: 'var(--colors-controll-default-background)' }}
            >
              <Flex gap='var(--spaces-small)' padding='var(--spaces-small) var(--spaces-normal)' direction='row' justify='center' align='center'>
                <MicroFont500 style={{ color: 'var(--colors-controll-default-color)' }} >{isMainnet ? 'Testnet' :  'Mainnet'}</MicroFont500>
                <Icon src={swapIcon} />
              </Flex>
            </Control>
            {(width > 640) && <Dot />}
            {
              isMainnet 
                ? (
                  <>
                    <Control 
                      onTap={() => showModalWindow('DEX')}
                      whileTap={{ y: 2, scale: 0.97 }} 
                      style={{ background: 'var(--colors-controll-default-background-alt-dark)' }}
                    >
                      <Flex gap='var(--spaces-small)' padding='var(--spaces-small) var(--spaces-normal)' direction='row' justify='center' align='center'>
                        <MicroFont500 style={{ color: 'var(--colors-controll-default-color)' }}>DEX</MicroFont500>
                        <Icon src={dexIcon} />
                      </Flex>
                    </Control>
                    <Control 
                      onTap={() => showModalWindow('BuyCoin')}
                      whileTap={{ y: 2, scale: 0.97 }} 
                      style={{ background: 'var(--colors-controll-default-background-alt-pink)' }}
                    >
                      <Flex gap='var(--spaces-small)' padding='var(--spaces-small) var(--spaces-normal)' direction='row' justify='center' align='center'>
                        <MicroFont500 style={{ color: 'var(--colors-controll-default-color)' }}>Uniswap</MicroFont500>
                        <Icon src={swapIcon} />
                      </Flex>
                    </Control>
                  </>
                )
                : (
                  <>
                    <Control 
                      onTap={async () => {
                        const [isOk, isAdded] = await showModalWindow('AddNetworks')
                      
                        if (isOk) {
                          await showModalWindow('Notify', { value: [isAdded ? 'Сеть и монета добавлены в кошелек.' : 'Сеть и монета не добавлены в кошелек.'] })
                        }
                      }}
                      whileTap={{ y: 2, scale: 0.97 }} 
                      style={{ background: 'var(--colors-controll-default-background-alt-dark)' }}
                    >
                      <Flex gap='var(--spaces-small)' padding='var(--spaces-small) var(--spaces-normal)' direction='row' justify='center' align='center'>
                        <MicroFont500 style={{ color: 'var(--colors-controll-default-color)' }}>Add network</MicroFont500>
                        <Icon src={networkIcon} />
                      </Flex>
                    </Control>
                    <Control 
                      onTap={() => showModalWindow('TestnetDrop')}
                      whileTap={{ y: 2, scale: 0.97 }} 
                      style={{ background: 'var(--colors-controll-default-background-alt-blue)' }}
                    >
                      <Flex gap='var(--spaces-small)' padding='var(--spaces-small) var(--spaces-normal)' direction='row' justify='center' align='center'>
                        <MicroFont500 style={{ color: 'var(--colors-controll-default-color)' }}>Get tBNB & tSTAS</MicroFont500>
                        <Icon src={requestCoinsIcon} />
                      </Flex>
                    </Control>
                    <Control 
                      onTap={async () => {
                        const [isEmail] = await showModalWindow('BugReport')
                      
                        if (isEmail) {
                          await sleep(300)
                          await showModalWindow('Email', { value: ['prohetamine@gmail.com', 'Bug report'] })
                        }
                      }}
                      whileTap={{ y: 2, scale: 0.97 }} 
                      style={{ background: 'var(--colors-controll-default-background-alt-blue)' }}
                    >
                      <Flex gap='var(--spaces-small)' padding='var(--spaces-small) var(--spaces-normal)' direction='row' justify='center' align='center'>
                        <MicroFont500 style={{ color: 'var(--colors-controll-default-color)' }}>Bug report</MicroFont500>
                        <Icon src={bugIcon} />
                      </Flex>
                    </Control>
                  </>
                )
            }
            {isMainnet && (width > 640) && <Dot />}
            {
              isMainnet 
                ? (
                  <Control 
                    onTap={() => showModalWindow('Airdrop')}
                    whileTap={{ y: 2, scale: 0.97 }} 
                    style={{ background: 'var(--colors-controll-default-background-alt-blue)' }}
                  >
                    <Flex gap='var(--spaces-small)' padding='var(--spaces-small) var(--spaces-normal)' direction='row' justify='center' align='center'>
                      <MicroFont500 style={{ color: 'var(--colors-controll-default-color)' }}>Airdrop</MicroFont500>
                      <Icon src={airdropIcon} />
                    </Flex>
                  </Control>
                )
                : null
            }
          </Flex>
          <List 
            items={
              (
                isMainnet 
                  ? appsMainnet 
                  : appsTestnet
              ).map(app => ({
                ...app,
                description: app?.descriptionLang ? lang.data[app.descriptionLang] : app.description,
                btn: lang.data.launch,
                btnIcon: dappsIcon
              }))
            } 
          />
        </Flex>
        <HorizontalLine />
      </Flex>
      <Web3Emotions />
      <Footer />
    </Flex>
  )
}

export default Web3