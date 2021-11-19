export interface Reservation {
    id: number,
    checkin: Date,
    checkout: Date,
    breakfastIncluded: boolean,
    client: {
        username: string,
        nom: string,
        prenom: string,
        tel: string,
        moyenPayement: string[]
    },
    chambre: {
        numeroChambre: number,
        nbrPlaces: number,
        type: string,
        prix: number
    }
}