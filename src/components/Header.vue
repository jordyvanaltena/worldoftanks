<template>
	<div class="header">
		<div class="container">
            <div class="form-wrapper">
                <b-form inline>
                    <label class="sr-only" for="playerName">Name</label>
                    <b-form-input id="playerName" v-model="playerName" class="mb-2 mr-sm-2 mb-sm-0" placeholder="Player name"></b-form-input>
                    <b-button variant="primary" @click.prevent="getPlayerInfo">Search</b-button>
                </b-form>
                <ul v-if="playerNameSearchResults.data.length > 0 && show === true" class="results">
                    <li v-for="player in playerNameSearchResults.data" :key="player.account_id">
                        <button @click="updateSelectedPlayer(player)">{{player.nickname}}</button>
                    </li>
                </ul>
            </div>
		</div>
	</div>
</template>

<script lang="ts">
import { IPlayerNameSearchResults } from "@/Interfaces";
import { Component, Vue } from "vue-property-decorator";

@Component({
	components: {
	},
})
export default class Header extends Vue {
    public show = true;
    public updateSelectedPlayer(selectedPlayer){
		this.$store.commit('setPlayerName', selectedPlayer.nickname);
        this.$store.commit('setAccountID', selectedPlayer.account_id);
        this.$store.dispatch('updateAccountId')
        this.$store.dispatch('updatePlayerVehicles')
        this.show = false;
    }

    get playerName():string {
        return this.$store.getters.playerName;
	} set playerName(nickname) {
		this.$store.commit('setPlayerName', nickname)
	}

    get playerNameSearchResults(): IPlayerNameSearchResults{
        return this.$store.getters.playerNameSearchResults;
    }
	public getPlayerInfo() {
		this.$store.dispatch('updateAccountId')
        this.show = true;
	}
	mounted() {
	}
}
</script>

<style lang="scss">
.form-wrapper{
    position: relative;
}
.results{
    position: absolute;
    left: 0;
    background-color: white;
    padding: 1rem 0;
    list-style: none;
    min-width: 400px;
    li{
        padding: 0;
        button{
            background-color: grey;
            border: 0;
            width: 100%;
            text-align: left;
            padding: .5rem 1rem;
        }
    }
}
.header {
	background-color: rgba(7, 21, 30, 0.9);
	border-bottom: 1px solid #2b353c;
	padding: 1rem 0;
	width: 100%;
	z-index: 2;
	transition: height 0.3s;
}
</style>