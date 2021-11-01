export interface IAccountData {
    nickname: string;
    account_id: string;
}
export interface IPlayerNameSearchResults {
    status: string | null;
    meta: {
        count: number;
    }
    data: IAccountData[]
}

export interface IVehicleData {
    statistics: {
        wins: number,
        battles: number
    },
    mark_of_mastery: number,
    tank_id: number
}

export interface IPlayerVehicles {
    vehicles: IVehicleData[]
}
