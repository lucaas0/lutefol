import HeadlinesSection from '@/components/Headlines';
import ImageCarousel from '@/components/ImageCarousel';
import PageWrapper from '@/components/PageWrapper';
import PiratesTvSection from '@/components/PiratesTv';

export default function Home() {
    return (
        <PageWrapper>
            <ImageCarousel />
            <HeadlinesSection />
            <PiratesTvSection />
        </PageWrapper>
    );
}
