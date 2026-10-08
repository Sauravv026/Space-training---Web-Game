// ---------- B. Dynamic astronaut information (variables) ----------
const astronaut = "Alex";
const mission = "Moon Mission";
const destination = "Moon";

// ---------- C. Basic resources (variables) ----------
// Change oxygen and power here to test the 3 situations!
let oxygen = 100;
let water = 100;
let food = 100;
let power = 20;

// ---------- A. Mission status ----------
let missionStatus = "Not Started";

// Grab elements from the HTML
const astronautEl = document.getElementById("astronaut-name");
const missionEl = document.getElementById("mission-name");
const destinationEl = document.getElementById("destination");
const statusEl = document.getElementById("mission-status");
const oxygenEl = document.getElementById("oxygen");
const waterEl = document.getElementById("water");
const foodEl = document.getElementById("food");
const powerEl = document.getElementById("power");
const messageEl = document.getElementById("check-message");

// Show values on the page
function showInfo() {
    astronautEl.textContent = astronaut;
    missionEl.textContent = mission;
    destinationEl.textContent = destination;

    oxygenEl.textContent = oxygen + "%";
    waterEl.textContent = water + "%";
    foodEl.textContent = food + "%";
    powerEl.textContent = power + "%";

    statusEl.textContent = missionStatus;
}

// ---------- Day 02: Resource Check ----------
// Like a launch checklist: the rocket only goes if every check passes.
function checkResources() {
    if (oxygen > 50 && power > 30) {
        // && means BOTH must be true
        missionStatus = "Started";
        statusEl.textContent = missionStatus;

        messageEl.textContent = "Resources: Ready";
        messageEl.style.color = "green";
    } else if (oxygen <= 50) {
        // Oxygen is the problem
        missionStatus = "Cannot Start ❌";
        statusEl.textContent = missionStatus;

        messageEl.textContent = "Reason: Not Enough Oxygen";
        messageEl.style.color = "red";
    } else {
        // Oxygen was fine, so power must be 30 or below
        missionStatus = "Cannot Start ❌";
        statusEl.textContent = missionStatus;

        messageEl.textContent = "Reason: Not Enough Power";
        messageEl.style.color = "red";
    }
}

// A. Start Mission button
function startMission() {
    // The button now asks the checklist instead of starting right away
    checkResources();
    console.log("Mission Status: " + missionStatus);
}

// D. Check Mission button
function checkMission() {
    messageEl.textContent = "Mission is ready!";
    console.log("Mission is ready!");
}

// Connect buttons to functions
document.getElementById("start-btn").addEventListener("click", startMission);
document.getElementById("check-btn").addEventListener("click", checkMission);

// Run once when the page loads
showInfo();
console.log("Astronaut: " + astronaut + ", Mission: " + mission + ", Destination: " + destination);
