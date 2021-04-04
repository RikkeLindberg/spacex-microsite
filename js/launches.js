import { baseUrl } from "./constants/api.js";
import displayUpcomingLaunches from "./components/upcomingLaunches.js";
import displayPastLaunches from "./components/pastLaunches.js";

const urlUpcomingLaunches = baseUrl + "launches/upcoming";
const urlPastLaunches = baseUrl + "launches/past?limit=";

async function fetchLaunches() {
    try {
        //UPCOMING LAUNCHES
        const upcomingLaunchesResponse = await fetch(urlUpcomingLaunches);
        const upcomingLaunches = await upcomingLaunchesResponse.json();

        displayUpcomingLaunches(upcomingLaunches);

        //PAST LAUNCHES
        const pastLaunchesResponse = await fetch(urlPastLaunches);
        const pastLaunches = await pastLaunchesResponse.json();

        displayPastLaunches(pastLaunches);

    } catch (error) {
        console.log(error);
    }
}

fetchLaunches();
