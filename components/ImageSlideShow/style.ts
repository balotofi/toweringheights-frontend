export const imageBox = {
	position: "relative",
	borderRadius: "50%",
	border: "1px solid",
	borderColor: "brand.300",
	transition: "all 0.3s ease-in",
	boxShadow: "0px 0px 10px #007AFF",
	h: { base: "255px", md: "400px", xl: "500px" },
	w: { base: "271px", md: "2000px", xl: "1200px" },
	img: {
		borderRadius: "50%",
	},
}

export const dotArrayBox = {
	w: "12px",
	h: "12px",
	borderRadius: "full",
	border: 1,
	borderStyle: "solid",
	borderColor: "gray.300",
	transition: "all 0.3s ease-in-out",
}

export const imageFlex = {
	position: "relative",
	overflow: "hidden",
	alignItems: "center",
	justifyContent: "center",
	w: { xl: "50%" },
}

export const dotArrayFlex = {
	justifyContent: "space-around",
	position: "absolute",
	bottom: { base: "30px", md: "50px" },
	gap: "5px",
	transform: "translateX(-50%)",
	left: "50%",
}
