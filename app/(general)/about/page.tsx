import {Metadata} from "next";

export const metadata: Metadata = {
    title: "About SEO Title",
    description: "About Page",
    keywords: ["about", "page", "nextjs"],
    authors: [
        {
            name: "John Doe",
            url: "https://example.com",
        },
    ],

}

export default function AboutPage() {
    return (
        <main className="bg-purple-500">
            <span className="text-7xl block text-center">
                About Page
            </span>
        </main>
    )
}