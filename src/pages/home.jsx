import { useWindowSize } from 'usehooks-ts'
import { useLocation, useNavigate } from 'react-router'
import { useContext, useEffect, useRef } from 'react'
import { LanguageContext } from './../contexts/language'
import { ModalWindowContext } from '../contexts/modal-window/index.jsx'

import { Avatar, BigFont700, Bold, Control, Dot, FakeLink, Flex, HorizontalLine, Icon, MicroFont500, NanoFont500, SmallFont500, Text } from './../components/global.jsx'
import avatar from './../assets/avatar.png?inline'

import contactsIcon from './../assets/icons/contacts.svg?react'
import articlesIcon from './../assets/icons/articles.svg?react'
import meIcon from './../assets/icons/me.svg?react'
import web3Icon from './../assets/icons/web3.svg?react'
import telegramIcon from './../assets/icons/telegram.svg?react'
import linkIcon from './../assets/icons/link.svg?react'

import Web3Emotions from '../components/web3-emotions.jsx'
import Footer from '../components/footer.jsx'
import articles from '../assets/articles.js'
import List from '../components/list.jsx'
import Web3Donate from '../components/web3-donate.jsx'

const Home = () => {
  const { width } = useWindowSize()
      , navigate = useNavigate()
      , location = useLocation()
      , contactsRef = useRef()

  const showModalWindow = useContext(ModalWindowContext)
      , lang = useContext(LanguageContext)

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
              <List 
                items={
                  articles.map(app => ({
                    ...app,
                    description: app?.descriptionLang ? lang.data[app.descriptionLang] : app.description,
                    btn: `${app.readInBtn ? lang.data.readInBtn : lang.data.readBtn} ${app.readIn}`,
                    btnIcon: linkIcon
                  }))
                } 
              />
            )
            : (
              <Flex gap='var(--spaces-normal)' justify='flex-start' style={{ width: '100%' }}>
                <Text>
                  <Bold>{lang.data.mainPage[0]}</Bold> {lang.data.mainPage[1]}
                </Text>  
                <Text>
                  <Bold>{lang.data.mainPage[2]}</Bold> {lang.data.mainPage[3]}
                </Text>
                <ul style={{ paddingLeft: '25px', margin: '0px', width: '100%', boxSizing: 'border-box' }}>
                  {
                    lang.data.mainPage[4].map((fact, key) => (
                      <li key={key}>
                        <Text>
                          {fact}
                        </Text>
                      </li>
                    ))
                  }
                </ul>
                <Text>
                  <Bold>{lang.data.mainPage[5]}</Bold> {lang.data.mainPage[6]}
                </Text>
                <Text>
                  <Bold>{lang.data.mainPage[7]}</Bold> {lang.data.mainPage[8]}
                </Text>
                <ul style={{ paddingLeft: '25px', margin: '0px', width: '100%', boxSizing: 'border-box' }}>
                  {
                    lang.data.mainPage[9].map((fact, key) => (
                      <li key={key}>
                        <Text>
                          {fact}
                        </Text>
                      </li>
                    ))
                  }
                </ul>
                <Text>
                  <Bold>{lang.data.mainPage[10]}</Bold> {lang.data.mainPage[11]}
                </Text>
                <Flex ref={contactsRef} gap='var(--spaces-normal)' direction='row' style={{ width: '100%', flexWrap: 'wrap' }}>
                  <Control 
                    onTap={() => window.location = 'tg://resolve?domain=prohetamine'}
                    whileTap={{ y: 2, scale: 0.97 }} 
                    style={{ background: 'var(--colors-controll-default-background-alt-blue)' }}
                  >
                    <Flex gap='var(--spaces-small)' padding='var(--spaces-small) var(--spaces-normal)' direction='row' justify='center' align='center'>
                      <MicroFont500 style={{ color: 'var(--colors-controll-default-color)' }}>Telegram DM</MicroFont500>
                      <Icon src={telegramIcon} />
                    </Flex>
                  </Control>
                  <Control 
                    onTap={() => showModalWindow('Email', { value: ['prohetamine@gmail.com'] })}
                    whileTap={{ y: 2, scale: 0.97 }} 
                    style={{ background: 'var(--colors-controll-default-background-alt-green)' }}
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
                    style={{ background: 'var(--colors-controll-default-background-alt-blue)' }}
                  >
                    <Flex gap='var(--spaces-small)' padding='var(--spaces-small) var(--spaces-normal)' direction='row' justify='center' align='center'>
                      <MicroFont500 style={{ color: 'var(--colors-controll-default-color)' }}>Telegram channel</MicroFont500>
                      <Icon src={telegramIcon} />
                    </Flex>
                  </Control>
                </Flex>
                <Text>
                  <Bold>{lang.data.mainPage[12]}</Bold> {lang.data.mainPage[13]}
                </Text>
                <Web3Donate />
              </Flex>
            )
        }
        <HorizontalLine />
      </Flex>
      <Web3Emotions />
      <Footer />
    </Flex>
  )
}

export default Home