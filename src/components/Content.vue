<template>
	<div class="content">
		<div class="container">
            <h2 v-if="playerVehicles">vehicles of {{playerName}}</h2>
            <div class="tank-wrapper" v-if="playerVehicles.length > 0">
                <Tank v-for="(tank) in playerVehicles" :data="tank" :key="tank.tank_id"/>
            </div>
            <!-- <b-table striped hover :items="playerVehicles"></b-table> -->
        </div>
	</div>
</template>

<script lang="ts">
import { IVehicleData } from "@/Interfaces";
import { Component, Vue } from "vue-property-decorator";
import Tank from './Tank.vue'

@Component({
	components: {
        Tank
	},
})
export default class Content extends Vue {
	get playerName(): string {
		return this.$store.getters.playerName;
	} 
    get playerVehicles(): IVehicleData[]{
        return this.$store.getters.playerVehicles;
    }

    get totalBattles(){
        let total = 0;
        return this.playerVehicles.forEach(tank => {
            total =+ tank.statistics.battles;
            console.log(total)
        })
    }

	mounted() {
	}
}
</script>

<style lang="scss">
    .tank-wrapper{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        column-gap: 1rem;
        row-gap: 1rem;
    }
</style>