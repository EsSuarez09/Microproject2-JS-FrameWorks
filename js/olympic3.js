const app = Vue.createApp({
    data() {
        return {
            event: "2024 Women's Volleyball Olympics",
            overview: "Players from various countries competed in the event held in Paris.",
            image: "img/italyWon.jpg", // Replace with the correct path to the winning team's image
            italy: true, // Set to true if Italy won, false if USA won
            usaStats: { 
                serves: 5,
                spikes: 10,
                blocks: 7,
                digs: 8,
                sets: 6
            },
            italyStats: { 
                serves: 8,
                spikes: 12,
                blocks: 5,
                digs: 10,
                sets: 9
            },
            selectedStats: {}, 
            showStats: false, 
            selectedPlayer: '', // New property to track the selected player
            players: [ // List of Italian players with their images
                { name: "Paola Egonu", img: "img/paola_egonu.jpeg" },
                { name: "Miriam Sylla", img: "img/miriam_sylla.jpg" },
                { name: "Monica De Gennaro", img: "img/monica.jpg" },
                { name: "Cristina Chirichella", img: "img/cristina.jpeg" },
                { name: "Ofelia Malinov", img: "img/ofelia.jpg" },
                { name: "Anna Danesi", img: "img/anna.jpg" }
            ]
        }
    },
    methods: {
        showUSAStats() {
            this.selectedStats = this.usaStats;
            this.selectedPlayer = 'USA Player'; // Update the selected player
            this.showStats = true;
        },
        showItalyStats() {
            this.selectedStats = this.italyStats;
            this.selectedPlayer = 'Italy Player'; // Update the selected player
            this.showStats = true;
        }
    }
});

app.mount("#app");
