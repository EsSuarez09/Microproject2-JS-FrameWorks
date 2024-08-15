const app = Vue.createApp({
    data() {
        // The data function returns an object with all the data properties 
        // that will be used within the application.
        return {
            event: "2024 Women's Volleyball Olympics",  // Stores the name of the event
            image: "img/italyWon.jpg",  // Path to the image showing the winning team
            italy: true,  // Boolean to indicate if Italy won the game
            // Statistics for the USA team
            usaStats: { 
                serves: 5,
                spikes: 10,
                blocks: 7,
                digs: 8,
                sets: 6
            },
            // Statistics for the Italy team
            italyStats: { 
                serves: 8,
                spikes: 12,
                blocks: 5,
                digs: 10,
                sets: 9
            },
            selectedStats: {},  // This will hold the stats of the selected team
            showStats: false,  // Boolean to control the display of stats
            selectedPlayer: '',  // Stores the name of the selected player
            // An array of Italy's top players with their names and image paths
            players: [ 
                { name: "Paola Egonu", img: "img/paola_egonu.jpeg" },
                { name: "Miriam Sylla", img: "img/miriam_sylla.jpg" },
                { name: "Monica De Gennaro", img: "img/monica.jpg" },
                { name: "Cristina Chirichella", img: "img/cristina.jpeg" },
                { name: "Ofelia Malinov", img: "img/ofelia.jpg" },
                { name: "Anna Danesi", img: "img/anna.jpg" }
            ],
            activeButton: '' // Tracks which button (USA or Italy) is active
        }
    },
    methods: {
        // This method sets the stats for USA and marks the USA button as active
        showUSAStats() {
            this.selectedStats = this.usaStats;
            this.selectedPlayer = 'USA Player'; 
            this.showStats = true;
            this.activeButton = 'usa';  // Sets USA as the active button
        },
        // This method sets the stats for Italy and marks the Italy button as active
        showItalyStats() {
            this.selectedStats = this.italyStats;
            this.selectedPlayer = 'Italy Player'; 
            this.showStats = true;
            this.activeButton = 'italy';  // Sets Italy as the active button
        },
    }
});

// This line mounts the Vue app to the HTML element with the ID 'app'.
app.mount("#app");
