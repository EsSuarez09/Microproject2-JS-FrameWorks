const app = Vue.createApp({
    data(){
        return{
            // This section defines the data properties for the app.
            // 'subject' stores the title of the event.
            // 'headline' holds the location of the event.
            // 'image' contains the file path to the main image displayed on the page.
            subject: "2024 Women's Volleyball Olympics",
            headline: "In PARIS",
            image: "img/olympic.jpg",
        }
    } // end data()
});

// This line mounts the Vue app to the HTML element with the ID 'app'.
app.mount("#app");
