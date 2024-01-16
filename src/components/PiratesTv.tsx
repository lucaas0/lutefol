import HeadlineCard from "./HeadlineCard";
import HeadlineImg1 from '../../public/headline-1.jpeg';
import HeadlineImg2 from '../../public/headline-2.jpeg';
import HeadlineImg3 from '../../public/headline-3.jpeg';
import HeadlineImg4 from '../../public/headline-4.jpeg';
import VideoContainer from "./VideoContainer";

const PiratesTvSection = () => {
    return (
        <div className="flex flex-col gap-10 my-10 w-full px-8 md:px-32">
            <h1 className="uppercase text-4xl font-bold">
                Piratas TV
            </h1>
            <section className="grid grid-cols-1 justify-items-center md:flex md:flex-row md:flex-wrap justify-between gap-5 w-full">
                <VideoContainer thumbnailUrl="/video-1-thumbnail.png" titleBgColor="video-title-text-bg-1" title="match highlight" duration="00:08" videoFileName="video-1.MOV" />
                <VideoContainer thumbnailUrl="/video-2-thumbnail.png" titleBgColor="video-title-text-bg-2" title="match highlight" duration="00:10" videoFileName="video-2.MOV" />
                <VideoContainer thumbnailUrl="/video-4-thumbnail.png" titleBgColor="video-title-text-bg-3" title="match highlight" duration="00:06" videoFileName="video-4.MOV" />
                <VideoContainer thumbnailUrl="/video-5-thumbnail.png" titleBgColor="video-title-text-bg-1" title="match highlight" duration="00:09" videoFileName="video-5.MOV" />
            </section>
        </div>
    )
}

export default PiratesTvSection;
