import { Nationalities, Player, PlayerSeasonStats } from "./misc";
import PlayerPhoto from '../public/player.png';
import NunoReisImg from '../public/players/nuno-reis.png';
import BernardoFigueiredoImg from '../public/players/bernardo-figueiredo.png';
import DiogoDominguesImg from '../public/players/diogo-domingues.png';
import LucasGarciaImg from '../public/players/lucas-garcia.png';
import RenatoOliveiraImg from '../public/players/renato-oliveira.png';
import TomasSantosImg from '../public/players/tomas-santos.png';
import RubenRodriguesImg from '../public/players/ruben-rodrigues.png';

export const AndreSalvado: Player = {
    firstname: 'André',
    lastname: 'Salvado',
    photoUrl: PlayerPhoto,
    number: 8,
    stats: {
        ATA: 79,
        DEF: 75,
        TEC: 71,
        WR: 80,
        AGRE: 66,
        RES: 75,
        FIN: 65,
        SPE: 61,
        DRI: 79,
        PHY: 66,
        PAS: 75,
        OVR: 73,
    },
    nationality: [Nationalities.PT],
    label: 'A. SALVADO',
    goals: 0,
    assists: 0
};

export const AlexandreSantos: Player = {
    firstname: 'Alexandre',
    lastname: 'Santos',
    photoUrl: PlayerPhoto,
    number: 31,
    stats: {
        ATA: 84,
        DEF: 64,
        TEC: 88,
        WR: 64,
        AGRE: 61,
        RES: 65,
        FIN: 71,
        SPE: 75,
        DRI: 89,
        PHY: 61,
        PAS: 84,
        OVR: 73,
    },
    nationality: [Nationalities.PT],
    label: 'LEVEZINHO',
    goals: 0,
    assists: 0
};

export const BernardoFigueiredo: Player = {
    firstname: 'Bernardo',
    lastname: 'Figueiredo',
    photoUrl: BernardoFigueiredoImg,
    number: 65,
    stats: {
        ATA: 56,
        DEF: 71,
        TEC: 53,
        WR: 99,
        AGRE: 99,
        RES: 74,
        FIN: 59,
        SPE: 75,
        DRI: 56,
        PHY: 80,
        PAS: 56,
        OVR: 70,
    },
    nationality: [Nationalities.PT],
    label: 'BERNARDO',
    goals: 0,
    assists: 0
};

export const DiogoDomingues: Player = {
    firstname: 'Diogo',
    lastname: 'Domingues',
    photoUrl: DiogoDominguesImg,
    number: 1,
    stats: {
        ATA: 60,
        DEF: 65,
        TEC: 50,
        WR: 87,
        AGRE: 92,
        RES: 73,
        FIN: 62,
        SPE: 75,
        DRI: 51,
        PHY: 73,
        PAS: 54,
        OVR: 67,
    },
    nationality: [Nationalities.PT],
    label: 'PIRATA',
    goals: 0,
    assists: 0
};

export const FranciscoMachado: Player = {
    firstname: 'Francisco',
    lastname: 'Machado',
    photoUrl: PlayerPhoto,
    number: 5,
    stats: {
        AGRE: 51,
        ATA: 41,
        DEF: 44,
        DRI: 40,
        FIN: 45,
        OVR: 49,
        PAS: 50,
        PHY: 85,
        RES: 55,
        SPE: 45,
        TEC: 40,
        WR: 41,
    },
    nationality: [Nationalities.PT],
    label: 'MACHADO',
    goals: 0,
    assists: 0
};

export const GustavoCarreira: Player = {
    firstname: 'Gustavo',
    lastname: 'Carreira',
    photoUrl: PlayerPhoto,
    number: 6,
    stats: {
        AGRE: 65,
        ATA: 47,
        DEF: 46,
        DRI: 45,
        FIN: 55,
        OVR: 52,
        PAS: 50,
        PHY: 69,
        RES: 61,
        SPE: 50,
        TEC: 41,
        WR: 51,
    },
    nationality: [Nationalities.PT],
    label: 'CARREIRA',
    goals: 0,
    assists: 0
};

export const IvoOliveira: Player = {
    firstname: 'Ivo',
    lastname: 'Oliveira',
    photoUrl: PlayerPhoto,
    number: 11,
    stats: {
        AGRE: 69,
        ATA: 89,
        DEF: 66,
        DRI: 90,
        FIN: 90,
        OVR: 78,
        PAS: 86,
        PHY: 94,
        RES: 66,
        SPE: 51,
        TEC: 90,
        WR: 63,
    },
    nationality: [Nationalities.PT],
    label: 'OLIVEIRA',
    goals: 0,
    assists: 0
};

export const JoaoFerreira: Player = {
    firstname: 'João',
    lastname: 'Ferreira',
    photoUrl: PlayerPhoto,
    number: 10,
    stats: {
        AGRE: 79,
        ATA: 89,
        DEF: 76,
        DRI: 91,
        FIN: 72,
        OVR: 80,
        PAS: 86,
        PHY: 66,
        RES: 71,
        SPE: 81,
        TEC: 90,
        WR: 80,
    },
    nationality: [Nationalities.PT],
    label: 'J. FERREIRA',
    goals: 0,
    assists: 0
};

export const JoaoMota: Player = {
    firstname: 'João',
    lastname: 'Mota',
    photoUrl: PlayerPhoto,
    number: 42,
    stats: {
        AGRE: 59,
        ATA: 40,
        DEF: 50,
        DRI: 45,
        FIN: 50,
        OVR: 48,
        PAS: 50,
        PHY: 60,
        RES: 50,
        SPE: 45,
        TEC: 40,
        WR: 45,
    },
    nationality: [Nationalities.PT],
    label: 'MOTALLICA',
    goals: 0,
    assists: 0

};

export const JoaoPaulino: Player = {
    firstname: 'João',
    lastname: 'Paulino',
    photoUrl: PlayerPhoto,
    number: 7,
    stats: {
        ATA: 79,
        DEF: 80,
        TEC: 71,
        WR: 80,
        AGRE: 65,
        RES: 75,
        FIN: 70,
        SPE: 61,
        DRI: 79,
        PHY: 65,
        PAS: 75,
        OVR: 74,
    },
    nationality: [Nationalities.PT],
    label: 'PAULINO',
    goals: 0,
    assists: 0,
};

export const JorgeFerreira: Player = {
    firstname: 'Jorge',
    lastname: 'Ferreira',
    photoUrl: PlayerPhoto,
    number: 97,
    stats: {
        AGRE: 75,
        ATA: 65,
        DEF: 75,
        DRI: 60,
        FIN: 70,
        OVR: 71,
        PAS: 66,
        PHY: 85,
        RES: 76,
        SPE: 60,
        TEC: 62,
        WR: 79,
    },
    nationality: [Nationalities.PT],
    label: 'JORGE M.',
    goals: 0,
    assists: 0,
};

export const JosePedrosa: Player = {
    firstname: 'José',
    lastname: 'Pedrosa',
    photoUrl: PlayerPhoto,
    number: 7,
    stats: {
        ATA: 90,
        DEF: 66,
        TEC: 86,
        WR: 75,
        AGRE: 71,
        RES: 71,
        FIN: 86,
        SPE: 70,
        DRI: 86,
        PHY: 80,
        PAS: 86,
        OVR: 79,
    },
    nationality: [Nationalities.PT],
    label: 'PEDROSA',
    goals: 0,
    assists: 0,
};

export const LucasGarcia: Player = {
    firstname: 'Lucas',
    lastname: 'Garcia',
    photoUrl: LucasGarciaImg,
    number: 9,
    stats: {
        ATA: 86,
        DEF: 57,
        TEC: 84,
        WR: 55,
        AGRE: 79,
        RES: 61,
        FIN: 94,
        SPE: 53,
        DRI: 80,
        PHY: 85,
        PAS: 81,
        OVR: 74,
    },
    nationality: [Nationalities.BRA, Nationalities.PT],
    label: 'LUKAKU',
    goals: 0,
    assists: 0,
};

export const NunoReis: Player = {
    firstname: 'Nuno',
    lastname: 'Reis',
    photoUrl: NunoReisImg,
    number: 17,
    stats: {
        AGRE: 98,
        ATA: 94,
        DEF: 94,
        DRI: 89,
        FIN: 95,
        OVR: 92,
        PAS: 85,
        PHY: 86,
        RES: 98,
        SPE: 85,
        TEC: 89,
        WR: 98,
    },
    nationality: [Nationalities.PT],
    label: 'RUNO NEIS',
    goals: 0,
    assists: 0,
};

export const RenatoOliveira: Player = {
    firstname: 'Renato',
    lastname: 'Oliveira',
    photoUrl: RenatoOliveiraImg,
    number: 68,
    stats: {
        ATA: 50,
        DEF: 51,
        TEC: 50,
        WR: 60,
        AGRE: 55,
        RES: 56,
        FIN: 55,
        SPE: 50,
        DRI: 49,
        PHY: 60,
        PAS: 49,
        OVR: 53,
    },
    nationality: [Nationalities.PT],
    label: 'RENATO',
    goals: 0,
    assists: 0
};

export const RubenRodrigues: Player = {
    firstname: 'Rúben',
    lastname: 'Rodrigues',
    photoUrl: RubenRodriguesImg,
    number: 20,
    stats: {
        AGRE: 66,
        ATA: 84,
        DEF: 70,
        DRI: 84,
        FIN: 75,
        OVR: 74,
        PAS: 76,
        PHY: 66,
        RES: 74,
        SPE: 70,
        TEC: 84,
        WR: 61,
    },
    nationality: [Nationalities.PT],
    label: 'AQUAMAN',
    goals: 0,
    assists: 0
};

export const TomasSantos: Player = {
    firstname: 'Tomás',
    lastname: 'Santos',
    photoUrl: TomasSantosImg,
    number: 27,
    stats: {
        ATA: 56,
        DEF: 51,
        TEC: 56,
        WR: 59,
        AGRE: 55,
        RES: 56,
        FIN: 50,
        SPE: 51,
        DRI: 50,
        PHY: 60,
        PAS: 55,
        OVR: 55,
    },
    nationality: [Nationalities.PT],
    label: 'SANTOS',
    goals: 0,
    assists: 0
};

export const RodrigoAlves: Player = {
    firstname: 'Rodrigo',
    lastname: 'Alves',
    photoUrl: PlayerPhoto,
    number: 16,
    stats: {
        ATA: 56,
        DEF: 51,
        TEC: 56,
        WR: 59,
        AGRE: 55,
        RES: 56,
        FIN: 50,
        SPE: 51,
        DRI: 50,
        PHY: 60,
        PAS: 55,
        OVR: 55,
    },
    nationality: [Nationalities.PT],
    label: 'R. ALVES',
    goals: 0,
    assists: 0
}

export const WildCard: Player = {
    firstname: 'Wildcard',
    lastname: '1',
    photoUrl: PlayerPhoto,
    number: 16,
    stats: {
        ATA: 56,
        DEF: 51,
        TEC: 56,
        WR: 59,
        AGRE: 55,
        RES: 56,
        FIN: 50,
        SPE: 51,
        DRI: 50,
        PHY: 60,
        PAS: 55,
        OVR: 55,
    },
    nationality: [Nationalities.PT],
    label: 'WILDCARD #1',
    goals: 0,
    assists: 0,
};
export const AlexandreLopes: Player = {
    firstname: 'Alexandre',
    lastname: 'Lopes',
    photoUrl: PlayerPhoto,
    number: 16,
    stats: {
        ATA: 56,
        DEF: 51,
        TEC: 56,
        WR: 59,
        AGRE: 55,
        RES: 56,
        FIN: 50,
        SPE: 51,
        DRI: 50,
        PHY: 60,
        PAS: 55,
        OVR: 55,
    },
    nationality: [Nationalities.PT],
    label: 'ALEX LOPES',
    goals: 0,
    assists: 0
}

export const PedroLopes: Player = {
    firstname: 'Pedro',
    lastname: 'Lopes',
    photoUrl: PlayerPhoto,
    number: 88,
    stats: {
        ATA: 56,
        DEF: 51,
        TEC: 56,
        WR: 59,
        AGRE: 55,
        RES: 56,
        FIN: 50,
        SPE: 51,
        DRI: 50,
        PHY: 60,
        PAS: 55,
        OVR: 55,
    },
    nationality: [Nationalities.PT],
    label: 'LEDRO POPES',
    goals: 0,
    assists: 0
}

export const PedroGoncalves: Player = {
    firstname: 'Pedro',
    lastname: 'Gonçalves',
    photoUrl: PlayerPhoto,
    number: 4,
    stats: {
        AGRE: 64,
        ATA: 79,
        DEF: 75,
        DRI: 89,
        FIN: 80,
        OVR: 74,
        PAS: 79,
        PHY: 60,
        RES: 69,
        SPE: 66,
        TEC: 90,
        WR: 64,
    },
    nationality: [Nationalities.PT],
    label: 'ROCAS',
    goals: 0,
    assists: 0
};