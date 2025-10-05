import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Contact SEO Title",
    description: "Contact Page",
    keywords: ["contact", "page", "nextjs"],
    authors: [
        {
            name: "John Doe",
            url: "https://example.com",
        },
    ],
}

export default function ContactPage() {
    return (
        <>
            <span className="text-7xl block text-center">Contact Page</span>

        </>
    )
}