import { Flex, Link, Text } from "@chakra-ui/react"
import Image from 'next/image'
import { flexStyle } from "./style"

const Preview = ({...blog}) => {
    return (
        <Flex sx={flexStyle}>
            <Image
                width='250'
                height='155'
                src={blog.img}
                alt={blog.alt}
                priority={true}
            />
            <Text fontSize='sm' pt='1rem'>
                {blog.summary}
                <Link color='brand.300'>Read More</Link>
            </Text>
        </Flex>
    )
}

export default Preview