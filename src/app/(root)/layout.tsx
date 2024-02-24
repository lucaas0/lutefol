import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import '../globals.css';
import localFont from 'next/font/local';
import Navbar from '@/components/Navbar';
import { Analytics } from '@vercel/analytics/react';
import AuthSessionProvider from '@/components/AuthSessionProvider';

export const metadata: Metadata = {
    title: 'Lutefol - Next generation football statistics tracking platform',
    description: 'Next generation football statistics tracking platform',
    keywords: 'lutefol, football stats'
}

const danish = localFont({
    src: [
        {
            path: '../../assets/fonts/DinishCondensed-Regular.woff2',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../../assets/fonts/DinishCondensed-Bold.woff2',
            weight: '700',
            style: 'normal',
        },
    ],
});

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
    children: React.ReactNode,
}) {
    return (
        <html lang='en'>
            <body className={`${RobotoRegular.variable} ${RobotoBold.variable} ${danish.className}`}>
            <AuthSessionProvider>
                <Navbar />
                {children}
                <Analytics />
            </AuthSessionProvider>
            </body>
        </html>
    );
}
