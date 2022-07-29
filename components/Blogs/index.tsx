import { Box, Button, Container, Flex, Heading, Icon } from "@chakra-ui/react"
import { TiArrowRight } from "react-icons/ti"
import Blog from "./Blog"

interface BlogProps {
    id: number,
    alt: string,
    summary: string,
}

const blogs: BlogProps[] = [
    {
        id: 1,
        alt: "Graduating pupils",
        summary: "Graduating set gives farewell speech,says how happy they are to be moving to the next level..."
    }, {
        id: 2,
        alt: "Visits",
        summary: "Nestle Milo visit to the school.See what Nestle Nigeria had to discuss with the students amidst other entertainment..."
    }, {
        id: 3,
        alt: "Parent Teacher Association",
        summary: "Parents suggest ways to enhance optimum development and improved facilities at PTA meeting..."
    }
]

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
                >
                    More Articles <Icon as={TiArrowRight} mt='0.2rem' fontSize='2xl' />
                </Button>
            </Flex>
        </Container>
    )
}

export default Blogs