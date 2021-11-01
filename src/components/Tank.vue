<template>
	<div class="tank" :class="additionalData.is_premium ? 'premium': ''">
        <div class="tank-header">
            <img :src="additionalData.images.big_icon" alt="">
        </div>
        <div class="details">
            <div class="mr-4">
                <h3>{{additionalData.name}}</h3>
                <p>{{additionalData.type}}</p>
            </div>
            <div class="mr-4">
                <h6>Tier:</h6>
                <p>{{romanNumber}}</p>
            </div>
            <div class="mr-4">
                <h6>battles:</h6>
                <p>{{data.statistics.battles}}</p>
            </div>
            <div class="mr-4">
                <h6>wins:</h6>
                <p>{{data.statistics.wins}}</p>
            </div>
            <div class="mr-4">
                <h6>marks of mastery:</h6>
                <p>{{data.mark_of_mastery}}</p>
            </div>
            <div class="mr-4">
                <h6>Win percentage</h6>
                <p>{{winPercentage}}%</p>
            </div>
            <div class="mr-4">
                <h6>Description</h6>
                <p>{{additionalData.description}}</p>
            </div>
            <div class="mr-4">
                <h6>Cost</h6>
                
                <p>{{new Intl.NumberFormat().format(additionalData.price_credit)}} credits</p>
            </div>
        </div>
        <!-- {{additionalData}} -->
	</div>
</template>

<script lang="ts">
import { IVehicleData } from "@/Interfaces";
import { tankService } from "@/services/tankService";
import { Component, Vue } from "vue-property-decorator";
import { Prop } from 'vue-property-decorator'

@Component({
	components: {
	},
})
export default class Tank extends Vue {
	@Prop() readonly data!: IVehicleData;
    public winPercentage=Math.round((this.data.statistics.wins / this.data.statistics.battles) * 100) / 100
    public additionalData: any = [];

    public arabicToRoman(number){
        let roman = "";
        const romanNumList = {M:1000,CM:900, D:500,CD:400, C:100, XC:90,L:50, XV: 40, X:10, IX:9, V:5, IV:4, I:1};
        let a;
        if(number > 3999)
            return "Enter a number between 1 and 3999";
        else{
            for(let key in romanNumList){
                a = Math.floor(number / romanNumList[key]);
                if(a >= 0){
                    for(let i = 0; i < a; i++){
                    roman += key;
                    }
                }
                number = number % romanNumList[key];
            }
        }

        return roman;
    }
    
    get romanNumber(){
        return this.arabicToRoman(this.additionalData.tier)
    }

    mounted(){
        tankService.getTankInformation(this.data.tank_id)
            .then((res) => {
                console.log(res)
                const data = res.data.data[Object.keys(res.data.data)[0]]
                this.additionalData = data
            })
            .catch((err) => {
                console.log(err)
            })
    }
}
</script>

<style>
.tank {
	border: 5px solid #2b353c;
	padding: 1rem;
	background-color: rgba(225, 225, 225, 1);
    display: flex;
    flex-direction: column;
}
    .premium{
        border-color: gold;
    }
.tank-header{
    display: flex;
}
.details{
    display: flex;
    flex-direction: column;
}
.wrapper{
    display: flex;
}
</style>