import styled from 'styled-components'
import coin from './../assets/output.gif?inline'

const Image404 = styled.img``

const Coin = ({ width }) => {
    return (
        <Image404 src={coin} style={{ width }} />
    )
}

export default Coin