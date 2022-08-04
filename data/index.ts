import { StaffProps, ActivityProps, BlogProps, NavProps, SlideShowProps, StaffsArray } from "../types"

export const staffs:StaffProps [] = [
    {
        name: 'Mrs Balogun',
        role: 'Headmistress/ Proprietress'
    }, {
        name: 'Miss Famulegun',
        role: 'Teacher'
    }, {
        name: 'Miss Suberu',
        role: 'Teacher'
    }
]

export const staffsArray: StaffsArray[] = [
    {
        child: [
            {
                name: 'Mrs Balogun',
                role: 'Headmistress/ Proprietress'
            }, {
                name: 'Miss Famulegun',
                role: 'Teacher'
            }, {
                name: 'Miss Suberu',
                role: 'Teacher'
            }
        ]
    }, {
        child: [
            {
                name: 'Miss Famulegun',
                role: 'Headmistress/ Proprietress'
            }, {
                name: 'Miss Famulegun',
                role: 'Teacher'
            }, {
                name: 'Miss Suberu',
                role: 'Teacher'
            }
        ]
    }
]

export const activities: ActivityProps[] =  [
    {
        "id": 1,
        "img": "/assets/playground/playground1.jpg",
        "alt": "Games and entertainment",
        "heading": "Games & Entertainment",
        "summary": "Sports impact our culture,other sources of entertainment and our economy.They help in physical and mental growth and also contribute to the formation of character generally."
    }, {
        "id": 2,
        "img": "/assets/cultural/cultural.jpg",
        "alt": "Art and creativity",
        "heading": "Art & Creativity",
        "summary": "Art is the expression or application of human creative skill and imagination, typically in a visual form such as painting or sculpture, producing works to be appreciated primarily for their beauty or emotional power."
    } 
]

export const blogs: BlogProps[] = [
    {
        id: 1,
        img: "/assets/grads/POP_19551.jpg",
        alt: "Graduating pupils",
        summary: "Graduating set gives farewell speech,says how happy they are to be moving to the next level..."
    }, {
        id: 2,
        img: "/assets/milo/IMG-20220606-WA00051.jpg",
        alt: "Visits",
        summary: "Nestle Milo visit to the school.See what Nestle Nigeria had to discuss with the students amidst other entertainment..."
    }, {
        id: 3,
        img: "/assets/parents/POP_19901.jpg",
        alt: "Parent Teacher Association",
        summary: "Parents suggest ways to enhance optimum development and improved facilities at PTA meeting..."
    }
]

export const navItems: NavProps[] = [
    {
        label: "Home",
        href: "/" 
    }, {
        label: "About Us",
        children: [
            {
                label: "About Us",
                href: "/about"
            }, {
                label: "Our Blog",
                href: "/about/blog"
            }
        ] 
    }, {
        label: "Gallery",
        href: "/gallery"
    }, {
        label: "Join Us",
        children: [
            {
                label: "Admissions",
                href: "/join/admissions"
            }, {
                label: "Vacancies",
                href: "/join/vacancies"
            }
        ] 
    }, {
        label: "Contact Us",
        href: "/contact"
    }
]

export const slideShowItems : SlideShowProps[] = [
    {
        img: '/assets/group_img/InShot_20220728_104357649.jpg',
        alt: 'Image1'
    }, {
        img: '/assets/uniform/IMG_20200305_103641_6.jpg',
        alt: 'Image2'
    }, {
        img: '/assets/class_activities/IMG_20200204_114106_8.jpg',
        alt: 'Image3'
    }, {
        img: '/assets/group_img/InShot_20220728_104256447.jpg',
        alt: 'Image4'
    }, {
        img: '/assets/class_activities/IMG_20210222_103517_3201_1920.jpg',
        alt: 'Image5'
    }
]

// import path from 'path'
// import { promises as fs } from 'fs'

// export default async function handler(req: any, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: string): void; new(): any; }; }; }) {
//   //Find the absolute path of the json directory
//   const jsonDirectory = path.join(process.cwd(), 'json')
//   //Read the json data file data.json
//   const fileContents = await fs.readFile(jsonDirectory + '/activities.json', 'utf8')
//   //Return the content of the data file in json format
//   res.status(200).json(fileContents)
// }
