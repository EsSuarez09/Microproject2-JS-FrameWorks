const app = Vue.createApp({
    data() {

       
      return {
        subject: "Women's Volleyball Olympics",
        headline2: "USA vs Italy",
        event: "Olympics 2024:",
        overview: "The much-awaited match between USA and Italy",
        url: "https://www.cbc.ca/sports/olympics/summer/volleyball",
        score: 20,
        usaImage: "img/usa_silver.jpg",  
        italyImage: "img/italy.jpg", 
        matchBannerImage: "img/italyVsUsa.jpeg"  
      };
    },
    
  })

  app.mount("#app");
  