interface ActivityProps {
    id: number,
    img: string,
    alt: string,
    heading: string,
    summary: string,
}

interface BlogProps {
    id: number,
    img: string,
    alt: string,
    summary: string,
}

interface StaffProps {
    name: string,
    role: string,
    img: string
}
interface StaffsArray {
    child: StaffProps[]
}

type BtnSliderProps = {
    direction: 'left' | 'right',
    action: () => void
}

interface NavProps {
    label: string,
    href?: string,
    children?: NavProps[]
}

interface SlideShowProps {
    img: string, 
    alt: string
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