import Link from "next/link";
import {ContainerIcon, FiscalHostIcon, HomeIcon, ReportIcon} from "@primer/octicons-react";
import {ActiveLink} from "@/components";
import {it} from "node:test";

const temporalAsync = () => {
    return new Promise(resolve => setTimeout(() => {
        console.log(`temporalAsync executed`);
        resolve(true)
    }, 500));
}

const navItems = [
    {
        href: "/about",
        label: "About",
        icon: <ReportIcon size={16}/>
    },
    {
        href: "/pricing",
        label: "Pricing",
        icon: <FiscalHostIcon size={16}/>
    },
    {
        href: "/contact",
        label: "Contact",
        icon: <ContainerIcon size={16}/>
    },
]


export const NavBar = async () => {

    console.log("NavBar creado")
    await temporalAsync();

    return (
        <div className="flex gap-6 bg-pink-200 text-black bg-opacity-30 p-2 m-2 rounded">

            <Link href={'/'} className={'flex gap-2 items-center'}>
                <HomeIcon size={16}/>
                <span> Home </span>
            </Link>
            <div className="flex flex-1"></div>
            {
                navItems.map((item) => (
                    <ActiveLink key={item.href} path={item.href} text={item.label}>
                    </ActiveLink>
                ))
            }
        </div>
    )
}