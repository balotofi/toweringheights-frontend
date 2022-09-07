import { 
    HStack,
} from "@chakra-ui/react"
import { useRouter } from "next/router"
import { useMemo } from "react"
import Crumb from "./Crumb"

interface IPath {
    newPath?: string
}

const BreadCrumbNav = ({newPath}: IPath) => {

    const router = useRouter()

    const transformPath= (text: string) => {
        let arr: string[] = text.replace(/_/,' ').toLowerCase().split(' ')
        for (let i = 0; i < arr.length; i++) {
                arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].substring(1)
        }
        return arr.join(' ')
    }

    const breadcrumbs = useMemo(function generateCrumbs() {
        const asPathWithoutQuery = router.asPath.split('?')[0]
        const asPathNestedRoutes = asPathWithoutQuery.split('/').filter(v => v.length > 0)

        const crumbList = asPathNestedRoutes.map((subpath:string, idx:number) => {
            const href:string = '/' + asPathNestedRoutes.slice(0, idx + 1).join('/')
            const text: string = transformPath(subpath)
            return {href, text}
        })

        console.log(crumbList)
        return [{ href: "/", text: "Home"}, ...crumbList]
    }, [router.asPath])

    const lastPath = breadcrumbs[breadcrumbs.length -1].text

    return (
        <HStack 
            align='center' 
            m={'2 !important'}   
            w={{base: '100%', md: '85%'}}
        >
            {breadcrumbs.map((crumb, id:number) => (
                <Crumb {...crumb} 
                    key={id} 
                    last={id === breadcrumbs.length -1} 
                    newPath={newPath} 
                    transformPath={transformPath}
                    lastPath={lastPath}
                />
            ))}
        </HStack>
    )
}

export default BreadCrumbNav