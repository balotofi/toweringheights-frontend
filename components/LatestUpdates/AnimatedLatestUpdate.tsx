/* eslint-disable @typescript-eslint/no-explicit-any */
import { chakra, shouldForwardProp } from "@chakra-ui/react"
import { motion, isValidMotionProp } from "framer-motion"

export const AnimatedLatestUpdate: any = chakra(motion.div, {
	shouldForwardProp: (prop) =>
		isValidMotionProp(prop) || shouldForwardProp(prop),
})
