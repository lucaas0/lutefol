import PageHeader from "@/components/PageHeader";
import PageWrapper from "@/components/PageWrapper";
import HeadlineImg1 from '../../../public/card-image.png';
import HeadlineCard from "@/components/HeadlineCard";
const News = () => {
    return (
        <PageWrapper>
            <PageHeader title="news" />
            <section className="flex flex-col gap-10 my-10 w-full px-8 md:px-32">
                <HeadlineCard title="Anticipation Peaks as Teams Gear Up for Clash of Titans" imageUrl={HeadlineImg1} date={new Date(Date.UTC(2024, 1, 1))} />
            </section>
        </PageWrapper>
    )
}

export default News;
