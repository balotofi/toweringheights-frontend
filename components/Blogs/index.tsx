import { Box, Button, Container, Flex, Heading, Icon } from "@chakra-ui/react"
import { TiArrowRight } from "react-icons/ti"
import Blog from "./Blog"
import { blogs } from "../../data"

const Blogs = () => {
    return (
        <Container bg='brand.400' p='1.5rem'>
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
                <Box w='74px' h='4px' borderRadius='25px' bg='#747474' />
            </Flex>
            <Flex direction='column'>
                {blogs.map((blog) => (
                    <Blog key={blog.id} alt={blog.alt} summary={blog.summary} />
                ))}
            </Flex>
            <Flex justify='center'>
                <Button
                    bg='brand.300' 
                    color='white' 
                    fontSize='md' 
                    fontWeight='medium' 
                    size='lg'
                    p='1rem 2rem'
                    borderRadius='2xl'
                    position='static'
                >
                    More Articles <Icon as={TiArrowRight} mt='0.2rem' fontSize='2xl' />
                </Button>
            </Flex>
        </Container>
    )
}

export default Blogs