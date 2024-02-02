import PageHeader from "@/components/PageHeader";
import PageWrapper from "@/components/PageWrapper";
import HeadlineCard from "@/components/HeadlineCard";
import { NewsDB } from "@/NewsDB";
const News = () => {
    return (
        <PageWrapper>
            <PageHeader title="news" />
            <section className="flex flex-col items-center md:flex-row gap-10 my-10 w-full px-8 md:px-32">
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
        </PageWrapper>
    )
}

export default News;
