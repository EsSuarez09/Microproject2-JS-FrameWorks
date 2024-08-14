
// document.getElementById("year").innerText = new Date().getFullYear();
// starting Vue Application code

const app = Vue.createApp({
    data(){
        return{
            //1. adding the text
            event: "2024 Women's Volleyball Olympics.",
            overview: "Players from various countries competed in the event held in Paris.",

            // add our image file path:
            image: "img/olympic.jpg",
            url:"https://www.cbc.ca/sports/olympics/summer/volleyball"
        }   
    } // end data()
});