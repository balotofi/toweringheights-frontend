import { IStaffProps, IStaffsArray } from '../types/imageTypes'
import mrsBalogun from '../assets/teachers/POP_21561.jpg'
import mrsBose from '../assets/teachers/Mrs_Bose3.jpg'
import missTaiwo from '../assets/teachers/Miss_Taiwo_2.jpg'
import missKehinde from '../assets/teachers/Miss_Kehinde_2.jpg'
import missYinka from '../assets/teachers/Miss_Yinka_2.jpg'
import Staffs from '../assets/teachers/staff3.jpg'

export const staffs:IStaffProps [] = [
    {
        name: 'Mrs Balogun',
        role: 'Headmistress/ Proprietress',
        img: mrsBalogun
    }, {
        name: 'Mrs Bose',
        role: 'Teacher',
        img: mrsBose
    }, {
        name: 'Miss Taiwo',
        role: 'Teacher',
        img: missTaiwo
    }, {
        name: 'Miss Kehinde',
        role: 'Teacher',
        img: missKehinde
    }, {
        name: 'Miss Yinka',
        role: 'Teacher',
        img: missYinka
    }, {
        name: 'Others',
        role: 'Teacher',
        img: Staffs
    }
]

export const staffsArray: IStaffsArray[] = [
    {
        child: [
            {
                name: 'Mrs Balogun',
                role: 'Headmistress/ Proprietress',
                img: mrsBalogun
            }, {
                name: 'Mrs Bose',
                role: 'Teacher',
                img: mrsBose
            }, {
                name: 'Miss Taiwo',
                role: 'Teacher',
                img: missTaiwo
            }
        ]
    }, {
        child: [
            {
                name: 'Miss Kehinde',
                role: 'Teacher',
                img: missKehinde
            }, {
                name: 'Miss Yinka',
                role: 'Teacher',
                img: missYinka
            }, {
                name: 'Others',
                role: 'Teacher',
                img: Staffs
            }
        ]
    }
]