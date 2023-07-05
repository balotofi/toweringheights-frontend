type BtnSliderProps = {
	direction: "left" | "right"
	onClick?: () => void
}

interface NavProps {
	label: string
	href?: string
	children?: NavProps[]
}

interface PaginationProps {
	totalImages: number
	imagesPerPage: number
	currentPage: number
	changePage: (pageNumber: number) => void
	prevPage: () => void
	nextPage: () => void
}

interface VacancyProps {
	title: string
	subtitle: string
	level: string
	date: string
	location: string
}

interface IFooterLink {
	href: string
	text: string
}

interface IFooterSocial {
	icon: IconType
	href: string
	text: string
}

interface IContactFormVal {
	email: string
	name: string
	message: string
}

interface IVacancyFormVal {
	role: string
	fullName: string
	email: string
	phone: string
	location: string
	file_: FileList
}

interface IStateResData {
	name: string
	capital: string
}

interface INewsLetter {
	email: string
}
interface IVacantRole {
	id?: number
	title: string
	grade: string
	date: string
	summary: string
	descriptions: string[]
	requirements: string[]
	physicalRequirements: string
}

interface IVacancyPage {
	states: IStateResData[]
}

interface IBreadCrumb {
	href: string
	text: string
	newText: string
}

interface ICrumbProps {
	last: boolean
	href: string
	newText: string
}

interface INavObj {
	home: string
	join_us: string
	vacancies: string
	apply: string
	about_us: string
	admissions: string
	contact_us: string
	gallery: string
}

interface IBlogProps {
	text: string
	date: string
	image: StaticImageData
}
