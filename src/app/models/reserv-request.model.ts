export interface ReservRequest {
    chambre: string;
    checkin: Date;
    checkout: Date;
    nbrPers: number;
    breakfastIncluded: boolean;
}