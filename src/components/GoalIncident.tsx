import { Goal, INCIDENTS } from "@/misc";
import Image from "next/image";

type GoalIncidentProps = {
    goal: Goal;
    isSecondTeam: boolean;
}

const GoalIncident = (props: GoalIncidentProps) => {
    const { goal, isSecondTeam } = props;
    const isOwnGoal = goal.type === INCIDENTS.OWN_GOAL;

    return (
        <div className={`flex gap-3 ${isSecondTeam ? 'justify-end' : ''} py-2 w-full`}>
            <div className='flex gap-2'>
                <span>{goal.Scorer.label}</span>
                {goal.Assist && (
                    <span className='grey-949494'>{`(${goal.Assist.label})`}</span>
                )}
            </div>
            <Image src={isOwnGoal ? '/soccer-ball-red.svg' : '/football.svg'} width={24} height={24} alt='' />
        </div>
    )
}

export default GoalIncident;
