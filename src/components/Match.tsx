import { Months, Weekday } from "@/misc";
import { UpcomingMatches } from "@/utils";
import Image from "next/image";

const Match = () => {
    return (
        UpcomingMatches.map((match) => {
            return (
                <section className="flex flex-col gap-6 md:gap-0 md:flex-row justify-between bg-true-gray-900 p-6 items-center uppercase" key={`match-${match.date}`}>
                    <div className="flex flex-col text-sm md:text-sm text-center md:text-left">
                        <h3 className="text-teal-400 font-bold">{`${Weekday[match.date.getDay()]} ${match.date.getDate()} ${Months[match.date.getMonth()]} ${match.date.getFullYear()}`}</h3>
                        <h4>{`${match.time} - ${match.location}`}</h4>
                    </div>
                    <div className="flex items-center gap-6">
                        <div className="flex flex-col-reverse md:flex-row items-center gap-4 md:gap-8">
                            <h2 className="font-bold text-xl text-center md:text-left">{match.team1.name}</h2>
                            <Image src={match.team1.logo} alt="" width={52} height={52} />
                        </div>
                        <h2 className="font-bold text-xl">VS</h2>
                        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
                            <Image src={match.team2.logo} alt="" width={52} height={52} />
                            <h2 className="font-bold text-xl text-center md:text-left">{match.team2.name}</h2>
                        </div>
                    </div>
                    <div>
                        <button type="button" className="border border-gray-800 border-solid py-2 px-4 text-base font-bold">
                            MATCH CENTER
                        </button>
                    </div>
                </section>
            )
        })
    )
}

export default Match;
