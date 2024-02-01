import HeadlineCard from "./HeadlineCard";
import HeadlineImg1 from '../../public/card-image.png';

const HeadlinesSection = () => {
    return (
        <div className="flex flex-col gap-10 my-10 w-full px-8 md:px-32">
            <h1 className="uppercase text-4xl font-bold">
                Latest Headlines
            </h1>
            <section className="grid grid-cols-2 justify-items-center md:flex md:flex-row md:flex-wrap justify-between gap-5 w-full">
                <HeadlineCard title="Anticipation Peaks as Teams Gear Up for Clash of Titans" imageUrl={HeadlineImg1} date={new Date(Date.UTC(2024, 1, 1))} />
            </section>
        </div>
    )
}

export default HeadlinesSection;
