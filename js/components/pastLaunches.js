import { buttonCollaps } from "./buttonCollaps.js";

export default function displayPastLaunches(pastLaunches) {
    console.log(pastLaunches);

    const pastLaunchesContainer = document.querySelector(".past-launches");

    let html = "";
    let i;

    for (let i = pastLaunches.length - 1; i >= 0; i--) {
        let detailsValue = "There are no information yet";
        if (pastLaunches[i].details !== null) {
            detailsValue = pastLaunches[i].details;
        }

        let missionPatch = "";
            if (pastLaunches[i].links.mission_patch_small === null) {
                missionPatch = "../images/placeholder.png";
            } else {
                missionPatch = pastLaunches[i].links.mission_patch_small;
            }

        const longDate = `${pastLaunches[i].launch_date_utc}`;
        const shortDate = longDate.slice(0, 10); 

        html += `<button class="btn-collapsible">${pastLaunches[i].mission_name}<span>${shortDate}</span></button>
                <div class="content">
                <img src=${missionPatch} alt="${pastLaunches[i].mission_name}" class="patch">
                    <div class="content-info">
                        <div>
                            <p class="text">
                                <span>Rocket:</span> ${pastLaunches[i].rocket.rocket_name}
                            </p>
                            <p class="text">
                                <span>Launch site:</span> ${pastLaunches[i].launch_site.site_name} 
                            </p>
                            <p class="text">
                                <span>Manufacturer:</span> ${pastLaunches[i].rocket.second_stage.payloads[0].manufacturer} 
                            </p>
                            <p class="text">
                                <span>Nationality:</span> ${pastLaunches[i].rocket.second_stage.payloads[0].nationality} 
                            </p>
                            <p class="text">
                                <span>Payload type:</span> ${pastLaunches[i].rocket.second_stage.payloads[0].payload_type} 
                            </p>
                            <p class="text">
                                <span>Details:</span> ${detailsValue}
                            </p>
                        </div>
                            <a href="${pastLaunches[i].links.video_link}" target="_blank" class="btn-link">Video &#8594</a>
                            <a href="${pastLaunches[i].links.wikipedia}" target="_blank" class="btn-link">More info &#8594</a>
                    </div>
                </div> 
                `;
    }

    pastLaunchesContainer.innerHTML = html;

    buttonCollaps();
}