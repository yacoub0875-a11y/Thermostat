// DOM elements
const heartRate = document.getElementById("heartRate");
const steps = document.getElementById("steps");
const movement = document.getElementById("movement");
const temp = document.getElementById("currentTemp");
const mode = document.getElementById("mode");
const forecast = document.getElementById("forecast");
const aiTips = document.getElementById("aiTips");

// Historique pour les graphiques
let heartData = Array(10).fill(75);
let stepsData = Array(10).fill(3000);
let labels = Array(10).fill('').map((_,i) => `-${10-i}s`);

// Chart.js setup
const heartChart = new Chart(document.getElementById('heartChart').getContext('2d'), {
    type: 'line',
    data: {
        labels: labels,
        datasets: [{
            label: 'bpm',
            data: heartData,
            borderColor: 'red',
            backgroundColor: 'rgba(255,0,0,0.2)',
            fill: true,
            tension: 0.3
        }]
    },
    options: { responsive: true, plugins: { legend: { display: false } } }
});

const stepsChart = new Chart(document.getElementById('stepsChart').getContext('2d'), {
    type: 'line',
    data: {
        labels: labels,
        datasets: [{
            label: 'Pas',
            data: stepsData,
            borderColor: 'lime',
            backgroundColor: 'rgba(0,255,0,0.2)',
            fill: true,
            tension: 0.3
        }]
    },
    options: { responsive: true, plugins: { legend: { display: false } } }
});

// Update function every 5s
setInterval(() => {
    // Santé / activité
    let hr = Math.floor(70 + Math.random()*20);
    heartRate.innerHTML = hr + " bpm";
    heartData.push(hr);
    heartData.shift();
    heartChart.update();

    let st = Math.floor(1000 + Math.random()*5000);
    steps.innerHTML = st.toLocaleString();
    stepsData.push(st);
    stepsData.shift();
    stepsChart.update();

    const mv = ["Calme", "Actif", "Très actif", "Repos"];
    movement.innerHTML = mv[Math.floor(Math.random()*mv.length)];

    // Thermostat
    let t = Math.floor(20 + Math.random()*5);
    temp.innerHTML = t + "°C";
    const modes = ["Optimisé", "Éco", "Confort", "Turbo"];
    mode.innerHTML = modes[Math.floor(Math.random()*modes.length)];
    forecast.innerHTML = (1 + Math.random()*2).toFixed(1) + " kWh";

    // IA Tips
    const tips = [
        "Réduire chauffage à 21°C la nuit",
        "Activer mode éco automatique",
        "Prévoir chauffage avant retour maison",
        "Maintenir température constante pour économie"
    ];
    aiTips.innerHTML = "";
    tips.sort(() => 0.5 - Math.random());
    tips.slice(0,2).forEach(tip => {
        const li = document.createElement("li");
        li.textContent = tip;
        aiTips.appendChild(li);
    });

}, 5000);
