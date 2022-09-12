export const footerLinkVariants = {
	hidden: {
		scale: 0,
	},
	show: {
		opacity: 1,
		scale: 1,
		transition: {
			type: "spring",
			delay: 0.3,
			bounce: 0.5,
		},
	},
	hover: {
		delay: 0.2,
		scale: 1.1,
	},
}

export const footerTextVariants = {
	hidden: {
		opacity: 0,
	},
	show: {
		opacity: 1,
		scale: 1,
		transition: {
			delay: 0.3,
			duration: 0.6,
		},
	},
	hover: {
		delay: 0.2,
		scale: 1.1,
	},
}
