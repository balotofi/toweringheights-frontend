import { Button, Icon } from '@chakra-ui/react'
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md'

const BtnSlider = ({direction, action}: BtnSliderProps) => {
    return (
        <Button 
            borderRadius={{base: 'xl', md: '2xl'}} 
            bg='transparent' 
            size={{base: 'sm', md: 'md'}}
            onClick={action}
            border={2}
            borderStyle='solid'
            borderColor='brand.300'
            m={{
                base: direction === 'right' ? '0 0 0 0.2rem' : '0 0.4rem 0 0'
            }}
        >
            <Icon 
                as={ direction === 'right' ? MdArrowForwardIos : MdArrowBackIos }
                w={{base: '4', md: '6'}} 
                h={{base: '4', md: '6'}} 
                color='brand.300' 
            />
        </Button>
    )
}

export default BtnSlider