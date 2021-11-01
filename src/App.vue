<template>
    <div id="app">
        <Header/>
        <Content/>
        <Footer />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "./components/Header.vue";
import Content from "./components/Content.vue";
// import Sidebar from "../src/components/Sidebar.vue";
// import Footer from "../src/components/Footer.vue";

@Component({
    components: {
        Header,
        Content
        // Footer,
    },
})
export default class App extends Vue {}
</script>

<style lang="scss">
.router-link {
    display: block;
}
body {
    color: white;
   background: #0F2027;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #2C5364, #203A43, #0F2027);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #2C5364, #203A43, #0F2027); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    background-attachment: fixed;
    background-size: cover;
    background-position: center top;
}
#app {
    height: 100%;
    display: flex;
    flex-direction: column;
    footer {
        justify-self: flex-end;
    }
}

html,
body {
    height: 100%;
}
.full-height {
    flex: 1 0 auto;
}
footer {
    flex-shrink: 0;
}
</style>
