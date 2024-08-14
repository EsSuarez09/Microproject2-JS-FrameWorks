
// document.getElementById("year").innerText = new Date().getFullYear();
// starting Vue Application code

const app = Vue.createApp({
    data(){
        return{
            //1. adding the text
            product: "2024 Womens Volleybal Olympic",
            description: "comes with different options and colors",

            // add our image file path:
            image: "img/olympic.jpg",
        }   
    } // end data()
});