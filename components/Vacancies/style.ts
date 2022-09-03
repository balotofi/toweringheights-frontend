import { CSSProperties } from "react"

export const detailBox = {
    border: '1px solid',
    borderColor: 'font.100', 
    borderRadius: 'xl',
    width: {base: '100%', md: '80%'}, 
    mx: 6,
    px: 6,
    py: 3,
}

export const flexStyle = {
    align: 'center',
    gap: 4,
    fontWeight: 'medium',
}

export const vStackStyle = {
    w: {base: '100%', md: '70%', lg: '50%'}, 
    bg: 'brand.300',
    p: 6, 
    color: 'white',
    borderRadius: 'md',
    lineHeight: 6,
    gap: 3,
}

export const fileInputStyle = {
    pl: 28,
    color: 'black', 
    bg: 'font.200',
    _placeholder: {
        color: 'rgba(0, 0, 0, 0.5)',
        fontSize: 'sm',
    },
    _disabled: {
        bg: 'font.200',
        border: '1px solid',
        borderColor: 'font.200'
    }
}

export const inputStyle = {
    p: 4,
    color: 'font.300', 
    fontSize: 'md',
    bg: 'white',
    _placeholder: {
        color: 'rgba(0, 0, 0, 0.5)',
        fontSize: 'sm',
    },
    _focus: {
        bg: 'white',
        border: '1px solid',
        borderColor: 'font.300'
    }
}

export const formStyle: CSSProperties = {
    width: '95%', 
    display:'flex', 
    flexDirection:'column', 
    gap: '1rem', 
    alignItems: 'center',
}

export const helperTextStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: 2,
    color: 'yellow.400',
    fontSize: 'sm',
    fontWeight: 'semibold',
}

export const submitBtnStyle = {
    bg: 'white',
    my: 3,
    color: 'brand.300',
    fontWeight: 'medium',
    border: '1px solid',
    borderColor: 'white',
    transition: '0.5s all ease-in-out',
    _hover: {
        color: 'white',
        bg: 'transparent',
        border: '1px solid',
    }
}