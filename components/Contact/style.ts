import { CSSProperties } from "react"

export const flexStyle = {
    align: 'center',
    gap: 4,
    fontWeight: 'medium',
}

export const vStackStyle = {
    w: {base: '100%', md: '50%'}, 
    bg: 'brand.300',
    p: 6, 
    color: 'white',
    borderRadius: 'md',
    lineHeight: 6,
    gap: 3,
}

export const inputStyle = {
    color: 'font.300', 
    size: 'lg',
    bg: 'white',
    _placeholder: {
        color: 'rgba(0, 0, 0, 0.5)'
    },
    _focus: {
        bg: 'white',
        border: '2px solid',
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

export const findUsHeading = {
    color: 'font.300',
    fontSize: '2xl',
    fontWeight: 'bold',
    lineHeight: 7,
}