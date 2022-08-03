import { Button, Icon } from "@chakra-ui/react"
import { useState, useEffect } from "react"
import { MdOutlineKeyboardArrowUp } from "react-icons/md"

const ScrollTopBtn = () => {

    const [visible, setVisible] =useState(false)

    useEffect(()=> {
        window.addEventListener('scroll', toggleVisible)
    }, [])

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop
        if (scrolled > 1200) {
            setVisible(true)
        } else if ( scrolled <= 1200) {
            setVisible(false)
        }
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }


    return (
        <Button
            onClick={scrollToTop}
            colorScheme='blue'
            variant='solid' 
            color='white'
            borderRadius='full' 
            p='0.2rem 0.3rem'
            right='10%'
            position='fixed'
            bottom='30px'
            cursor='pointer'
            display={visible ? 'inline' : 'none'}
        >
            <Icon as={MdOutlineKeyboardArrowUp} w={8} h={8} />
        </Button>
    )
}

export default ScrollTopBtn