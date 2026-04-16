/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from 'react'
import styled from 'styled-components'
import { Flex } from '../../components/global'
import { AddNetworks, Airdrop, BugReport, BuyCoin, DEX, Email, Notify, TestnetDrop } from './windows'

export const ModalWindowContext = createContext(null)

const ShadowBody = styled(Flex)`
  padding: 0px var(--spaces-big); 
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  position: fixed;
  z-index: 99999;
  justify-content: center;
  background: var(--colors-shadow); 
`

const Container = styled.div`
  border-radius: var(--radius-nano);
  padding: var(--spaces-big);
  width: 100%;
  min-width: 300px;
  max-width: 350px;
  background: var(--colors-background);
  box-sizing: border-box;
`

const WINDOWS = {
  'AddNetworks': AddNetworks,
  'BuyCoin': BuyCoin,
  'Airdrop': Airdrop,
  'BugReport': BugReport,
  'TestnetDrop': TestnetDrop,
  'DEX': DEX,
  'Email': Email,
  'Notify': Notify
}

export const ModalWindowProvider = ({ children }) => {
  const [_window, setWindow] = useState(null)
  
  const showModalWindow = (type, { value = [] } = { value: [] }) => {
    return new Promise(resolve => {
      setWindow({
        type,
        value,
        onData: (response, ...args) => {
          resolve([response, ...args])  
          setWindow(null)
        }
      })
    })
  }

  const Component = WINDOWS[_window?.type]

  return (
    <ModalWindowContext.Provider value={showModalWindow}> 
      {
        _window && (
          <ShadowBody>
            <Container>
              {
                <Component 
                  onData={_window.onData} 
                  value={_window.value} 
                />
              }
            </Container>   
          </ShadowBody> 
        )
      }
      {children}
    </ModalWindowContext.Provider>
  )
}