import { IActivityProps, IBlogProps } from "../types/imageTypes"
import Games from "/assets/playground/playground1.jpg"
import Art from "/assets/cultural/cultural.jpg"
import GraduatingPupils from "/assets/grads/POP_19551.jpg"
import Visit from "/assets/milo/IMG-20220606-WA00051.jpg"
import PTA from "/assets/parents/POP_19901.jpg"

export const activities: IActivityProps[] = [
	{
		id: 1,
		img: Games,
		alt: "Games and entertainment",
		heading: "Games & Entertainment",
		summary:
			"Sports impact our culture,other sources of entertainment and our economy.They help in physical and mental growth and also contribute to the formation of character generally.",
	},
	{
		id: 2,
		img: Art,
		alt: "Art and creativity",
		heading: "Art & Creativity",
		summary:
			"Art is the expression or application of human creative skill and imagination, typically in a visual form such as painting or sculpture, producing works to be appreciated primarily for their beauty or emotional power.",
	},
]

export const blogsPreview: IBlogProps[] = [
	{
		id: 1,
		img: GraduatingPupils,
		alt: "Graduating pupils",
		summary:
			"Graduating set gives farewell speech,says how happy they are to be moving to the next level...",
	},
	{
		id: 2,
		img: Visit,
		alt: "Visits",
		summary:
			"Nestle Milo visit to the school.See what Nestle Nigeria had to discuss with the students amidst other entertainment...",
	},
	{
		id: 3,
		img: PTA,
		alt: "Parent Teacher Association",
		summary:
			"Parents suggest ways to enhance optimum development and improved facilities at PTA meeting...",
	},
]

export const navItems: NavProps[] = [
	{
		label: "Home",
		href: "/",
	},
	{
		label: "About Us",
		children: [
			{
				label: "About Us",
				href: "/about_us",
			},
			{
				label: "Our Blog",
				href: "/about_us/blog",
			},
		],
	},
	{
		label: "Gallery",
		href: "/gallery",
	},
	{
		label: "Join Us",
		href: "join_us",
		children: [
			{
				label: "Admissions",
				href: "/join_us/admissions",
			},
			{
				label: "Vacancies",
				href: "/join_us/vacancies",
			},
		],
	},
	{
		label: "Contact Us",
		href: "/contact_us",
	},
]
