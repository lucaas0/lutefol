import HeadlineCard from "./HeadlineCard";
import HeadlineImg1 from '../../public/headline-1.jpeg';
import HeadlineImg2 from '../../public/headline-2.jpeg';
import HeadlineImg3 from '../../public/headline-3.jpeg';
import HeadlineImg4 from '../../public/headline-4.jpeg';

const HeadlinesSection = () => {
    return (
        <div className="flex flex-col gap-10 my-10 w-full px-8 md:px-32">
            <h1 className="uppercase text-4xl font-bold">
                Latest Headlines
            </h1>
            <section className="grid grid-cols-2 justify-items-center md:flex md:flex-row md:flex-wrap justify-between gap-5 w-full">
                <HeadlineCard imageUrl={HeadlineImg1} />
                <HeadlineCard imageUrl={HeadlineImg2} />
                <HeadlineCard imageUrl={HeadlineImg3} />
                <HeadlineCard imageUrl={HeadlineImg4} />
            </section>
        </div>
    )
}

export default HeadlinesSection;
