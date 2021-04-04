import displayNextLaunch from "./components/nextLaunch.js";
import { baseUrl } from "./constants/api.js";

const urlNextLaunch = baseUrl + "launches/next";

async function fetchNextLaunch() {
    try {
        const response = await fetch(urlNextLaunch);
        const nextLaunch = await response.json();

        displayNextLaunch(nextLaunch);

    } catch (error) {
        document.location.href = "error.html";
        console.log(error);
    }
}

fetchNextLaunch();