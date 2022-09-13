/* eslint-disable @typescript-eslint/no-explicit-any */
import { chakra, shouldForwardProp } from "@chakra-ui/react"
import { motion, isValidMotionProp } from "framer-motion"

export const blogPreviewVariant = {
	hidden: {
		scale: 0.5,
	},
	show: {
		scale: 0.9,
		transition: {
			duration: 0.8,
		},
	},
	hover: {
		scale: 1,
		transition: {
			ease: "linear",
		},
	},
}

export const headingVariants = {
	hidden: {
		opacity: 0,
		x: 100,
	},
	show: {
		opacity: 1,
		x: 0,
		transition: {
			type: "spring",
			delay: 0.3,
			stiffness: 200,
			damping: 5,
		},
	},
}

export const AnimatedBlogPreview: any = chakra(motion.div, {
	shouldForwardProp: (prop) =>
		isValidMotionProp(prop) || shouldForwardProp(prop),
})
