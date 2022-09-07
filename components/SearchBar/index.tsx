import { useCallback, useEffect, useState } from "react"
import { InputGroup, InputLeftElement, Input, FormControl } from "@chakra-ui/react"
import { BiSearchAlt } from "react-icons/bi"
import { searchInputStyle } from "./style"

const SPECIAL_CHARS = /[.*+?^${}() | [\]\\]/g

const SearchBar = () => {

    const [ search, setSearch] = useState('')
    const trimText = useCallback((text: string) => {return text.trimStart()}, [])
    
    useEffect(() => {
        const paragraphs = document.getElementsByClassName("paragraph")

        if (SPECIAL_CHARS.test(search)) {
            setSearch(search.replace(SPECIAL_CHARS, "$&"))
        }
        let regExp = new RegExp(search, "gi")
        for (let i = 0; i < paragraphs.length; i++) {
            if ( paragraphs[i].innerHTML !== undefined) {
                paragraphs[i].innerHTML = (paragraphs[i].textContent)!.replace(regExp, "<mark>$&</mark>")
            }
        }
    }, [search])

    return (
        <>
            <FormControl display={{base: 'none', md: 'flex'}} width={'35%'}>
                <InputGroup width={'100%'}>
                    <InputLeftElement 
                        color= 'brand.400'
                        children={<BiSearchAlt />}
                    />
                    <Input 
                        variant='filled'
                        size='md'
                        type='text' 
                        value={search}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(trimText(e.target.value))}
                        placeholder='Search'
                        sx={searchInputStyle}
                    />
                </InputGroup>
            </FormControl>
        </>
    )
}

export default SearchBar