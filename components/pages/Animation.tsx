export const aboutTextContainer = {
	hidden: {
		opacity: 1,
	},
	show: {
		opacity: 1,
		transition: {
			delay: 0.2,
			staggerChildren: 0.5,
			when: "beforeChildren",
		},
	},
}

export const aboutText = {
	hidden: {
		scale: 0,
	},
	show: {
		scale: 1,
		transition: {
			delay: 0.2,
			duration: 0.5,
		},
	},
}
