const { doc } = require("prettier");

function secureRoom() {
    handleVideo(e, false);
    const Confidential = document.getElementById("Confidential");
    const Top_Secret = document.getElementById("Top Secret");

    Confidential.textContent == ""
    Top_Secret.textContent == "Top Secret"
}

function unencryptRoom() {
    handleVideo(e, true);
    const Confidential = document.getElementById("Confidential");
    const Top_Secret = document.getElementById("Top Secret");

    Confidential.textContent == "Confidential"
    Top_Secret.textContent == ""
}