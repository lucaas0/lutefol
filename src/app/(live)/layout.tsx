import { Inter } from 'next/font/google';
import '../globals.css';
import { Analytics } from '@vercel/analytics/react';
import { ToastContainer } from 'react-toastify';
import React from 'react';
import LiveMatchWrapper from '@/components/LiveMatchWrapper';
import { Metadata } from 'next';
import AuthSessionProvider from '@/components/AuthSessionProvider';
import SessionGuard from '@/components/SessionGuard';

export const metadata: Metadata = {
  title: 'Lutefol - Next generation football statistics tracking platform',
  description: 'Next generation football statistics tracking platform',
  keywords: 'lutefol, football stats'
}


const InterRegular = Inter({
    subsets: ["latin"],
    weight: "400",
    variable: "--font-inter-regular",
});

const InterBold = Inter({
    subsets: ["latin"],
    weight: "700",
    variable: "--font-inter-bold",
});

export default function LiveMatchLayout({
    children,
}: {
    children: React.ReactNode,
}) {
    

    return (
        <html lang='en'>
            <body className={`${InterRegular.variable} ${InterBold.variable}`} style={{background: '#161616'}}>
            <AuthSessionProvider>
                <SessionGuard>
                    <LiveMatchWrapper>
                    { children }
                    </LiveMatchWrapper>
                    <Analytics />
                    <ToastContainer />
                </SessionGuard>
            </AuthSessionProvider>
            </body>
        </html>
    );
}
