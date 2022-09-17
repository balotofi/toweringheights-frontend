import { useEffect } from "react"
import Slider from "react-slick"
import BtnSlider from "./BtnSlider"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { staffs } from "../../data/staffs"
import StaffCard from "./StaffCard"

const settings = {
	dots: false,
	infinite: true,
	slidesToShow: 3,
	slidesToScroll: 3,
	initialSlide: 0,
	speed: 1000,
	nextArrow: <BtnSlider direction="right" />,
	prevArrow: <BtnSlider direction="left" />,
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
				infinite: true,
			},
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				initialSlide: 2,
			},
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			},
		},
	],
}

const StaffSlider = () => {
	useEffect(() => {
		const slider = document.querySelector(".slick-slider") as HTMLElement
		slider.style.setProperty("display", "flex", "important")
		slider.style.setProperty("align-items", "center", "important")
	}, [])

	return (
		<>
			<Slider {...settings}>
				{staffs.map((staff, idx) => (
					<StaffCard
						key={idx}
						sName={staff.sName}
						role={staff.role}
						img={staff.img}
						whatsapp={staff.whatsapp}
						email={staff.email}
					/>
				))}
			</Slider>
		</>
	)
}

export default StaffSlider
