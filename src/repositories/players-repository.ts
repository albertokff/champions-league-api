import { PlayerModel } from "../models/player-model";

const database: PlayerModel[] = [
    {
        "id": 1,
        "name": "Lionel Messi",
        "clube": "Paris Saint-Germain",
        "nationality": "Argentina",
        "position": "Forward",
        "statistics": {
            "Overall": 93,
            "Pace": 85,
            "Shooting": 90,
            "Passing": 91,
            "Dribbling": 95,
            "Defending": 38,
            "Physical": 60
        }
    },
    {
        "id": 2,
        "name": "Cristiano Ronaldo",
        "clube": "Al Nassr",
        "nationality": "Portugal",
        "position": "Forward",
        "statistics": {
            "Overall": 91,
            "Pace": 84,
            "Shooting": 94,
            "Passing": 80,
            "Dribbling": 85,
            "Defending": 35,
            "Physical": 80
        }
    },
    {
        "id": 3,
        "name": "Robert Lewandowski",
        "clube": "Barcelona",
        "nationality": "Poland",
        "position": "Forward",
        "statistics": {
            "Overall": 91,
            "Pace": 76,
            "Shooting": 91,
            "Passing": 79,
            "Dribbling": 82,
            "Defending": 40,
            "Physical": 85
        }
    },
    {
        "id": 4,
        "name": "Kevin De Bruyne",
        "clube": "Manchester City",
        "nationality": "Belgium",
        "position": "Midfielder",
        "statistics": {
            "Overall": 91,
            "Pace": 75,
            "Shooting": 85,
            "Passing": 93,
            "Dribbling": 85,
            "Defending": 55,
            "Physical": 70
        }
    },
    {
        "id": 5,
        "name": "Kylian Mbappé",
        "clube": "Paris Saint-Germain",
        "nationality": "France",
        "position": "Forward",
        "statistics": {
            "Overall": 92,
            "Pace": 97,
            "Shooting": 87,
            "Passing": 80,
            "Dribbling": 90,
            "Defending": 40,
            "Physical": 75
        }
    },
    {
        "id": 6,
        "name": "Erling Haaland",
        "clube": "Manchester City",
        "nationality": "Norway",
        "position": "Forward",
        "statistics": {
            "Overall": 89,
            "Pace": 89,
            "Shooting": 91,
            "Passing": 71,
            "Dribbling": 80,
            "Defending": 40,
            "Physical": 85
        }
    },
    {
        "id": 7,
        "name": "Mohamed Salah",
        "clube": "Liverpool",
        "nationality": "Egypt",
        "position": "Forward",
        "statistics": {
            "Overall": 90,
            "Pace": 91,
            "Shooting": 88,
            "Passing": 82,
            "Dribbling": 89,
            "Defending": 45,
            "Physical": 74
        }
    },
    {
        "id": 8,
        "name": "Virgil van Dijk",
        "clube": "Liverpool",
        "nationality": "Netherlands",
        "position": "Defender",
        "statistics": {
            "Overall": 90,
            "Pace": 70,
            "Shooting": 60,
            "Passing": 75,
            "Dribbling": 75,
            "Defending": 92,
            "Physical": 85
        }
    },
    {
        "id": 9,
        "name": "Sergio Ramos",
        "clube": "Paris Saint-Germain",
        "nationality": "Spain",
        "position": "Defender",
        "statistics": {
            "Overall": 88,
            "Pace": 72,
            "Shooting": 75,
            "Passing": 78,
            "Dribbling": 70,
            "Defending": 90,
            "Physical": 85
        }
    },
    {
        "id": 10,
        "name": "Neymar Jr",
        "clube": "Paris Saint-Germain",
        "nationality": "Brazil",
        "position": "Forward",
        "statistics": {
            "Overall": 91,
            "Pace": 88,
            "Shooting": 83,
            "Passing": 85,
            "Dribbling": 92,
            "Defending": 40,
            "Physical": 66
        }
    },
    {
        "id": 11,
        "name": "Luka Modrić",
        "clube": "Real Madrid",
        "nationality": "Croatia",
        "position": "Midfielder",
        "statistics": {
            "Overall": 87,
            "Pace": 70,
            "Shooting": 75,
            "Passing": 91,
            "Dribbling": 85,
            "Defending": 70,
            "Physical": 62
        }
    },
    {
        "id": 12,
        "name": "Karim Benzema",
        "clube": "Al-Ittihad",
        "nationality": "France",
        "position": "Forward",
        "statistics": {
            "Overall": 89,
            "Pace": 79,
            "Shooting": 91,
            "Passing": 79,
            "Dribbling": 84,
            "Defending": 45,
            "Physical": 72
        }
    },
    {
        "id": 13,
        "name": "Gerard Piqué",
        "clube": "Retired",
        "nationality": "Spain",
        "position": "Defender",
        "statistics": {
            "Overall": 85,
            "Pace": 65,
            "Shooting": 60,
            "Passing": 75,
            "Dribbling": 70,
            "Defending": 88,
            "Physical": 80
        }
    },
    {
        "id": 14,
        "name": "Thibaut Courtois",
        "clube": "Real Madrid",
        "nationality": "Belgium",
        "position": "Goalkeeper",
        "statistics": {
            "Overall": 89,
            "Pace": 50,
            "Shooting": 20,
            "Passing": 60,
            "Dribbling": 50,
            "Defending": 90,
            "Physical": 80
        }
    },
    {
        "id": 15,
        "name": "Joshua Kimmich",
        "clube": "Bayern Munich",
        "nationality": "Germany",
        "position": "Midfielder",
        "statistics": {
            "Overall": 88,
            "Pace": 80,
            "Shooting": 75,
            "Passing": 87,
            "Dribbling": 80,
            "Defending": 85,
            "Physical": 70
        }
    },
    {
        "id": 16,
        "name": "Jan Oblak",
        "clube": "Atletico Madrid",
        "nationality": "Slovenia",
        "position": "Goalkeeper",
        "statistics": {
            "Overall": 90,
            "Pace": 45,
            "Shooting": 20,
            "Passing": 60,
            "Dribbling": 45,
            "Defending": 90,
            "Physical": 75
        }
    },
    {
        "id": 17,
        "name": "Alisson Becker",
        "clube": "Liverpool",
        "nationality": "Brazil",
        "position": "Goalkeeper",
        "statistics": {
            "Overall": 89,
            "Pace": 55,
            "Shooting": 25,
            "Passing": 65,
            "Dribbling": 55,
            "Defending": 85,
            "Physical": 80
        }
    },
    {
        "id": 18,
        "name": "Toni Kroos",
        "clube": "Real Madrid",
        "nationality": "Germany",
        "position": "Midfielder",
        "statistics": {
            "Overall": 88,
            "Pace": 60,
            "Shooting": 80,
            "Passing": 90,
            "Dribbling": 85,
            "Defending": 70,
            "Physical": 65
        }
    },
    {
        "id": 19,
        "name": "João Félix",
        "clube": "Chelsea",
        "nationality": "Portugal",
        "position": "Forward",
        "statistics": {
            "Overall": 85,
            "Pace": 80,
            "Shooting": 75,
            "Passing": 77,
            "Dribbling": 85,
            "Defending": 45,
            "Physical": 70
        }
    },
    {
        "id": 20,
        "name": "Philippe Coutinho",
        "clube": "Aston Villa",
        "nationality": "Brazil",
        "position": "Midfielder",
        "statistics": {
            "Overall": 84,
            "Pace": 78,
            "Shooting": 80,
            "Passing": 85,
            "Dribbling": 88,
            "Defending": 50,
            "Physical": 72
        }
    }    
];

export const findAllPlayers = async (): Promise<PlayerModel[]> => {
    return database;
};

export const findPlayerById = async (id: number): Promise<PlayerModel | undefined> => {
    return database.find( player => player.id === id);
}