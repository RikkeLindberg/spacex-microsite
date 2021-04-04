export default function displayNextLaunch(nextLaunch) {
    console.log(nextLaunch);
    const longDate = `${nextLaunch.launch_date_utc}`;
    const shortDate = longDate.slice(0,10);    

    const nextLaunchContainer = document.querySelector(".next-launch");

    let html = "";

    html += `<div class="card center">
                <img src="${nextLaunch.links.mission_patch_small}" alt="${nextLaunch.mission_name}" class="patch">
                <div class="card-content">
                    <div>
                        <h3 class="heading heading-tertiary">
                            ${nextLaunch.mission_name}
                        </h3>
                        <p class="date">
                            ${shortDate}
                        </p>
                    </div>
                    <a href="launches.html" class="btn btn-primary">
                        See all launches
                    </a>
                </div>
            </div>
            `;

    nextLaunchContainer.innerHTML = html;
}