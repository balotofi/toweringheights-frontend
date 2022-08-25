import { Flex, Link, Box, Button } from "@chakra-ui/react"
import { BiCaretRight, BiCaretLeft } from "react-icons/bi"
import { pagenumber } from "./style"

const Pagination = ({totalImages, imagesPerPage, currentPage, nextPage, prevPage, changePage}: PaginationProps) => {

    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalImages / imagesPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <Flex m={'1rem 0.5rem !important'} justify='space-between' align='center' >
            <Flex justify='space-around' gap={3}>
                {pageNumbers.map((number: number) => (
                    <Flex key={number} sx={pagenumber} bg={ currentPage === number ? 'brand.300' : 'white'}>
                        <Link
                            onClick={() => changePage(number)}
                            color= {currentPage === number ? 'white' : 'brand.300'}
                        >
                            {number}
                        </Link>
                    </Flex>
                ))}
            </Flex>

            <Box color={'white'} fontWeight='normal'>
                <Button 
                    onClick={prevPage} 
                    size='sm'
                    variant='solid'
                    _hover= {{border: '1px solid'}}
                    leftIcon={<BiCaretLeft />} 
                    isDisabled={currentPage === pageNumbers[0] ? true : false}
                >
                    Prev
                </Button>
                <Button 
                    onClick={nextPage}
                    size='sm'
                    variant='solid'
                    _hover= {{border: '1px solid'}}
                    rightIcon={<BiCaretRight />} 
                    isDisabled={currentPage === pageNumbers.length ? true : false}
                >
                    Next
                </Button>
            </Box>
        </Flex>
    )
}

export default Pagination
