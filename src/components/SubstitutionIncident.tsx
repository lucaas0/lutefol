import { Substitution } from "@/misc";
import Image from "next/image";

type SubstitutionIncidentProps = {
    substitution: Substitution;
}

const SubstitutionIncident = (props: SubstitutionIncidentProps) => {
    const { substitution } = props;
    return (
        <div className='flex gap-3 py-2 w-full justify-center'>
            <Image src={'/substitution-ic.svg'} width={18} height={18} alt='' />
            <span>{substitution.playerIn.label}</span> <span className='grey-949494'>{`(${substitution.playerOut.label})`}</span>
        </div>
    )
}

export default SubstitutionIncident;
