const app = Vue.createApp({
  data() {
      // This section sets up the data that will be used in the app.
      // 'subject' holds the title of the event.
      // 'headline2' describes the match between the teams.
      // 'event' gives a brief description of what the event is about.
      // 'overview' provides a short description of the match details.
      // 'url' contains the link to more information about the event.
      // 'usaImage' and 'italyImage' store the file paths for the images of the USA and Italy teams.
      // 'matchBannerImage' holds the file path for the main banner image for the match.

      return {
          subject: "Women's Volleyball Olympics",
          headline2: "USA vs Italy",
          event: "Olympics 2024:",
          overview: "The much-awaited match between USA and Italy",
          url: "https://www.cbc.ca/sports/olympics/summer/volleyball",
          usaImage: "img/usa_silver.jpg",  
          italyImage: "img/italy.jpg", 
          matchBannerImage: "img/italyVsUsa.jpeg"  
      };
  },
});

// This line mounts the Vue app to the HTML element with the ID 'app'.
app.mount("#app");
