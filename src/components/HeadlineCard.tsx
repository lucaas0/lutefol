import Image, { StaticImageData } from "next/image";
import '../assets/styles/headlines.css';
import { Months, Weekday } from "@/misc";
import Link from "next/link";

interface OwnProps {
    id: string;
    imageUrl: StaticImageData;
    title: string;
    date: Date;
    category: string;
}
const HeadlineCard = (props: OwnProps) => {
    const { imageUrl, title, date, id, category } = props;

    const getCategoryColor = (category: string) => {
        switch (category.toLocaleLowerCase()) {
            case 'news':
                return 'color-EB6CE0';
            case 'football':
                return 'color-8BC34A'
            default:
                return 'color-EB6CE0';
        }
    }

    return (
        <Link href={`/news/${id}/post`}>
        <div className='headline-wrapper'>
            <div className="headline-container">
                <div className="headline-background-image">
                    <Image src={imageUrl} alt="" width={1000} height={1000} />
                </div>
            </div>
            <div className="headline-name">
                <div className="flex items-center gap-4">
                        <span className={`font-bold text-lg uppercase ${getCategoryColor(category)}`}>{category}</span>
                    <span className="bordered-left-sm pl-4">
                        {`${Weekday[date.getDay()]} ${date.getDate()} ${Months[date.getMonth()]} ${date.getFullYear()}`}
                    </span>
                </div>
                <span className="headline-lastname font-bold">
                    { title }
                </span>
            </div>
        </div>
        </Link>
    )
}

export default HeadlineCard;
