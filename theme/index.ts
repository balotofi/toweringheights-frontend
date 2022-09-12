import { extendTheme } from "@chakra-ui/react"
import styles from "./styles"
import colors from "./foundation/colors"
import components from "./components"

export const overrides = extendTheme({
	styles,
	colors,
	components,
})
