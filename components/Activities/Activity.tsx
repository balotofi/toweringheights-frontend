import { Flex, Heading, Image, Text, Box } from '@chakra-ui/react'

const Activity = ({...activity}) => {
    return (
        <Flex id={activity.id} direction='column' margin='1.5rem 0'>
            <Image
                borderRadius='2xl'
                width='225px'
                height='184px'
                src='https://bit.ly/dan-abramov'
                alt={activity.alt}
            />
            <Box>
                <Heading as='h4' 
                    lineHeight={7} 
                    fontSize='xl' 
                    fontWeight='bold' 
                    margin='1.8rem 0 1.5rem'
                >
                    {activity.heading}
                </Heading>
                <Text lineHeight={7} fontWeight='normal'>{activity.summary}</Text>
            </Box>
        </Flex>
    )
}

export default Activity

//const fetcher = (url:string) => fetch(url).then((res) => res.json())

// const [activities, setActivities] = useState([])

// const fetchData = async () => {
//     const res = await fetch('/api/activities')
//     const data = await res.json()
//     setActivities(data)
//     console.log(data, 'data')
//     //console.log(activities, 'activities')
// }
// useEffect(() => {
//     fetchData()
// },[])

// const { data, error } = useSWR('/api/activities', fetcher)

// console.log(data)
// if(error) return <Box>Failed to load</Box>

// if(!data) return <Box>Loading</Box>