'use client';
import PageHeader from "@/components/PageHeader";
import PageWrapper from "@/components/PageWrapper";
import Tab from "@/components/Tab";
import CustomTabs from "@/components/Tabs";
import { usePathname } from "next/navigation";

export default function MatchesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const route = usePathname();

    return (
        <PageWrapper>
            <PageHeader title="Matches" />
            <CustomTabs>
                <Tab title="upcoming" route="/matches" selected={route === '/matches'} />
                <Tab title="results" route="/matches/results" selected={route === '/matches/results'} />
            </CustomTabs>
            {children}
        </PageWrapper>
    );
}