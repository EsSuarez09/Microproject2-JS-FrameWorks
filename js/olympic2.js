
// document.getElementById("year").innerText = new Date().getFullYear();
// starting Vue Application code

const app = Vue.createApp({
    data() {

       
      return {
        subject: "Women's Volleyball Olympics",
        headline2: "USA vs Italy",
        event: "Olympics 2024:",
        overview: "The much-awaited match between USA and Italy",
        url: "https://www.cbc.ca/sports/olympics/summer/volleyball",
        score: 20,
        italy: true,
        actions: ["Spike", "Block", "Serve", "Set", "Dig"],
        cart: 0,
        usaImage: "img/usa_silver.jpg",  // Replace with the correct path
        italyImage: "img/italy.jpg",  // Replace with the correct path
        matchBannerImage: "img/italyVsUsa.jpeg"  // New property for the match banner image
      };
    },
    
  })

  app.mount("#app");
  