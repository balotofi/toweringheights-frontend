/* eslint-disable require-jsdoc */
import Head from "next/head"
import { ChakraProvider } from "@chakra-ui/react"
import type { AppProps } from "next/app"
import { overrides } from "../theme"
import LogoNavbar from "../components/Navbar/LogoNavbar"
import Navbar from "../components/Navbar/Navbar"

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>Towering Heights Schools</title>
			</Head>
			<ChakraProvider theme={overrides}>
				<LogoNavbar />
				<Navbar />
				<Component {...pageProps} />
			</ChakraProvider>
		</>
	)
}

export default MyApp
