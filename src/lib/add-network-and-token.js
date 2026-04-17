const addNetworkAndToken = async chain => {
    try {
        const targetChainIdHex = `0x${Number(chain.chainId).toString(16)}`;

        const currentChainId = await window.ethereum.request({
            method: 'eth_chainId'
        })

        if (currentChainId !== targetChainIdHex) {
            try {
                await window.ethereum.request({
                    method: 'wallet_switchEthereumChain',
                    params: [{ chainId: targetChainIdHex }]
                })
            } catch (err) {
                if (err.code === 4902) {
                    try {
                        await window.ethereum.request({
                            method: 'wallet_addEthereumChain',
                            params: [
                                {
                                    ...chain,
                                    chainId: targetChainIdHex 
                                }
                            ]
                        })
                    } catch (err) {
                        console.log(err)
                    }
                }
            }
        }

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

        return wasAdded
    } catch (error) {
        console.error(error)
        return false
    }
}

export default addNetworkAndToken