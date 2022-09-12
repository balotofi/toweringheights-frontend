/* eslint-disable @typescript-eslint/no-explicit-any */
import { chakra, shouldForwardProp } from "@chakra-ui/react"
import { motion, isValidMotionProp } from "framer-motion"

export const blogPreviewVariant = {
	hidden: {
		scale: 0.7,
		transition: {
			duration: 2,
		},
	},
	show: {
		scale: 1,
		transition: {
			delay: 0.3,
			duration: 1,
		},
	},
	hover: {
		scale: 1.1,
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
		transition: { type: "spring", delay: 0.5 },
	},
}

export const AnimatedBlogPreview: any = chakra(motion.div, {
	shouldForwardProp: (prop) =>
		isValidMotionProp(prop) || shouldForwardProp(prop),
})
