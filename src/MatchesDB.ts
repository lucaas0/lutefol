
import LogoRed from '../public/logo-red.svg';
import LogoGreen from '../public/logo-green.svg';
import LogoBlue from '../public/pirates-logo.svg';
import { INCIDENTS, Match } from "@/misc";
import { AlexandreLopes, AlexandreMendes, AlexandreSantos, AndreSalvado, BernardoFigueiredo, DiogoDomingues, FranciscoMachado, GustavoCarreira, JoaoFerreira, JoaoMota, JoaoPaulino, JorgeFerreira, JosePedrosa, LucasGarcia, LuisSantos, NunoReis, PedroGoncalves, PedroLopes, RenatoOliveira, RodrigoAlves, RubenRodrigues, TomasSantos, WildCard } from "@/playersDB";
import { MatchDetails, MatchStatus, MatchT, Modality } from '../types/types';


export const PastMatchesResults: MatchT[] = [
    {
        id: 20240104,
        homeTeamName: 'Scallywags',
        homeTeamScore: 12,
        awayTeamName: 'Corsairs',
        awayTeamScore: 22,
        createdDate: '',
        lastModifiedDate: '',
        status: MatchStatus.COMPLETED,
        modality: Modality.FUTSAL,
        scheduledLength: '',
        scheduledStart: '2024-01-04T18:30:00Z',
        venueId: 1,
        venueName: 'Leirifoot',
    },
    {
        id: 20240108,
        homeTeamName: 'Scallywags',
        homeTeamScore: 17,
        awayTeamName: 'Corsairs',
        awayTeamScore: 19,
        createdDate: '',
        lastModifiedDate: '',
        status: MatchStatus.COMPLETED,
        modality: Modality.FUTSAL,
        scheduledLength: '',
        scheduledStart: '2024-01-08T18:30:00Z',
        venueId: 1,
        venueName: 'Leirifoot',
    },
    {
        id: 20240111,
        homeTeamName: 'Scallywags',
        homeTeamScore: 15,
        awayTeamName: 'Corsairs',
        awayTeamScore: 8,
        createdDate: '',
        lastModifiedDate: '',
        status: MatchStatus.COMPLETED,
        modality: Modality.FUTSAL,
        scheduledLength: '',
        scheduledStart: '2024-01-11T18:30:00Z',
        venueId: 1,
        venueName: 'Leirifoot',
    },
    {
        id: 20240115,
        homeTeamName: 'Scallywags',
        homeTeamScore: 16,
        awayTeamName: 'Corsairs',
        awayTeamScore: 13,
        createdDate: '',
        lastModifiedDate: '',
        status: MatchStatus.COMPLETED,
        modality: Modality.FUTSAL,
        scheduledLength: '',
        scheduledStart: '2024-01-15T18:30:00Z',
        venueId: 1,
        venueName: 'Leirifoot',
    },
    {
        id: 20240118,
        homeTeamName: 'Scallywags',
        homeTeamScore: 14,
        awayTeamName: 'Corsairs',
        awayTeamScore: 7,
        createdDate: '',
        lastModifiedDate: '',
        status: MatchStatus.COMPLETED,
        modality: Modality.FUTSAL,
        scheduledLength: '',
        scheduledStart: '2024-01-18T18:30:00Z',
        venueId: 1,
        venueName: 'Leirifoot',
    },
    {
        id: 20240122,
        homeTeamName: 'Scallywags',
        homeTeamScore: 17,
        awayTeamName: 'Corsairs',
        awayTeamScore: 16,
        createdDate: '',
        lastModifiedDate: '',
        status: MatchStatus.COMPLETED,
        modality: Modality.FUTSAL,
        scheduledLength: '',
        scheduledStart: '2024-01-22T18:30:00Z',
        venueId: 1,
        venueName: 'Leirifoot',
    },
    {
        id: 20240125,
        homeTeamName: 'Scallywags',
        homeTeamScore: 15,
        awayTeamName: 'Corsairs',
        awayTeamScore: 20,
        createdDate: '',
        lastModifiedDate: '',
        status: MatchStatus.COMPLETED,
        modality: Modality.FUTSAL,
        scheduledLength: '',
        scheduledStart: '2024-01-25T18:30:00Z',
        venueId: 1,
        venueName: 'Leirifoot',
    },
    {
        id: 20240129,
        homeTeamName: 'Scallywags',
        homeTeamScore: 12,
        awayTeamName: 'Corsairs',
        awayTeamScore: 18,
        createdDate: '',
        lastModifiedDate: '',
        status: MatchStatus.COMPLETED,
        modality: Modality.FUTSAL,
        scheduledLength: '',
        scheduledStart: '2024-01-29T18:30:00Z',
        venueId: 1,
        venueName: 'Leirifoot',
    },
    {
        id: 20240201,
        homeTeamName: 'Scallywags',
        homeTeamScore: 18,
        awayTeamName: 'Corsairs',
        awayTeamScore: 21,
        createdDate: '',
        lastModifiedDate: '',
        status: MatchStatus.COMPLETED,
        modality: Modality.FUTSAL,
        scheduledLength: '',
        scheduledStart: '2024-02-01T18:30:00Z',
        venueId: 1,
        venueName: 'Leirifoot',
    },
    {
        id: 20240205,
        homeTeamName: 'Scallywags',
        homeTeamScore: 13,
        awayTeamName: 'Corsairs',
        awayTeamScore: 11,
        createdDate: '',
        lastModifiedDate: '',
        status: MatchStatus.COMPLETED,
        modality: Modality.FUTSAL,
        scheduledLength: '',
        scheduledStart: '2024-02-05T18:30:00Z',
        venueId: 1,
        venueName: 'Leirifoot',
    },
    // roda bota fora dia 08-02-2024
    {
        id: 20240212,
        homeTeamName: 'Scallywags',
        homeTeamScore: 26,
        awayTeamName: 'Corsairs',
        awayTeamScore: 13,
        createdDate: '',
        lastModifiedDate: '',
        status: MatchStatus.COMPLETED,
        modality: Modality.FUTSAL,
        scheduledLength: '',
        scheduledStart: '2024-02-12T18:30:00Z',
        venueId: 1,
        venueName: 'Leirifoot',
    },
    {
        id: 20240215,
        homeTeamName: 'Scallywags',
        homeTeamScore: 18,
        awayTeamName: 'Corsairs',
        awayTeamScore: 14,
        createdDate: '',
        lastModifiedDate: '',
        status: MatchStatus.COMPLETED,
        modality: Modality.FUTSAL,
        scheduledLength: '',
        scheduledStart: '2024-02-15T18:30:00Z',
        venueId: 1,
        venueName: 'Leirifoot',
    },
    {
        id: 20240222,
        homeTeamName: 'Scallywags',
        homeTeamScore: 16,
        awayTeamName: 'Corsairs',
        awayTeamScore: 13,
        createdDate: '',
        lastModifiedDate: '',
        status: MatchStatus.COMPLETED,
        modality: Modality.FUTSAL,
        scheduledLength: '',
        scheduledStart: '2024-02-22T18:30:00Z',
        venueId: 1,
        venueName: 'Leirifoot',
    },
    {
        id: 20240226,
        homeTeamName: 'Scallywags',
        homeTeamScore: 24,
        awayTeamName: 'Corsairs',
        awayTeamScore: 14,
        createdDate: '',
        lastModifiedDate: '',
        status: MatchStatus.COMPLETED,
        modality: Modality.FUTSAL,
        scheduledLength: '',
        scheduledStart: '2024-02-26T18:30:00Z',
        venueId: 1,
        venueName: 'Leirifoot',
    },
    {
        id: 20240229,
        homeTeamName: 'Scallywags',
        homeTeamScore: 18,
        awayTeamName: 'Corsairs',
        awayTeamScore: 26,
        createdDate: '',
        lastModifiedDate: '',
        status: MatchStatus.COMPLETED,
        modality: Modality.FUTSAL,
        scheduledLength: '',
        scheduledStart: '2024-02-29T18:30:00Z',
        venueId: 1,
        venueName: 'Leirifoot',
    },
    {
        id: 12,
        homeTeamName: 'Scallywags',
        homeTeamScore: 15,
        awayTeamName: 'Corsairs',
        awayTeamScore: 13,
        createdDate: '',
        lastModifiedDate: '',
        status: MatchStatus.COMPLETED,
        modality: Modality.FUTSAL,
        scheduledLength: '',
        scheduledStart: '2024-03-04T18:30:00Z',
        venueId: 1,
        venueName: 'Leirifoot',
    },
    {
        id: 101,
        homeTeamName: 'Scallywags',
        homeTeamScore: 9,
        awayTeamName: 'Corsairs',
        awayTeamScore: 11,
        createdDate: '',
        lastModifiedDate: '',
        status: MatchStatus.COMPLETED,
        modality: Modality.FUTSAL,
        scheduledLength: '',
        scheduledStart: '2024-03-07T18:30:00Z',
        venueId: 1,
        venueName: 'Leirifoot',
    },
    {
        id: 1265,
        homeTeamName: 'Scallywags',
        homeTeamScore: 16,
        awayTeamName: 'Corsairs',
        awayTeamScore: 22,
        createdDate: '',
        lastModifiedDate: '',
        status: MatchStatus.COMPLETED,
        modality: Modality.FUTSAL,
        scheduledLength: '',
        scheduledStart: '2024-03-18T18:30:00Z',
        venueId: 1,
        venueName: 'Leirifoot',
    },
    {
        id: 1602,
        homeTeamName: 'Scallywags',
        homeTeamScore: 17,
        awayTeamName: 'Corsairs',
        awayTeamScore: 11,
        createdDate: '',
        lastModifiedDate: '',
        status: MatchStatus.COMPLETED,
        modality: Modality.FUTSAL,
        scheduledLength: '',
        scheduledStart: '2024-03-21T18:30:00Z',
        venueId: 1,
        venueName: 'Leirifoot',
    },
]

export const Matches: Match[] = [
    {
        id: '20240104',
        teams: [
            { name: 'Scallywags', logo: LogoRed, players: [AndreSalvado, JoaoFerreira, BernardoFigueiredo, DiogoDomingues, RodrigoAlves, AlexandreSantos]},
            { name: 'Corsairs', logo: LogoGreen, players: [ RubenRodrigues, NunoReis, RenatoOliveira, LucasGarcia, JosePedrosa, GustavoCarreira]}
        ],
        date: new Date(Date.UTC(2024, 0, 4)),
        time: '18:30',
        location: 'LeiriFoot',
        incidents: [
            { type: INCIDENTS.GOAL, Scorer: DiogoDomingues, Assist: AndreSalvado, Team: 'Scallywags' },
            { type: INCIDENTS.GOAL, Scorer: NunoReis, Assist: null, Team: 'Corsairs' },
            { type: INCIDENTS.GOAL, Scorer: RubenRodrigues, Assist: JosePedrosa, Team: 'Corsairs' },
            { type: INCIDENTS.GOAL, Scorer: JosePedrosa, Assist: null, Team: 'Corsairs' },
            { type: INCIDENTS.GOAL, Scorer: LucasGarcia, Assist: null, Team: 'Corsairs' },
            { type: INCIDENTS.GOAL, Scorer: LucasGarcia, Assist: null, Team: 'Corsairs' },
            { type: INCIDENTS.GOAL, Scorer: NunoReis, Assist: LucasGarcia, Team: 'Corsairs' },
            { type: INCIDENTS.GOAL, Scorer: RenatoOliveira, Assist: JosePedrosa, Team: 'Corsairs' },
            { type: INCIDENTS.GOAL, Scorer: LucasGarcia, Assist: RubenRodrigues, Team: 'Corsairs' },
            { type: INCIDENTS.GOAL, Scorer: JoaoFerreira, Assist: AndreSalvado, Team: 'Scallywags' },
            { type: INCIDENTS.GOAL, Scorer: JosePedrosa, Assist: LucasGarcia, Team: 'Corsairs' },
            { type: INCIDENTS.GOAL, Scorer: RubenRodrigues, Assist: null, Team: 'Corsairs' },
            { type: INCIDENTS.GOAL, Scorer: JoaoFerreira, Assist: null, Team: 'Scallywags' },
            { type: INCIDENTS.GOAL, Scorer: DiogoDomingues, Assist: null, Team: 'Scallywags' },
            { type: INCIDENTS.GOAL, Scorer: JosePedrosa, Assist: null, Team: 'Corsairs' },
            { type: INCIDENTS.GOAL, Scorer: NunoReis, Assist: null, Team: 'Corsairs' },
            { type: INCIDENTS.GOAL, Scorer: JosePedrosa, Assist: null, Team: 'Corsairs' },
            { type: INCIDENTS.GOAL, Scorer: JosePedrosa, Assist: RubenRodrigues, Team: 'Corsairs' },
            { type: INCIDENTS.GOAL, Scorer: RubenRodrigues, Assist: null, Team: 'Corsairs' },
            { type: INCIDENTS.GOAL, Scorer: JoaoFerreira, Assist: RodrigoAlves, Team: 'Scallywags' },
            { type: INCIDENTS.GOAL, Scorer: RubenRodrigues, Assist: JosePedrosa, Team: 'Corsairs' },
            { type: INCIDENTS.GOAL, Scorer: DiogoDomingues, Assist: null, Team: 'Scallywags' },
            { type: INCIDENTS.GOAL, Scorer: AlexandreSantos, Assist: RodrigoAlves, Team: 'Scallywags' },
            { type: INCIDENTS.GOAL, Scorer: JosePedrosa, Assist: null, Team: 'Corsairs' },
            { type: INCIDENTS.GOAL, Scorer: NunoReis, Assist: null, Team: 'Corsairs' },
            { type: INCIDENTS.GOAL, Scorer: JosePedrosa, Assist: null, Team: 'Corsairs' },
            { type: INCIDENTS.GOAL, Scorer: BernardoFigueiredo, Assist: DiogoDomingues, Team: 'Scallywags' },
            { type: INCIDENTS.GOAL, Scorer: DiogoDomingues, Assist: null, Team: 'Scallywags' },
            { type: INCIDENTS.GOAL, Scorer: RodrigoAlves, Assist: DiogoDomingues, Team: 'Scallywags' },
            { type: INCIDENTS.GOAL, Scorer: GustavoCarreira, Assist: JosePedrosa, Team: 'Corsairs' },
            { type: INCIDENTS.GOAL, Scorer: NunoReis, Assist: null, Team: 'Corsairs' },
            { type: INCIDENTS.GOAL, Scorer: JosePedrosa, Assist: null, Team: 'Corsairs' },
            { type: INCIDENTS.GOAL, Scorer: BernardoFigueiredo, Assist: AndreSalvado, Team: 'Scallywags' },
            { type: INCIDENTS.GOAL, Scorer: AndreSalvado, Assist: null, Team: 'Scallywags' }],
    },
    {
        id: '20240108',
        teams: [
            {
                name: 'Scallywags', logo: LogoRed, players: [
                    AndreSalvado, JoaoFerreira, JoaoPaulino, BernardoFigueiredo, DiogoDomingues, GustavoCarreira,
                ]
            },
            {
                name: 'Corsairs', logo: LogoGreen, players: [
                    RubenRodrigues, NunoReis, RenatoOliveira, LucasGarcia, AlexandreLopes, RodrigoAlves,
                ]
            }
        ],
        date: new Date(Date.UTC(2024, 0, 8)),
        time: '18:30',
        location: 'LeiriFoot',
        incidents: [
            {type: INCIDENTS.GOAL, Scorer: NunoReis, Assist: RubenRodrigues, Team: 'Corsairs' },
            {type: INCIDENTS.GOAL, Scorer: RubenRodrigues, Assist: null, Team: 'Corsairs' },
            {type: INCIDENTS.GOAL, Scorer: AlexandreLopes, Assist: LucasGarcia, Team: 'Corsairs' },
            {type: INCIDENTS.GOAL, Scorer: AndreSalvado, Assist: null, Team: 'Scallywags' },
            {type: INCIDENTS.GOAL, Scorer: LucasGarcia, Assist: null, Team: 'Corsairs' },
            {type: INCIDENTS.GOAL, Scorer: LucasGarcia, Assist: AlexandreLopes, Team: 'Corsairs' },
            {type: INCIDENTS.GOAL, Scorer: NunoReis, Assist: LucasGarcia, Team: 'Corsairs' },
            {type: INCIDENTS.GOAL, Scorer: AndreSalvado, Assist: null, Team: 'Scallywags' },
            {type: INCIDENTS.GOAL, Scorer: AndreSalvado, Assist: null, Team: 'Scallywags' },
            {type: INCIDENTS.GOAL, Scorer: LucasGarcia, Assist: NunoReis, Team: 'Corsairs' },
            {type: INCIDENTS.GOAL, Scorer: NunoReis, Assist: null, Team: 'Corsairs' },
            {type: INCIDENTS.GOAL, Scorer: GustavoCarreira, Assist: null, Team: 'Scallywags' },
            {type: INCIDENTS.GOAL, Scorer: RubenRodrigues, Assist: NunoReis, Team: 'Corsairs' },
            {type: INCIDENTS.GOAL, Scorer: DiogoDomingues, Assist: null, Team: 'Scallywags' },
            {type: INCIDENTS.GOAL, Scorer: JoaoFerreira, Assist: null, Team: 'Scallywags' },
            {type: INCIDENTS.GOAL, Scorer: AlexandreLopes, Assist: NunoReis, Team: 'Corsairs' },
            {type: INCIDENTS.GOAL, Scorer: RodrigoAlves, Assist: NunoReis, Team: 'Corsairs' },
            {type: INCIDENTS.GOAL, Scorer: AndreSalvado, Assist: null, Team: 'Scallywags' },
            {type: INCIDENTS.GOAL, Scorer: JoaoPaulino, Assist: null, Team: 'Scallywags' },
            {type: INCIDENTS.GOAL, Scorer: JoaoFerreira, Assist: AndreSalvado, Team: 'Scallywags' },
            {type: INCIDENTS.GOAL, Scorer: JoaoFerreira, Assist: null, Team: 'Scallywags' },
            {type: INCIDENTS.GOAL, Scorer: BernardoFigueiredo, Assist: null, Team: 'Scallywags' },
            {type: INCIDENTS.GOAL, Scorer: AndreSalvado, Assist: BernardoFigueiredo, Team: 'Scallywags' },
            {type: INCIDENTS.GOAL, Scorer: JoaoPaulino, Assist: null, Team: 'Scallywags' },
            {type: INCIDENTS.GOAL, Scorer: AndreSalvado, Assist: null, Team: 'Scallywags' },
            {type: INCIDENTS.GOAL, Scorer: RubenRodrigues, Assist: null, Team: 'Corsairs' },
            {type: INCIDENTS.GOAL, Scorer: LucasGarcia, Assist: null, Team: 'Corsairs' },
            {type: INCIDENTS.GOAL, Scorer: LucasGarcia, Assist: RodrigoAlves, Team: 'Corsairs' },
            {type: INCIDENTS.GOAL, Scorer: DiogoDomingues, Assist: null, Team: 'Scallywags' },
            {type: INCIDENTS.GOAL, Scorer: NunoReis, Assist: LucasGarcia, Team: 'Corsairs' },
            {type: INCIDENTS.GOAL, Scorer: RenatoOliveira, Assist: null, Team: 'Corsairs' },
            {type: INCIDENTS.GOAL, Scorer: LucasGarcia, Assist: NunoReis, Team: 'Corsairs' },
            {type: INCIDENTS.GOAL, Scorer: AndreSalvado, Assist: null, Team: 'Scallywags' },
            {type: INCIDENTS.GOAL, Scorer: NunoReis, Assist: AlexandreLopes, Team: 'Corsairs' },
            {type: INCIDENTS.GOAL, Scorer: AlexandreLopes, Assist: NunoReis, Team: 'Corsairs' },
            {type: INCIDENTS.GOAL, Scorer: JoaoPaulino, Assist: null, Team: 'Scallywags' },
        ]
    },
    {
        id: '20240111',
        teams: [
            { name: 'Scallywags', logo: LogoRed, players: [TomasSantos, JoaoFerreira, RodrigoAlves, DiogoDomingues, LucasGarcia] },
            { name: 'Corsairs', logo: LogoGreen, players: [RubenRodrigues, AlexandreSantos, JorgeFerreira, GustavoCarreira, NunoReis, JoaoMota] }
        ],
        date: new Date(Date.UTC(2024, 0, 11)),
        time: '18:30',
        location: 'LeiriFoot',
        incidents: [
            {type: INCIDENTS.GOAL, Scorer: GustavoCarreira, Assist: null, Team: 'Corsairs' },
            {type: INCIDENTS.GOAL, Scorer: DiogoDomingues, Assist: LucasGarcia, Team: 'Scallywags' },
            {type: INCIDENTS.GOAL, Scorer: RubenRodrigues, Assist: AlexandreSantos, Team: 'Corsairs' },
            {type: INCIDENTS.GOAL, Scorer: AlexandreSantos, Assist: NunoReis, Team: 'Corsairs' },
            {type: INCIDENTS.GOAL, Scorer: JoaoFerreira, Assist: LucasGarcia, Team: 'Scallywags' },
            {type: INCIDENTS.GOAL, Scorer: JoaoFerreira, Assist: DiogoDomingues, Team: 'Scallywags' },
            {type: INCIDENTS.GOAL, Scorer: JoaoFerreira, Assist: null, Team: 'Scallywags' },
            {type: INCIDENTS.GOAL, Scorer: JoaoFerreira, Assist: null, Team: 'Scallywags' },
            {type: INCIDENTS.GOAL, Scorer: JoaoMota, Assist: null, Team: 'Scallywags' },
            {type: INCIDENTS.GOAL, Scorer: DiogoDomingues, Assist: JoaoFerreira, Team: 'Scallywags' },
            {type: INCIDENTS.GOAL, Scorer: RodrigoAlves, Assist: null, Team: 'Scallywags' },
            {type: INCIDENTS.GOAL, Scorer: GustavoCarreira, Assist: JoaoMota, Team: 'Corsairs' },
            {type: INCIDENTS.GOAL, Scorer: RubenRodrigues, Assist: null, Team: 'Corsairs' },
            {type: INCIDENTS.GOAL, Scorer: JoaoFerreira, Assist: null, Team: 'Scallywags' },
            {type: INCIDENTS.GOAL, Scorer: JorgeFerreira, Assist: NunoReis, Team: 'Corsairs' },
            {type: INCIDENTS.GOAL, Scorer: DiogoDomingues, Assist: TomasSantos, Team: 'Scallywags' },
            {type: INCIDENTS.GOAL, Scorer: JoaoMota, Assist: NunoReis, Team: 'Corsairs' },
            {type: INCIDENTS.GOAL, Scorer: TomasSantos, Assist: null, Team: 'Scallywags' },
            {type: INCIDENTS.GOAL, Scorer: LucasGarcia, Assist: null, Team: 'Scallywags' },
            {type: INCIDENTS.GOAL, Scorer: RodrigoAlves, Assist: JoaoFerreira, Team: 'Scallywags' },
            {type: INCIDENTS.GOAL, Scorer: TomasSantos, Assist: null, Team: 'Scallywags' },
            {type: INCIDENTS.GOAL, Scorer: RodrigoAlves, Assist: LucasGarcia, Team: 'Scallywags' },
            {type: INCIDENTS.GOAL, Scorer: RubenRodrigues, Assist: null, Team: 'Corsairs' }
        ]
    },
    {
        id: '20240115',
        teams: [
            {
                name: 'Scallywags', logo: LogoRed, players: [
                    NunoReis, LucasGarcia, AlexandreLopes, BernardoFigueiredo, RubenRodrigues,
                ]
            },
            {
                name: 'Corsairs', logo: LogoGreen, players: [
                    JosePedrosa, JoaoFerreira, AndreSalvado, JoaoPaulino, TomasSantos, RenatoOliveira
                ]
            },
        ],
        date: new Date(Date.UTC(2024, 0, 15)),
        time: '18:30',
        location: 'LeiriFoot',
        incidents: [
            {type: INCIDENTS.GOAL, Scorer: LucasGarcia, Assist: BernardoFigueiredo, Team: 'Scallywags' },
            {type: INCIDENTS.GOAL, Scorer: TomasSantos, Assist: AndreSalvado, Team: 'Corsairs' },
            {type: INCIDENTS.GOAL, Scorer: LucasGarcia, Assist: null, Team: 'Scallywags' },
            {type: INCIDENTS.GOAL, Scorer: JoaoPaulino, Assist: JoaoFerreira, Team: 'Corsairs' },
            {type: INCIDENTS.GOAL, Scorer: AlexandreLopes, Assist: LucasGarcia, Team: 'Scallywags' },
            {type: INCIDENTS.GOAL, Scorer: NunoReis, Assist: RubenRodrigues, Team: 'Scallywags' },
            {type: INCIDENTS.GOAL, Scorer: LucasGarcia, Assist: AlexandreLopes, Team: 'Scallywags' },
            {type: INCIDENTS.GOAL, Scorer: LucasGarcia, Assist: null, Team: 'Scallywags' },
            {type: INCIDENTS.GOAL, Scorer: AlexandreLopes, Assist: LucasGarcia, Team: 'Scallywags' },
            {type: INCIDENTS.GOAL, Scorer: JosePedrosa, Assist: null, Team: 'Corsairs' },
            {type: INCIDENTS.GOAL, Scorer: NunoReis, Assist: AlexandreLopes, Team: 'Scallywags' },
            {type: INCIDENTS.GOAL, Scorer: JoaoFerreira, Assist: JoaoPaulino, Team: 'Corsairs' },
            {type: INCIDENTS.GOAL, Scorer: JoaoPaulino, Assist: JoaoFerreira, Team: 'Corsairs' },
            {type: INCIDENTS.GOAL, Scorer: AndreSalvado, Assist: JoaoPaulino, Team: 'Corsairs' },
            {type: INCIDENTS.GOAL, Scorer: NunoReis, Assist: TomasSantos, Team: 'Scallywags' },
            {type: INCIDENTS.GOAL, Scorer: NunoReis, Assist: null, Team: 'Scallywags' },
            {type: INCIDENTS.GOAL, Scorer: JoaoFerreira, Assist: JoaoPaulino, Team: 'Corsairs' },
            {type: INCIDENTS.GOAL, Scorer: AlexandreLopes, Assist: LucasGarcia, Team: 'Scallywags' },
            {type: INCIDENTS.GOAL, Scorer: JoaoFerreira, Assist: JoaoPaulino, Team: 'Corsairs' },
            {type: INCIDENTS.GOAL, Scorer: AndreSalvado, Assist: JosePedrosa, Team: 'Corsairs' },
            {type: INCIDENTS.GOAL, Scorer: RubenRodrigues, Assist: AlexandreLopes, Team: 'Scallywags' },
            {type: INCIDENTS.GOAL, Scorer: JosePedrosa, Assist: AndreSalvado, Team: 'Corsairs' },
            {type: INCIDENTS.GOAL, Scorer: NunoReis, Assist: LucasGarcia, Team: 'Scallywags' },
            {type: INCIDENTS.GOAL, Scorer: AlexandreLopes, Assist: LucasGarcia, Team: 'Scallywags' },
            {type: INCIDENTS.GOAL, Scorer: AlexandreLopes, Assist: LucasGarcia, Team: 'Scallywags' },
            {type: INCIDENTS.GOAL, Scorer: JoaoPaulino, Assist: null, Team: 'Corsairs' },
            {type: INCIDENTS.GOAL, Scorer: AndreSalvado, Assist: JoaoFerreira, Team: 'Corsairs' },
            {type: INCIDENTS.GOAL, Scorer: AndreSalvado, Assist: RenatoOliveira, Team: 'Corsairs' },
            {type: INCIDENTS.GOAL, Scorer: NunoReis, Assist: AlexandreLopes, Team: 'Scallywags' },
        ],
    },
    {
        id: '20240118',
        teams: [
            {
                name: 'Scallywags', logo: LogoRed, players: [
                    AlexandreSantos, RubenRodrigues, JosePedrosa, LucasGarcia, BernardoFigueiredo
                ]
            },
            {
                name: 'Corsairs', logo: LogoGreen, players: [
                    JoaoFerreira, NunoReis, DiogoDomingues, PedroLopes, RodrigoAlves, RenatoOliveira
                ]
            },
        ],
        date: new Date(Date.UTC(2024, 0, 18)),
        time: '18:30',
        location: 'LeiriFoot',
        incidents: [
            { type: INCIDENTS.GOAL, Team: 'Corsairs', Scorer: NunoReis, Assist: DiogoDomingues },
            { type: INCIDENTS.GOAL, Team: 'Scallywags', Scorer: RubenRodrigues, Assist: null },
            { type: INCIDENTS.GOAL, Team: 'Corsairs', Scorer: JoaoFerreira, Assist: NunoReis },
            { type: INCIDENTS.GOAL, Team: 'Scallywags', Scorer: DiogoDomingues, Assist: JosePedrosa },
            { type: INCIDENTS.GOAL, Team: 'Corsairs', Scorer: NunoReis, Assist: JoaoFerreira },
            { type: INCIDENTS.GOAL, Team: 'Scallywags', Scorer: LucasGarcia, Assist: BernardoFigueiredo },
            { type: INCIDENTS.GOAL, Team: 'Scallywags', Scorer: LucasGarcia, Assist: JosePedrosa },
            { type: INCIDENTS.GOAL, Team: 'Scallywags', Scorer: RubenRodrigues, Assist: BernardoFigueiredo },
            { type: INCIDENTS.GOAL, Team: 'Scallywags', Scorer: JosePedrosa, Assist: null },
            { type: INCIDENTS.GOAL, Team: 'Scallywags', Scorer: JosePedrosa, Assist: null },
            { type: INCIDENTS.GOAL, Team: 'Corsairs', Scorer: NunoReis, Assist: DiogoDomingues },
            { type: INCIDENTS.GOAL, Team: 'Scallywags', Scorer: RubenRodrigues, Assist: BernardoFigueiredo },
            { type: INCIDENTS.GOAL, Team: 'Scallywags', Scorer: LucasGarcia, Assist: JosePedrosa },
            { type: INCIDENTS.GOAL, Team: 'Corsairs', Scorer: DiogoDomingues, Assist: null },
            { type: INCIDENTS.GOAL, Team: 'Corsairs', Scorer: RodrigoAlves, Assist: null },
            { type: INCIDENTS.GOAL, Team: 'Scallywags', Scorer: AlexandreSantos, Assist: JosePedrosa },
            { type: INCIDENTS.GOAL, Team: 'Scallywags', Scorer: AlexandreSantos, Assist: JosePedrosa },
            { type: INCIDENTS.GOAL, Team: 'Scallywags', Scorer: LucasGarcia, Assist: null },
            { type: INCIDENTS.GOAL, Team: 'Scallywags', Scorer: AlexandreSantos, Assist: LucasGarcia },
            { type: INCIDENTS.GOAL, Team: 'Scallywags', Scorer: JosePedrosa, Assist: AlexandreSantos },
            { type: INCIDENTS.GOAL, Team: 'Corsairs', Scorer: JoaoFerreira, Assist: null },
        ]
    },
    {
        id: '20240122',
        teams: [
            {
                name: 'Scallywags', logo: LogoRed, players: [
                    BernardoFigueiredo, JoaoPaulino, PedroLopes, LucasGarcia, GustavoCarreira, JoaoFerreira,
                ]
            },
            {
                name: 'Corsairs', logo: LogoGreen, players: [
                    NunoReis, AlexandreLopes, RenatoOliveira, DiogoDomingues, JorgeFerreira, WildCard,
                ]
            },
        ],
        date: new Date(Date.UTC(2024, 0, 22)),
        time: '18:30',
        location: 'LeiriFoot',
        incidents: [
            {type: INCIDENTS.GOAL, Scorer: LucasGarcia, Assist: JoaoPaulino, Team: 'Scallywags' },
            {type: INCIDENTS.GOAL, Scorer: LucasGarcia, Assist: JoaoPaulino, Team: 'Scallywags' },
            {type: INCIDENTS.GOAL, Scorer: LucasGarcia, Assist: BernardoFigueiredo, Team: 'Scallywags' },
            {type: INCIDENTS.GOAL, Scorer: AlexandreLopes, Assist: WildCard, Team: 'Corsairs' },
            {type: INCIDENTS.GOAL, Scorer: AlexandreLopes, Assist: JorgeFerreira, Team: 'Corsairs' },
            {type: INCIDENTS.GOAL, Scorer: BernardoFigueiredo, Assist: LucasGarcia, Team: 'Scallywags' },
            {type: INCIDENTS.GOAL, Scorer: NunoReis, Assist: null, Team: 'Corsairs' },
            {type: INCIDENTS.GOAL, Scorer: JoaoFerreira, Assist: LucasGarcia, Team: 'Scallywags' },
            {type: INCIDENTS.GOAL, Scorer: JoaoFerreira, Assist: JoaoPaulino, Team: 'Scallywags' },
            {type: INCIDENTS.GOAL, Scorer: DiogoDomingues, Assist: NunoReis, Team: 'Corsairs' },
            {type: INCIDENTS.GOAL, Scorer: WildCard, Assist: AlexandreLopes, Team: 'Corsairs' },
            {type: INCIDENTS.GOAL, Scorer: JoaoPaulino, Assist: null, Team: 'Scallywags' },
            {type: INCIDENTS.GOAL, Scorer: NunoReis, Assist: WildCard, Team: 'Corsairs' },
            {type: INCIDENTS.GOAL, Scorer: LucasGarcia, Assist: JoaoPaulino, Team: 'Scallywags' },
            {type: INCIDENTS.GOAL, Scorer: AlexandreLopes, Assist: null, Team: 'Corsairs' },
            {type: INCIDENTS.GOAL, Scorer: AlexandreLopes, Assist: NunoReis, Team: 'Corsairs' },
            {type: INCIDENTS.GOAL, Scorer: WildCard, Assist: NunoReis, Team: 'Corsairs' },
            {type: INCIDENTS.GOAL, Scorer: NunoReis, Assist: JorgeFerreira, Team: 'Corsairs' },
            {type: INCIDENTS.GOAL, Scorer: LucasGarcia, Assist: JoaoFerreira, Team: 'Scallywags' },
            {type: INCIDENTS.GOAL, Scorer: DiogoDomingues, Assist: RenatoOliveira, Team: 'Corsairs' },
            {type: INCIDENTS.GOAL, Scorer: JoaoPaulino, Assist: LucasGarcia, Team: 'Scallywags' },
            {type: INCIDENTS.GOAL, Scorer: JorgeFerreira, Assist: null, Team: 'Corsairs' },
            {type: INCIDENTS.GOAL, Scorer: LucasGarcia, Assist: JoaoFerreira, Team: 'Scallywags' },
            {type: INCIDENTS.GOAL, Scorer: BernardoFigueiredo, Assist: null, Team: 'Scallywags' },
            {type: INCIDENTS.GOAL, Scorer: JoaoFerreira, Assist: LucasGarcia, Team: 'Scallywags' },
            {type: INCIDENTS.GOAL, Scorer: JoaoPaulino, Assist: JoaoFerreira, Team: 'Scallywags' },
            {type: INCIDENTS.GOAL, Scorer: WildCard, Assist: AlexandreLopes, Team: 'Corsairs' },
            {type: INCIDENTS.GOAL, Scorer: JoaoPaulino, Assist: null, Team: 'Scallywags' },
            {type: INCIDENTS.GOAL, Scorer: AlexandreLopes, Assist: WildCard, Team: 'Corsairs' },
            {type: INCIDENTS.GOAL, Scorer: JoaoPaulino, Assist: JoaoFerreira, Team: 'Scallywags' },
            {type: INCIDENTS.GOAL, Scorer: JorgeFerreira, Assist: null, Team: 'Corsairs' },
            {type: INCIDENTS.GOAL, Scorer: JoaoPaulino, Assist: null, Team: 'Scallywags' },
            {type: INCIDENTS.GOAL, Scorer: DiogoDomingues, Assist: JorgeFerreira, Team: 'Corsairs' },
        ]
    },
    {
        id: '20240125',
        teams: [
            {
                name: 'Scallywags', logo: LogoRed, players: [
                    JoaoFerreira, DiogoDomingues, PedroGoncalves, RenatoOliveira, WildCard, JorgeFerreira,
                ]
            },
            {
                name: 'Corsairs', logo: LogoGreen, players: [
                    LucasGarcia, RubenRodrigues, AndreSalvado, RodrigoAlves, TomasSantos, GustavoCarreira
                ]
            }
        ],
        date: new Date(Date.UTC(2024, 0, 25)),
        time: '18:30',
        location: 'LeiriFoot',
        incidents: [
            {type: INCIDENTS.GOAL, Scorer: RubenRodrigues, Assist: LucasGarcia, Team: 'Corsairs' },
            {type: INCIDENTS.GOAL, Scorer: LucasGarcia, Assist: null, Team: 'Corsairs' },
            {type: INCIDENTS.GOAL, Scorer: WildCard, Assist: null, Team: 'Scallywags' },
            {type: INCIDENTS.GOAL, Scorer: WildCard, Assist: null, Team: 'Scallywags' },
            {type: INCIDENTS.GOAL, Scorer: DiogoDomingues, Assist: null, Team: 'Scallywags' },
            {type: INCIDENTS.GOAL, Scorer: JorgeFerreira, Assist: null, Team: 'Scallywags' },
            {type: INCIDENTS.GOAL, Scorer: PedroGoncalves, Assist: JorgeFerreira, Team: 'Scallywags' },
            {type: INCIDENTS.GOAL, Scorer: LucasGarcia, Assist: null, Team: 'Corsairs' },
            {type: INCIDENTS.GOAL, Scorer: LucasGarcia, Assist: RubenRodrigues, Team: 'Corsairs' },
            {type: INCIDENTS.GOAL, Scorer: AndreSalvado, Assist: null, Team: 'Corsairs' },
            {type: INCIDENTS.GOAL, Scorer: GustavoCarreira, Assist: AndreSalvado, Team: 'Corsairs' },
            {type: INCIDENTS.GOAL, Scorer: JoaoFerreira, Assist: WildCard, Team: 'Scallywags' },
            {type: INCIDENTS.GOAL, Scorer: WildCard, Assist: DiogoDomingues, Team: 'Scallywags' },
            {type: INCIDENTS.GOAL, Scorer: PedroGoncalves, Assist: WildCard, Team: 'Scallywags' },
            {type: INCIDENTS.GOAL, Scorer: LucasGarcia, Assist: null, Team: 'Corsairs' },
            {type: INCIDENTS.GOAL, Scorer: DiogoDomingues, Assist: WildCard, Team: 'Scallywags' },
            {type: INCIDENTS.GOAL, Scorer: JoaoFerreira, Assist: null, Team: 'Scallywags' },
            {type: INCIDENTS.GOAL, Scorer: JoaoFerreira, Assist: null, Team: 'Scallywags' },
            {type: INCIDENTS.GOAL, Scorer: LucasGarcia, Assist: null, Team: 'Corsairs' },
            {type: INCIDENTS.GOAL, Scorer: RubenRodrigues, Assist: LucasGarcia, Team: 'Corsairs' },
            {type: INCIDENTS.GOAL, Scorer: AndreSalvado, Assist: GustavoCarreira, Team: 'Corsairs' },
            {type: INCIDENTS.GOAL, Scorer: TomasSantos, Assist: LucasGarcia, Team: 'Corsairs' },
            {type: INCIDENTS.GOAL, Scorer: RubenRodrigues, Assist: null, Team: 'Corsairs' },
            {type: INCIDENTS.GOAL, Scorer: AndreSalvado, Assist: null, Team: 'Corsairs' },
            {type: INCIDENTS.GOAL, Scorer: RubenRodrigues, Assist: TomasSantos, Team: 'Corsairs' },
            {type: INCIDENTS.GOAL, Scorer: RubenRodrigues, Assist: RodrigoAlves, Team: 'Corsairs' },
            {type: INCIDENTS.GOAL, Scorer: DiogoDomingues, Assist: null, Team: 'Scallywags' },
            {type: INCIDENTS.GOAL, Scorer: GustavoCarreira, Assist: AndreSalvado, Team: 'Corsairs' },
            {type: INCIDENTS.GOAL, Scorer: RenatoOliveira, Assist: WildCard, Team: 'Scallywags' },
            {type: INCIDENTS.GOAL, Scorer: WildCard, Assist: JorgeFerreira, Team: 'Scallywags' },
            {type: INCIDENTS.GOAL, Scorer: RubenRodrigues, Assist: LucasGarcia, Team: 'Corsairs' },
            {type: INCIDENTS.GOAL, Scorer: AndreSalvado, Assist: LucasGarcia, Team: 'Corsairs' },
            {type: INCIDENTS.GOAL, Scorer: GustavoCarreira, Assist: LucasGarcia, Team: 'Corsairs' },
            {type: INCIDENTS.GOAL, Scorer: WildCard, Assist: null, Team: 'Scallywags' },
            {type: INCIDENTS.GOAL, Scorer: LucasGarcia, Assist: GustavoCarreira, Team: 'Corsairs' },
        ]
    },
    {
        id: '20240129',
        teams: [
            {
                name: 'Scallywags', logo: LogoRed, players: [
                    JoaoFerreira, BernardoFigueiredo, LucasGarcia, JoaoPaulino, RenatoOliveira, AndreSalvado
                ]
            },
            {
                name: 'Corsairs', logo: LogoGreen, players: [
                    NunoReis, DiogoDomingues, JorgeFerreira, WildCard, GustavoCarreira, AlexandreLopes, JosePedrosa
                ]
            },
        ],
        date: new Date(Date.UTC(2024, 0, 29)),
        time: '18:30',
        location: 'LeiriFoot',
        incidents: [
            {type: INCIDENTS.GOAL, Scorer: LucasGarcia, Assist: AndreSalvado, Team: 'Scallywags' },
            {type: INCIDENTS.GOAL, Scorer: JosePedrosa, Assist: DiogoDomingues, Team: 'Corsairs' },
            {type: INCIDENTS.GOAL, Scorer: DiogoDomingues, Assist: NunoReis, Team: 'Corsairs' },
            {type: INCIDENTS.GOAL, Scorer: JosePedrosa, Assist: AlexandreLopes, Team: 'Corsairs' },
            {type: INCIDENTS.GOAL, Scorer: AndreSalvado, Assist: LucasGarcia, Team: 'Scallywags' },
            {type: INCIDENTS.GOAL, Scorer: JosePedrosa, Assist: null, Team: 'Corsairs' },
            {type: INCIDENTS.GOAL, Scorer: WildCard, Assist: null, Team: 'Corsairs' },
            {type: INCIDENTS.GOAL, Scorer: DiogoDomingues, Assist: AlexandreLopes, Team: 'Corsairs' },
            {type: INCIDENTS.GOAL, Scorer: JoaoPaulino, Assist: AndreSalvado, Team: 'Scallywags' },
            {type: INCIDENTS.GOAL, Scorer: NunoReis, Assist: JorgeFerreira, Team: 'Corsairs' },
            {type: INCIDENTS.GOAL, Scorer: GustavoCarreira, Assist: JosePedrosa, Team: 'Corsairs' },
            {type: INCIDENTS.GOAL, Scorer: NunoReis, Assist: JosePedrosa, Team: 'Corsairs' },
            {type: INCIDENTS.GOAL, Scorer: JosePedrosa, Assist: NunoReis, Team: 'Corsairs' },
            {type: INCIDENTS.GOAL, Scorer: DiogoDomingues, Assist: NunoReis, Team: 'Corsairs' },
            {type: INCIDENTS.GOAL, Scorer: DiogoDomingues, Assist: JorgeFerreira, Team: 'Corsairs' },
            {type: INCIDENTS.GOAL, Scorer: JoaoFerreira, Assist: JoaoPaulino, Team: 'Scallywags' },
            {type: INCIDENTS.GOAL, Scorer: DiogoDomingues, Assist: JosePedrosa, Team: 'Corsairs' },
            {type: INCIDENTS.GOAL, Scorer: JoaoFerreira, Assist: JoaoPaulino, Team: 'Scallywags' },
            {type: INCIDENTS.GOAL, Scorer: AndreSalvado, Assist: JoaoPaulino, Team: 'Scallywags' },
            {type: INCIDENTS.GOAL, Scorer: JorgeFerreira, Assist: GustavoCarreira, Team: 'Corsairs' },

            {type: INCIDENTS.GOAL, Scorer: JosePedrosa, Assist: BernardoFigueiredo, Team: 'Scallywags' },
            {type: INCIDENTS.GOAL, Scorer: JorgeFerreira, Assist: DiogoDomingues, Team: 'Corsairs' },
            {type: INCIDENTS.GOAL, Scorer: JoaoPaulino, Assist: JosePedrosa, Team: 'Scallywags' },
            {type: INCIDENTS.GOAL, Scorer: JosePedrosa, Assist: null, Team: 'Scallywags' },
            {type: INCIDENTS.GOAL, Scorer: JosePedrosa, Assist: null, Team: 'Scallywags' },
            {type: INCIDENTS.GOAL, Scorer: DiogoDomingues, Assist: NunoReis, Team: 'Corsairs' },
            {type: INCIDENTS.OWN_GOAL, Scorer: JoaoFerreira, Assist: AlexandreLopes, Team: 'Corsairs' },
            {type: INCIDENTS.GOAL, Scorer: JoaoFerreira, Assist: JosePedrosa, Team: 'Scallywags' },
            {type: INCIDENTS.GOAL, Scorer: BernardoFigueiredo, Assist: JoaoFerreira, Team: 'Scallywags' },
            {type: INCIDENTS.GOAL, Scorer: AlexandreLopes, Assist: NunoReis, Team: 'Corsairs' },
        ]
    },
    {
        id: '20240201',
        teams: [
            {
                name: 'Scallywags', logo: LogoRed, players: [
                    AndreSalvado, PedroGoncalves, RodrigoAlves, DiogoDomingues, NunoReis
                ]
            },
            {
                name: 'Corsairs', logo: LogoGreen, players: [
                    GustavoCarreira, JosePedrosa, JoaoFerreira, RubenRodrigues, LucasGarcia
                ]
            },
        ],
        date: new Date(Date.UTC(2024, 1, 1)),
        time: '18:30',
        location: 'LeiriFoot',
        incidents: [
            {type: INCIDENTS.GOAL, Scorer: PedroGoncalves, Assist: DiogoDomingues, Team: 'Scallywags' },
            {type: INCIDENTS.GOAL, Scorer: GustavoCarreira, Assist: JosePedrosa, Team: 'Corsairs' },
            {type: INCIDENTS.GOAL, Scorer: DiogoDomingues, Assist: RodrigoAlves, Team: 'Scallywags' },
            {type: INCIDENTS.GOAL, Scorer: RodrigoAlves, Assist: AndreSalvado, Team: 'Scallywags' },
            {type: INCIDENTS.GOAL, Scorer: LucasGarcia, Assist: null, Team: 'Corsairs' },
            {type: INCIDENTS.GOAL, Scorer: JosePedrosa, Assist: null, Team: 'Corsairs' },
            {type: INCIDENTS.GOAL, Scorer: LucasGarcia, Assist: JosePedrosa, Team: 'Corsairs' },
            {type: INCIDENTS.GOAL, Scorer: NunoReis, Assist: RodrigoAlves, Team: 'Scallywags' },
            {type: INCIDENTS.GOAL, Scorer: RodrigoAlves, Assist: DiogoDomingues, Team: 'Scallywags' },
            {type: INCIDENTS.GOAL, Scorer: RubenRodrigues, Assist: JosePedrosa, Team: 'Corsairs' },
            {type: INCIDENTS.GOAL, Scorer: LucasGarcia, Assist: JoaoFerreira, Team: 'Corsairs' },
            {type: INCIDENTS.GOAL, Scorer: DiogoDomingues, Assist: NunoReis, Team: 'Scallywags' },
            {type: INCIDENTS.GOAL, Scorer: AndreSalvado, Assist: NunoReis, Team: 'Scallywags' },
            {type: INCIDENTS.GOAL, Scorer: NunoReis, Assist: null, Team: 'Scallywags' },
            {type: INCIDENTS.GOAL, Scorer: DiogoDomingues, Assist: NunoReis, Team: 'Scallywags' },
            {type: INCIDENTS.GOAL, Scorer: LucasGarcia, Assist: null, Team: 'Corsairs' },
            {type: INCIDENTS.GOAL, Scorer: NunoReis, Assist: DiogoDomingues, Team: 'Scallywags' },
            {type: INCIDENTS.GOAL, Scorer: GustavoCarreira, Assist: RubenRodrigues, Team: 'Corsairs' },
            {type: INCIDENTS.GOAL, Scorer: LucasGarcia, Assist: JosePedrosa, Team: 'Corsairs' },
            {type: INCIDENTS.GOAL, Scorer: RodrigoAlves, Assist: AndreSalvado, Team: 'Scallywags' },
            {type: INCIDENTS.GOAL, Scorer: NunoReis, Assist: AndreSalvado, Team: 'Scallywags' },
            {type: INCIDENTS.GOAL, Scorer: JoaoFerreira, Assist: JosePedrosa, Team: 'Corsairs' },
            {type: INCIDENTS.GOAL, Scorer: DiogoDomingues, Assist: NunoReis, Team: 'Scallywags' },
            {type: INCIDENTS.GOAL, Scorer: AndreSalvado, Assist: NunoReis, Team: 'Scallywags' },
            {type: INCIDENTS.GOAL, Scorer: JosePedrosa, Assist: JoaoFerreira, Team: 'Corsairs' },
            {type: INCIDENTS.GOAL, Scorer: AndreSalvado, Assist: null, Team: 'Scallywags' },
            {type: INCIDENTS.GOAL, Scorer: GustavoCarreira, Assist: JoaoFerreira, Team: 'Corsairs' },
            {type: INCIDENTS.GOAL, Scorer: RodrigoAlves, Assist: AndreSalvado, Team: 'Scallywags' },
            {type: INCIDENTS.GOAL, Scorer: RubenRodrigues, Assist: JoaoFerreira, Team: 'Corsairs' },
            {type: INCIDENTS.GOAL, Scorer: NunoReis, Assist: RodrigoAlves, Team: 'Scallywags' },
            {type: INCIDENTS.GOAL, Scorer: RubenRodrigues, Assist: JoaoFerreira, Team: 'Corsairs' },
            { type: INCIDENTS.SUBSTITUTION, playerIn: WildCard, playerOut: NunoReis },
            {type: INCIDENTS.GOAL, Scorer: JosePedrosa, Assist: LucasGarcia, Team: 'Corsairs' },
            {type: INCIDENTS.GOAL, Scorer: JosePedrosa, Assist: null, Team: 'Corsairs' },
            {type: INCIDENTS.GOAL, Scorer: JosePedrosa, Assist: LucasGarcia, Team: 'Corsairs' },
            {type: INCIDENTS.GOAL, Scorer: JoaoFerreira, Assist: JosePedrosa, Team: 'Corsairs' },
            {type: INCIDENTS.GOAL, Scorer: LucasGarcia, Assist: JosePedrosa, Team: 'Corsairs' },
            {type: INCIDENTS.GOAL, Scorer: DiogoDomingues, Assist: null, Team: 'Scallywags' },
            {type: INCIDENTS.GOAL, Scorer: JoaoFerreira, Assist: null, Team: 'Corsairs' },
            {type: INCIDENTS.GOAL, Scorer: LucasGarcia, Assist: JosePedrosa, Team: 'Corsairs' },
        ]
    },
    {
        id: '20240205',
        teams: [
            {
                name: 'Scallywags', logo: LogoRed, players: [
                    JoaoFerreira, DiogoDomingues, RubenRodrigues, GustavoCarreira, JoaoPaulino,
                ]
            },
            {
                name: 'Corsairs', logo: LogoGreen, players: [
                    BernardoFigueiredo, LucasGarcia, RenatoOliveira, JorgeFerreira, TomasSantos
                ]
            },
        ],
        date: new Date(Date.UTC(2024, 1, 5)),
        time: '18:30',
        location: 'LeiriFoot',
        incidents: [
            { type: INCIDENTS.GOAL, Scorer: JoaoFerreira, Assist: DiogoDomingues, Team: 'Scallywags' },
            { type: INCIDENTS.GOAL, Scorer: JoaoFerreira, Assist: DiogoDomingues, Team: 'Scallywags' },
            { type: INCIDENTS.GOAL, Scorer: TomasSantos, Assist: null, Team: 'Corsairs' },
            { type: INCIDENTS.GOAL, Scorer: JorgeFerreira, Assist: null, Team: 'Corsairs' },
            { type: INCIDENTS.GOAL, Scorer: RenatoOliveira, Assist: LucasGarcia, Team: 'Corsairs' },
            { type: INCIDENTS.GOAL, Scorer: LucasGarcia, Assist: BernardoFigueiredo, Team: 'Corsairs' },
            { type: INCIDENTS.GOAL, Scorer: LucasGarcia, Assist: BernardoFigueiredo, Team: 'Corsairs' },
            { type: INCIDENTS.GOAL, Scorer: DiogoDomingues, Assist: GustavoCarreira, Team: 'Scallywags' },
            { type: INCIDENTS.GOAL, Scorer: JoaoPaulino, Assist: JoaoFerreira, Team: 'Scallywags' },
            { type: INCIDENTS.GOAL, Scorer: LucasGarcia, Assist: null, Team: 'Corsairs' },
            { type: INCIDENTS.GOAL, Scorer: RubenRodrigues, Assist: JoaoFerreira, Team: 'Scallywags' },
            { type: INCIDENTS.GOAL, Scorer: DiogoDomingues, Assist: JoaoPaulino, Team: 'Scallywags' },
            { type: INCIDENTS.GOAL, Scorer: LucasGarcia, Assist: RenatoOliveira, Team: 'Corsairs' },
            { type: INCIDENTS.GOAL, Scorer: RubenRodrigues, Assist: JoaoFerreira, Team: 'Scallywags' },
            { type: INCIDENTS.GOAL, Scorer: BernardoFigueiredo, Assist: null, Team: 'Corsairs' },
            { type: INCIDENTS.GOAL, Scorer: GustavoCarreira, Assist: JoaoPaulino, Team: 'Scallywags' },
            { type: INCIDENTS.GOAL, Scorer: JoaoPaulino, Assist: DiogoDomingues, Team: 'Scallywags' },
            { type: INCIDENTS.GOAL, Scorer: RenatoOliveira, Assist: JorgeFerreira, Team: 'Corsairs' },
            { type: INCIDENTS.GOAL, Scorer: JorgeFerreira, Assist: null, Team: 'Corsairs' },
            { type: INCIDENTS.GOAL, Scorer: JoaoPaulino, Assist: null, Team: 'Scallywags' },
            { type: INCIDENTS.GOAL, Scorer: JoaoFerreira, Assist: RubenRodrigues, Team: 'Scallywags' },
            { type: INCIDENTS.GOAL, Scorer: JorgeFerreira, Assist: BernardoFigueiredo, Team: 'Corsairs' },
            { type: INCIDENTS.GOAL, Scorer: JoaoFerreira, Assist: null, Team: 'Scallywags' },
            { type: INCIDENTS.GOAL, Scorer: DiogoDomingues, Assist: GustavoCarreira, Team: 'Scallywags' },
        ]
    },
    {
        id: '20240208',
        teams: [
            {
                name: 'Scallywags', logo: LogoRed, players: [
                    LucasGarcia, AndreSalvado, GustavoCarreira, FranciscoMachado, DiogoDomingues
                ]
            },
            {
                name: 'Corsairs', logo: LogoGreen, players: [
                    JoaoFerreira, RubenRodrigues, TomasSantos, PedroLopes, AlexandreMendes,
                ]
            },
            {
                name: 'Buccaneers', logo: LogoBlue, players: [
                    PedroGoncalves, AlexandreSantos, RodrigoAlves, WildCard, LuisSantos,
                ]
            },
        ],
        date: new Date(Date.UTC(2024, 1, 8)),
        time: '18:30',
        location: 'LeiriFoot',
        incidents: [],
        miniMatches: [
            {
                teams: [ 'Scallywags', 'Corsairs' ],
                incidents: [
                    { type: INCIDENTS.GOAL, Scorer: RubenRodrigues, Assist: null, Team: 'Corsairs' }
                ]
            },
            {
                teams: [ 'Corsairs', 'Buccaneers' ],
                incidents: []
            },
            {
                teams: ['Buccaneers', 'Scallywags'],
                incidents: []
            },
            {
                teams: ['Scallywags', 'Corsairs'],
                incidents: [
                    { type: INCIDENTS.GOAL, Scorer: LucasGarcia, Assist: null, Team: 'Scallywags' },
                    { type: INCIDENTS.GOAL, Scorer: AlexandreMendes, Assist: JoaoFerreira, Team: 'Corsairs' },
                ]
            },
            {
                teams: ['Corsairs', 'Buccaneers'],
                incidents: [
                    { type: INCIDENTS.GOAL, Scorer: JoaoFerreira, Assist: null, Team: 'Corsairs' },
                    { type: INCIDENTS.GOAL, Scorer: PedroGoncalves, Assist: null, Team: 'Buccaneers' },
                    { type: INCIDENTS.GOAL, Scorer: PedroLopes, Assist: JoaoFerreira, Team: 'Corsairs' },
                ]
            },
            {
                teams: ['Corsairs', 'Scallywags'],
                incidents: [
                    { type: INCIDENTS.GOAL, Scorer: DiogoDomingues, Assist: AndreSalvado, Team: 'Scallywags' },
                ]
            },
            {
                teams: ['Scallywags', 'Buccaneers'],
                incidents: [
                    { type: INCIDENTS.GOAL, Scorer: RodrigoAlves, Assist: PedroGoncalves, Team: 'Buccaneers' },
                ]
            },
            {
                teams: ['Buccaneers', 'Corsairs'],
                incidents: [
                    { type: INCIDENTS.GOAL, Scorer: TomasSantos, Assist: JoaoFerreira, Team: 'Corsairs' },
                    { type: INCIDENTS.GOAL, Scorer: RubenRodrigues, Assist: JoaoFerreira, Team: 'Corsairs' },
                ]
            },
            {
                teams: ['Corsairs', 'Scallywags'],
                incidents: [
                    { type: INCIDENTS.GOAL, Scorer: TomasSantos, Assist: JoaoFerreira, Team: 'Corsairs' },
                ]
            },
            {
                teams: ['Corsairs', 'Buccaneers'],
                incidents: []
            },
            {
                teams: ['Buccaneers', 'Scallywags'],
                incidents: [
                    { type: INCIDENTS.GOAL, Scorer: WildCard, Assist: null, Team: 'Buccaneers' },
                    { type: INCIDENTS.GOAL, Scorer: LucasGarcia, Assist: null, Team: 'Scallywags' },
                    { type: INCIDENTS.GOAL, Scorer: DiogoDomingues, Assist: AndreSalvado, Team: 'Scallywags' },
                ]
            },
            {
                teams: ['Scallywags', 'Corsairs'],
                incidents: [
                    { type: INCIDENTS.GOAL, Scorer: GustavoCarreira, Assist: LucasGarcia, Team: 'Scallywags' },
                    { type: INCIDENTS.GOAL, Scorer: AndreSalvado, Assist: LucasGarcia, Team: 'Scallywags' },
                ]
            },
            {
                teams: ['Scallywags', 'Buccaneers'],
                incidents: [
                    { type: INCIDENTS.GOAL, Scorer: RodrigoAlves, Assist: PedroGoncalves, Team: 'Buccaneers' },
                    { type: INCIDENTS.GOAL, Scorer: RodrigoAlves, Assist: WildCard, Team: 'Buccaneers' },
                ]
            },
            {
                teams: ['Buccaneers', 'Corsairs'],
                incidents: [
                    { type: INCIDENTS.GOAL, Scorer: LuisSantos, Assist: null, Team: 'Buccaneers' },
                    { type: INCIDENTS.GOAL, Scorer: RubenRodrigues, Assist: null, Team: 'Corsairs' },
                ]
            },
            {
                teams: ['Corsairs', 'Scallywags'],
                incidents: [
                    { type: INCIDENTS.GOAL, Scorer: RubenRodrigues, Assist: JoaoFerreira, Team: 'Corsairs' },
                    { type: INCIDENTS.GOAL, Scorer: GustavoCarreira, Assist: FranciscoMachado, Team: 'Scallywags' },
                    { type: INCIDENTS.GOAL, Scorer: AndreSalvado, Assist: LucasGarcia, Team: 'Scallywags' },
                ]
            },
            {
                teams: ['Scallywags', 'Buccaneers'],
                incidents: [
                    { type: INCIDENTS.GOAL, Scorer: LucasGarcia, Assist: AndreSalvado, Team: 'Scallywags' },
                    { type: INCIDENTS.GOAL, Scorer: AlexandreSantos, Assist: null, Team: 'Buccaneers' },
                ]
            },
            {
                teams: ['Buccaneers', 'Corsairs'],
                incidents: [
                    { type: INCIDENTS.GOAL, Scorer: RubenRodrigues, Assist: null, Team: 'Corsairs' },
                    { type: INCIDENTS.GOAL, Scorer: AlexandreMendes, Assist: null, Team: 'Corsairs' },
                ]
            },
        ]
    },
    {
        id: '20240212',
        teams: [
            {
                name: 'Scallywags', logo: LogoRed, players: [
                    JosePedrosa, JoaoFerreira, RubenRodrigues, RodrigoAlves, GustavoCarreira
                ]
            },
            {
                name: 'Corsairs', logo: LogoGreen, players: [
                    JoaoPaulino, LucasGarcia, DiogoDomingues, RenatoOliveira, WildCard
                ]
            },
        ],
        date: new Date(Date.UTC(2024, 1, 12)),
        time: '18:30',
        location: 'LeiriFoot',
        incidents: [
            { type: INCIDENTS.GOAL, Scorer: JoaoFerreira, Assist: null, Team: 'Scallywags' },
            { type: INCIDENTS.GOAL, Scorer: WildCard, Assist: LucasGarcia, Team: 'Corsairs' },
            { type: INCIDENTS.GOAL, Scorer: JosePedrosa, Assist: null, Team: 'Scallywags' },
            { type: INCIDENTS.GOAL, Scorer: RubenRodrigues, Assist: RodrigoAlves, Team: 'Scallywags' },
            { type: INCIDENTS.GOAL, Scorer: RubenRodrigues, Assist: JosePedrosa, Team: 'Scallywags' },
            { type: INCIDENTS.GOAL, Scorer: JoaoFerreira, Assist: null, Team: 'Scallywags' },
            { type: INCIDENTS.OWN_GOAL, Scorer: DiogoDomingues, Assist: RodrigoAlves, Team: 'Scallywags' },
            { type: INCIDENTS.GOAL, Scorer: JosePedrosa, Assist: null, Team: 'Scallywags' },
            { type: INCIDENTS.GOAL, Scorer: WildCard, Assist: RenatoOliveira, Team: 'Corsairs' },
            { type: INCIDENTS.GOAL, Scorer: RenatoOliveira, Assist: null, Team: 'Corsairs' },
            { type: INCIDENTS.GOAL, Scorer: RodrigoAlves, Assist: JosePedrosa, Team: 'Scallywags' },
            { type: INCIDENTS.GOAL, Scorer: DiogoDomingues, Assist: null, Team: 'Corsairs' },
            { type: INCIDENTS.GOAL, Scorer: JosePedrosa, Assist: null, Team: 'Scallywags' },
            { type: INCIDENTS.GOAL, Scorer: JosePedrosa, Assist: RubenRodrigues, Team: 'Scallywags' },
            { type: INCIDENTS.GOAL, Scorer: RenatoOliveira, Assist: DiogoDomingues, Team: 'Corsairs' },
            { type: INCIDENTS.GOAL, Scorer: JosePedrosa, Assist: RubenRodrigues, Team: 'Scallywags' },
            { type: INCIDENTS.GOAL, Scorer: JosePedrosa, Assist: RodrigoAlves, Team: 'Scallywags' },
            { type: INCIDENTS.GOAL, Scorer: JosePedrosa, Assist: JoaoFerreira, Team: 'Scallywags' },
            { type: INCIDENTS.GOAL, Scorer: RubenRodrigues, Assist: JoaoFerreira, Team: 'Scallywags' },
            { type: INCIDENTS.GOAL, Scorer: JoaoFerreira, Assist: null, Team: 'Scallywags' },
            { type: INCIDENTS.GOAL, Scorer: DiogoDomingues, Assist: LucasGarcia, Team: 'Corsairs' },
            { type: INCIDENTS.GOAL, Scorer: DiogoDomingues, Assist: null, Team: 'Corsairs' },
            { type: INCIDENTS.GOAL, Scorer: RodrigoAlves, Assist: null, Team: 'Scallywags' },
            { type: INCIDENTS.GOAL, Scorer: JoaoPaulino, Assist: LucasGarcia, Team: 'Corsairs' },
            { type: INCIDENTS.GOAL, Scorer: GustavoCarreira, Assist: JoaoFerreira, Team: 'Scallywags' },
            { type: INCIDENTS.GOAL, Scorer: JoaoPaulino, Assist: null, Team: 'Corsairs' },
            { type: INCIDENTS.GOAL, Scorer: LucasGarcia, Assist: DiogoDomingues, Team: 'Corsairs' },
            { type: INCIDENTS.GOAL, Scorer: LucasGarcia, Assist: null, Team: 'Corsairs' },
            { type: INCIDENTS.GOAL, Scorer: JosePedrosa, Assist: null, Team: 'Scallywags' },
            { type: INCIDENTS.GOAL, Scorer: JoaoFerreira, Assist: null, Team: 'Scallywags' },
            { type: INCIDENTS.GOAL, Scorer: JoaoPaulino, Assist: LucasGarcia, Team: 'Corsairs' },
            { type: INCIDENTS.GOAL, Scorer: JosePedrosa, Assist: RubenRodrigues, Team: 'Scallywags' },
            { type: INCIDENTS.GOAL, Scorer: JoaoFerreira, Assist: null, Team: 'Scallywags' },
            { type: INCIDENTS.GOAL, Scorer: JoaoPaulino, Assist: WildCard, Team: 'Corsairs' },
            { type: INCIDENTS.GOAL, Scorer: JosePedrosa, Assist: null, Team: 'Scallywags' },
            { type: INCIDENTS.GOAL, Scorer: RubenRodrigues, Assist: JoaoFerreira, Team: 'Scallywags' },
            { type: INCIDENTS.GOAL, Scorer: JosePedrosa, Assist: null, Team: 'Scallywags' },
            { type: INCIDENTS.GOAL, Scorer: JosePedrosa, Assist: null, Team: 'Scallywags' },
            { type: INCIDENTS.GOAL, Scorer: GustavoCarreira, Assist: JosePedrosa, Team: 'Scallywags' },
        ]
    },
    {
        id: '20240215',
        teams: [
            {
                name: 'Scallywags', logo: LogoRed, players: [
                    JoaoFerreira, AndreSalvado, DiogoDomingues, GustavoCarreira, AlexandreSantos
                ]
            },
            {
                name: 'Corsairs', logo: LogoGreen, players: [
                    LucasGarcia, BernardoFigueiredo, TomasSantos, RubenRodrigues, PedroLopes
                ]
            },
        ],
        date: new Date(Date.UTC(2024, 1, 15)),
        time: '18:30',
        location: 'LeiriFoot',
        incidents: [
            { type: INCIDENTS.GOAL, Scorer: RubenRodrigues, Assist: LucasGarcia, Team: 'Corsairs' },
            { type: INCIDENTS.GOAL, Scorer: DiogoDomingues, Assist: null, Team: 'Scallywags' },
            { type: INCIDENTS.GOAL, Scorer: LucasGarcia, Assist: BernardoFigueiredo, Team: 'Corsairs' },
            { type: INCIDENTS.GOAL, Scorer: AndreSalvado, Assist: null, Team: 'Scallywags' },
            { type: INCIDENTS.GOAL, Scorer: BernardoFigueiredo, Assist: PedroLopes, Team: 'Corsairs' },
            { type: INCIDENTS.GOAL, Scorer: AndreSalvado, Assist: JoaoFerreira, Team: 'Scallywags' },
            { type: INCIDENTS.GOAL, Scorer: PedroLopes, Assist: BernardoFigueiredo, Team: 'Corsairs' },
            { type: INCIDENTS.GOAL, Scorer: LucasGarcia, Assist: BernardoFigueiredo, Team: 'Corsairs' },
            { type: INCIDENTS.GOAL, Scorer: RubenRodrigues, Assist: null, Team: 'Corsairs' },
            { type: INCIDENTS.GOAL, Scorer: BernardoFigueiredo, Assist: LucasGarcia, Team: 'Corsairs' },
            { type: INCIDENTS.GOAL, Scorer: GustavoCarreira, Assist: AlexandreSantos, Team: 'Scallywags' },
            { type: INCIDENTS.GOAL, Scorer: JoaoFerreira, Assist: null, Team: 'Scallywags' },
            { type: INCIDENTS.GOAL, Scorer: DiogoDomingues, Assist: AlexandreSantos, Team: 'Scallywags' },
            { type: INCIDENTS.GOAL, Scorer: JoaoFerreira, Assist: null, Team: 'Scallywags' },
            { type: INCIDENTS.GOAL, Scorer: DiogoDomingues, Assist: null, Team: 'Scallywags' },
            { type: INCIDENTS.GOAL, Scorer: LucasGarcia, Assist: BernardoFigueiredo, Team: 'Corsairs' },
            { type: INCIDENTS.GOAL, Scorer: DiogoDomingues, Assist: JoaoFerreira, Team: 'Scallywags' },
            { type: INCIDENTS.GOAL, Scorer: TomasSantos, Assist: RubenRodrigues, Team: 'Corsairs' },
            { type: INCIDENTS.GOAL, Scorer: AlexandreSantos, Assist: null, Team: 'Scallywags' },
            { type: INCIDENTS.GOAL, Scorer: TomasSantos, Assist: null, Team: 'Corsairs' },
            { type: INCIDENTS.GOAL, Scorer: AlexandreSantos, Assist: AndreSalvado, Team: 'Scallywags' },
            { type: INCIDENTS.GOAL, Scorer: TomasSantos, Assist: BernardoFigueiredo, Team: 'Corsairs' },
            { type: INCIDENTS.GOAL, Scorer: AlexandreSantos, Assist: null, Team: 'Scallywags' },
            { type: INCIDENTS.GOAL, Scorer: DiogoDomingues, Assist: JoaoFerreira, Team: 'Scallywags' },
            { type: INCIDENTS.GOAL, Scorer: BernardoFigueiredo, Assist: null, Team: 'Corsairs' },
            { type: INCIDENTS.GOAL, Scorer: GustavoCarreira, Assist: AndreSalvado, Team: 'Scallywags' },
            { type: INCIDENTS.GOAL, Scorer: JoaoFerreira, Assist: GustavoCarreira, Team: 'Scallywags' },
            { type: INCIDENTS.GOAL, Scorer: GustavoCarreira, Assist: JoaoFerreira, Team: 'Scallywags' },
            { type: INCIDENTS.GOAL, Scorer: JoaoFerreira, Assist: DiogoDomingues, Team: 'Scallywags' },
            { type: INCIDENTS.GOAL, Scorer: TomasSantos, Assist: null, Team: 'Corsairs' },
            { type: INCIDENTS.GOAL, Scorer: JoaoFerreira, Assist: GustavoCarreira, Team: 'Scallywags' },
            { type: INCIDENTS.GOAL, Scorer: LucasGarcia, Assist: null, Team: 'Corsairs' },
        ]
    },
    {
        id: '20240222',
        teams: [
            {
                name: 'Scallywags', logo: LogoRed, players: [
                    JoaoFerreira, AlexandreSantos, LuisSantos, RubenRodrigues, FranciscoMachado, DiogoDomingues
                ]
            },
            {
                name: 'Corsairs', logo: LogoGreen, players: [
                    LucasGarcia, AndreSalvado, WildCard, PedroGoncalves, GustavoCarreira, TomasSantos
                ]
            },
        ],
        date: new Date(Date.UTC(2024, 1, 22)),
        time: '18:30',
        location: 'LeiriFoot',
        incidents: [
            { type: INCIDENTS.GOAL, Scorer: JoaoFerreira, Assist: DiogoDomingues, Team: 'Scallywags' },
            { type: INCIDENTS.GOAL, Scorer: WildCard, Assist: TomasSantos, Team: 'Corsairs' },
            { type: INCIDENTS.GOAL, Scorer: DiogoDomingues, Assist: JoaoFerreira, Team: 'Scallywags' },
            { type: INCIDENTS.GOAL, Scorer: RubenRodrigues, Assist: DiogoDomingues, Team: 'Scallywags' },
            { type: INCIDENTS.GOAL, Scorer: JoaoFerreira, Assist: AlexandreSantos, Team: 'Scallywags' },
            { type: INCIDENTS.GOAL, Scorer: AlexandreSantos, Assist: DiogoDomingues, Team: 'Scallywags' },
            { type: INCIDENTS.GOAL, Scorer: AlexandreSantos, Assist: DiogoDomingues, Team: 'Scallywags' },
            { type: INCIDENTS.GOAL, Scorer: WildCard, Assist: LucasGarcia, Team: 'Corsairs' },
            { type: INCIDENTS.GOAL, Scorer: AlexandreSantos, Assist: JoaoFerreira, Team: 'Scallywags' },
            { type: INCIDENTS.GOAL, Scorer: WildCard, Assist: GustavoCarreira, Team: 'Scallywags' },
            { type: INCIDENTS.GOAL, Scorer: AndreSalvado, Assist: LucasGarcia, Team: 'Corsairs' },
            { type: INCIDENTS.GOAL, Scorer: TomasSantos, Assist: AndreSalvado, Team: 'Corsairs' },
            { type: INCIDENTS.GOAL, Scorer: FranciscoMachado, Assist: JoaoFerreira, Team: 'Scallywags' },
            { type: INCIDENTS.GOAL, Scorer: AlexandreSantos, Assist: null, Team: 'Scallywags' },
            { type: INCIDENTS.GOAL, Scorer: AlexandreSantos, Assist: DiogoDomingues, Team: 'Scallywags' },
            { type: INCIDENTS.GOAL, Scorer: WildCard, Assist: TomasSantos, Team: 'Corsairs' },
            { type: INCIDENTS.GOAL, Scorer: JoaoFerreira, Assist: null, Team: 'Scallywags' },
            { type: INCIDENTS.GOAL, Scorer: DiogoDomingues, Assist: FranciscoMachado, Team: 'Scallywags' },
            { type: INCIDENTS.GOAL, Scorer: WildCard, Assist: TomasSantos, Team: 'Corsairs' },
            { type: INCIDENTS.GOAL, Scorer: AndreSalvado, Assist: LucasGarcia, Team: 'Corsairs' },
            { type: INCIDENTS.GOAL, Scorer: DiogoDomingues, Assist: null, Team: 'Scallywags' },
            { type: INCIDENTS.OWN_GOAL, Scorer: LucasGarcia, Assist: null, Team: 'Scallywags' },
            { type: INCIDENTS.GOAL, Scorer: TomasSantos, Assist: LucasGarcia, Team: 'Corsairs' },
            { type: INCIDENTS.GOAL, Scorer: GustavoCarreira, Assist: PedroGoncalves, Team: 'Corsairs' },
            { type: INCIDENTS.GOAL, Scorer: PedroGoncalves, Assist: null, Team: 'Corsairs' },
            { type: INCIDENTS.GOAL, Scorer: WildCard, Assist: AndreSalvado, Team: 'Corsairs' },
            { type: INCIDENTS.GOAL, Scorer: RubenRodrigues, Assist: DiogoDomingues, Team: 'Scallywags' },
            { type: INCIDENTS.GOAL, Scorer: PedroGoncalves, Assist: null, Team: 'Corsairs' },
            { type: INCIDENTS.GOAL, Scorer: PedroGoncalves, Assist: AndreSalvado, Team: 'Corsairs' },
        ]
    },
    {
        id: '20240226',
        teams: [
            {
                name: 'Scallywags', logo: LogoRed, players: [
                    JosePedrosa, LucasGarcia, RubenRodrigues, TomasSantos, JoaoPaulino
                ]
            },
            {
                name: 'Corsairs', logo: LogoGreen, players: [
                    AlexandreLopes, JoaoFerreira, AndreSalvado, JorgeFerreira, DiogoDomingues,
                ]
            },
        ],
        date: new Date(Date.UTC(2024, 1, 26)),
        time: '18:30',
        location: 'LeiriFoot',
        incidents: [
            { type: INCIDENTS.GOAL, Scorer: AlexandreLopes, Assist: DiogoDomingues, Team: 'Corsairs' },
            { type: INCIDENTS.GOAL, Scorer: LucasGarcia, Assist: TomasSantos, Team: 'Scallywags' },
            { type: INCIDENTS.GOAL, Scorer: TomasSantos, Assist: LucasGarcia, Team: 'Scallywags' },
            { type: INCIDENTS.GOAL, Scorer: TomasSantos, Assist: JoaoPaulino, Team: 'Scallywags' },
            { type: INCIDENTS.GOAL, Scorer: JoaoFerreira, Assist: AndreSalvado, Team: 'Corsairs' },
            { type: INCIDENTS.GOAL, Scorer: JoaoPaulino, Assist: JosePedrosa, Team: 'Scallywags' },
            { type: INCIDENTS.GOAL, Scorer: JoaoFerreira, Assist: AndreSalvado, Team: 'Corsairs' },
            { type: INCIDENTS.GOAL, Scorer: JosePedrosa, Assist: JoaoPaulino, Team: 'Scallywags' },
            { type: INCIDENTS.GOAL, Scorer: JosePedrosa, Assist: null, Team: 'Scallywags' },
            { type: INCIDENTS.GOAL, Scorer: AndreSalvado, Assist: null, Team: 'Corsairs' },

            { type: INCIDENTS.GOAL, Scorer: AlexandreLopes, Assist: AndreSalvado, Team: 'Corsairs' },
            { type: INCIDENTS.GOAL, Scorer: JoaoPaulino, Assist: TomasSantos, Team: 'Scallywags' },
            { type: INCIDENTS.GOAL, Scorer: JosePedrosa, Assist: JoaoPaulino, Team: 'Scallywags' },
            { type: INCIDENTS.GOAL, Scorer: RubenRodrigues, Assist: JosePedrosa, Team: 'Scallywags' },
            { type: INCIDENTS.GOAL, Scorer: JosePedrosa, Assist: null, Team: 'Scallywags' },
            { type: INCIDENTS.GOAL, Scorer: DiogoDomingues, Assist: AndreSalvado, Team: 'Corsairs' },
            { type: INCIDENTS.GOAL, Scorer: AlexandreLopes, Assist: DiogoDomingues, Team: 'Corsairs' },
            { type: INCIDENTS.GOAL, Scorer: LucasGarcia, Assist: TomasSantos, Team: 'Scallywags' },
            { type: INCIDENTS.GOAL, Scorer: LucasGarcia, Assist: JosePedrosa, Team: 'Scallywags' },
            { type: INCIDENTS.GOAL, Scorer: JosePedrosa, Assist: LucasGarcia, Team: 'Scallywags' },

            { type: INCIDENTS.GOAL, Scorer: JoaoPaulino, Assist: null, Team: 'Scallywags' },
            { type: INCIDENTS.GOAL, Scorer: DiogoDomingues, Assist: AndreSalvado, Team: 'Corsairs' },
            { type: INCIDENTS.GOAL, Scorer: TomasSantos, Assist: JoaoPaulino, Team: 'Scallywags' },
            { type: INCIDENTS.GOAL, Scorer: AlexandreLopes, Assist: null, Team: 'Corsairs' },
            { type: INCIDENTS.GOAL, Scorer: JosePedrosa, Assist: RubenRodrigues, Team: 'Scallywags' },
            { type: INCIDENTS.GOAL, Scorer: JosePedrosa, Assist: RubenRodrigues, Team: 'Scallywags' },
            { type: INCIDENTS.GOAL, Scorer: JosePedrosa, Assist: null, Team: 'Scallywags' },

            { type: INCIDENTS.GOAL, Scorer: AndreSalvado, Assist: JoaoFerreira, Team: 'Corsairs' },
            { type: INCIDENTS.GOAL, Scorer: AndreSalvado, Assist: JoaoFerreira, Team: 'Corsairs' },
            { type: INCIDENTS.GOAL, Scorer: LucasGarcia, Assist: null, Team: 'Scallywags' },
            { type: INCIDENTS.GOAL, Scorer: JoaoFerreira, Assist: JorgeFerreira, Team: 'Corsairs' },
            { type: INCIDENTS.GOAL, Scorer: JosePedrosa, Assist: LucasGarcia, Team: 'Scallywags' },
            { type: INCIDENTS.GOAL, Scorer: LucasGarcia, Assist: RubenRodrigues, Team: 'Scallywags' },

            { type: INCIDENTS.GOAL, Scorer: AlexandreLopes, Assist: JorgeFerreira, Team: 'Corsairs' },
            { type: INCIDENTS.GOAL, Scorer: AndreSalvado, Assist: JoaoFerreira, Team: 'Corsairs' },
            { type: INCIDENTS.GOAL, Scorer: JosePedrosa, Assist: LucasGarcia, Team: 'Scallywags' },
            { type: INCIDENTS.GOAL, Scorer: JosePedrosa, Assist: JoaoPaulino, Team: 'Scallywags' },
            { type: INCIDENTS.GOAL, Scorer: LucasGarcia, Assist: null, Team: 'Scallywags' },
        ]
    },
    {
        id: '20240229',
        teams: [
            {
                name: 'Scallywags', logo: LogoGreen, players: [LucasGarcia, AndreSalvado, AlexandreMendes, AlexandreLopes, JoaoFerreira, AlexandreSantos]
            },
            {
                name: 'Corsairs', logo: LogoRed, players: [JosePedrosa, PedroGoncalves, DiogoDomingues, RubenRodrigues, WildCard, GustavoCarreira]
            },
        ],
        date: new Date(Date.UTC(2024, 1, 29)),
        time: '18:30',
        location: 'LeiriFoot',
        incidents: [
            { type: INCIDENTS.GOAL, Scorer: PedroGoncalves, Assist: DiogoDomingues, Team: 'Corsairs' },
            { type: INCIDENTS.GOAL, Scorer: JoaoFerreira, Assist: LucasGarcia, Team: 'Scallywags' },
            { type: INCIDENTS.GOAL, Scorer: GustavoCarreira, Assist: null, Team: 'Corsairs' },
            { type: INCIDENTS.GOAL, Scorer: JosePedrosa, Assist: null, Team: 'Corsairs' },
            { type: INCIDENTS.GOAL, Scorer: JosePedrosa, Assist: RubenRodrigues, Team: 'Corsairs' },
            { type: INCIDENTS.GOAL, Scorer: JoaoFerreira, Assist: null, Team: 'Scallywags' },
            { type: INCIDENTS.GOAL, Scorer: JosePedrosa, Assist: null, Team: 'Corsairs' },
            { type: INCIDENTS.GOAL, Scorer: AndreSalvado, Assist: AlexandreLopes, Team: 'Scallywags' },
            { type: INCIDENTS.GOAL, Scorer: LucasGarcia, Assist: null, Team: 'Scallywags' },
            { type: INCIDENTS.GOAL, Scorer: LucasGarcia, Assist: AndreSalvado, Team: 'Scallywags' },
            { type: INCIDENTS.GOAL, Scorer: GustavoCarreira, Assist: JosePedrosa, Team: 'Corsairs' },
            { type: INCIDENTS.GOAL, Scorer: AlexandreLopes, Assist: JoaoFerreira, Team: 'Scallywags' },
            { type: INCIDENTS.GOAL, Scorer: AlexandreLopes, Assist: AlexandreSantos, Team: 'Scallywags' },
            { type: INCIDENTS.GOAL, Scorer: WildCard, Assist: null, Team: 'Corsairs' },
            { type: INCIDENTS.GOAL, Scorer: LucasGarcia, Assist: null, Team: 'Scallywags' },
            { type: INCIDENTS.GOAL, Scorer: WildCard, Assist: null, Team: 'Corsairs' },
            { type: INCIDENTS.GOAL, Scorer: AlexandreSantos, Assist: LucasGarcia, Team: 'Scallywags' },
            { type: INCIDENTS.GOAL, Scorer: AlexandreMendes, Assist: LucasGarcia, Team: 'Scallywags' },
            { type: INCIDENTS.GOAL, Scorer: WildCard, Assist: DiogoDomingues, Team: 'Corsairs' },
            { type: INCIDENTS.GOAL, Scorer: JosePedrosa, Assist: null, Team: 'Corsairs' },
            { type: INCIDENTS.GOAL, Scorer: LucasGarcia, Assist: null, Team: 'Scallywags' },
            { type: INCIDENTS.GOAL, Scorer: JosePedrosa, Assist: null, Team: 'Corsairs' },
            { type: INCIDENTS.GOAL, Scorer: JosePedrosa, Assist: null, Team: 'Corsairs' },
            { type: INCIDENTS.GOAL, Scorer: LucasGarcia, Assist: null, Team: 'Scallywags' },
            { type: INCIDENTS.GOAL, Scorer: JosePedrosa, Assist: null, Team: 'Corsairs' },
            { type: INCIDENTS.GOAL, Scorer: LucasGarcia, Assist: JoaoFerreira, Team: 'Scallywags' },
            { type: INCIDENTS.GOAL, Scorer: PedroGoncalves, Assist: JosePedrosa, Team: 'Corsairs' },
            { type: INCIDENTS.GOAL, Scorer: LucasGarcia, Assist: null, Team: 'Scallywags' },
            { type: INCIDENTS.GOAL, Scorer: DiogoDomingues, Assist: JosePedrosa, Team: 'Corsairs' },
            { type: INCIDENTS.GOAL, Scorer: LucasGarcia, Assist: AndreSalvado, Team: 'Scallywags' },
            { type: INCIDENTS.GOAL, Scorer: RubenRodrigues, Assist: DiogoDomingues, Team: 'Corsairs' },
            { type: INCIDENTS.GOAL, Scorer: AlexandreLopes, Assist: null, Team: 'Scallywags' },
            { type: INCIDENTS.GOAL, Scorer: WildCard, Assist: DiogoDomingues, Team: 'Corsairs' },
            { type: INCIDENTS.GOAL, Scorer: AlexandreLopes, Assist: LucasGarcia, Team: 'Scallywags' },
            { type: INCIDENTS.GOAL, Scorer: WildCard, Assist: JosePedrosa, Team: 'Corsairs' },
            { type: INCIDENTS.GOAL, Scorer: JosePedrosa, Assist: null, Team: 'Corsairs' },
            { type: INCIDENTS.GOAL, Scorer: JoaoFerreira, Assist: LucasGarcia, Team: 'Scallywags' },
            { type: INCIDENTS.GOAL, Scorer: JosePedrosa, Assist: null, Team: 'Corsairs' },
            { type: INCIDENTS.GOAL, Scorer: JosePedrosa, Assist: DiogoDomingues, Team: 'Corsairs' },
            { type: INCIDENTS.GOAL, Scorer: JosePedrosa, Assist: WildCard, Team: 'Corsairs' },
            { type: INCIDENTS.GOAL, Scorer: DiogoDomingues, Assist: JosePedrosa, Team: 'Corsairs' },
            { type: INCIDENTS.GOAL, Scorer: RubenRodrigues, Assist: GustavoCarreira, Team: 'Corsairs' },
            { type: INCIDENTS.GOAL, Scorer: JosePedrosa, Assist: DiogoDomingues, Team: 'Corsairs' },
            { type: INCIDENTS.GOAL, Scorer: WildCard, Assist: GustavoCarreira, Team: 'Corsairs' },
        ]
    },
    {
        id: '12',
        teams: [
            {
                name: 'Scallywags', logo: LogoGreen, players: [JoaoFerreira, AndreSalvado, DiogoDomingues, JoaoMota, JorgeFerreira]
            },
            {
                name: 'Corsairs', logo: LogoRed, players: [LucasGarcia, JoaoPaulino, BernardoFigueiredo, TomasSantos, WildCard]
            },
        ],
        date: new Date(Date.UTC(2024, 2, 4)),
        time: '18:30',
        location: 'LeiriFoot',
        incidents: [
            { type: INCIDENTS.GOAL, Scorer: JorgeFerreira, Assist: JoaoFerreira, Team: 'Scallywags' },
            { type: INCIDENTS.GOAL, Scorer: DiogoDomingues, Assist: JoaoFerreira, Team: 'Scallywags' },
            { type: INCIDENTS.GOAL, Scorer: BernardoFigueiredo, Assist: LucasGarcia, Team: 'Corsairs' },
            { type: INCIDENTS.GOAL, Scorer: DiogoDomingues, Assist: null, Team: 'Scallywags' },
            { type: INCIDENTS.GOAL, Scorer: JoaoMota, Assist: AndreSalvado, Team: 'Scallywags' },
            { type: INCIDENTS.GOAL, Scorer: AndreSalvado, Assist: JoaoFerreira, Team: 'Scallywags' },
            { type: INCIDENTS.GOAL, Scorer: JoaoFerreira, Assist: AndreSalvado, Team: 'Scallywags' },
            { type: INCIDENTS.GOAL, Scorer: JoaoFerreira, Assist: DiogoDomingues, Team: 'Scallywags' },
            { type: INCIDENTS.GOAL, Scorer: JoaoPaulino, Assist: LucasGarcia, Team: 'Corsairs' },
            { type: INCIDENTS.GOAL, Scorer: AndreSalvado, Assist: JorgeFerreira, Team: 'Scallywags' },
            { type: INCIDENTS.OWN_GOAL, Scorer: AndreSalvado, Assist: null, Team: 'Corsairs' },
            { type: INCIDENTS.GOAL, Scorer: BernardoFigueiredo, Assist: JoaoPaulino, Team: 'Corsairs' },
            { type: INCIDENTS.GOAL, Scorer: JoaoFerreira, Assist: DiogoDomingues, Team: 'Scallywags' },
            { type: INCIDENTS.GOAL, Scorer: DiogoDomingues, Assist: JorgeFerreira, Team: 'Scallywags' },
            { type: INCIDENTS.GOAL, Scorer: LucasGarcia, Assist: JoaoPaulino, Team: 'Corsairs' },
            { type: INCIDENTS.GOAL, Scorer: AndreSalvado, Assist: null, Team: 'Scallywags' },
            { type: INCIDENTS.GOAL, Scorer: WildCard, Assist: null, Team: 'Corsairs' },
            { type: INCIDENTS.GOAL, Scorer: TomasSantos, Assist: WildCard, Team: 'Corsairs' },
            { type: INCIDENTS.GOAL, Scorer: LucasGarcia, Assist: JoaoPaulino, Team: 'Corsairs' },
            { type: INCIDENTS.GOAL, Scorer: DiogoDomingues, Assist: null, Team: 'Scallywags' },
            { type: INCIDENTS.GOAL, Scorer: WildCard, Assist: LucasGarcia, Team: 'Corsairs' },
            { type: INCIDENTS.GOAL, Scorer: BernardoFigueiredo, Assist: WildCard, Team: 'Corsairs' },
            { type: INCIDENTS.GOAL, Scorer: LucasGarcia, Assist: TomasSantos, Team: 'Corsairs' },
            { type: INCIDENTS.GOAL, Scorer: JoaoFerreira, Assist: JorgeFerreira, Team: 'Scallywags' },
            { type: INCIDENTS.GOAL, Scorer: DiogoDomingues, Assist: null, Team: 'Scallywags' },
            { type: INCIDENTS.GOAL, Scorer: JoaoPaulino, Assist: LucasGarcia, Team: 'Corsairs' },
            { type: INCIDENTS.GOAL, Scorer: JoaoPaulino, Assist: LucasGarcia, Team: 'Corsairs' },
            { type: INCIDENTS.GOAL, Scorer: JoaoMota, Assist: null, Team: 'Scallywags' },
        ],
    },
    {
        id: '101',
        teams: [
            {
                name: 'Scallywags', logo: LogoGreen, players: [JoaoFerreira, DiogoDomingues, PedroLopes, LucasGarcia, BernardoFigueiredo]
            },
            {
                name: 'Corsairs', logo: LogoRed, players: [JosePedrosa, AndreSalvado, RenatoOliveira, RubenRodrigues, LuisSantos]
            },
        ],
        date: new Date(Date.UTC(2024, 2, 7)),
        time: '18:30',
        location: 'LeiriFoot',
        incidents: [
            {type: INCIDENTS.GOAL, Scorer: DiogoDomingues, Assist: null, Team: 'Scallywags'},
            {type: INCIDENTS.GOAL, Scorer: RubenRodrigues, Assist: JosePedrosa, Team: 'Corsairs'},
            {type: INCIDENTS.GOAL, Scorer: JosePedrosa, Assist: null, Team: 'Corsairs'},
            {type: INCIDENTS.GOAL, Scorer: DiogoDomingues, Assist: JoaoFerreira, Team: 'Scallywags'},
            {type: INCIDENTS.GOAL, Scorer: LucasGarcia, Assist: JoaoFerreira, Team: 'Scallywags'},
            {type: INCIDENTS.GOAL, Scorer: JoaoPaulino, Assist: PedroLopes, Team: 'Scallywags'},
            {type: INCIDENTS.GOAL, Scorer: JosePedrosa, Assist: RubenRodrigues, Team: 'Corsairs'},
            {type: INCIDENTS.GOAL, Scorer: RubenRodrigues, Assist: AndreSalvado, Team: 'Corsairs'},
            {type: INCIDENTS.OWN_GOAL, Scorer: DiogoDomingues, Assist: RenatoOliveira, Team: 'Corsairs'},
            {type: INCIDENTS.GOAL, Scorer: JosePedrosa, Assist: AndreSalvado, Team: 'Corsairs'},
            {type: INCIDENTS.SUBSTITUTION, playerIn: JoaoPaulino, playerOut: LuisSantos},
            {type: INCIDENTS.GOAL, Scorer: AndreSalvado, Assist: JoaoPaulino, Team: 'Corsairs'},
            {type: INCIDENTS.GOAL, Scorer: RubenRodrigues, Assist: RenatoOliveira, Team: 'Corsairs'},
            {type: INCIDENTS.GOAL, Scorer: RenatoOliveira, Assist: JosePedrosa, Team: 'Corsairs'},
            {type: INCIDENTS.GOAL, Scorer: JoaoFerreira, Assist: null, Team: 'Scallywags'},
            {type: INCIDENTS.GOAL, Scorer: RenatoOliveira, Assist: JosePedrosa, Team: 'Corsairs'},
            {type: INCIDENTS.GOAL, Scorer: RubenRodrigues, Assist: null, Team: 'Corsairs'},
            {type: INCIDENTS.GOAL, Scorer: JoaoFerreira, Assist: LucasGarcia, Team: 'Scallywags'},
            {type: INCIDENTS.GOAL, Scorer: DiogoDomingues, Assist: LucasGarcia, Team: 'Scallywags'},
            {type: INCIDENTS.GOAL, Scorer: LucasGarcia, Assist: null, Team: 'Scallywags'},
            {type: INCIDENTS.GOAL, Scorer: DiogoDomingues, Assist: JoaoFerreira, Team: 'Scallywags'},
        ],
    },
    {
        id: '101',
        teams: [
            {
                name: 'Scallywags', logo: LogoGreen, players: [JoaoFerreira, DiogoDomingues, PedroLopes, LucasGarcia, BernardoFigueiredo]
            },
            {
                name: 'Corsairs', logo: LogoRed, players: [JosePedrosa, AndreSalvado, RenatoOliveira, RubenRodrigues, LuisSantos]
            },
        ],
        date: new Date(Date.UTC(2024, 2, 7)),
        time: '18:30',
        location: 'LeiriFoot',
        incidents: [
            {type: INCIDENTS.GOAL, Scorer: DiogoDomingues, Assist: null, Team: 'Scallywags'},
            {type: INCIDENTS.GOAL, Scorer: RubenRodrigues, Assist: JosePedrosa, Team: 'Corsairs'},
            {type: INCIDENTS.GOAL, Scorer: JosePedrosa, Assist: null, Team: 'Corsairs'},
            {type: INCIDENTS.GOAL, Scorer: DiogoDomingues, Assist: JoaoFerreira, Team: 'Scallywags'},
            {type: INCIDENTS.GOAL, Scorer: LucasGarcia, Assist: JoaoFerreira, Team: 'Scallywags'},
            {type: INCIDENTS.GOAL, Scorer: JoaoPaulino, Assist: PedroLopes, Team: 'Scallywags'},
            {type: INCIDENTS.GOAL, Scorer: JosePedrosa, Assist: RubenRodrigues, Team: 'Corsairs'},
            {type: INCIDENTS.GOAL, Scorer: RubenRodrigues, Assist: AndreSalvado, Team: 'Corsairs'},
            {type: INCIDENTS.OWN_GOAL, Scorer: DiogoDomingues, Assist: RenatoOliveira, Team: 'Corsairs'},
            {type: INCIDENTS.GOAL, Scorer: JosePedrosa, Assist: AndreSalvado, Team: 'Corsairs'},
            {type: INCIDENTS.SUBSTITUTION, playerIn: JoaoPaulino, playerOut: LuisSantos},
            {type: INCIDENTS.GOAL, Scorer: AndreSalvado, Assist: JoaoPaulino, Team: 'Corsairs'},
            {type: INCIDENTS.GOAL, Scorer: RubenRodrigues, Assist: RenatoOliveira, Team: 'Corsairs'},
            {type: INCIDENTS.GOAL, Scorer: RenatoOliveira, Assist: JosePedrosa, Team: 'Corsairs'},
            {type: INCIDENTS.GOAL, Scorer: JoaoFerreira, Assist: null, Team: 'Scallywags'},
            {type: INCIDENTS.GOAL, Scorer: RenatoOliveira, Assist: JosePedrosa, Team: 'Corsairs'},
            {type: INCIDENTS.GOAL, Scorer: RubenRodrigues, Assist: null, Team: 'Corsairs'},
            {type: INCIDENTS.GOAL, Scorer: JoaoFerreira, Assist: LucasGarcia, Team: 'Scallywags'},
            {type: INCIDENTS.GOAL, Scorer: DiogoDomingues, Assist: LucasGarcia, Team: 'Scallywags'},
            {type: INCIDENTS.GOAL, Scorer: LucasGarcia, Assist: null, Team: 'Scallywags'},
            {type: INCIDENTS.GOAL, Scorer: DiogoDomingues, Assist: JoaoFerreira, Team: 'Scallywags'},
        ],
    },
    {
        id: '1265',
        teams: [
            {
                name: 'Scallywags', logo: LogoGreen, players:
                [RodrigoAlves, WildCard, JoaoFerreira, JoaoPaulino, GustavoCarreira]
            },
            {
                name: 'Corsairs', logo: LogoRed, players: [JosePedrosa, DiogoDomingues, LucasGarcia, AndreSalvado, RenatoOliveira, TomasSantos]
            },
        ],
        date: new Date(Date.UTC(2024, 2, 18)),
        time: '18:30',
        location: 'LeiriFoot',
        incidents: [
            {type: INCIDENTS.GOAL, Scorer: JosePedrosa, Assist: TomasSantos, Team: 'Corsairs'},
            {type: INCIDENTS.GOAL, Scorer: JosePedrosa, Assist: null, Team: 'Corsairs'},
            {type: INCIDENTS.GOAL, Scorer: LucasGarcia, Assist: RenatoOliveira, Team: 'Corsairs'},
            {type: INCIDENTS.GOAL, Scorer: WildCard, Assist: GustavoCarreira, Team: 'Scallywags'},
            {type: INCIDENTS.GOAL, Scorer: RodrigoAlves, Assist: GustavoCarreira, Team: 'Scallywags'},
            {type: INCIDENTS.GOAL, Scorer: JoaoPaulino, Assist: RodrigoAlves, Team: 'Scallywags'},
            {type: INCIDENTS.GOAL, Scorer: GustavoCarreira, Assist: WildCard, Team: 'Scallywags'},
            {type: INCIDENTS.GOAL, Scorer: JosePedrosa, Assist: WildCard, Team: 'Corsairs'},
            {type: INCIDENTS.GOAL, Scorer: WildCard, Assist: null, Team: 'Scallywags'},
            {type: INCIDENTS.GOAL, Scorer: RodrigoAlves, Assist: GustavoCarreira, Team: 'Scallywags'},
            {type: INCIDENTS.GOAL, Scorer: JoaoFerreira, Assist: JoaoPaulino, Team: 'Scallywags'},
            {type: INCIDENTS.GOAL, Scorer: TomasSantos, Assist: JosePedrosa, Team: 'Corsairs'},
            {type: INCIDENTS.GOAL, Scorer: LucasGarcia, Assist: TomasSantos, Team: 'Corsairs'},
            {type: INCIDENTS.GOAL, Scorer: JosePedrosa, Assist: LucasGarcia, Team: 'Corsairs'},
            {type: INCIDENTS.GOAL, Scorer: LucasGarcia, Assist: JosePedrosa, Team: 'Corsairs'},
            {type: INCIDENTS.GOAL, Scorer: LucasGarcia, Assist: null, Team: 'Corsairs'},
            {type: INCIDENTS.GOAL, Scorer: LucasGarcia, Assist: DiogoDomingues, Team: 'Corsairs'},
            {type: INCIDENTS.GOAL, Scorer: RodrigoAlves, Assist: null, Team: 'Scallywags'},
            {type: INCIDENTS.GOAL, Scorer: RodrigoAlves, Assist: null, Team: 'Scallywags'},
            {type: INCIDENTS.GOAL, Scorer: JosePedrosa, Assist: null, Team: 'Corsairs'},
            {type: INCIDENTS.GOAL, Scorer: JoaoFerreira, Assist: WildCard, Team: 'Scallywags'},
            {type: INCIDENTS.GOAL, Scorer: JosePedrosa, Assist: null, Team: 'Corsairs'},
            {type: INCIDENTS.GOAL, Scorer: AndreSalvado, Assist: TomasSantos, Team: 'Corsairs'},
            {type: INCIDENTS.OWN_GOAL, Scorer: AndreSalvado, Assist: null, Team: 'Scallywags'},
            {type: INCIDENTS.GOAL, Scorer: LucasGarcia, Assist: JosePedrosa, Team: 'Corsairs'},
            {type: INCIDENTS.GOAL, Scorer: JosePedrosa, Assist: null, Team: 'Corsairs'},
            {type: INCIDENTS.GOAL, Scorer: JosePedrosa, Assist: null, Team: 'Corsairs'},
            {type: INCIDENTS.GOAL, Scorer: GustavoCarreira, Assist: RodrigoAlves, Team: 'Scallywags'},
            {type: INCIDENTS.GOAL, Scorer: RodrigoAlves, Assist: WildCard, Team: 'Scallywags'},
            {type: INCIDENTS.GOAL, Scorer: LucasGarcia, Assist: AndreSalvado, Team: 'Corsairs'},
            {type: INCIDENTS.GOAL, Scorer: GustavoCarreira, Assist: RodrigoAlves, Team: 'Scallywags'},
            {type: INCIDENTS.GOAL, Scorer: JoaoPaulino, Assist: GustavoCarreira, Team: 'Scallywags'},
            {type: INCIDENTS.GOAL, Scorer: RodrigoAlves, Assist: JoaoFerreira, Team: 'Scallywags'},
            {type: INCIDENTS.GOAL, Scorer: LucasGarcia, Assist: JosePedrosa, Team: 'Corsairs'},
            {type: INCIDENTS.GOAL, Scorer: JosePedrosa, Assist: AndreSalvado, Team: 'Corsairs'},
            {type: INCIDENTS.GOAL, Scorer: LucasGarcia, Assist: JosePedrosa, Team: 'Corsairs'},
            {type: INCIDENTS.GOAL, Scorer: JosePedrosa, Assist: TomasSantos, Team: 'Corsairs'},
            {type: INCIDENTS.GOAL, Scorer: DiogoDomingues, Assist: JosePedrosa, Team: 'Corsairs'},
        ],
    },
    {
        id: '1602',
        teams: [
            {
                name: 'Scallywags', logo: LogoGreen, players:
                    [TomasSantos, RubenRodrigues, LucasGarcia, AlexandreLopes, JoaoFerreira, BernardoFigueiredo]
            },
            {
                name: 'Corsairs', logo: LogoRed, players: [JosePedrosa, DiogoDomingues, RodrigoAlves,
                    AndreSalvado, JorgeFerreira, GustavoCarreira]
            },
        ],
        date: new Date(Date.UTC(2024, 2, 18)),
        time: '18:30',
        location: 'LeiriFoot',
        incidents: [
            { type: INCIDENTS.GOAL, Scorer: BernardoFigueiredo, Assist: LucasGarcia, Team: 'Scallywags' },
            { type: INCIDENTS.GOAL, Scorer: LucasGarcia, Assist: null, Team: 'Scallywags' },
            { type: INCIDENTS.GOAL, Scorer: LucasGarcia, Assist: null, Team: 'Scallywags' },
            { type: INCIDENTS.GOAL, Scorer: TomasSantos, Assist: AlexandreLopes, Team: 'Scallywags' },

            { type: INCIDENTS.GOAL, Scorer: DiogoDomingues, Assist: null, Team: 'Corsairs' },
            { type: INCIDENTS.GOAL, Scorer: DiogoDomingues, Assist: RodrigoAlves, Team: 'Corsairs' },
            { type: INCIDENTS.GOAL, Scorer: AndreSalvado, Assist: JosePedrosa, Team: 'Corsairs' },

            { type: INCIDENTS.GOAL, Scorer: JoaoFerreira, Assist: AlexandreLopes, Team: 'Scallywags' },
            { type: INCIDENTS.GOAL, Scorer: JoaoFerreira, Assist: null, Team: 'Scallywags' },
            { type: INCIDENTS.GOAL, Scorer: AlexandreLopes, Assist: null, Team: 'Scallywags' },
            { type: INCIDENTS.GOAL, Scorer: LucasGarcia, Assist: AlexandreLopes, Team: 'Scallywags' },

            { type: INCIDENTS.GOAL, Scorer: JosePedrosa, Assist: DiogoDomingues, Team: 'Corsairs' },
            { type: INCIDENTS.GOAL, Scorer: JosePedrosa, Assist: null, Team: 'Corsairs' },
            { type: INCIDENTS.GOAL, Scorer: JosePedrosa, Assist: RodrigoAlves, Team: 'Corsairs' },

            { type: INCIDENTS.GOAL, Scorer: LucasGarcia, Assist: TomasSantos, Team: 'Scallywags' },

            { type: INCIDENTS.GOAL, Scorer: JosePedrosa, Assist: null, Team: 'Corsairs' },

            { type: INCIDENTS.GOAL, Scorer: AlexandreLopes, Assist: TomasSantos, Team: 'Scallywags' },

            { type: INCIDENTS.GOAL, Scorer: DiogoDomingues, Assist: AndreSalvado, Team: 'Corsairs' },
            { type: INCIDENTS.GOAL, Scorer: DiogoDomingues, Assist: JorgeFerreira, Team: 'Corsairs' },

            { type: INCIDENTS.GOAL, Scorer: JoaoFerreira, Assist: TomasSantos, Team: 'Scallywags' },
            { type: INCIDENTS.GOAL, Scorer: RubenRodrigues, Assist: TomasSantos, Team: 'Scallywags' },
            { type: INCIDENTS.GOAL, Scorer: AlexandreLopes, Assist: JoaoFerreira, Team: 'Scallywags' },

            { type: INCIDENTS.GOAL, Scorer: JosePedrosa, Assist: AndreSalvado, Team: 'Corsairs' },

            { type: INCIDENTS.GOAL, Scorer: TomasSantos, Assist: BernardoFigueiredo, Team: 'Scallywags' },
            { type: INCIDENTS.GOAL, Scorer: RubenRodrigues, Assist: AlexandreLopes, Team: 'Scallywags' },

            { type: INCIDENTS.GOAL, Scorer: DiogoDomingues, Assist: AndreSalvado, Team: 'Corsairs' },

            { type: INCIDENTS.GOAL, Scorer: LucasGarcia, Assist: null, Team: 'Scallywags' },
            { type: INCIDENTS.GOAL, Scorer: LucasGarcia, Assist: null, Team: 'Scallywags' },

            
        ],
    }
];