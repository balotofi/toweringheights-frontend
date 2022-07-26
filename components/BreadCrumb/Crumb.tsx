import {
    BreadcrumbItem,
    BreadcrumbLink,
    Text,
} from '@chakra-ui/react'

interface crumbProps {
    text: string,
    last: boolean,
    href: string,
}

const Crumb = ({text, href, last = false}: crumbProps) => {

    if(last) {
        return <Text color="font.200" >{text}</Text>
    }

    return (
        <BreadcrumbItem>
            <BreadcrumbLink href={href} >{text}</BreadcrumbLink>
        </BreadcrumbItem>
    )
}

export default Crumb