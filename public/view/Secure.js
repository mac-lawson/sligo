const { doc } = require("prettier");
/**
 * <h1>Secure the Room</h1>
 */
function secureRoom() {
    handleVideo(e, false);
    const Confidential = document.getElementById("Confidential");
    const Top_Secret = document.getElementById("Top Secret");

    Confidential.textContent == "";
    Top_Secret.textContent == "Top Secret";
}
/**
 * <h1>Unsecure the Room</h1>
 */
function unencryptRoom() {
    handleVideo(e, true);
    const Confidential = document.getElementById("Confidential");
    const Top_Secret = document.getElementById("Top Secret");

    Confidential.textContent == "Confidential";
    Top_Secret.textContent == "";
}

