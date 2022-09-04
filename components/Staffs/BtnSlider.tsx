import { Button, Icon } from '@chakra-ui/react'
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md'
import { btnSliderIcon } from './style'

const BtnSlider = ({direction, action}: BtnSliderProps) => {
    return (
        <Button 
            onClick={action}
            variant='iconButton'
            size={{base: 'sm', md: 'md'}}
            borderRadius={{base: 'xl', md: '2xl'}} 
            m={ direction === 'right' ? '0 0 0 0.2rem' : '0 0.4rem 0 0'}
        >
            <Icon as={ direction === 'right' ? MdArrowForwardIos : MdArrowBackIos } sx={btnSliderIcon} />
        </Button>
    )
}

export default BtnSlider