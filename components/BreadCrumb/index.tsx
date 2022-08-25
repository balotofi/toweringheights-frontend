import { 
    HStack,
} from "@chakra-ui/react"
import { useRouter } from "next/router"
import Crumb from "./Crumb"

const BreadCrumbNav = () => {

    const router = useRouter()

    const generateCrumbs = () => {
        const asPathWithoutQuery = router.asPath.split('?')[0]
        const asPathNestedRoutes = asPathWithoutQuery.split('/').filter(v => v.length > 0)

        const crumbList = asPathNestedRoutes.map((subpath:string, idx:number) => {
            const href:string = '/' + asPathNestedRoutes.slice(0, idx + 1).join('/')
            const text:string = subpath.charAt(0).toUpperCase() + subpath.substring(1)
            return {href, text}
        })

        return [{ href: "/", text: "Home"}, ...crumbList]
    }

    const breadcrumbs = generateCrumbs()

    return (
        <HStack 
            align='center' 
            m={'2 !important'}  
            w={{base: '100%', md: '85%'}}
        >
            {breadcrumbs.map((crumb, id:number) => (
                <Crumb {...crumb} key={id} last={id === breadcrumbs.length -1} />
            ))}
        </HStack>
    )
}

export default BreadCrumbNav