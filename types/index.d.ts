type BtnSliderProps = {
    direction: 'left' | 'right',
    action: () => void
}

interface NavProps {
    label: string,
    href?: string,
    children?: NavProps[]
}

interface PaginationProps {
    totalImages: number,
    imagesPerPage: number,
    currentPage: number,
    changePage: (pageNumber: number) => void,
    prevPage: () => void,
    nextPage: () => void
}

interface VacancyProps {
    title: string,
    subtitle: string,
    level: string,
    date: string,
    location: string
}

interface IFooterLink {
    href: string,
    text: string,
}

interface IFooterSocial {
    icon: IconType,
    href: string,
    text: string,
}

interface IContactFormVal {
    email: string,
    name: string,
    message: string
}

interface IVacancyFormVal {
    role: string,
    fullName: string,
    email: string,
    phone: string,
    location: string,
    file_: FileList,
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
    details: IVacantRole[]
}

interface IBreadCrumb {
    href: string,
    text: string,
    newText: string
}

interface ICrumbProps {
    last: boolean,
    href: string,
    newText: string
}
