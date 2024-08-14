
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
            url:"https://www.cbc.ca/sports/olympics/summer/volleyball",
            italy: true,
            score: 3,
            actions: ["Serve", "Spike", "Block", "Dig", "Set"],
            cart:0

        }   
    }, // end data()
    methods:{
        addToCart() {
            // task:using if for score
            this.cart++;
        },
        removeFromCart() {
            if (this.cart >=1){
                this.cart -= 1
            }
        }
    }
});

app.mount("#app");