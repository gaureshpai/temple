import type { Metadata } from "next";
import "@/public/styles/globals.css";

export const metadata: Metadata = {
    title: "temple website",
    description: "Designed and developed by Gauresh",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className=''
            >
                {children}
            </body>
        </html>
    );
}
