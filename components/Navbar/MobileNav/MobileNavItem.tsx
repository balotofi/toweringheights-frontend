import { Collapse, Flex, Icon, Stack, Text, Link as ChakraLink, useDisclosure } from "@chakra-ui/react"
import { NavProps } from "../../../types"
import { IoMdArrowDropdown } from "react-icons/io"

const MobileNavItem = ({label, children, href}: NavProps) => {

    const { isOpen, onToggle } = useDisclosure()

    return (
        <Stack spacing={4} onClick={children && onToggle}>
            <Flex
                py={2}
                px={1}
                as={ChakraLink}
                href={href ?? '#'}
                justify={'space-between'}
                align={'center'}
                _hover={{
                    textDecoration: 'none',
                    bgColor: 'rgba(217, 217, 217, 0.3)',
                    transition: 'all 0.5s ease-out'
                }}
                borderBottom={1}
                borderStyle={'solid'}
                borderColor='gray.300'
            >
                <Text
                    color={'white'}
                    lineHeight={5}
                    textTransform={'uppercase'}
                    fontSize={'sm'}
                >
                    {label}
                </Text>
                {children && (
                    <Icon 
                        as={IoMdArrowDropdown} 
                        color={'white'}
                        transition={'all .3s ease-in-out'} 
                        transform={isOpen ? 'rotate(180deg)' : ''} 
                        w={5}
                        h={5}
                    />
                )}
            </Flex>
            <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
                <Stack
                    mt={2}
                    pl={4}
                    align={'start'}
                >
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