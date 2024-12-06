import { HStack } from '@chakra-ui/react'
import { Switch } from '@/components/ui/switch'
import { useColorMode } from '@/components/ui/color-mode'
import { FaMoon, FaSun } from "react-icons/fa"
import { Icon } from '@chakra-ui/react'

const ColorModeSwitch = () => {
    const { toggleColorMode, colorMode } = useColorMode()

    return (
        <HStack>
            <Switch checked={colorMode === 'dark'} onChange={toggleColorMode}
                trackLabel={{
                    on: (
                        <Icon color="yellow.400">
                            <FaSun />
                        </Icon>
                    ),
                    off: (
                        <Icon color="gray.400">
                            <FaMoon />
                        </Icon>
                    ),
                }} />
        </HStack>
    )
}

export default ColorModeSwitch