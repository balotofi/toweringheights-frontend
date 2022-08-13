import { Box, Button, Stack, Flex, Heading, Icon } from "@chakra-ui/react"
import { useRouter } from "next/router"
import { TiArrowRight } from "react-icons/ti"
import Blog from "./Blog"
import { blogs } from "../../data"

const Blogs = () => {

    const router = useRouter()

    return (
        <Stack bg='brand.400' p={6}>
            <Flex direction='column' align='center' m='1.5rem 0'>
                <Heading 
                    as='h3' 
                    color='font.300' 
                    fontSize='lg' 
                    fontWeight='bold' 
                    pb='0.3rem'
                    lineHeight='21.6px'
                >
                    Latest Blog
                </Heading>
                <Box w='74px' h='4px' borderRadius='3xl' bg='#747474' />
            </Flex>
            <Flex direction='row' flexWrap='wrap' justify='center'>
                {blogs.map((blog) => (
                    <Blog key={blog.id} alt={blog.alt} img={blog.img} summary={blog.summary} />
                ))}
            </Flex>
            <Flex justify='center'>
                <Button
                    onClick={()=>router.push('/blog')}
                    bg='brand.300' 
                    color='white' 
                    fontSize='md' 
                    fontWeight='medium' 
                    size='lg'
                    p='1rem 2rem'
                    borderRadius='2xl'
                    position='static'
                    _hover={{
                        bg: 'brand.400',
                        color: 'brand.300',
                        border: '2px',
                        borderColor: 'brand.300',
                        borderStyle: 'solid'
                      }}
                >
                    More Articles <Icon as={TiArrowRight} mt='0.2rem' fontSize='2xl' />
                </Button>
            </Flex>
        </Stack>
    )
}

export default Blogs