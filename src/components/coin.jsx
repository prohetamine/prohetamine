import coinWebm from './../assets/coin.webm?inline'

const Coin = ({ width }) => {
    return (
        <video 
            autoplay='true'
            loop='true'
            muted='true'
            playsinline='true'
            style={{
                background: 'transparent',
                display: 'block',
                width
            }}
            >
            <source src={coinWebm} type="video/webm" />
        </video>
    )
}

export default Coin