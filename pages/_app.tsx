import "@fontsource/lato"
import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { overrides } from '../theme'
import LogoNavbar from "../components/Navbar/LogoNavbar"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar/Navbar"
import ScrollTopBtn from "../components/Navbar/ScrollTopBtn"

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider theme={overrides}>
            <LogoNavbar />
            <Navbar />
            <Component {...pageProps} />
            <Footer />
            <ScrollTopBtn />
        </ChakraProvider>
    )
}

export default MyApp
