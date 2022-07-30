import { Container, Heading, Flex } from "@chakra-ui/react"
import { SmallBlobShape, BigBlobShape } from "../Icons"
import TeacherSlide from "./TeacherSlide"

interface StaffProps {
    id: number,
    name: string,
    role: string,
}

const staffs:StaffProps[] = [
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

const TeachersSlider = () => {
    return (
        <Container bg='brand.400' padding='1rem 2rem'>
            <SmallBlobShape h='97.17px' w='113.76px' position='absolute' left='95px' />
            <BigBlobShape w='193.29px' h='182px' />
            <Heading 
                as='h3'
                fontSize='lg'
                fontWeight='bold'
                lineHeight='31px'
                m='0.5rem'
                textAlign='center'
                position='relative'
            >
                Meet Our Team
            </Heading>
            <Flex direction='column' mt='3rem' align='center'>
                {staffs.map((staff => (
                    <TeacherSlide key={staff.id} name={staff.name} role={staff.role} />
                )))}
            </Flex>
        </Container>
    )
}

export default TeachersSlider