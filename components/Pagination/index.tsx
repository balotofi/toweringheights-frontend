import { Flex, Link, Box, Button } from "@chakra-ui/react"
import { BiCaretRight, BiCaretLeft } from "react-icons/bi"
import { PaginationProps } from "../../types"

const Pagination = ({totalImages, imagesPerPage, currentPage, nextPage, prevPage, changePage}:PaginationProps) => {

    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalImages / imagesPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <Flex m={'1rem 0.5rem !important'} justify='space-between' align='center' >
            <Flex justify='space-around' gap={3}>
                {pageNumbers.map((number: number) => (
                    <Flex 
                        key={number} 
                        borderRadius='md'
                        border={1}
                        borderStyle='solid'
                        borderColor={'brand.300'}
                        w='35px'
                        h='40px'
                        align='center'
                        justify='center'
                        bg={ currentPage === number ? 'brand.300' : 'white'}
                    >
                        <Link
                            onClick={() => changePage(number)}
                            color= {currentPage === number ? 'white' : 'brand.300'}
                            textDecoration='none !important'
                        >
                            {number}
                        </Link>
                    </Flex>
                ))}
            </Flex>

            <Box color={'white'} fontWeight='normal'>
                <Button 
                    size='sm'
                    bg={'brand.300'}
                    colorScheme='blue'
                    leftIcon={<BiCaretLeft />} 
                    onClick={prevPage} 
                    isDisabled={currentPage === pageNumbers[0] ? true : false}
                >
                    Prev
                </Button>
                <Button 
                    size='sm'
                    bg={'brand.300'}
                    colorScheme='blue'
                    rightIcon={<BiCaretRight />} 
                    onClick={nextPage}
                    isDisabled={currentPage === pageNumbers.length ? true : false}
                >
                    Next
                </Button>
            </Box>
        </Flex>
    )
}

export default Pagination