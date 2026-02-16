const temp = document.getElementById("currentTemp");
const mode = document.getElementById("mode");
const forecast = document.getElementById("forecast");
const aiTips = document.getElementById("aiTips");

// Simulation IA dynamique
setInterval(() => {
    const newTemp = Math.floor(20 + Math.random() * 5);
    temp.innerHTML = newTemp + "°C";

    const modes = ["Optimisé", "Éco", "Confort", "Turbo"];
    mode.innerHTML = modes[Math.floor(Math.random() * modes.length)];

    forecast.innerHTML = (1 + Math.random() * 2).toFixed(1) + " kWh";

    aiTips.innerHTML = "";
    const tips = [
        "Réduire chauffage à 21°C la nuit",
        "Activer mode éco automatique",
        "Prévoir chauffage avant retour maison",
        "Maintenir température constante pour économie"
    ];
    tips.sort(() => 0.5 - Math.random());
    tips.slice(0,2).forEach(tip => {
        const li = document.createElement("li");
        li.textContent = tip;
        aiTips.appendChild(li);
    });

}, 5000);
// Health simulation IA
const heartRate = document.getElementById("heartRate");
const steps = document.getElementById("steps");
const movement = document.getElementById("movement");

setInterval(() => {
    // Rythme cardiaque
    const hr = Math.floor(70 + Math.random() * 20);
    heartRate.innerHTML = hr + " bpm";

    // Pas
    const s = Math.floor(1000 + Math.random() * 5000);
    steps.innerHTML = s.toLocaleString();

    // Mouvements / sensibilité
    const mv = ["Calme", "Actif", "Très actif", "Repos"].sort(() => 0.5 - Math.random())[0];
    movement.innerHTML = mv;

}, 5000);
