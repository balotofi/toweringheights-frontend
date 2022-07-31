import React from "react"

export interface ActivityProps {
    id: number,
    alt: string,
    heading: string,
    summary: string,
}

export interface BlogProps {
    id: number,
    alt: string,
    summary: string,
}

export interface StaffProps {
    id: number,
    name: string,
    role: string,
}

export interface SliderDirProps {
    direction: 'left' | 'right'
}

export type BtnSliderProps = {
    direction: 'left' | 'right',
    action: () => void
}

// export type ISliderProps = {
//     slideIdx: number,
//     nextSlide?: () => void,
//     prevSlide?: () => void,
// }