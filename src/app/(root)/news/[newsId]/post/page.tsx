'use client';
import React, { useEffect, useState } from 'react';
import '../../../../../assets/styles/post.css';
import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { News, NewsDB } from '@/NewsDB';
import { renderContent } from '@/NewsPostContent';
import Image1 from '../../../../../../public/banner-1.jpeg';

const Post = () => {
    const params: { newsId: string } = useParams();

    const [post, setPost] = useState<News | undefined>(undefined);

    useEffect(() => {
        const getPost = () => {
            const post = NewsDB.find((p) => p.id === params.newsId);
            setPost(post);
        }
        getPost();
    }, [params.newsId]);

    return (
        <div className="post-wrapper">
            <div className="post-section min-h-full" style={{ backgroundImage: post ? `url(${post?.postImgBg.src})` : Image1.src,  }}>
                <div className="absolute top-4 md:top-20 left-4 md:left-16 flex gap-3">
                    <Link href="/news" className="flex items-center md:gap-2">
                        <Image src="/caret-left-ic.svg" width={24} height={24} alt={`<`} />
                        <span className="uppercase text-sm md:text-xl">back to all news</span>
                    </Link>
                </div>
                <div className='absolute bottom-0 flex flex-col p-4 md:p-16 gap2 md:gap-6'>
                    <span className='text-xl'>
                        {post && `${post.date.getDate()}/${post.date.getMonth() + 1}/${post.date.getFullYear()}`}
                    </span>
                    <span className='font-bold max-w-xxs md:max-w-sm text-sm md:text-4xl'>
                        { post && post.title }
                    </span>
                </div>
            </div>

            <div className="post-section post-section-text flex-col items-center justify-center bg-black min-h-fit">
                <div className='w-10/12 md:w-1/2'>
                    {post && renderContent(post.id) }
                </div>
            </div>
        </div>
    )
};

export default Post;
