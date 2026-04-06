import { useWindowSize } from 'usehooks-ts'
import ThreeBackground from './../components/three-background.jsx'
import { Avatar, BigFont700, Control, Dot, FakeLink, Flex, HorizontalLine, Icon, MicroFont400, MicroFont500, NanoFont500, NormalFont400, NormalFont500, SmallFont500 } from './../components/global.jsx'

import contactsIcon from './../assets/icons/contacts.svg?react'
import articlesIcon from './../assets/icons/articles.svg?react'
import meIcon from './../assets/icons/me.svg?react'
import web3Icon from './../assets/icons/web3.svg?react'
import telegramIcon from './../assets/icons/telegram.svg?react'
import { useLocation, useNavigate } from 'react-router'
import { useEffect, useRef } from 'react'

const Home = () => {
  const { width } = useWindowSize()
      , navigate = useNavigate()
      , location = useLocation()
      , contactsRef = useRef()

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
            <Avatar />
            <Flex gap='var(--spaces-small)' align='flex-start'>
              <BigFont700 style={{ color: 'var(--colors-black)', whiteSpace: 'nowrap' }}>Stas Prohetamine</BigFont700>
              <Flex gap='var(--spaces-small)' direction='row'>
                <SmallFont500 style={{ color: 'var(--colors-gray)' }}>Россия</SmallFont500>
                <Dot />
                <SmallFont500 style={{ color: 'var(--colors-gray)' }}>27 лет</SmallFont500>
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
                <MicroFont500 style={{ color: 'var(--colors-controll-default-color)' }}>{isArticles ? 'Я' : 'Статьи'}</MicroFont500>
                <Icon src={isArticles ? meIcon : articlesIcon} />
              </Flex>
            </Control>
            <Control 
              onTap={() => navigate('/contacts')}
              whileTap={{ y: 2, scale: 0.97 }}
            >
              <Flex gap='var(--spaces-small)' padding='var(--spaces-small) var(--spaces-normal)' direction='row' justify='center' align='center'>
                <MicroFont500 style={{ color: 'var(--colors-controll-default-color)' }}>Контакты</MicroFont500>
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
                  <NanoFont500 style={{ color: 'var(--colors-placeholder)' }}>14 статей</NanoFont500>
                )
                : (
                  <Flex gap='var(--spaces-small)' direction='row'>
                    <Flex gap='var(--spaces-nano)' direction='row'>
                      <NanoFont500 style={{ color: 'var(--colors-placeholder)' }}>язык:</NanoFont500>
                      <Flex gap='var(--spaces-micro)' direction='row'>
                        <FakeLink whileTap={{ scale: 0.9 }} active='none'>ru</FakeLink>
                        <FakeLink whileTap={{ scale: 0.9 }} active='underline'>en</FakeLink>
                      </Flex>
                    </Flex>
                    <Dot />
                    <NanoFont500 style={{ color: 'var(--colors-placeholder)' }}>5 апреля 2025</NanoFont500>
                  </Flex>
                )
            }
            <HorizontalLine />
          </Flex>
          {
            isArticles 
              ? (
                <Flex gap='var(--spaces-normal)' justify='flex-start' style={{ width: '100%' }}>
                  <NormalFont400 style={{ color: 'var(--colors-based-black)', width: '100%' }}>
                    Загружу позже ... сайт в разработке
                  </NormalFont400>
                </Flex>
              )
              : (
                <Flex gap='var(--spaces-normal)' justify='flex-start' style={{ width: '100%' }}>
                  <NormalFont400 style={{ color: 'var(--colors-based-black)', width: '100%' }}>
                    <NormalFont500 style={{ color: 'var(--colors-based-black)', display: 'inline-block' }}>Обо мне.</NormalFont500> Мультидисциплинарный разработчик, больше 10 лет изучаю и экспериментирую с технологиями — это моё фулл-тайм хобби которое периодами перерастает в работу. С конца 2025 года изучаю блокчейн технологии и интегрирую Web3 в свои проекты.
                  </NormalFont400>
                  <NormalFont400 style={{ color: 'var(--colors-based-black)', width: '100%' }}>
                    <NormalFont500 style={{ color: 'var(--colors-based-black)', display: 'inline-block' }}>Некоторые дополнительные факты.</NormalFont500> Увлекаюсь разработкой электроники, пишу статьи на тему технологий и не только, преподавал программирование, с недавнего времени осваиваю видео монтаж и создание 3D моделей в Blender.
                  </NormalFont400>
                  <ul style={{ paddingLeft: '25px', margin: '0px' }}>
                    <li>
                      <NormalFont400 style={{ color: 'var(--colors-based-black)', width: '100%' }}>
                        В 2015 в школе начал верстать, первый проект магазин приложений на полках в стиле IOS 6 iBOOKS.
                      </NormalFont400>
                    </li>
                    <li>
                      <NormalFont400 style={{ color: 'var(--colors-based-black)', width: '100%' }}>
                        Первый язык программирования Action Script 2.0, язык для создания Flash игр и интерактивной графики.
                      </NormalFont400>
                    </li>
                    <li>
                      <NormalFont400 style={{ color: 'var(--colors-based-black)', width: '100%' }}>
                        В 2016 сделал первую браузерную игру на JavaScript и Canvas (в духе Flappy Bird)
                      </NormalFont400>
                    </li>
                    <li>
                      <NormalFont400 style={{ color: 'var(--colors-based-black)', width: '100%' }}>
                        После статьи на Хабре получил приглашение писать для Хакер.ру
                      </NormalFont400>
                    </li>
                    <li>
                      <NormalFont400 style={{ color: 'var(--colors-based-black)', width: '100%' }}>
                        В 2018 за одну ночь разработал технологию для бизнеса и получил долю в нем.
                      </NormalFont400>
                    </li>
                  </ul>
                  <NormalFont400 style={{ color: 'var(--colors-based-black)', width: '100%' }}>
                    <NormalFont500 style={{ color: 'var(--colors-based-black)', display: 'inline-block' }}>Работа.</NormalFont500> Являюсь действующим фрилансером и открыт к предложениям, партнерству или коллаборации. 
                  </NormalFont400>
                  <NormalFont400 style={{ color: 'var(--colors-based-black)', width: '100%' }}>
                    <NormalFont500 style={{ color: 'var(--colors-based-black)', display: 'inline-block' }}>Разработка.</NormalFont500> И многое другое. 
                  </NormalFont400>
                  <ul style={{ paddingLeft: '25px', margin: '0px' }}>
                    <li>
                      <NormalFont400 style={{ color: 'var(--colors-based-black)', width: '100%' }}>
                        Веб-приложения (React, Styled-Components, MobX, Express, MongoDB)
                      </NormalFont400>
                    </li>
                    <li>
                      <NormalFont400 style={{ color: 'var(--colors-based-black)', width: '100%' }}>
                        Браузерные расширения (Manifest v3)
                      </NormalFont400>
                    </li>
                    <li>
                      <NormalFont400 style={{ color: 'var(--colors-based-black)', width: '100%' }}>
                        Telegram-ботов (Telegraf)
                      </NormalFont400>
                    </li>
                    <li>
                      <NormalFont400 style={{ color: 'var(--colors-based-black)', width: '100%' }}>
                        Смарт-контракты (Solidity)
                      </NormalFont400>
                    </li>
                    <li>
                      <NormalFont400 style={{ color: 'var(--colors-based-black)', width: '100%' }}>
                        Десктоп-приложения (Electron)
                      </NormalFont400>
                    </li>
                    <li>
                      <NormalFont400 style={{ color: 'var(--colors-based-black)', width: '100%' }}>
                        Проекты на Arduino
                      </NormalFont400>
                    </li>
                    <li>
                      <NormalFont400 style={{ color: 'var(--colors-based-black)', width: '100%' }}>
                        Автоматизацию (Puppeteer / BAS)
                      </NormalFont400>
                    </li>
                  </ul>
                  <NormalFont400 style={{ color: 'var(--colors-based-black)', width: '100%' }}>
                    <NormalFont500 style={{ color: 'var(--colors-based-black)', display: 'inline-block' }}>Контакты и медиа.</NormalFont500> Раньше всего отвечу в телеграм.
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
        <Flex gap='var(--spaces-normal)'>
          <MicroFont400 style={{ color: 'var(--colors-based-black)', userSelect: 'none', cursor: 'pointer' }}>...</MicroFont400>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Home