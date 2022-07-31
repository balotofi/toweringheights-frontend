import { Button, Icon } from '@chakra-ui/react'
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md'
import { BtnSliderProps } from '../../types'

const BtnSlider = ({direction, action}: BtnSliderProps) => {
    return (
        <Button 
            borderRadius='2xl' 
            p='0.5rem' 
            onClick={action}
        >
            <Icon as={ direction === 'right' ? MdArrowForwardIos : MdArrowBackIos } />
        </Button>
    )
}

export default BtnSlider