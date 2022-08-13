// import React, { createContext, useContext, useState } from "react"
// import { staffs } from "../data"
// import { ISliderProps } from "../types"

// const defaultState = {
//     slideIdx: 1
// }

// const SliderContext = createContext<ISliderProps>(defaultState)

// export const SliderContextProvider = ({children}: any) => {
//     const [slideIdx, setSlideIdx] = useState(defaultState.slideIdx)

//     const nextSlide = () => {
//         if ( slideIdx !== staffs.length ){
//             setSlideIdx(slideIdx + 1)
//         } else if ( slideIdx === staffs.length ){
//             setSlideIdx(1)
//         }
//     }

//     const prevSlide = () => {
//         if ( slideIdx !== 1) {
//             setSlideIdx(slideIdx - 1)
//         } else if ( slideIdx === 1 ){
//             setSlideIdx(staffs.length)
//         }
//     }

//     return (
//         <SliderContext.Provider value={{slideIdx, prevSlide, nextSlide}} >
//             {children}
//         </SliderContext.Provider>
//     )
// }

// export const UseSliderContext = () => {
//     return useContext(SliderContext)
// }

export const Dummy = () => {
    return (
        <div></div>
    )
}
