import { HStack } from "@chakra-ui/react"
import { useRouter } from "next/router"
import { useMemo } from "react"
import Crumb from "./Crumb"

interface IBreadCrumb {
    href: string,
    text: string | undefined
}

const navDict = new Map<string, string>(
    [
        ["Home", "Home"], 
        ["join_us", "Join Us"], 
        ["vacancies", "Career Opportunities"], 
        ["apply", "Apply Now"],
        ["about_us", "About Us"],
        ["admissions", "Admissions"],
        ["contact_us", "Contact Us"],
        ["gallery", "Gallery"],
    ],
)

const BreadCrumbNav = () => {

    const router = useRouter()

    const breadcrumbs: IBreadCrumb[] = useMemo(function generateCrumbs() {
        const asPathWithoutQuery = router.asPath.split('?')[0]
        const asPathNestedRoutes = asPathWithoutQuery.split('/').filter(v => v.length > 0)

        const crumbList = asPathNestedRoutes.map((subpath:string, idx:number) => {
            const text= subpath
            const href= '/' + asPathNestedRoutes.slice(0, idx + 1).join('/')
            return {href, text}
        })

        return [{ href: "/", text: "Home"}, ...crumbList]
    }, [router.asPath])

    for(let i = 0; i < breadcrumbs.length; i++) {
        breadcrumbs[i].text = navDict.get(
            breadcrumbs[i].text!.toString()
        );
    }

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
                />
            ))}
        </HStack>
    )
}

export default BreadCrumbNav