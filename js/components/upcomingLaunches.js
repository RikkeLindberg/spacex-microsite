import { buttonColl } from "./buttonCollaps.js";

export default function displayUpcomingLaunches(upcomingLaunches) {
    console.log(upcomingLaunches);

    const upcomingLaunchesContainer = document.querySelector(".upcoming-launches");

    let html = "";
    let i;

    for (let i = 0; i < upcomingLaunches.length; i++) {
        let detailsValue = "There are no information yet";
            if (upcomingLaunches[i].details !== null) {
                detailsValue = upcomingLaunches[i].details;
            }

        let missionPatch = "";
            if (upcomingLaunches[i].links.mission_patch_small === null) {
                missionPatch = "../images/spacex-693229_640.jpg";
            } else {
                missionPatch = upcomingLaunches[i].links.mission_patch_small;
            }

        const longDate = `${upcomingLaunches[i].launch_date_utc}`;
        const shortDate = longDate.slice(0, 10); 

        html += `<button class="btn-coll">${upcomingLaunches[i].mission_name}${shortDate}</button>
                <div class="content">
                    <img src=${missionPatch} alt="${upcomingLaunches[i].mission_name}" class="patch">
                    <div class="content-info">
                        <p class="text">
                            <span>Rocket:</span> ${upcomingLaunches[i].rocket.rocket_name}
                        </p>
                        <p class="text">
                            <span>Launch site:</span> ${upcomingLaunches[i].launch_site.site_name} 
                        </p>
                        <p class="text">
                            <span>Manufacturer:</span> ${upcomingLaunches[i].rocket.second_stage.payloads[0].manufacturer} 
                        </p>
                        <p class="text">
                            <span>Nationality:</span> ${upcomingLaunches[i].rocket.second_stage.payloads[0].nationality} 
                        </p>
                        <p class="text">
                            <span>Payload type:</span> ${upcomingLaunches[i].rocket.second_stage.payloads[0].payload_type} 
                        </p>
                        <p class="text">
                            <span>Details:</span> ${detailsValue}
                        </p>
                    </div>
                </div>   
                `;
    }

    upcomingLaunchesContainer.innerHTML = html;

    buttonColl();
}