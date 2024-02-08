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
        TEC: 72,
        WR: 80,
        AGRE: 67,
        RES: 77,
        FIN: 67,
        SPE: 64,
        DRI: 77,
        PHY: 68,
        PAS: 76,
        OVR: 74,
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
        ATA: 82,
        DEF: 63,
        TEC: 87,
        WR: 65,
        AGRE: 61,
        RES: 64,
        FIN: 70,
        SPE: 75,
        DRI: 88,
        PHY: 61,
        PAS: 82,
        OVR: 72,
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
        ATA: 60,
        DEF: 74,
        TEC: 57,
        WR: 98,
        AGRE: 97,
        RES: 77,
        FIN: 61,
        SPE: 76,
        DRI: 58,
        PHY: 81,
        PAS: 60,
        OVR: 72,
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
        ATA: 61,
        DEF: 65,
        TEC: 51,
        WR: 86,
        AGRE: 91,
        RES: 74,
        FIN: 62,
        SPE: 75,
        DRI: 52,
        PHY: 74,
        PAS: 55,
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
        ATA: 52,
        DEF: 50,
        TEC: 45,
        WR: 53,
        AGRE: 65,
        RES: 61,
        FIN: 58,
        SPE: 52,
        DRI: 47,
        PHY: 68,
        PAS: 52,
        OVR: 55,
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
        ATA: 89,
        DEF: 67,
        TEC: 90,
        WR: 65,
        AGRE: 70,
        RES: 67,
        FIN: 89,
        SPE: 54,
        DRI: 90,
        PHY: 93,
        PAS: 86,
        OVR: 79,
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
        ATA: 89,
        DEF: 76,
        TEC: 90,
        WR: 81,
        AGRE: 78,
        RES: 73,
        FIN: 75,
        SPE: 83,
        DRI: 91,
        PHY: 67,
        PAS: 86,
        OVR: 80,
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
        ATA: 44,
        DEF: 52,
        TEC: 43,
        WR: 47,
        AGRE: 60,
        RES: 51,
        FIN: 51,
        SPE: 46,
        DRI: 47,
        PHY: 61,
        PAS: 52,
        OVR: 50,
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
        ATA: 80,
        DEF: 80,
        TEC: 74,
        WR: 79,
        AGRE: 66,
        RES: 76,
        FIN: 72,
        SPE: 66,
        DRI: 80,
        PHY: 66,
        PAS: 76,
        OVR: 75,
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
        ATA: 67,
        DEF: 76,
        TEC: 64,
        WR: 78,
        AGRE: 76,
        RES: 76,
        FIN: 71,
        SPE: 62,
        DRI: 61,
        PHY: 85,
        PAS: 67,
        OVR: 72,
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
    number: 80,
    stats: {
        ATA: 90,
        DEF: 70,
        TEC: 87,
        WR: 77,
        AGRE: 72,
        RES: 74,
        FIN: 87,
        SPE: 73,
        DRI: 87,
        PHY: 81,
        PAS: 87,
        OVR: 81,
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
        ATA: 87,
        DEF: 60,
        TEC: 84,
        WR: 58,
        AGRE: 79,
        RES: 63,
        FIN: 94,
        SPE: 57,
        DRI: 81,
        PHY: 84,
        PAS: 81,
        OVR: 75,
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
        ATA: 92,
        DEF: 91,
        TEC: 89,
        WR: 97,
        AGRE: 97,
        RES: 96,
        FIN: 94,
        SPE: 87,
        DRI: 88,
        PHY: 86,
        PAS: 85,
        OVR: 91,
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
        ATA: 51,
        DEF: 53,
        TEC: 51,
        WR: 62,
        AGRE: 56,
        RES: 58,
        FIN: 55,
        SPE: 53,
        DRI: 50,
        PHY: 61,
        PAS: 50,
        OVR: 55,
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
        ATA: 83,
        DEF: 70,
        TEC: 82,
        WR: 64,
        AGRE: 67,
        RES: 74,
        FIN: 75,
        SPE: 72,
        DRI: 82,
        PHY: 67,
        PAS: 76,
        OVR: 74,
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
        ATA: 58,
        DEF: 54,
        TEC: 58,
        WR: 60,
        AGRE: 57,
        RES: 56,
        FIN: 54,
        SPE: 55,
        DRI: 54,
        PHY: 61,
        PAS: 58,
        OVR: 57,
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
    number: 99,
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
    number: 94,
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
        ATA: 79,
        DEF: 75,
        TEC: 90,
        WR: 64,
        AGRE: 65,
        RES: 69,
        FIN: 80,
        SPE: 68,
        DRI: 90,
        PHY: 61,
        PAS: 80,
        OVR: 75,
    },
    nationality: [Nationalities.PT],
    label: 'ROCAS',
    goals: 0,
    assists: 0
};

export const AlexandreMendes: Player = {
    firstname: 'Alexandre',
    lastname: 'Mendes',
    photoUrl: PlayerPhoto,
    number: 90,
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
    label: 'MENDES',
    goals: 0,
    assists: 0
}

export const LuisSantos: Player = {
    firstname: 'Luis',
    lastname: 'Santos',
    photoUrl: PlayerPhoto,
    number: 95,
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
    label: 'L. SANTOS',
    goals: 0,
    assists: 0
}