import Image from "next/image";
import '../assets/styles/pageHeader.css';
type OwnProps = {
    title: string;
}

const PageHeader = (props: OwnProps) => {
    const { title } = props;
    return (
        <section className="w-full relative">
            <Image src="/page-header-bg.png" alt="" width={8000} height={500} className="w-full" />
            <h1 className="page-header-title">{title}</h1>
        </section>
    )
}

export default PageHeader;
