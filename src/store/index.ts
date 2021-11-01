import { GetterTree, MutationTree, ActionTree } from "vuex";
import Vuex from "vuex";
import Vue from "vue";
import { tankService } from "../services/tankService";
import { IPlayerNameSearchResults, IPlayerVehicles } from "@/Interfaces";

Vue.use(Vuex);

class State {
	playerName: string = "";
	account_id: string = "";
	playerNameSearchResults: IPlayerNameSearchResults = {
        status: 'none',
        meta: {
            count: 0
        },
        data: []
    };
    playerVehicles: IPlayerVehicles = {
        vehicles: []
    }
}

const getters: GetterTree<State, any> = {
    playerName(state){
        return state.playerName
    },
	playerNameSearchResults(state) {
		return state.playerNameSearchResults;
	},
    playerVehicles(state){
        return state.playerVehicles;
    }
};

const mutations: MutationTree<State> = {
	setPlayerName(state, payload) {
		state.playerName = payload;
	},
    setAccountID(state, payload) {
		state.account_id = payload;
	},
	setplayerNameSearchResults(state, payload) {
		state.playerNameSearchResults = payload;
	},
    setPlayerVehicles(state, payload) {
        state.playerVehicles = payload;
    }
};

const actions: ActionTree<State, any> = {
	updateAccountId({ commit, state }) {
		return tankService
			.searchOnPlayerName(state.playerName)
			.then((response) => {
				commit("setplayerNameSearchResults", response.data);
			})
			.catch(
                (err) => console.log(err)
            );
	},
    updatePlayerVehicles({commit, state}){
        return tankService
            .getPlayerVehicles(state.account_id)
                .then((result) => {
                    const data = result.data.data[Object.keys(result.data.data)[0]]
                    commit("setPlayerVehicles", data)
                }).catch((err) => {
                    console.log(err)
                });
    },
};

export default new Vuex.Store({
	state: new State(),
	modules: {},
	mutations: mutations,
	actions: actions,
	getters: getters,
});
