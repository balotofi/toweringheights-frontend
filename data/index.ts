import { StaffProps, ActivityProps, BlogProps } from "../types"

export const staffs:StaffProps[] = [
    {
        id: 1,
        name: 'Mrs Balogun',
        role: 'Headmistress/ Proprietress'
    }, {
        id: 2,
        name: 'Miss Famulegun',
        role: 'Teacher'
    }, {
        id: 3,
        name: 'Miss Suberu',
        role: 'Teacher'
    }
]

export const activities: ActivityProps[] =  [
    {
        "id": 1,
        "alt": "Games and entertainment",
        "heading": "Games & Entertainment",
        "summary": "Sports impact our culture,other sources of entertainment and our economy.They help in physical and mental growth and also contribute to the formation of character generally."
    }, {
        "id": 2,
        "alt": "Art and creativity",
        "heading": "Art & Creativity",
        "summary": "Art is the expression or application of human creative skill and imagination, typically in a visual form such as painting or sculpture, producing works to be appreciated primarily for their beauty or emotional power."
    } 
]

export const blogs: BlogProps[] = [
    {
        id: 1,
        alt: "Graduating pupils",
        summary: "Graduating set gives farewell speech,says how happy they are to be moving to the next level..."
    }, {
        id: 2,
        alt: "Visits",
        summary: "Nestle Milo visit to the school.See what Nestle Nigeria had to discuss with the students amidst other entertainment..."
    }, {
        id: 3,
        alt: "Parent Teacher Association",
        summary: "Parents suggest ways to enhance optimum development and improved facilities at PTA meeting..."
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
