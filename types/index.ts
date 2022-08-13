export interface ActivityProps {
    id: number,
    img: string,
    alt: string,
    heading: string,
    summary: string,
}

export interface BlogProps {
    id: number,
    img: string,
    alt: string,
    summary: string,
}

export interface StaffProps {
    name: string,
    role: string,
    img: string
}
export interface StaffsArray {
    child: StaffProps[]
}

export type BtnSliderProps = {
    direction: 'left' | 'right',
    action: () => void
}

export interface NavProps {
    label: string,
    href?: string,
    children?: NavProps[]
}

export interface SlideShowProps {
    img: string, 
    alt: string
}

export interface PaginationProps {
    totalImages: number,
    imagesPerPage: number,
    currentPage: number,
    changePage: (pageNumber: number) => void,
    prevPage: () => void,
    nextPage: () => void
}

export interface VacancyProps {
    title: string,
    subtitle: string,
    level: string,
    date: string,
    location: string
}