import HeadlineCard from "./HeadlineCard";
import HeadlineImg1 from '../../public/card-image.png';
import { NewsDB } from "@/NewsDB";

const HeadlinesSection = () => {
    return (
        <div className="flex flex-col gap-10 my-10 w-full px-8 md:px-32">
            <h1 className="uppercase text-4xl font-bold">
                Latest Headlines
            </h1>
            <section className="flex flex-col items-center md:items-start md:flex-row gap-10 w-full">
                {
                    NewsDB
                        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()) // Sort by date in descending order
                        .map((news) => (
                            <HeadlineCard
                                id={news.id}
                                title={news.title}
                                imageUrl={news.thumbnailImg}
                                date={news.date}
                                key={`news-card-${news.id}`}
                                category={news.category}
                            />
                        ))
                }
            </section>
        </div>
    )
}

export default HeadlinesSection;
