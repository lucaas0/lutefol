import { Goal, INCIDENTS, MatchIncident, MiniGame, Substitution, TeamName } from "@/misc";
import Image from "next/image";
import GoalIncident from "./GoalIncident";
import SubstitutionIncident from "./SubstitutionIncident";
import LogoScallywags from '../../public/logo-red.svg';
import LogoCorsairs from '../../public/logo-green.svg';
import LogoBuccaneers from '../../public/pirates-logo.svg';
import { getMatchResult } from "@/utils";

type MiniMatchProps = {
    gameNumber: number;
    match: MiniGame;
}

const MiniMatch = ({ match, gameNumber }: MiniMatchProps) => {
    const { incidents, teams } = match;
    
    const getTeamName = (team: TeamName) => {
        switch (team) {
            case "Scallywags":
                return 'SCA';
            case 'Corsairs':
                return 'COR';
            case 'Buccaneers':
                return 'BUC';
            default:
                break;
        }
    };

    const getTeamLogo = (team: TeamName) => {
        switch (team) {
            case "Scallywags":
                return LogoScallywags;
            case 'Corsairs':
                return LogoCorsairs;
            case 'Buccaneers':
                return LogoBuccaneers;
            default:
                break;
        }
    };

    const GoalComponent = ({ goal }: { goal: Goal; }) => {
        const isSecondTeam = goal.Team === teams[1];
        return (
            <GoalIncident goal={goal} isSecondTeam={isSecondTeam} />
        );
    };

    const renderIncidents = () => {
        return incidents.map((incident, index) => {
            return (
                <div className='goal-line flex' key={index}>
                    {(incident.type === INCIDENTS.GOAL || incident.type === INCIDENTS.OWN_GOAL) && (
                        <GoalComponent goal={incident as Goal} />
                    )}
                    {incident.type === INCIDENTS.SUBSTITUTION && <SubstitutionIncident substitution={incident as Substitution} />}
                    {/* Add other incident types as needed */}
                </div>
            );
        });
    };

    const result = getMatchResult(incidents.filter((incident) => incident.type === INCIDENTS.GOAL || incident.type === INCIDENTS.OWN_GOAL) as Goal[]);

    const getTeamResult = (team: TeamName) => {
        return result[team] || 0;
    }
    return (
        <main className="flex flex-col gap-2 mini-match-container">
            <section className="color-brand-400 font-roboto-bold">
                Jogo {gameNumber}
            </section>
            <section>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <span className="font-roboto">
                            {getTeamName(teams[0])}
                        </span>
                        <Image src={getTeamLogo(teams[0])} alt="" width={24} height={24} />
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="scorer-wrapper font-roboto-bold text-base">
                            {getTeamResult(teams[0])} : {getTeamResult(teams[1])} 
                        </span>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="font-roboto">
                            {getTeamName(teams[1])}
                        </span>
                        <Image src={getTeamLogo(teams[1])} alt="" width={24} height={24} />
                    </div>
                </div>
            </section>
            <section>
                { renderIncidents() }
            </section>
        </main>
    )
}

export default MiniMatch;
