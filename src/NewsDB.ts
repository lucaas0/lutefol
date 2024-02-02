import { StaticImageData } from "next/image";
import HeadlineImg1 from '../public/card-image.png';
import NewsNuno1 from '../public/news/news-nuno.png';
import NewsNunoLG from '../public/news/news-nuno-lg.png';
import Banner1 from '../public/banner-1.jpeg';
import React from "react";

export type News = {
    id: string;
    thumbnailImg: StaticImageData;
    postImgBg: StaticImageData;
    title: string;
    date: Date;
    category: string;
};

export const NewsDB: News[] = [
    {
        id: '1',
        title: 'Anticipation Peaks as Teams Gear Up for Clash of Titans',
        date: new Date(Date.UTC(2024, 1, 1)),
        thumbnailImg: HeadlineImg1,
        postImgBg: Banner1,
        category: 'Football',
    },
    {
        id: '2',
        title: 'Injury Blow for Piratas FC as Star Player Nuno Reis Sidelined',
        date: new Date(Date.UTC(2024, 1, 2)),
        thumbnailImg: NewsNuno1,
        postImgBg: NewsNunoLG,
        category: 'News',
    }
];