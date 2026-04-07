import { useWindowSize } from 'usehooks-ts'
import { useLocation, useNavigate } from 'react-router'
import { useContext, useEffect, useRef } from 'react'
import { LanguageContext } from './../contexts/language'

import ThreeBackground from './../components/three-background.jsx'
import { Avatar, BigFont700, Control, Dot, FakeLink, Flex, HorizontalLine, Icon, MicroFont400, MicroFont500, NanoFont500, NormalFont400, NormalFont500, SmallFont500 } from './../components/global.jsx'
import avatar from './../assets/avatar.png?inline'

import contactsIcon from './../assets/icons/contacts.svg?react'
import articlesIcon from './../assets/icons/articles.svg?react'
import meIcon from './../assets/icons/me.svg?react'
import web3Icon from './../assets/icons/web3.svg?react'
import telegramIcon from './../assets/icons/telegram.svg?react'

import Articles from '../components/articles.jsx'
import Web3Emotions from '../components/web3-emotions.jsx'
import Footer from '../components/footer.jsx'
import articles from '../assets/articles.js'

const Home = () => {
  const { width } = useWindowSize()
      , navigate = useNavigate()
      , location = useLocation()
      , contactsRef = useRef()

  const lang = useContext(LanguageContext)

  const isArticles = location.pathname === '/articles'
      , isContacts = location.pathname === '/contacts'

  useEffect(() => {
    const contactsNode = contactsRef.current
    if (isContacts && contactsNode) {
      contactsNode.scrollIntoView({
        behavior: 'smooth'
      })

      const handleCancel = () => navigate('/bio')
      
      window.addEventListener('wheel', handleCancel)
      window.addEventListener('touchmove', handleCancel)

      return () => {
        window.removeEventListener('wheel', handleCancel)
        window.removeEventListener('touchmove', handleCancel)
      }
    }
  }, [isContacts, contactsRef, navigate])

  return (
    <Flex style={{ width: '100%' }} justify='center'>
      <ThreeBackground />
      <Flex 
        style={{ position: 'relative', zIndex: 1, maxWidth: '640px', minWidth: '100px', width: '100%', boxSizing: 'border-box' }} 
        gap='var(--spaces-big)' 
        padding='40px var(--spaces-big) var(--spaces-normal) var(--spaces-big)'
      >
        <Flex gap='var(--spaces-normal)' direction='row' align='flex-end' style={{ width: '100%' }}>
          <Flex gap='var(--spaces-normal)' align='flex-start'>
            <Avatar src={avatar} />
            <Flex gap='var(--spaces-small)' align='flex-start'>
              <BigFont700 style={{ color: 'var(--colors-black)', whiteSpace: 'nowrap' }}>Stas Prohetamine</BigFont700>
              <Flex gap='var(--spaces-small)' direction='row'>
                <SmallFont500 style={{ color: 'var(--colors-gray)' }}>{lang.data.location}</SmallFont500>
                <Dot />
                <SmallFont500 style={{ color: 'var(--colors-gray)' }}>27 {lang.data.age}</SmallFont500>
              </Flex>
            </Flex>
          </Flex>
          <Flex gap='var(--spaces-normal)' style={{ width: '100%', flexWrap: 'wrap' }} justify='flex-end' direction='row'>
            <Control 
              onTap={() => navigate('/web3')}
              whileTap={{ y: 2, scale: 0.97 }}
            >
              <Flex gap='var(--spaces-small)' padding='var(--spaces-small) var(--spaces-normal)' direction='row' justify='center' align='center'>
                <MicroFont500 style={{ color: 'var(--colors-controll-default-color)', userSelect: 'none' }}>Web3</MicroFont500>
                <Icon src={web3Icon} />
              </Flex>
            </Control>
            <Control
              onTap={() => navigate(isArticles ? '/bio' : '/articles')}
              whileTap={{ y: 2, scale: 0.97 }}
            >
              <Flex gap='var(--spaces-small)' padding='var(--spaces-small) var(--spaces-normal)' direction='row' justify='center' align='center'>
                <MicroFont500 style={{ color: 'var(--colors-controll-default-color)' }}>{isArticles ? lang.data.meBtn : lang.data.articlesBtn}</MicroFont500>
                <Icon src={isArticles ? meIcon : articlesIcon} />
              </Flex>
            </Control>
            <Control 
              onTap={() => navigate('/contacts')}
              whileTap={{ y: 2, scale: 0.97 }}
            >
              <Flex gap='var(--spaces-small)' padding='var(--spaces-small) var(--spaces-normal)' direction='row' justify='center' align='center'>
                <MicroFont500 style={{ color: 'var(--colors-controll-default-color)' }}>{lang.data.contactsBtn}</MicroFont500>
                <Icon src={contactsIcon} />
              </Flex>
            </Control>
          </Flex>
        </Flex>
        <Flex gap='var(--spaces-normal)' style={{ width: '100%' }}>
          <Flex gap='var(--spaces-small)' style={{ width: '100%' }} align='flex-start'>
            {
              isArticles 
                ? (
                  <NanoFont500 style={{ color: 'var(--colors-placeholder)' }}>{articles.length} {lang.data.articlesCount}</NanoFont500>
                )
                : (
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
                    <NanoFont500 style={{ color: 'var(--colors-placeholder)' }}>{lang.data.mainUpdate}</NanoFont500>
                  </Flex>
                )
            }
            <HorizontalLine />
          </Flex>
          {
            isArticles 
              ? (
                <Articles />
              )
              : (
                <Flex gap='var(--spaces-normal)' justify='flex-start' style={{ width: '100%' }}>
                  <NormalFont400 style={{ color: 'var(--colors-based-black)', width: '100%' }}>
                    <NormalFont500 style={{ color: 'var(--colors-based-black)', display: 'inline-block' }}>{lang.data.aboutMe}</NormalFont500> {lang.data.aboutMeContent}
                  </NormalFont400>
                  <NormalFont400 style={{ color: 'var(--colors-based-black)', width: '100%' }}>
                    <NormalFont500 style={{ color: 'var(--colors-based-black)', display: 'inline-block' }}>{lang.data.facts}</NormalFont500> {lang.data.factsContent}
                  </NormalFont400>
                  <ul style={{ paddingLeft: '25px', margin: '0px' }}>
                    {
                      lang.data.factsList.map((fact, key) => (
                        <li key={key}>
                          <NormalFont400 style={{ color: 'var(--colors-based-black)', width: '100%' }}>
                            {fact}
                          </NormalFont400>
                        </li>
                      ))
                    }
                  </ul>
                  <NormalFont400 style={{ color: 'var(--colors-based-black)', width: '100%' }}>
                    <NormalFont500 style={{ color: 'var(--colors-based-black)', display: 'inline-block' }}>{lang.data.work}</NormalFont500> {lang.data.workContent}
                  </NormalFont400>
                  <NormalFont400 style={{ color: 'var(--colors-based-black)', width: '100%' }}>
                    <NormalFont500 style={{ color: 'var(--colors-based-black)', display: 'inline-block' }}>{lang.data.development}</NormalFont500> {lang.data.developmentContent}
                  </NormalFont400>
                  <ul style={{ paddingLeft: '25px', margin: '0px' }}>
                    {
                      lang.data.techList.map((fact, key) => (
                        <li key={key}>
                          <NormalFont400 style={{ color: 'var(--colors-based-black)', width: '100%' }}>
                            {fact}
                          </NormalFont400>
                        </li>
                      ))
                    }
                  </ul>
                  <NormalFont400 style={{ color: 'var(--colors-based-black)', width: '100%' }}>
                    <NormalFont500 style={{ color: 'var(--colors-based-black)', display: 'inline-block' }}>{lang.data.contacts}</NormalFont500> {lang.data.contactsContent}
                  </NormalFont400>
                  <Flex ref={contactsRef} gap='var(--spaces-normal)' direction='row' style={{ width: '100%', flexWrap: 'wrap' }}>
                    <Control 
                      onTap={() => window.location = 'tg://resolve?domain=prohetamine'}
                      whileTap={{ y: 2, scale: 0.97 }} 
                      style={{ background: 'var(--colors-controll-default-background-alt-tg)' }}
                    >
                      <Flex gap='var(--spaces-small)' padding='var(--spaces-small) var(--spaces-normal)' direction='row' justify='center' align='center'>
                        <MicroFont500 style={{ color: 'var(--colors-controll-default-color)' }}>Telegram DM</MicroFont500>
                        <Icon src={telegramIcon} />
                      </Flex>
                    </Control>
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
                  </Flex>
                </Flex>
              )
          }
          <HorizontalLine />
        </Flex>
        <Web3Emotions />
        <Footer />
      </Flex>
    </Flex>
  )
}

export default Home