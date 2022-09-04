import { MdEmail, MdFacebook } from "react-icons/md"
import { IoLogoWhatsapp } from "react-icons/io"

export const footerLinks: IFooterLink[] = [
    {
        href: '/',
        text: 'Home'
    }, {
        href: '/about',
        text: 'About us'
    }, {
        href: '/gallery',
        text: 'Gallery'
    }, {
        href: '/teachers',
        text: 'Teachers'
    }, {
        href: '/parents',
        text: 'Parents'
    }, {
        href: '/joinus',
        text: 'Join us'
    }, {
        href: '/contact',
        text: 'Contact'
    }
]

export const footerSocials: IFooterSocial[] = [
    {
        href: 'www.github.com/Meekunn/',
        icon: MdEmail,
        text: 'Gmail'
    }, {
        href: 'www.github.com/Meekunn/',
        icon: MdFacebook,
        text: 'Facebook'
    }, {
        href: 'www.github.com/Meekunn/',
        icon: IoLogoWhatsapp,
        text: 'WhatsApp'
    }
]