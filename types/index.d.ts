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

interface IFormikValues {
    email: string,
    name: string,
    message: string
}

interface IFormValues {
    role: string,
    fullName: string,
    email: string,
    phone: string,
    location: string,
    file_: FileList,
}