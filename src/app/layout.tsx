import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';
import localFont from 'next/font/local';
import Navbar from '@/components/Navbar';

const danish = localFont({
    src: [
        {
            path: '../assets/fonts/DinishCondensed-Regular.woff2',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../assets/fonts/DinishCondensed-Bold.woff2',
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

export const metadata: Metadata = {
    title: 'lutefol',
    description: 'Unicorn Sports app',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='en'>
            <body className={`${RobotoRegular.variable} ${danish.className}`}>
                <Navbar />
                {children}
            </body>
        </html>
    );
}
