import { Collapse, Flex, Icon, Stack, Text, Link as ChakraLink, useDisclosure } from "@chakra-ui/react"
import { IoMdArrowDropdown } from "react-icons/io"
import { flexStyle, dropDownIcon } from "./style"

const MobileNavItem = ({label, children, href}: NavProps) => {

    const { isOpen, onToggle } = useDisclosure()

    return (
        <Stack spacing={4} onClick={children && onToggle}> 
            <Flex as={ChakraLink} href={href ?? '#'} sx={flexStyle}>
                <Text color={'white'} lineHeight={5}  textTransform={'uppercase'} fontSize={'sm'}>
                    {label}
                </Text>
                {children && (
                    <Icon as={IoMdArrowDropdown} sx={dropDownIcon} transform={isOpen ? 'rotate(180deg)' : ''}/>
                )}
            </Flex>
            <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
                <Stack mt={2} pl={4} align={'start'} >
                    {children && children.map((child) => (
                        <ChakraLink key={child.label} href={child.href} fontSize={'sm'} color={'white'} py={2}>
                            {child.label}
                        </ChakraLink>
                    ))}
                </Stack>
            </Collapse>
        </Stack>
    )
}

export default MobileNavItem