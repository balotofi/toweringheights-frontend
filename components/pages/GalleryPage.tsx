import { Stack, Flex, Heading, Box, VStack, Text } from '@chakra-ui/react'
import Image from 'next/image'
import BreadCrumbNav from '../BreadCrumb'
import { useState } from 'react'
import gallery from '../../data/gallery'
import Pagination from '../Pagination'
import { headingBorder, galleryBox } from '../../theme/components/boxStyles'

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
        <Stack px={{base:'4', md: '8', lg: '16'}} py={{base: '2'}} gap={{base: '5', md: '10'}}>
            <Flex justify='start' mt={{base: '0', md: '2'}}>
                <BreadCrumbNav />
            </Flex>
            <Stack direction={{base: 'column', md:'row'}} justify={{md:'space-around'}} align={{md: 'center'}}>
                <VStack mr={{base: '8', md: '4'}} align='start' w={{base: '100%', md: '50%'}}>
                    <Heading as='h2' variant='h2' mb={2}>Our Gallery</Heading>
                    <Box bg='brand.200' w={'100%'} sx={headingBorder} />
                    <Box bg='brand.200' w={'75%'}  sx={headingBorder} />
                </VStack>
                <Text my={'6 !important'} w={{base: '100%', md: '40%'}}>
                    Making memories and documenting them is a vital part of life and we appreciate great moments. See some of our favourite and memorable moments in photos.
                </Text>
            </Stack>
            <Flex flexWrap='wrap' justify='space-around' gap={6} >
                {currentImages.map((img, idx) => (
                    <Box key={idx} sx={galleryBox}>
                        <Image 
                            src={img.img} 
                            alt={img.alt} 
                            width={300} 
                            height={250} 
                            placeholder='blur'
                        />
                    </Box>
                ))}
            </Flex>
            <Pagination
                totalImages={gallery.length}
                {...({imagesPerPage,currentPage,changePage,nextPage,prevPage})}
            />
        </Stack>
    )
}

export default GalleryPage