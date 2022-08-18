import { Stack, Flex, Heading, Box, VStack, Text, Image } from '@chakra-ui/react'
import LogoNav from '../Navbar/LogoNav'
import Nav from '../Navbar/Nav'
import BreadCrumbNav from '../BreadCrumb'
import { useState } from 'react'
import { gallery } from '../../data'
import Pagination from '../Pagination'
import Footer from '../Footer'
import ScrollTopBtn from '../Navbar/ScrollTopBtn'

const GalleryPage = () => {

    const [imagesPerPage] = useState(12)
    const [currentPage, setCurrentPage] = useState(1)

    const indexOfLastImage = imagesPerPage * currentPage
    const indexOfFirstImage = indexOfLastImage - imagesPerPage
    const currentImages = gallery.slice(indexOfFirstImage, indexOfLastImage)

    const changePage = (pageNumber: number) => {
        setCurrentPage(pageNumber)
    }

    const nextPage = () => {
        setCurrentPage(currentPage + 1)
    }

    const prevPage = () => {
        setCurrentPage(currentPage - 1)
    }

    return (
        <>
            <LogoNav />
            <Nav />
            <Stack px={{base:'4', md: '8', lg: '16'}} py={{base: '2'}} gap={{base: '5', md: '10'}}>
                <Flex justify='start' mt={{base: '0', md: '2'}}>
                    <BreadCrumbNav />
                </Flex>
                <Stack direction={{base: 'column', md:'row'}} justify={{md:'space-around'}} align={{md: 'center'}}>
                    <VStack mr={{base: '8', md: '4'}} align='start' w={{base: '100%', md: '50%'}}>
                        <Heading as='h1' fontSize='2xl' mb={2}>Our Gallery</Heading>
                        <Box bg='brand.200' w={'100%'} h={'6px'} borderRadius='lg' my={'2 !important'} />
                        <Box bg='brand.200' w={'75%'} h={'6px'} borderRadius='lg' my={'2 !important'} />
                    </VStack>
                    <Text lineHeight={6} my={'6 !important'} w={{base: '100%', md: '40%'}}>
                        Making memories and documenting them is a vital part of life and we appreciate great moments. See some of our favourite and memorable moments in photos.
                    </Text>
                </Stack>
                <Flex flexWrap='wrap' justify='space-around' gap={6} >
                    {currentImages.map((img, idx) => (
                        <Image 
                            key={idx}
                            src={img.img}
                            alt={img.alt}
                            borderRadius='lg'
                            w='380px'
                            h='270px'
                        />
                    ))}
                </Flex>
                <Pagination
                    totalImages={gallery.length}
                    imagesPerPage={imagesPerPage}
                    currentPage={currentPage}
                    changePage={changePage}
                    nextPage={nextPage}
                    prevPage={prevPage}
                />
            </Stack>
            <Footer />
            <ScrollTopBtn />
        </>
    )
}

export default GalleryPage