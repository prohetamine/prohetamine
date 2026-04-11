import { useWindowSize } from 'usehooks-ts'
import { useNavigate } from 'react-router'
import { useContext, useRef } from 'react'
import { LanguageContext } from './../contexts/language'

import { Avatar, BigFont700, Bold, Control, Dot, FakeLink, Flex, HorizontalLine, Icon, MicroFont500, NanoFont500, SmallFont500, Text, Link, Image } from './../components/global.jsx'
import avatar from './../assets/stas.png?inline'

import contactsIcon from './../assets/icons/contacts.svg?react'
import dexIcon from './../assets/icons/dex.svg?react'
import swapIcon from './../assets/icons/swap.svg?react'
import dappsIcon from './../assets/icons/dapps.svg?react'
import airdropIcon from './../assets/icons/airdrop.svg?react'
import otcIcon from './../assets/icons/otc.svg?react'

import Web3Emotions from '../components/web3-emotions.jsx'
import Footer from '../components/footer.jsx'
import Coin from '../components/coin.jsx'

const Stas = () => {
  const { width } = useWindowSize()
      , navigate = useNavigate()
      , contactsRef = useRef()

  const lang = useContext(LanguageContext)

  return (
    <Flex 
      style={{ position: 'relative', zIndex: 1, maxWidth: '640px', minWidth: '100px', width: '100%', boxSizing: 'border-box' }} 
      gap='var(--spaces-big)' 
      padding='40px var(--spaces-big) var(--spaces-normal) var(--spaces-big)'
    >
      <Flex gap='var(--spaces-normal)' direction='row' align='flex-end' style={{ width: '100%' }}>
        <Flex gap='var(--spaces-normal)' align='flex-start'>
          <Avatar src={avatar} />
          <Flex gap='var(--spaces-small)' align='flex-start'>
            <BigFont700 style={{ color: 'var(--colors-black)', whiteSpace: 'nowrap' }}>$STAS</BigFont700>
            <Flex gap='var(--spaces-small)' direction='row'>
              <SmallFont500 style={{ color: 'var(--colors-gray)' }}>{lang.data.personalCoin}</SmallFont500>
            </Flex>
          </Flex>
        </Flex>
        <Flex gap='var(--spaces-normal)' style={{ width: '100%', flexWrap: 'wrap' }} justify='flex-end' direction='row'>
          <Control 
            onTap={() => navigate('/bio')}
            whileTap={{ y: 2, scale: 0.97 }}
          >
            <Flex gap='var(--spaces-small)' padding='var(--spaces-small) var(--spaces-normal)' direction='row' justify='center' align='center'>
              <MicroFont500 style={{ color: 'var(--colors-controll-default-color)' }}>{lang.data.developerBtn}</MicroFont500>
              <Icon src={contactsIcon} />
            </Flex>
          </Control>
        </Flex>
      </Flex>
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
            <NanoFont500 style={{ color: 'var(--colors-placeholder)' }}>{lang.data.stasUpdate}</NanoFont500>
          </Flex>
          <HorizontalLine />
        </Flex>
        <Flex gap='var(--spaces-normal)' justify='flex-start' style={{ width: '100%' }}>
          <Text>
            <Bold>{lang.data.stasPage[0]}</Bold> {lang.data.stasPage[1]}
          </Text>
          <Text>
            {lang.data.stasPage[2]}
          </Text>
          <Text>
            {lang.data.stasPage[3]} <Bold>{lang.data.stasPage[4]}</Bold> {lang.data.stasPage[5]}
          </Text>
          <Text>
            {lang.data.stasPage[6]} <Link whileTap={{ scale: 0.9 }} onTap={() => navigate('/web3')}>{lang.data.stasPage[7]}</Link> {lang.data.stasPage[8]} <Bold>{lang.data.stasPage[9]}</Bold> {lang.data.stasPage[10]}
          </Text>
          <Text>
            <Bold>{lang.data.stasPage[11]}</Bold> {lang.data.stasPage[12]} <Link whileTap={{ scale: 0.9 }} onTap={() => window.location = 'https://github.com/prohetamine/stas-pay'}>{lang.data.stasPage[13]}</Link> {lang.data.stasPage[14]} <Link whileTap={{ scale: 0.9 }} onTap={() => window.location = 'https://github.com/prohetamine/redstone'}>{lang.data.stasPage[15]}</Link>{lang.data.stasPage[16]} <Link whileTap={{ scale: 0.9 }} onTap={() => window.location = 'later...'}>{lang.data.stasPage[17]}</Link> {lang.data.stasPage[18]}
          </Text>
          <Text>
            <Bold>{lang.data.stasPage[19]}</Bold> {lang.data.stasPage[20]}
          </Text>
          <Flex gap='var(--spaces-normal)' justify='flex-start' align='flex-start' style={{ width: '100%' }}>
            <Text>
              {lang.data.stasPage[21]} <Bold>{lang.data.stasPage[22]}</Bold>
            </Text>
            <Coin width='50px' />
          </Flex>
          <Text>
            {lang.data.stasPage[23]}
          </Text>
          <ul style={{ paddingLeft: '25px', margin: '0px', width: '100%', boxSizing: 'border-box' }}>
            {
              lang.data.stasPage[24].map(([title, count], key) => (
                <li key={key}>
                  <Text>
                    {title} <Bold>{count}</Bold>
                  </Text>
                </li>
              ))
            }
          </ul>
          <Text>
            <Bold>{lang.data.stasPage[25]}</Bold> {lang.data.stasPage[26]} <Bold style={{ overflowWrap: 'break-word', width: '100%' }}>{lang.data.stasPage[27]}</Bold>
          </Text>
          <Flex ref={contactsRef} gap='var(--spaces-normal)' direction='row' style={{ width: '100%', flexWrap: 'wrap' }}>
            <Control 
              onTap={() => window.location = 'https://dexscreener.com/bsc/0xD566886eB93500e2BA464bd48c8D5A2556569253'}
              whileTap={{ y: 2, scale: 0.97 }} 
              style={{ background: 'var(--colors-controll-default-background-alt-dex)' }}
            >
              <Flex gap='var(--spaces-small)' padding='var(--spaces-small) var(--spaces-normal)' direction='row' justify='center' align='center'>
                <MicroFont500 style={{ color: 'var(--colors-controll-default-color)' }}>DEX</MicroFont500>
                <Icon src={dexIcon} />
              </Flex>
            </Control>
            <Control 
              onTap={() => window.location = 'https://app.uniswap.org/explore/tokens/bnb/0xd566886eb93500e2ba464bd48c8d5a2556569253?inputCurrency=NATIVE'}
              whileTap={{ y: 2, scale: 0.97 }} 
              style={{ background: 'var(--colors-controll-default-background-alt-uniswap)' }}
            >
              <Flex gap='var(--spaces-small)' padding='var(--spaces-small) var(--spaces-normal)' direction='row' justify='center' align='center'>
                <MicroFont500 style={{ color: 'var(--colors-controll-default-color)' }}>Uniswap</MicroFont500>
                <Icon src={swapIcon} />
              </Flex>
            </Control>
            <Control 
              onTap={() => window.location = 'https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=prohetamine@gmail.com'}
              whileTap={{ y: 2, scale: 0.97 }} 
              style={{ background: 'var(--colors-controll-default-background-alt-google)' }}
            >
              <Flex gap='var(--spaces-small)' padding='var(--spaces-small) var(--spaces-normal)' direction='row' justify='center' align='center'>
                <MicroFont500 style={{ color: 'var(--colors-controll-default-color)' }}>Buy OTC</MicroFont500>
                <Icon src={otcIcon} />
              </Flex>
            </Control>
            {(width > 640) && <Dot />}
            <Control 
              onTap={() => window.location = '/web3'}
              whileTap={{ y: 2, scale: 0.97 }} 
              style={{ background: 'var(--colors-controll-default-background)' }}
            >
              <Flex gap='var(--spaces-small)' padding='var(--spaces-small) var(--spaces-normal)' direction='row' justify='center' align='center'>
                <MicroFont500 style={{ color: 'var(--colors-controll-default-color)' }}>DApps</MicroFont500>
                <Icon src={dappsIcon} />
              </Flex>
            </Control>
            <Control 
              onTap={() => window.location = 'tg://resolve?domain=prohetaminebot'}
              whileTap={{ y: 2, scale: 0.97 }} 
              style={{ background: 'var(--colors-controll-default-background-alt-tg)' }}
            >
              <Flex gap='var(--spaces-small)' padding='var(--spaces-small) var(--spaces-normal)' direction='row' justify='center' align='center'>
                <MicroFont500 style={{ color: 'var(--colors-controll-default-color)' }}>Airdrop</MicroFont500>
                <Icon src={airdropIcon} />
              </Flex>
            </Control>
          </Flex>
        </Flex>
        <HorizontalLine />
      </Flex>
      <Web3Emotions />
      <Footer />
    </Flex>
  )
}

export default Stas