import { useContext } from 'react'
import { LanguageContext } from '../contexts/language/index.jsx'
import { ModalWindowContext } from '../contexts/modal-window/index.jsx'

import { Avatar, BigFont700, Bold, Control, Dot, FakeLink, Flex, HorizontalLine, Icon, MicroFont500, NanoFont500, SmallFont500, Text, Link, Image } from '../components/global.jsx'

import otcIcon from './../assets/icons/otc.svg?react'

import Web3Emotions from '../components/web3-emotions.jsx'
import Footer from '../components/footer.jsx'

const otcList = [
    /*[
        '18.04.2026', 
        '.', 
        '.', 
        'BSC', 
        '1m $STAS', 
        '-'
    ],
    [
        '18.04.2026', 
        '.', 
        '.', 
        'Polygon', 
        '1m $STAS', 
        '-'
    ]*/
]

const Otc = () => {
  const showModalWindow = useContext(ModalWindowContext)
      , lang = useContext(LanguageContext)

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
            <NanoFont500 style={{ color: 'var(--colors-placeholder)' }}>{lang.data.otcUpdate}</NanoFont500>
          </Flex>
          <HorizontalLine />
        </Flex>
        <Flex gap='var(--spaces-normal)' justify='flex-start' style={{ width: '100%' }}>
          <Text>
            {lang.data.otcPage[0]}
          </Text>
          <table style={{ width: '100%', boxSizing: 'border-box' }}>
            <tr>
                <th>
                  <Text>Date</Text>
                </th>
                <th>
                  <Text>Dev</Text>
                </th>
                <th>
                  <Text>User</Text>
                </th>
                <th>
                  <Text>Network</Text>
                </th>
                <th>
                  <Text>Count</Text>
                </th>
                <th>
                  <Text>Locked</Text>
                </th>
            </tr>
            {
              otcList.map(([date, dev, user, network, count, lock], key) => (
                <tr key={key}>
                  <td>
                    <Text>{date}</Text>
                  </td>
                  <td>
                    <Text>
                      <Link onTap={() => window.location = dev}>tx</Link>
                    </Text>  
                  </td>
                  <td><Link onTap={() => window.location = user}>tx</Link></td>
                  <td>
                    <Text>{network}</Text>
                  </td>
                  <td>
                    <Text>{count}</Text>
                  </td>
                  <td>
                    <Text>{lock}</Text>
                  </td>
                </tr>
              ))
            }
          </table>
          <Flex gap='var(--spaces-normal)' direction='row' style={{ width: '100%', flexWrap: 'wrap' }}>
            <Control 
              onTap={() => showModalWindow('Otc', { value: ['stas@prohetamine.ru', 'Request buy OTC'] })}
              whileTap={{ y: 2, scale: 0.97 }} 
              style={{ background: 'var(--colors-controll-default-background-alt-green)' }}
            >
              <Flex gap='var(--spaces-small)' padding='var(--spaces-small) var(--spaces-normal)' direction='row' justify='center' align='center'>
                <MicroFont500 style={{ color: 'var(--colors-controll-default-color)' }}>Buy OTC</MicroFont500>
                <Icon src={otcIcon} />
              </Flex>
            </Control>
          </Flex>
        </Flex>
        <HorizontalLine />
      </Flex>
      <Footer />
    </Flex>
  )
}

export default Otc