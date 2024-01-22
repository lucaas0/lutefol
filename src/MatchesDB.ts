
import LogoRed from '../public/logo-red.svg';
import LogoGreen from '../public/logo-green.svg';
import { Match } from "@/misc";
import { AlexandreLopes, AlexandreSantos, AndreSalvado, BernardoFigueiredo, DiogoDomingues, GustavoCarreira, JoaoFerreira, JoaoMota, JoaoPaulino, JorgeFerreira, JosePedrosa, LucasGarcia, NunoReis, PedroLopes, RenatoOliveira, RodrigoAlves, RubenRodrigues, TomasSantos, WildCard } from "@/playersDB";

export const Matches: Match[] = [
    {
        id: '20240104',
        team1: {
            name: 'Scallywags', logo: LogoRed, players: [
                AndreSalvado, JoaoFerreira, BernardoFigueiredo, DiogoDomingues, RodrigoAlves, AlexandreSantos,
            ]
        },
        team2: {
            name: 'Corsairs', logo: LogoGreen, players: [
                RubenRodrigues, NunoReis, RenatoOliveira, LucasGarcia, JosePedrosa, GustavoCarreira,
            ]
        },
        date: new Date(Date.UTC(2024, 0, 4)),
        time: '18:30',
        location: 'LeiriFoot',
        goals: [
            { Scorer: DiogoDomingues, Assist: AndreSalvado, Team: 'Scallywags' },
            { Scorer: NunoReis, Assist: null, Team: 'Corsairs' },
            { Scorer: RubenRodrigues, Assist: JosePedrosa, Team: 'Corsairs' },
            { Scorer: JosePedrosa, Assist: null, Team: 'Corsairs' },
            { Scorer: LucasGarcia, Assist: null, Team: 'Corsairs' },
            { Scorer: NunoReis, Assist: LucasGarcia, Team: 'Corsairs' },
            { Scorer: RenatoOliveira, Assist: JosePedrosa, Team: 'Corsairs' },
            { Scorer: LucasGarcia, Assist: RubenRodrigues, Team: 'Corsairs' },
            { Scorer: JoaoFerreira, Assist: AndreSalvado, Team: 'Scallywags' },
            { Scorer: JosePedrosa, Assist: LucasGarcia, Team: 'Corsairs' },
            { Scorer: RubenRodrigues, Assist: null, Team: 'Corsairs' },
            { Scorer: JoaoFerreira, Assist: null, Team: 'Scallywags' },
            { Scorer: DiogoDomingues, Assist: null, Team: 'Scallywags' },
            { Scorer: JosePedrosa, Assist: null, Team: 'Corsairs' },
            { Scorer: NunoReis, Assist: null, Team: 'Corsairs' },
            { Scorer: JosePedrosa, Assist: null, Team: 'Corsairs' },
            { Scorer: JosePedrosa, Assist: RubenRodrigues, Team: 'Corsairs' },
            { Scorer: RubenRodrigues, Assist: null, Team: 'Corsairs' },
            { Scorer: JoaoFerreira, Assist: RodrigoAlves, Team: 'Scallywags' },
            { Scorer: RubenRodrigues, Assist: JosePedrosa, Team: 'Corsairs' },
            { Scorer: DiogoDomingues, Assist: null, Team: 'Scallywags' },
            { Scorer: AlexandreSantos, Assist: RodrigoAlves, Team: 'Scallywags' },
            { Scorer: JosePedrosa, Assist: null, Team: 'Corsairs' },
            { Scorer: NunoReis, Assist: null, Team: 'Corsairs' },
            { Scorer: JosePedrosa, Assist: null, Team: 'Corsairs' },
            { Scorer: BernardoFigueiredo, Assist: DiogoDomingues, Team: 'Scallywags' },
            { Scorer: DiogoDomingues, Assist: null, Team: 'Scallywags' },
            { Scorer: RodrigoAlves, Assist: DiogoDomingues, Team: 'Scallywags' },
            { Scorer: GustavoCarreira, Assist: JosePedrosa, Team: 'Corsairs' },
            { Scorer: NunoReis, Assist: null, Team: 'Corsairs' },
            { Scorer: JosePedrosa, Assist: null, Team: 'Corsairs' },
            { Scorer: BernardoFigueiredo, Assist: AndreSalvado, Team: 'Scallywags' },
            { Scorer: AndreSalvado, Assist: null, Team: 'Scallywags' }]
    },
    {
        id: '20240108',
        team1: {
            name: 'Scallywags', logo: LogoRed, players: [
                AndreSalvado, JoaoFerreira, JoaoPaulino, BernardoFigueiredo, DiogoDomingues, GustavoCarreira,
            ]
        },
        team2: {
            name: 'Corsairs', logo: LogoGreen, players: [
                RubenRodrigues, NunoReis, RenatoOliveira, LucasGarcia, AlexandreLopes, RodrigoAlves,
            ]
        },
        date: new Date(Date.UTC(2024, 0, 8)),
        time: '18:30',
        location: 'LeiriFoot',
        goals: [
            { Scorer: NunoReis, Assist: RubenRodrigues, Team: 'Corsairs' },
            { Scorer: RubenRodrigues, Assist: null, Team: 'Corsairs' },
            { Scorer: AlexandreLopes, Assist: LucasGarcia, Team: 'Corsairs' },
            { Scorer: AndreSalvado, Assist: null, Team: 'Scallywags' },
            { Scorer: LucasGarcia, Assist: null, Team: 'Corsairs' },
            { Scorer: LucasGarcia, Assist: AlexandreLopes, Team: 'Corsairs' },
            { Scorer: NunoReis, Assist: LucasGarcia, Team: 'Corsairs' },
            { Scorer: AndreSalvado, Assist: null, Team: 'Scallywags' },
            { Scorer: AndreSalvado, Assist: null, Team: 'Scallywags' },
            { Scorer: LucasGarcia, Assist: NunoReis, Team: 'Corsairs' },
            { Scorer: NunoReis, Assist: null, Team: 'Corsairs' },
            { Scorer: GustavoCarreira, Assist: null, Team: 'Scallywags' },
            { Scorer: RubenRodrigues, Assist: NunoReis, Team: 'Corsairs' },
            { Scorer: DiogoDomingues, Assist: null, Team: 'Scallywags' },
            { Scorer: JoaoFerreira, Assist: null, Team: 'Scallywags' },
            { Scorer: AlexandreLopes, Assist: NunoReis, Team: 'Corsairs' },
            { Scorer: RodrigoAlves, Assist: NunoReis, Team: 'Corsairs' },
            { Scorer: AndreSalvado, Assist: null, Team: 'Scallywags' },
            { Scorer: JoaoPaulino, Assist: null, Team: 'Scallywags' },
            { Scorer: JoaoFerreira, Assist: AndreSalvado, Team: 'Scallywags' },
            { Scorer: JoaoFerreira, Assist: null, Team: 'Scallywags' },
            { Scorer: BernardoFigueiredo, Assist: null, Team: 'Scallywags' },
            { Scorer: AndreSalvado, Assist: BernardoFigueiredo, Team: 'Scallywags' },
            { Scorer: JoaoPaulino, Assist: null, Team: 'Scallywags' },
            { Scorer: AndreSalvado, Assist: null, Team: 'Scallywags' },
            { Scorer: RubenRodrigues, Assist: null, Team: 'Corsairs' },
            { Scorer: LucasGarcia, Assist: null, Team: 'Corsairs' },
            { Scorer: LucasGarcia, Assist: RodrigoAlves, Team: 'Corsairs' },
            { Scorer: DiogoDomingues, Assist: null, Team: 'Scallywags' },
            { Scorer: NunoReis, Assist: LucasGarcia, Team: 'Corsairs' },
            { Scorer: RenatoOliveira, Assist: null, Team: 'Corsairs' },
            { Scorer: LucasGarcia, Assist: NunoReis, Team: 'Corsairs' },
            { Scorer: AndreSalvado, Assist: null, Team: 'Scallywags' },
            { Scorer: NunoReis, Assist: AlexandreLopes, Team: 'Corsairs' },
            { Scorer: AlexandreLopes, Assist: NunoReis, Team: 'Corsairs' },
            { Scorer: JoaoPaulino, Assist: null, Team: 'Scallywags' },
        ]
    },
    {
        id: '20240111',
        team1: { name: 'Scallywags', logo: LogoRed, players: [TomasSantos, JoaoFerreira, RodrigoAlves, DiogoDomingues, LucasGarcia] },
        team2: { name: 'Corsairs', logo: LogoGreen, players: [RubenRodrigues, AlexandreSantos, JorgeFerreira, GustavoCarreira, NunoReis, JoaoMota] },
        date: new Date(Date.UTC(2024, 0, 11)),
        time: '18:30',
        location: 'LeiriFoot',
        goals: [
            { Scorer: GustavoCarreira, Assist: null, Team: 'Corsairs' },
            { Scorer: DiogoDomingues, Assist: LucasGarcia, Team: 'Scallywags' },
            { Scorer: RubenRodrigues, Assist: AlexandreSantos, Team: 'Corsairs' },
            { Scorer: AlexandreSantos, Assist: NunoReis, Team: 'Corsairs' },
            { Scorer: JoaoFerreira, Assist: LucasGarcia, Team: 'Scallywags' },
            { Scorer: JoaoFerreira, Assist: DiogoDomingues, Team: 'Scallywags' },
            { Scorer: JoaoFerreira, Assist: null, Team: 'Scallywags' },
            { Scorer: JoaoFerreira, Assist: null, Team: 'Scallywags' },
            { Scorer: JoaoMota, Assist: null, Team: 'Scallywags' },
            { Scorer: DiogoDomingues, Assist: JoaoFerreira, Team: 'Scallywags' },
            { Scorer: RodrigoAlves, Assist: null, Team: 'Scallywags' },
            { Scorer: GustavoCarreira, Assist: JoaoMota, Team: 'Corsairs' },
            { Scorer: RubenRodrigues, Assist: null, Team: 'Corsairs' },
            { Scorer: JoaoFerreira, Assist: null, Team: 'Scallywags' },
            { Scorer: JorgeFerreira, Assist: NunoReis, Team: 'Corsairs' },
            { Scorer: DiogoDomingues, Assist: TomasSantos, Team: 'Scallywags' },
            { Scorer: JoaoMota, Assist: NunoReis, Team: 'Corsairs' },
            { Scorer: TomasSantos, Assist: null, Team: 'Scallywags' },
            { Scorer: LucasGarcia, Assist: null, Team: 'Scallywags' },
            { Scorer: RodrigoAlves, Assist: JoaoFerreira, Team: 'Scallywags' },
            { Scorer: TomasSantos, Assist: null, Team: 'Scallywags' },
            { Scorer: RodrigoAlves, Assist: LucasGarcia, Team: 'Scallywags' },
            { Scorer: RubenRodrigues, Assist: null, Team: 'Corsairs' }
        ]
    },
    {
        id: '20240115',
        team1: {
            name: 'Scallywags', logo: LogoRed, players: [
                NunoReis, LucasGarcia, AlexandreLopes, BernardoFigueiredo, RubenRodrigues,
            ]
        },
        team2: {
            name: 'Corsairs', logo: LogoGreen, players: [
                JosePedrosa, JoaoFerreira, AndreSalvado, JoaoPaulino, TomasSantos, RenatoOliveira
            ]
        },
        date: new Date(Date.UTC(2024, 0, 15)),
        time: '18:30',
        location: 'LeiriFoot',
        goals: [
            { Scorer: LucasGarcia, Assist: BernardoFigueiredo, Team: 'Scallywags' },
            { Scorer: TomasSantos, Assist: AndreSalvado, Team: 'Corsairs' },
            { Scorer: LucasGarcia, Assist: null, Team: 'Scallywags' },
            { Scorer: JoaoPaulino, Assist: JoaoFerreira, Team: 'Corsairs' },
            { Scorer: AlexandreLopes, Assist: LucasGarcia, Team: 'Scallywags' },
            { Scorer: NunoReis, Assist: RubenRodrigues, Team: 'Scallywags' },
            { Scorer: LucasGarcia, Assist: AlexandreLopes, Team: 'Scallywags' },
            { Scorer: LucasGarcia, Assist: null, Team: 'Scallywags' },
            { Scorer: AlexandreLopes, Assist: LucasGarcia, Team: 'Scallywags' },
            { Scorer: JosePedrosa, Assist: null, Team: 'Corsairs' },
            { Scorer: NunoReis, Assist: AlexandreLopes, Team: 'Scallywags' },
            { Scorer: JoaoFerreira, Assist: JoaoPaulino, Team: 'Corsairs' },
            { Scorer: JoaoPaulino, Assist: JoaoFerreira, Team: 'Corsairs' },
            { Scorer: AndreSalvado, Assist: JoaoPaulino, Team: 'Corsairs' },
            { Scorer: NunoReis, Assist: TomasSantos, Team: 'Scallywags' },
            { Scorer: NunoReis, Assist: null, Team: 'Scallywags' },
            { Scorer: JoaoFerreira, Assist: JoaoPaulino, Team: 'Corsairs' },
            { Scorer: AlexandreLopes, Assist: LucasGarcia, Team: 'Scallywags' },
            { Scorer: JoaoFerreira, Assist: JoaoPaulino, Team: 'Corsairs' },
            { Scorer: AndreSalvado, Assist: JosePedrosa, Team: 'Corsairs' },
            { Scorer: RubenRodrigues, Assist: AlexandreLopes, Team: 'Scallywags' },
            { Scorer: JosePedrosa, Assist: AndreSalvado, Team: 'Corsairs' },
            { Scorer: NunoReis, Assist: LucasGarcia, Team: 'Scallywags' },
            { Scorer: AlexandreLopes, Assist: LucasGarcia, Team: 'Scallywags' },
            { Scorer: AlexandreLopes, Assist: LucasGarcia, Team: 'Scallywags' },
            { Scorer: JoaoPaulino, Assist: null, Team: 'Corsairs' },
            { Scorer: AndreSalvado, Assist: JoaoFerreira, Team: 'Corsairs' },
            { Scorer: AndreSalvado, Assist: RenatoOliveira, Team: 'Corsairs' },
            { Scorer: NunoReis, Assist: AlexandreLopes, Team: 'Scallywags' },
        ],
    },
    {
        id: '20240118',
        team1: {
            name: 'Scallywags', logo: LogoRed, players: [
                AlexandreSantos, RubenRodrigues, JosePedrosa, LucasGarcia, BernardoFigueiredo
            ]
        },
        team2: {
            name: 'Corsairs', logo: LogoGreen, players: [
                JoaoFerreira, NunoReis, DiogoDomingues, PedroLopes, RodrigoAlves, RenatoOliveira
            ]
        },
        date: new Date(Date.UTC(2024, 0, 18)),
        time: '18:30',
        location: 'LeiriFoot',
        goals: [
            { Team: 'Corsairs', Scorer: NunoReis, Assist: DiogoDomingues },
            { Team: 'Scallywags', Scorer: RubenRodrigues, Assist: null },
            { Team: 'Corsairs', Scorer: JoaoFerreira, Assist: NunoReis },
            { Team: 'Scallywags', Scorer: DiogoDomingues, Assist: JosePedrosa },
            { Team: 'Corsairs', Scorer: NunoReis, Assist: JoaoFerreira },
            { Team: 'Scallywags', Scorer: LucasGarcia, Assist: BernardoFigueiredo },
            { Team: 'Scallywags', Scorer: LucasGarcia, Assist: JosePedrosa },
            { Team: 'Scallywags', Scorer: RubenRodrigues, Assist: BernardoFigueiredo },
            { Team: 'Scallywags', Scorer: JosePedrosa, Assist: null },
            { Team: 'Scallywags', Scorer: JosePedrosa, Assist: null },
            { Team: 'Corsairs', Scorer: NunoReis, Assist: DiogoDomingues },
            { Team: 'Scallywags', Scorer: RubenRodrigues, Assist: BernardoFigueiredo },
            { Team: 'Scallywags', Scorer: LucasGarcia, Assist: JosePedrosa },
            { Team: 'Corsairs', Scorer: DiogoDomingues, Assist: null },
            { Team: 'Corsairs', Scorer: RodrigoAlves, Assist: null },
            { Team: 'Scallywags', Scorer: AlexandreSantos, Assist: JosePedrosa },
            { Team: 'Scallywags', Scorer: AlexandreSantos, Assist: JosePedrosa },
            { Team: 'Scallywags', Scorer: LucasGarcia, Assist: null },
            { Team: 'Scallywags', Scorer: AlexandreSantos, Assist: LucasGarcia },
            { Team: 'Scallywags', Scorer: JosePedrosa, Assist: AlexandreSantos },
            { Team: 'Corsairs', Scorer: JoaoFerreira, Assist: null },
        ]
    },
    {
        id: '20240122',
        team1: { name: 'Scallywags', logo: LogoRed, players: [
            BernardoFigueiredo, JoaoPaulino, PedroLopes, LucasGarcia, GustavoCarreira, JoaoFerreira,
        ] },
        team2: { name: 'Corsairs', logo: LogoGreen, players: [
            NunoReis, AlexandreLopes, RenatoOliveira, DiogoDomingues, JorgeFerreira, WildCard,
        ] },
        date: new Date(Date.UTC(2024, 0, 22)),
        time: '18:30',
        location: 'LeiriFoot',
        goals: [
            { Scorer: LucasGarcia, Assist: JoaoPaulino, Team: 'Scallywags' },
            { Scorer: LucasGarcia, Assist: JoaoPaulino, Team: 'Scallywags' },
            { Scorer: LucasGarcia, Assist: BernardoFigueiredo, Team: 'Scallywags' },
            { Scorer: AlexandreLopes, Assist: WildCard, Team: 'Corsairs' },
            { Scorer: AlexandreLopes, Assist: JorgeFerreira, Team: 'Corsairs' },
            { Scorer: BernardoFigueiredo, Assist: LucasGarcia, Team: 'Scallywags' },
            { Scorer: NunoReis, Assist: null, Team: 'Corsairs' },
            { Scorer: JoaoFerreira, Assist: LucasGarcia, Team: 'Scallywags' },
            { Scorer: JoaoFerreira, Assist: JoaoPaulino, Team: 'Scallywags' },
            { Scorer: DiogoDomingues, Assist: NunoReis, Team: 'Corsairs' },
            { Scorer: WildCard, Assist: AlexandreLopes, Team: 'Corsairs' },
            { Scorer: JoaoPaulino, Assist: null, Team: 'Scallywags' },
            { Scorer: NunoReis, Assist: WildCard, Team: 'Corsairs' },
            { Scorer: LucasGarcia, Assist: JoaoPaulino, Team: 'Scallywags' },
            { Scorer: AlexandreLopes, Assist: null, Team: 'Corsairs' },
            { Scorer: AlexandreLopes, Assist: NunoReis, Team: 'Corsairs' },
            { Scorer: WildCard, Assist: NunoReis, Team: 'Corsairs' },
            { Scorer: NunoReis, Assist: JorgeFerreira, Team: 'Corsairs' },
            { Scorer: LucasGarcia, Assist: JoaoFerreira, Team: 'Scallywags' },
            { Scorer: DiogoDomingues, Assist: RenatoOliveira, Team: 'Corsairs' },
            { Scorer: JoaoPaulino, Assist: LucasGarcia, Team: 'Scallywags' },
            { Scorer: JorgeFerreira, Assist: null, Team: 'Corsairs' },
            { Scorer: LucasGarcia, Assist: JoaoFerreira, Team: 'Scallywags' },
            { Scorer: BernardoFigueiredo, Assist: null, Team: 'Scallywags' },
            { Scorer: JoaoFerreira, Assist: LucasGarcia, Team: 'Scallywags' },
            { Scorer: JoaoPaulino, Assist: JoaoFerreira, Team: 'Scallywags' },
            { Scorer: WildCard, Assist: AlexandreLopes, Team: 'Corsairs' },
            { Scorer: JoaoPaulino, Assist: null, Team: 'Scallywags' },
            { Scorer: AlexandreLopes, Assist: WildCard, Team: 'Corsairs' },
            { Scorer: JoaoPaulino, Assist: JoaoFerreira, Team: 'Scallywags' },
            { Scorer: JorgeFerreira, Assist: null, Team: 'Corsairs' },
            { Scorer: JoaoPaulino, Assist: null, Team: 'Scallywags' },
            { Scorer: DiogoDomingues, Assist: JorgeFerreira, Team: 'Corsairs' },
        ]
    },
    {
        id: '20240125',
        team1: { name: 'Scallywags', logo: LogoRed, players: [] },
        team2: { name: 'Corsairs', logo: LogoGreen, players: [] },
        date: new Date(Date.UTC(2024, 0, 25)),
        time: '18:30',
        location: 'LeiriFoot',
        goals: []
    },
    {
        id: '20240129',
        team1: { name: 'Scallywags', logo: LogoRed, players: [] },
        team2: { name: 'Corsairs', logo: LogoGreen, players: [] },
        date: new Date(Date.UTC(2024, 0, 29)),
        time: '18:30',
        location: 'LeiriFoot',
        goals: []
    }
];