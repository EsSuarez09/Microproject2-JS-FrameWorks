const app = Vue.createApp({
    data(){
        return{
            subject: "2024 Women's Volleyball Olympics",
            headline: "In PARIS",
            event: "2024 Women's Volleyball Olympics.",
            overview: "Players from various countries competed in the event held in Paris.",

            // add our image file path:
            image: "img/olympic.jpg",
        }
    } // end data()
});
app.mount("#app");