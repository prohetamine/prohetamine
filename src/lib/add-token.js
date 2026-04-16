const addToken = async ({ chainId }) => {
    try {
        await window.ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: `0x${(chainId).toString(16)}` }],
        })

        const wasAdded = await window.ethereum.request({
            method: 'wallet_watchAsset',
            params: {
                type: 'ERC20',
                options: {
                    address: '0xd566886eb93500e2ba464bd48c8d5a2556569253',
                    symbol: 'STAS',
                    decimals: 0,
                    image: 'https://prohetamine.ru/token.png',
                }
            }
        })

        if (wasAdded) {
            console.log('Токен добавлен')
        } else {
            console.log('Пользователь отменил')
        }
    } catch (error) {
        console.error(error)
    }
}

export default addToken