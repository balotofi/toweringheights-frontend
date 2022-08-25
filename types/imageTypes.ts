import { StaticImageData } from 'next/image'

export interface ISlideShow {
    img: StaticImageData, 
    alt: string
}

export interface IActivityProps {
    id: number,
    img: StaticImageData,
    alt: string,
    heading: string,
    summary: string,
}

export interface IBlogProps {
    id: number,
    img: StaticImageData,
    alt: string,
    summary: string,
} 
export interface IStaffProps {
    name: string,
    role: string,
    img: StaticImageData
}

export interface IStaffsArray {
    child: IStaffProps[]
}