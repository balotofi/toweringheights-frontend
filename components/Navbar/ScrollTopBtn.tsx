import { Button, Icon } from "@chakra-ui/react"
import { useState, useEffect } from "react"
import { MdOutlineKeyboardArrowUp } from "react-icons/md"
import { scrollButton } from "./style"

const ScrollTopBtn = () => {

    const [visible, setVisible] =useState(false)

    useEffect(()=> {
        window.addEventListener('scroll', toggleVisible)
    }, [])

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop
        if (scrolled > 1000) {
            setVisible(true)
        } else if ( scrolled <= 700) {
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
            sx={scrollButton}
            display={visible ? 'inline' : 'none'}
        >
            <Icon as={MdOutlineKeyboardArrowUp} w={8} h={8} />
        </Button>
    )
}

export default ScrollTopBtn