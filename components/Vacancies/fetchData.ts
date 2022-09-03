import axios, { AxiosResponse } from "axios"

interface IData {
  name: string
  capital: string
}

export const fetchStates = async () => {
    const options = {
        method: 'GET',
        url: 'https://nigeria-states-and-lga.p.rapidapi.com/lgalists',
        headers: {
          'X-RapidAPI-Key': '5c574e550amshb4097610bf61cb9p1187bfjsnfb0dd34ccfaf',
          'X-RapidAPI-Host': 'nigeria-states-and-lga.p.rapidapi.com'
        }
    }
    
    await axios.request(options).then( (response) => {
        console.log('axios',response.data)
        const data = response.data
        return data
    }).catch((error) => {
        console.error(error)
    })
}

export const fetcher = async() => {
    await axios.get('http://locationsng-api.herokuapp.com/api/v1/states')
    .then((response: AxiosResponse<IData[]>)=> {
        return response.data
    })
    .catch((error) => {
        return error
    })
}
