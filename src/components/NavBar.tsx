import { HStack, Image, Text } from '@chakra-ui/react'
import logo from '../assets/logo.webp'

const NavBar = () => {
    return (
        <HStack>
            <Image src={logo} boxSize="60px" objectFit="cover" />
            <Text>Navbar</Text>
        </HStack>
    )
}

export default NavBar