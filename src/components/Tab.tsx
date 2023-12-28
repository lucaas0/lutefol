import Link from "next/link";

type OwnProps = {
    route: string;
    title: string;
    selected: boolean;
}

const Tab = (props: OwnProps) => {
    const { route, title, selected } = props;

    return (
        <li className={`link-effect${selected ? ' link-effect__selected' : ''}`}>
            <Link href={route} shallow className="block py-2 px-3 text-white dark:text-white" aria-current="page"> {title} </Link>
        </li>
    )
}

export default Tab;
