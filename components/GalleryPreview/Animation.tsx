/* eslint-disable @typescript-eslint/no-explicit-any */
import { chakra, shouldForwardProp } from "@chakra-ui/react"
import { motion, isValidMotionProp } from "framer-motion"

export const imageVariants = {
	hidden: {
		opacity: 0,
	},
	show: {
		opacity: 1,
		transition: { type: "spring", delay: 0.3 },
	},
}

export const headingVariants = {
	hidden: {
		scale: 0,
	},
	show: {
		scale: 1,
		opacity: 1,
		transition: {
			type: "tween",
			duration: 0.5,
		},
	},
}

export const containerVariants = {
	hidden: {
		opacity: 1,
	},
	show: {
		opacity: 1,
		transition: { type: "spring", delay: 0.2 },
	},
}

export const AnimatedContainer: any = chakra(motion.div, {
	shouldForwardProp: (prop) =>
		isValidMotionProp(prop) || shouldForwardProp(prop),
})
