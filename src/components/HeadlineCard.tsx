import Image, { StaticImageData } from "next/image";
import '../assets/styles/headlines.css';

interface OwnProps {
    imageUrl: StaticImageData;

}
const HeadlineCard = (props: OwnProps) => {
    const { imageUrl } = props;
    return (
        <div className='headline-wrapper'>
            <div className="headline-container">
                <div className="headline-background-image">
                    <Image src={imageUrl} alt="" width={1000} height={1000} />
                </div>
            </div>
            <div className="headline-name">
                <span className="headline-lastname">
                    Pirates FC Soars to Victory in a Spectacular Show of Skill!
                </span>
            </div>
        </div>
    )
}

export default HeadlineCard;
