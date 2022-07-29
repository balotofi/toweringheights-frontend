import { Flex, Image, Link, Text } from "@chakra-ui/react"

const Blog = ({...blog}) => {
    return (
        <Flex 
            bg='white'
            borderRadius='lg' 
            boxShadow='0px 10px 20px rgba(0, 122, 255, 0.1)'
            m='1.5rem'
            p='2rem'
            h='290px'
            direction='column'
            align='center'
        >
            <Image
                borderRadius='lg'
                w='212px'
                h='147px'
                src='https://bit.ly/dan-abramov'
                alt={blog.alt}
            />
            <Text fontWeight='medium' fontSize='sm' pt='1rem'>
                {blog.summary}
                <Link color='brand.300'>Read More</Link>
            </Text>
        </Flex>
    )
}

export default Blog