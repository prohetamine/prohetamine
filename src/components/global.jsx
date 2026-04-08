/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion'
import { forwardRef } from 'react'
import styled from 'styled-components'

export const Flex = styled(motion.div)`
    display: flex;
    flex-direction: ${props => props.direction || 'column'};
    justify-content: ${props => props.justify || 'flex-start'};
    align-items: ${props => props.align || 'center'};
    gap: ${props => props.gap || '0px'};
    padding: ${props => props.padding || '0px'};
`

export const Icon = motion(
  forwardRef(({ src: Icon, style, ...props }, ref) => (
    <Icon
      ref={ref}
      style={{ 
        width: 'var(--images-normal)', 
        height: 'var(--images-normal)', 
        minWidth: 'var(--images-normal)', 
        minHeight: 'var(--images-normal)', 
        outline: 'none', 
        ...style 
      }}
      {...props}
    />
  ))
)

export const Avatar = styled.div`
  background-image: url('${props => props.src}');
  background-size: cover;
  background-position: center center;
  border: 1px solid var(--colors-border);
  border-radius: var(--radius-max);
  width: var(--images-avatar);
  height: var(--images-avatar);
  box-sizing: border-box;

`

export const Control = styled(motion.div)`
  background: var(--colors-controll-default-background);
  border-radius: var(--radius-nano);
  font-size: 0px;
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-tap-highlight-color: transparent;
`

export const Dot = styled.div`
  width: 2px;
  height: 2px;
  border-radius: 100%;
  background: var(--colors-border);
`

export const HorizontalLine = styled.div`
    border-radius: 4px;
    width: 100%;
    height: 1px;
    background: var(--colors-light-border);
`

const FontFamily = styled(motion.div)`
  font-family: var(--font-family);
`

const SecondFamily = styled(motion.div)`
  font-family: var(--second-family);
`

const BigFont = styled(FontFamily)`
  font-size: var(--fonts-size-big);
`

const NormalFont = styled(SecondFamily)`
  font-size: var(--fonts-size-normal);
`

const SmallFont = styled(FontFamily)`
  font-size: var(--fonts-size-small);
`

const NanoFont = styled(FontFamily)`
  font-size: var(--fonts-size-nano);
`

const MicroFont = styled(FontFamily)`
  font-size: var(--fonts-size-micro);
`

export const BigFont700 = styled(BigFont)`
  font-weight: 700;
`

/// 

export const NormalFont500 = styled(NormalFont)`
  font-weight: 500;
`

export const NormalFont400 = styled(NormalFont)`
  font-weight: 400;
`

///

export const SmallFont500 = styled(SmallFont)`
  font-weight: 500;
`

/// 

export const NanoFont500 = styled(NanoFont)`
  font-weight: 500;
`

///

export const MicroFont500 = styled(MicroFont)`
  font-weight: 500;
`

export const MicroFont400 = styled(MicroFont)`
  font-weight: 400;
`

export const FakeLink = styled(NanoFont500)`
  color: var(--colors-controll-default-color);
  text-decoration: ${props => props.active}; 
  text-decoration-skip-ink: none; 
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
`

export const Text = styled(NormalFont400)`
  color: var(--colors-based-black);
  width: 100%; 
`

export const Bold = styled(NormalFont500)`
  color: var(--colors-based-black); 
  display: inline-block;
`

export const Link = styled(Bold)`
  text-decoration: underline;
  text-decoration-skip-ink: none;
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-tap-highlight-color: transparent;

  &:hover {
    text-decoration: none;
  }
`