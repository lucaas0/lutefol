import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import '../globals.css';
import { Analytics } from '@vercel/analytics/react';

export const metadata: Metadata = {
    title: 'Lutefol - Next generation football statistics tracking platform',
    description: 'Next generation football statistics tracking platform',
    keywords: 'lutefol, football stats'
}

const RobotoRegular = Roboto({
    subsets: ["latin"],
    weight: "400",
    variable: "--font-roboto-regular",
});

const RobotoBold = Roboto({
    subsets: ["latin"],
    weight: "700",
    variable: "--font-roboto-bold",
});

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='en'>
            <body className={`${RobotoRegular.variable} ${RobotoBold.variable}`}>
                {children}
                <Analytics />
            </body>
        </html>
    );
}
