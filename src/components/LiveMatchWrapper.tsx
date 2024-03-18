'use client';
import Image from "next/image";
import CustomTabs from "./Tabs";
import Tab from "./Tab";
import axios from "axios";
import { APIResponse, ExtendedTeamPlayer, MatchDetails, MatchEvent, MatchStatus, MatchT, TeamPlayer } from "../../types/types";
import { listClubPlayers, matchEventURL, matchStatusURL, matchURL } from "@/services/api";
import React, { ReactNode, use, useEffect, useState } from "react";
import { useParams, usePathname } from "next/navigation";
import LogoHomeTeam from '../../public/logo-green.svg';
import LogoAwayTeam from '../../public/logo-red.svg';
import '../../src/assets/styles/live.css';
import '../../src/assets/styles/navbar.css';
import LiveMatchActions from "./LiveMatchActionst";
import LiveActionsModal from "./LiveActionsModal";
import { useSession } from "next-auth/react";
import Loader from "./Loader";
import showToast from "./Toast";
import { ToastTypes } from "@/misc";
import Link from "next/link";


export const LiveMatchContext = React.createContext<MatchDetails | null>(null);

const LiveMatchWrapper = ({ children }: { children: ReactNode }) => {
    const [liveMatch, setLiveMatch] = useState<MatchDetails | null>(null);
    const [showActionsModal, setShowActionsModal] = useState(false);
    const [isFetching, setIsFetching] = useState(false);
    const [playersOut, setPlayersOut] = useState<TeamPlayer[]>([]);

    const [matchTime, setMatchTime] = useState<number>(0);

    useEffect(() => {
        if (!liveMatch || (liveMatch && liveMatch.matchDTO.status !== MatchStatus.LIVE)) return;
        const interval = setInterval(() => {
            const startTime = new Date(liveMatch.realStart).getTime();
            const currentTime = new Date().getTime();
            const elapsedTime = currentTime - startTime;
            setMatchTime(elapsedTime);
        }, 60000);

        return () => clearInterval(interval); // Cleanup interval on component unmount
      }, [liveMatch]);

    const route = usePathname();

    const params: { matchId: string } = useParams();

    const session = useSession();

    useEffect(() => {
        const prepareData = async () => {
            const match = await getLiveMatch();
            setLiveMatch(match);

            if (match) {
                const startTime = new Date(match.realStart).getTime();
                const currentTime = new Date().getTime();
                const elapsedTime = currentTime - startTime;
                setMatchTime(elapsedTime);
            }
        }

        prepareData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // useEffect(() => {
    //     if (session && session.status === 'loading') return;

    //     if (session && session.status === 'authenticated') {
    //         getPlayersOut();
    //     }
    // }, [session.status]);

    // const getPlayersOut = async () => {
    //     if (session && session.status === 'loading') getPlayersOut();

    //     const { data } = await axios.get<APIResponse<ExtendedTeamPlayer>>(listClubPlayers(10000), {
    //         headers: {
    //             Authorization: `Bearer ${session?.data?.accessToken}`,
    //             club: 10000,
    //         }
    //     });

    //     if (liveMatch) {
    //         const allPlayers = data.results;
    //         const playersIn = [...liveMatch.homeTeamPlayers, ...liveMatch.awayTeamPlayers];

    //         const playersNotPlaying = allPlayers.filter(player => {
    //             // Check if the player is not in the players playing array
    //             return !playersIn.some(playingPlayer => playingPlayer.id === player.id);
    //         });
    //         setPlayersOut(playersNotPlaying);
    //     }
    // }

    const getLiveMatch = async () => {
        setIsFetching(true);
        try {
            const { data } = await axios.get<MatchDetails>(matchURL(Number(params.matchId)));
            console.log(data);
            return data;
        } catch (error) {
            console.log(error);
            return null;
        } finally {
            setIsFetching(false);
        }
    }

    const onSaveEvents = async (events: MatchEvent[]) => {
        console.log(events);
        setIsFetching(true);
        try {
            await axios.post(matchEventURL(Number(params.matchId)), {
                matchEventList: events,
            }, {
                headers: {
                    Authorization: `Bearer ${session?.data?.accessToken}`,
                    club: 10000,
                },
            }) 

            const updatedMatch = await getLiveMatch();
            setLiveMatch(updatedMatch);
            setShowActionsModal(false);
        } catch (error) {
            console.log(error);
        } finally {
            setIsFetching(false);
        }
    }

    const formatTime = (milliseconds: number) => {
        const minutes = Math.ceil((milliseconds / (1000 * 60)) % 60); // Rounding minutes up
        const hours = Math.floor((milliseconds / (1000 * 60 * 60)) % 24);
        
        if (hours > 0) {
          return `${hours}h ${minutes}m`;
        } else {
          if (minutes > 0) {
            return `${minutes}`;
          } else {
            return `1`;
          }
        }
    };

    const handleEndGame = async () => {
        if (liveMatch) {
            try {
                const { data: updatedMatchDTO } = await axios.put<MatchT>(matchStatusURL(liveMatch?.matchDTO.id), {matchStatus: MatchStatus.COMPLETED}, {
                    headers: {
                        Authorization: `Bearer ${session?.data?.accessToken}`,
                        club: 10000,
                    },
                });
                setLiveMatch({
                    ...liveMatch,
                    matchDTO: updatedMatchDTO,
                })
                showToast(ToastTypes.SUCCESS, 'Match ended!');
            } catch (error) {
                showToast(ToastTypes.ERROR, 'Error ending match');
            }
        }
    }

    const formatSecondsTime = (seconds: number) => {
        console.log(seconds);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
      
        if (hours > 0) {
          return `${hours}h ${minutes % 60}m`;
        } else {
          return `${minutes}m`;
        }
      };

    return (
        <React.Fragment>
            {
                isFetching && <Loader />
            }
            <main className="flex flex-col items-center live-container p-6 gap-7 h-full">
                {
                    showActionsModal &&
                    <LiveActionsModal
                        onCloseModal={() => setShowActionsModal(false)}
                        onRegisterEvents={onSaveEvents}
                        players={liveMatch ? [...liveMatch.homeTeamPlayers, ...liveMatch.awayTeamPlayers] : []}
                        // playersOut={playersOut}
                        onEndGame={handleEndGame}
                    />
                }
                <Link href="/matches/results" className="flex gap-2 items-center justify-start w-full text-sm">
                    <Image src="/caret-left-ic.svg" width={28} height={28} alt="back" />
                    back to all matches
                </Link>
                <section className="flex justify-between w-full">
                    {liveMatch && liveMatch.matchDTO.status === MatchStatus.LIVE ? (
                    <>
                        <div className="flex gap-3 items-center">
                            <span className="w-2 h-2 bg-red-500 rounded-full" />
                            <h1>Live</h1>
                        </div>
                        <h1 className="text-red-500">{`${formatTime(matchTime)}'`}</h1>
                    </>
                    ) : (
                            <div className="flex gap-3 items-center justify-center w-full my-3">
                                <h1 className="uppercase !text-base">Completed</h1>
                               {liveMatch && liveMatch.realLength && (
                                 <h1 className="text-red-500 !text-base">{`${formatSecondsTime(Number(liveMatch?.realLength))}'`}</h1>
                               )}
                            </div>
                    )}
                </section>
            {
                liveMatch && (
                    <section className="flex items-center w-full justify-between">
                        <div className="flex gap-4 items-center">
                            <h2 className="font-bold uppercase text-sm md:text-xl">{liveMatch.matchDTO.homeTeamName.slice(0, 3)}</h2>
                            <Image src={LogoHomeTeam} alt="" width={52} height={52} />
                        </div>
                        <div className="flex gap-3 scorer-wrapper">
                            <h2 className="font-bold text-sm md:text-xl">{liveMatch.matchDTO.homeTeamScore}</h2>
                            <h2 className="font-bold text-sm md:text-xl">:</h2>
                            <h2 className="font-bold text-sm md:text-xl">{liveMatch.matchDTO.awayTeamScore}</h2>
                        </div>
                        <div className="flex gap-4 items-center">
                            <h2 className="font-bold uppercase text-sm md:text-xl">{liveMatch.matchDTO.awayTeamName.slice(0, 3)}</h2>
                            <Image src={LogoAwayTeam} alt="" width={52} height={52} />
                        </div>
                    </section>
                )
            }
            <section className="w-full">
                <CustomTabs tabPosition="items-center justify-center">
                    <Tab title="summary" route={`/live/${params.matchId}/summary`} selected={route === `/live/${params.matchId}/summary`} />
                    <Tab title="lineups" route={`/live/${params.matchId}/lineups`} selected={route === `/live/${params.matchId}/lineups`} />
                </CustomTabs>
            </section>
            <LiveMatchContext.Provider value={liveMatch}>
            <section className='w-full flex-1 overflow-hidden'>
                {children}
            </section>
            </LiveMatchContext.Provider>
            {
                session && session.status === 'authenticated' && liveMatch && liveMatch.matchDTO.status === MatchStatus.LIVE && (
                    <LiveMatchActions
                        onShowLiveActionsModal={() => setShowActionsModal(true)}
                        onRegisterEvents={onSaveEvents}
                        homeTeamPlayers={liveMatch?.homeTeamPlayers || []}
                        awayTeamPlayers={liveMatch?.awayTeamPlayers || []}
                    />
                )
            }
        </main>
        </React.Fragment>
    )
};

export default LiveMatchWrapper;
