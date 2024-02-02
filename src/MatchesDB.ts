
import LogoRed from '../public/logo-red.svg';
import LogoGreen from '../public/logo-green.svg';
import { INCIDENTS, Match } from "@/misc";
import { AlexandreLopes, AlexandreSantos, AndreSalvado, BernardoFigueiredo, DiogoDomingues, GustavoCarreira, JoaoFerreira, JoaoMota, JoaoPaulino, JorgeFerreira, JosePedrosa, LucasGarcia, NunoReis, PedroGoncalves, PedroLopes, RenatoOliveira, RodrigoAlves, RubenRodrigues, TomasSantos, WildCard } from "@/playersDB";

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
        team1: { name: 'Scallywags', logo: LogoRed, players: [TomasSantos, JoaoFerreira, RodrigoAlves, DiogoDomingues, LucasGarcia] },
        team2: { name: 'Corsairs', logo: LogoGreen, players: [RubenRodrigues, AlexandreSantos, JorgeFerreira, GustavoCarreira, NunoReis, JoaoMota] },
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
        team1: { name: 'Scallywags', logo: LogoRed, players: [
            BernardoFigueiredo, JoaoPaulino, PedroLopes, LucasGarcia, GustavoCarreira, JoaoFerreira,
        ] },
        team2: { name: 'Corsairs', logo: LogoGreen, players: [
            NunoReis, AlexandreLopes, RenatoOliveira, DiogoDomingues, JorgeFerreira, WildCard,
        ] },
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
        team1: { name: 'Scallywags', logo: LogoRed, players: [
            JoaoFerreira, DiogoDomingues, PedroGoncalves, RenatoOliveira, WildCard, JorgeFerreira,
        ] },
        team2: { name: 'Corsairs', logo: LogoGreen, players: [
            LucasGarcia, RubenRodrigues, AndreSalvado, RodrigoAlves, TomasSantos, GustavoCarreira
        ] },
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
        team1: { name: 'Scallywags', logo: LogoRed, players: [
            JoaoFerreira, BernardoFigueiredo, LucasGarcia, JoaoPaulino, RenatoOliveira, AndreSalvado
        ] },
        team2: { name: 'Corsairs', logo: LogoGreen, players: [
            NunoReis, DiogoDomingues, JorgeFerreira, WildCard, GustavoCarreira, AlexandreLopes, JosePedrosa
        ] },
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
        team1: {
            name: 'Scallywags', logo: LogoRed, players: [
                AndreSalvado, PedroGoncalves, RodrigoAlves, DiogoDomingues, NunoReis
            ]
        },
        team2: {
            name: 'Corsairs', logo: LogoGreen, players: [
                GustavoCarreira, JosePedrosa, JoaoFerreira, RubenRodrigues, LucasGarcia
            ]
        },
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
        team1: {
            name: 'Scallywags', logo: LogoRed, players: []
        },
        team2: {
            name: 'Corsairs', logo: LogoGreen, players: []
        },
        date: new Date(Date.UTC(2024, 1, 5)),
        time: '18:30',
        location: 'LeiriFoot',
        incidents: []
    },
    {
        id: '20240208',
        team1: {
            name: 'Scallywags', logo: LogoRed, players: []
        },
        team2: {
            name: 'Corsairs', logo: LogoGreen, players: []
        },
        date: new Date(Date.UTC(2024, 1, 8)),
        time: '18:30',
        location: 'LeiriFoot',
        incidents: []
    },
    {
        id: '20240212',
        team1: {
            name: 'Scallywags', logo: LogoRed, players: []
        },
        team2: {
            name: 'Corsairs', logo: LogoGreen, players: []
        },
        date: new Date(Date.UTC(2024, 1, 12)),
        time: '18:30',
        location: 'LeiriFoot',
        incidents: []
    },
    {
        id: '20240215',
        team1: {
            name: 'Scallywags', logo: LogoRed, players: []
        },
        team2: {
            name: 'Corsairs', logo: LogoGreen, players: []
        },
        date: new Date(Date.UTC(2024, 1, 15)),
        time: '18:30',
        location: 'LeiriFoot',
        incidents: []
    },
    {
        id: '20240219',
        team1: {
            name: 'Scallywags', logo: LogoRed, players: []
        },
        team2: {
            name: 'Corsairs', logo: LogoGreen, players: []
        },
        date: new Date(Date.UTC(2024, 1, 19)),
        time: '18:30',
        location: 'LeiriFoot',
        incidents: []
    },
    {
        id: '20240222',
        team1: {
            name: 'Scallywags', logo: LogoRed, players: []
        },
        team2: {
            name: 'Corsairs', logo: LogoGreen, players: []
        },
        date: new Date(Date.UTC(2024, 1, 22)),
        time: '18:30',
        location: 'LeiriFoot',
        incidents: []
    },
    {
        id: '20240226',
        team1: {
            name: 'Scallywags', logo: LogoRed, players: []
        },
        team2: {
            name: 'Corsairs', logo: LogoGreen, players: []
        },
        date: new Date(Date.UTC(2024, 1, 26)),
        time: '18:30',
        location: 'LeiriFoot',
        incidents: []
    },
    {
        id: '20240229',
        team1: {
            name: 'Scallywags', logo: LogoRed, players: []
        },
        team2: {
            name: 'Corsairs', logo: LogoGreen, players: []
        },
        date: new Date(Date.UTC(2024, 1, 29)),
        time: '18:30',
        location: 'LeiriFoot',
        incidents: []
    }
];