import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Pricing SEO Title",
    description: "Pricing Page",
    keywords: ["pricing", "page", "nextjs"],
    authors: [
        {
            name: "John Doe",
            url: "https://example.com",
        },
    ],
}

export default function PricingPage() {
    return (
        <>
            <span className="text-7xl block text-center">Pricing Page</span>
        </>
    )
}