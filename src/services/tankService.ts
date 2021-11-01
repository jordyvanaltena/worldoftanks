import { IPlayerNameSearchResults } from '@/Interfaces';
import http from './http';

const APP_ID = '6d5967371a2623fe2cedbc7f0e0963bd';

export default class TankService {
	searchOnPlayerName(playerName: string): Promise<IPlayerNameSearchResults> {
		return http.get(`account/list/`, 
        {
            params: {
                search: playerName,
                application_id: APP_ID
            }
        });
	}

    getPlayerVehicles(accountID){
        return http.get('account/tanks/', {
            params: {
                account_id: accountID,
                application_id: APP_ID
            }
        })
    }

    // https://api.worldoftanks.eu/wot/encyclopedia/vehicles/?application_id=6d5967371a2623fe2cedbc7f0e0963bd&tank_id=513
    getTankInformation(tankID){
        return http.get('encyclopedia/vehicles/', {
            params: {
                tank_id: tankID,
                application_id: APP_ID
            }
        })
    }
}

// A singleton instance
export const tankService = new TankService();