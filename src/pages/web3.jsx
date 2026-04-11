import { useWindowSize } from 'usehooks-ts'
import { useLocation, useNavigate } from 'react-router'
import { useContext, useRef } from 'react'
import { LanguageContext } from '../contexts/language/index.jsx'

import { Avatar, BigFont700, Bold, Control, Dot, FakeLink, Flex, HorizontalLine, Icon, Link, MicroFont500, NanoFont500, SmallFont500, Text } from '../components/global.jsx'

import contactsIcon from './../assets/icons/contacts.svg?react'
import swapIcon from './../assets/icons/swap.svg?react'
import meIcon from './../assets/icons/me.svg?react'
import dappsIcon from './../assets/icons/dapps.svg?react'
import telegramIcon from './../assets/icons/telegram.svg?react'

import Web3Emotions from '../components/web3-emotions.jsx'
import Footer from '../components/footer.jsx'
import List from '../components/list.jsx'

import appsMainnet from '../assets/apps-mainnet.js'
import appsTestnet from '../assets/apps-testnet.js'

const Web3 = () => {
  const { width } = useWindowSize()
      , navigate = useNavigate()
      , location = useLocation()
      , contactsRef = useRef()

  const lang = useContext(LanguageContext)

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
                  <Bold>{lang.data.web3MainnetPage[0]}</Bold> {lang.data.web3MainnetPage[1]} <Link whileTap={{ scale: 0.9 }} onTap={() => window.location = '/stas'}>{lang.data.web3MainnetPage[2]}</Link> {lang.data.web3MainnetPage[3]}
                </Text>
              )
              : (
                <Text>
                  <Bold>{lang.data.web3TestnetPage[0]}</Bold> {lang.data.web3TestnetPage[1]} <Link whileTap={{ scale: 0.9 }} onTap={() => window.location = '/stas'}>{lang.data.web3TestnetPage[2]}</Link> 
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
            {/*
              <Control 
                onTap={() => window.location = 'https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=prohetamine@gmail.com'}
                whileTap={{ y: 2, scale: 0.97 }} 
                style={{ background: 'var(--colors-controll-default-background-alt-google)' }}
              >
                <Flex gap='var(--spaces-small)' padding='var(--spaces-small) var(--spaces-normal)' direction='row' justify='center' align='center'>
                  <MicroFont500 style={{ color: 'var(--colors-controll-default-color)' }}>Email</MicroFont500>
                  <Icon src={contactsIcon} />
                </Flex>
              </Control>
              {(width > 640) && <Dot />}
              <Control 
                onTap={() => window.location = 'tg://resolve?domain=prohetamines'}
                whileTap={{ y: 2, scale: 0.97 }} 
                style={{ background: 'var(--colors-controll-default-background-alt-tg)' }}
              >
                <Flex gap='var(--spaces-small)' padding='var(--spaces-small) var(--spaces-normal)' direction='row' justify='center' align='center'>
                  <MicroFont500 style={{ color: 'var(--colors-controll-default-color)' }}>Telegram channel</MicroFont500>
                  <Icon src={telegramIcon} />
                </Flex>
              </Control>
            */}
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