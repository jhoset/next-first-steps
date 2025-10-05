import {NavBar} from "@/components";

export default function GeneralLayout(
    {children}: { children: React.ReactNode }) {
    return (
        <>
            <NavBar/>
            <h1 className="flex flex-col text-red-500"> Hello Root Layout, I am a nested Layout </h1>
            {children}
        </>
    )

}