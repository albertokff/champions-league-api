export interface PlayerModel {
    id: number;
    name: string;
    clube: string;
    nationality: string;
    position: string;
    statistics: {
        Overall: number;
        Pace: number;
        Shooting: number;
        Passing: number;
        Dribbling: number;
        Defending: number;
        Physical: number;
    };
}