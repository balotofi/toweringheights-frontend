import { chakra, shouldForwardProp } from "@chakra-ui/react"
import { motion, isValidMotionProp } from "framer-motion"

/* eslint-disable @typescript-eslint/no-explicit-any */
export const AnimatedLatestUpdate: any = chakra(motion.div, {
	shouldForwardProp: (prop) =>
		isValidMotionProp(prop) || shouldForwardProp(prop),
})

export const containerVariants = {
	hidden: {
		opacity: 1,
		scale: 1,
	},
	show: {
		opacity: 1,
		scale: 1,
		when: "beforeChildren",
		staggerChildren: 0.01,
	},
}

export const latestUpdateVariants = {
	hidden: {
		scale: 0.8,
		transition: {
			duration: 2,
			ease: "easeInOut",
		},
	},
	show: {
		scale3d: 1,
		transition: {
			repeatDelay: 3,
			ease: "easeInOut",
			repeat: Infinity,
			duration: 2,
		},
	},
	hover: {
		scale: 1,
	},
}

export const headingVariant = {
	hidden: {
		opacity: 0,
	},
	show: {
		opacity: 1,
		transition: {
			delay: 0.3,
			duration: 1.5,
		},
	},
}
