import { Outlet } from 'react-router'
import ThreeBackground from './components/three-background'
import { Flex } from './components/global'

const App = () => {
    return (
        <Flex style={{ width: '100%' }} justify='center'>
            <ThreeBackground />
            <Outlet />
        </Flex>
    )
}

export default App