const app = Vue.createApp({
    data() {
        return {
            event: "2024 Women's Volleyball Olympics",
            overview: "Players from various countries competed in the event held in Paris.",
            image: "img/italyWon.jpg", 
            italy: true, 
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
            selectedPlayer: '', 
            cart: 0,
            players: [ 
                { name: "Paola Egonu", img: "img/paola_egonu.jpeg" },
                { name: "Miriam Sylla", img: "img/miriam_sylla.jpg" },
                { name: "Monica De Gennaro", img: "img/monica.jpg" },
                { name: "Cristina Chirichella", img: "img/cristina.jpeg" },
                { name: "Ofelia Malinov", img: "img/ofelia.jpg" },
                { name: "Anna Danesi", img: "img/anna.jpg" }
            ],
            activeButton: '' // New property to track the active button
        }
    },
    methods: {
        showUSAStats() {
            this.selectedStats = this.usaStats;
            this.selectedPlayer = 'USA Player'; 
            this.showStats = true;
            this.activeButton = 'usa'; // Mark USA button as active
        },
        showItalyStats() {
            this.selectedStats = this.italyStats;
            this.selectedPlayer = 'Italy Player'; 
            this.showStats = true;
            this.activeButton = 'italy'; // Mark Italy button as active
        },
    }
});

app.mount("#app");
