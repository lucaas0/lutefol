'use client';
import { useSession } from "next-auth/react";
import Image from "next/image";
import '../assets/styles/pageHeader.css';
type OwnProps = {
    title: string;
}

const PageHeader = (props: OwnProps) => {
    const { title } = props;

    const { data: session } = useSession(); 

    console.log(session);

    return (
        <section className="w-full relative md:mb-10">
                <Image src="/page-header-bg.png" alt="" width={8000} height={500} className="w-full" />
                <div className="flex justify-between w-full">
                    <h1 className="page-header-title">{title}</h1>
                    {
                        session && (
                            <button className="page-header-btn">
                                Create match
                            </button>
                        )
                    }
                </div>
        </section>
    )
}

export default PageHeader;
