'use client';
import React from 'react';
import { useSession } from "next-auth/react";
import Image from "next/image";
import '../assets/styles/pageHeader.css';
import { useState } from "react";
import { Modal } from "./Modal";
import CreateMatchModal from './CreateMatchModal';
type OwnProps = {
    title: string;
}

const PageHeader = (props: OwnProps) => {
    const { title } = props;

    const [showModal, setShowModal] = useState(false);

    const { data: session } = useSession(); 

    return (
        <React.Fragment>
            <section className="w-full relative md:mb-10">
                <Image src="/page-header-bg.png" alt="" width={8000} height={500} className="w-full" />
                <div className="flex justify-between w-full">
                    <h1 className="page-header-title">{title}</h1>
                    {
                        session && title === 'Matches' && (
                            <button className="page-header-btn" onClick={() => setShowModal(true)}>
                                Create match
                            </button>
                        )
                    }
                </div>
            </section>
            {
                showModal && (
                    <CreateMatchModal handleCloseModal={() => setShowModal(false)} />
                )
            }
        </React.Fragment>
    )
}

export default PageHeader;
