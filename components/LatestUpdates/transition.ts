export const latestUpdateVariants = {
	hidden: {
		scale: 0.8,
		transition: {
			duration: 2,
			ease: "easeOut",
		},
	},
	show: {
		scale: 1,
		transition: {
			repeatDelay: 2,
			ease: "easeIn",
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
			delay: 0.5,
			duration: 1.5,
		},
	},
}
