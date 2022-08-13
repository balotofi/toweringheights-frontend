// import { activities } from "../../../data/activities"

// export default function handler(req: any, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: any): void; new(): any } } }) {
//     res.status(200).json(activities)
// }

import path from 'path';
import { promises as fs } from 'fs';

export default async function handler(req: any, res: any) {
  //Find the absolute path of the json directory
  const jsonDirectory = path.join(process.cwd(), 'json');
  //Read the json data file data.json
  const fileContents = await fs.readFile(jsonDirectory + '/data.json', 'utf8');
  //Return the content of the data file in json format
  res.status(200).json(fileContents);
}

