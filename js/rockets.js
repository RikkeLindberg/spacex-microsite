import { baseUrl } from "./constants/api.js";
import { buttonCollaps } from "./components/buttonCollaps.js";

const urlRockets = baseUrl + "rockets";

async function fetchRockets() {
    try {
        const response = await fetch(urlRockets);
        const rockets = await response.json();

        displayRockets(rockets);

    } catch (error) {
        document.location.href = "error.html";
        console.log(error);
    }
}

fetchRockets();

function displayRockets(rockets) {
    console.log(rockets);

    const rocketsContainer = document.querySelector(".rockets-container");

    let html = "";
    let i;

    for (let i = 0; i < rockets.length; i++) {

        html += `<button class="btn-collapsible">${rockets[i].rocket_name}</button>
                <div class="content">
                    <img src="${rockets[i].flickr_images[0]}" alt="${rockets[i].rocket_name}" class="content__image">
                    <div class="content-info">
                        <div>
                            <p class="text">
                                <span>Cost per launch:</span> ${rockets[i].cost_per_launch}
                            </p>
                            <p class="text">
                                <span>First flight:</span> ${rockets[i].first_flight}
                            </p>
                            <p class="text">
                                <span>Country:</span> ${rockets[i].country}
                            </p>
                            <p class="text">
                                <span>Height:</span> ${rockets[i].height.meters} m
                            </p>
                            <p class="text">
                                <span>Diameter:</span> ${rockets[i].diameter.meters} m
                            </p>
                            <p class="text">
                                <span>Mass:</span> ${rockets[i].mass.kg} kg
                            </p>
                        </div>
                        <a href="${rockets[i].wikipedia}" target="_blank">More info &#8594</a>
                    </div>
                </div>    
        `;
    }

    rocketsContainer.innerHTML = html;

    buttonCollaps();
}