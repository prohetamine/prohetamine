import styled from "styled-components"
import articles from "../assets/articles"
import { BigFont700, Control, Flex, Icon, MicroFont500, NormalFont400 } from "./global"

import linkIcon from './../assets/icons/link.svg?react'
import { useState } from "react"

const ArticleImage = styled.div`
    background-image: url('${props => props.src}');
    background-size: cover;
    background-position: center center;
    border-radius: var(--radius-nano);
    width: var(--images-article-width);
    height: var(--images-article-height);
    min-width: var(--images-article-width);
    min-height: var(--images-article-height);
    box-sizing: border-box;

    @media (max-width: 420px) {
        width: 100%;
        height: 180px;
    }
`

const Container = styled(Flex)`
    flex-direction: row;

    @media (max-width: 420px) {
        flex-direction: column;
    }
`

const Content = styled(Flex)`
    width: calc(100% - var(--images-article-width) - var(--spaces-normal));

    @media (max-width: 420px) {
        width: 100%;
    }
`

const Description = styled(NormalFont400)`
    color: var(--colors-based-black);
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;

    @media (max-width: 420px) {
        -webkit-line-clamp: 5;
        margin-bottom: var(--spaces-normal);
    }
`

const Article = ({ url, image, title, description, readIn, color }) => {
    const [hover, setHover] = useState(false)

    return (
        <Control 
            whileTap={{ y: 2, scale: 0.998 }} 
            onTap={() => window.location = url}
            onHoverStart={() => setHover(true)}
            onHoverEnd={() => setHover(false)}
            style={{ width: '100%', background: `var(${color})` }}
        >
            <Container 
                gap='var(--spaces-normal)' 
                padding='var(--spaces-big)' 
                align='stretch'
                direction='row'
            >
                <ArticleImage src={image} />
                <Content justify='space-between' gap='var(--spaces-normal)'>
                    <Flex gap='var(--spaces-small)' style={{ width: '100%' }} align='flex-start'>
                        <BigFont700 
                            style={{ 
                                color: 'var(--colors-black)', 
                                wordBreak: 'break-word',
                                maxWidth: '100%',
                                whiteSpace: 'nowrap',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis'
                            }}
                        >{title}</BigFont700>
                        <Description>{description} ...</Description>
                    </Flex>
                    <Flex align='flex-end' style={{ width: '100%' }}>
                        <Flex direction='row' gap='var(--spaces-small)'>
                            <MicroFont500 
                                style={{ 
                                    color: 'var(--colors-controll-default-color)',  
                                    textDecoration: hover ? 'underline' : 'none', 
                                    textDecorationSkipInk: 'none' 
                                }}
                            >{readIn}</MicroFont500>
                            <Icon src={linkIcon} />
                        </Flex>                                
                    </Flex>
                </Content>
            </Container>
        </Control>
    )
}

const Articles = () => {
    
    return (
        <Flex gap='var(--spaces-normal)' justify='flex-start' style={{ width: '100%' }}>
            {
                articles.map((article, key) => (
                    <Article {...article} key={key} />
                ))
            }
        </Flex>
    )
}

export default Articles