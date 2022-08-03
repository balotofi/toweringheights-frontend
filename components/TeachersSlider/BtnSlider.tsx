import { Button, Icon } from '@chakra-ui/react'
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md'
import { BtnSliderProps } from '../../types'

const BtnSlider = ({direction, action}: BtnSliderProps) => {
    return (
        <Button 
            borderRadius='xl' 
            //p='0.3rem' 
            size='sm'
            onClick={action}
            position='static'
            margin={direction === 'right' ? '0 0 0 0.2rem' : '0 0.4rem 0 0'}
        >
            <Icon as={ direction === 'right' ? MdArrowForwardIos : MdArrowBackIos } w={3} h={3} />
        </Button>
    )
}

export default BtnSlider