'use client';

import Image from 'next/image';
import React, { useState } from 'react';

interface VideoProps {
    title: string;
    videoFileName: string;
    thumbnailUrl: string;
    duration: string;
    titleBgColor: string;
}

const VideoContainer: React.FC<VideoProps> = ({ title, titleBgColor, videoFileName, thumbnailUrl, duration }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="relative w-300 h-200 border-solid border-1 border-gray-300">
            <div onClick={openModal} className="cursor-pointer video-wrapper">
                <Image src={thumbnailUrl} alt='' className="w-full h-full object-cover opacity-40" width={300} height={200} />
                <div className="absolute top-1/4 left-8">
                    <h3 className={`m-0 text-white uppercase font-bold text-4xl ${titleBgColor} max-w-fit`}>Match</h3>
                    <h3 className={`m-0 text-white uppercase font-bold text-4xl ${titleBgColor} max-w-fit`}>Highlight</h3>
                </div>
                <div className="absolute bottom-0 right-0 text-white bg-black font-bold text-base py-1 px-2">
                    <div className='flex gap-2'>
                        <Image src="/ic-play.svg" width={16} height={16} alt='' />
                        {duration}
                    </div>
                </div>
            </div>

            {isModalOpen && (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex justify-center items-center z-50">
                    <div className="max-w-800 max-h-600 relative">
                        <video
                            controls
                            className="w-full h-full"
                            style={{ maxWidth: '100%', maxHeight: '100%', width: '650px', height: '600px' }}
                        >
                            <source src={`/videos/${videoFileName}`} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 text-white hover:text-gray-300"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default VideoContainer;
