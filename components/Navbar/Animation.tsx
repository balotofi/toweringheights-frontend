import { chakra, shouldForwardProp } from "@chakra-ui/react"
import { motion, isValidMotionProp } from "framer-motion"

export const AnimatedLogoNavBox = chakra(motion.div, {
	shouldForwardProp: (prop) =>
		isValidMotionProp(prop) || shouldForwardProp(prop),
})

export const logoNavVariant = {
	hidden: {
		opacity: 1,
	},
	show: {
		opacity: 1,
		transition: {
			duration: 0,
			delay: 0,
			staggerChildren: 1,
		},
	},
}

export const logoNavItemsVariant = {
	hidden: {
		y: -100,
	},
	show: {
		y: 0,
		transition: {
			delay: 0,
			type: "spring",
			stiffness: 100,
			damping: 7,
		},
	},
}
