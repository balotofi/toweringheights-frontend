/* eslint-disable @typescript-eslint/no-explicit-any */
import { chakra, shouldForwardProp } from "@chakra-ui/react"
import { motion, isValidMotionProp } from "framer-motion"

export const imageVariants = {
	hidden: {
		opacity: 0,
		right: "100%",
	},
	show: {
		opacity: 1,
		right: 0,
		transition: { type: "spring", delay: 1 },
	},
}

export const containerVariants = {
	hidden: {
		opacity: 0,
		x: 100,
	},
	show: {
		opacity: 1,
		x: 0,
		transition: { type: "spring", delay: 0.5, when: "beforeChildren" },
	},
}

export const AnimatedContainer: any = chakra(motion.div, {
	shouldForwardProp: (prop) =>
		isValidMotionProp(prop) || shouldForwardProp(prop),
})
