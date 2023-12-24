'use client';
import { Banners } from "@/utils";
import '../assets/styles/carousel.css';
import { useEffect, useState } from "react";

const ImageCarousel = () => {
    const [banner, setBanner] = useState(1);

    useEffect(() => {
        setTimeout(() => {
            setBanner((prevBanner) => prevBanner === 4 ? 1 : prevBanner + 1);
        }, 5000);
    }, [banner]);

    const renderBannerText = () => {
        switch (banner) {
            case 1:
                return (
                    <div className="slider-title text-6xl md:text-9xl">
                        Strenghten <br />
                        your <br />
                        resolve
                    </div>
                );
            case 2:
                return (
                    <div className="slider-title text-3xl md:text-6xl">
                        A Brotherhood forged in football, <br />
                        sailing the waves of victory!
                    </div>
                );
            default:
                return (
                    <div className="slider-title text-6xl md:text-9xl">
                        Strenghten <br />
                        your <br />
                        resolve
                    </div>
                );
        }
    }
    return (
        <div className="slider-container">
            <div className="menu">
                <div className="slider-title text-6xl md:text-9xl">
                    {renderBannerText()}
                </div>
                <div className="menu-slide">
                    <label htmlFor="slide-dot-1" className={`${banner === 1 ? 'label-selected' : ''}`}></label>
                    <label htmlFor="slide-dot-2" className={`${banner === 2 ? 'label-selected' : ''}`}></label>
                    <label htmlFor="slide-dot-3" className={`${banner === 3 ? 'label-selected' : ''}`}></label>
                    <label htmlFor="slide-dot-4" className={`${banner === 4 ? 'label-selected' : ''}`}></label>
                </div>
            </div>

            <input id="slide-dot-1" type="radio" name="slides" checked={banner === 1 ? true : false} />
            <div className="slide slide-1"></div>

            <input id="slide-dot-2" type="radio" name="slides" checked={banner === 2 ? true : false} />
            <div className="slide slide-2"></div>

            <input id="slide-dot-3" type="radio" name="slides" checked={banner === 3 ? true : false} />
            <div className="slide slide-3"></div>

            <input id="slide-dot-3" type="radio" name="slides" checked={banner === 4 ? true : false} />
            <div className="slide slide-4"></div>
        </div>
    )
}

export default ImageCarousel;
