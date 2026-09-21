

const placeList = document.getElementById("place-list");
const map = L.map("map").setView([accomodation.latitude, accomodation.longitude], 13);
const maxDistance = 20;

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png",{
    maxZoom: 19,
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

var homeIcon = L.icon({
    iconUrl: 'images/location.png',

    iconSize:     [38, 38],
    iconAnchor: [25, 33]
})

const homeMarker = L.marker([accomodation.latitude, accomodation.longitude], {icon: homeIcon}).addTo(map);

const markerGroup = L.layerGroup().addTo(map);
homeMarker.addTo(markerGroup);

homeMarker.bindPopup(`
    <div class="accomodation-popup">
        <h2>${accomodation.name}</h2>
        <p>${accomodation.addres}</p>
        <p>🏠 Majoituksesi</p>
    </div>
    `);

function calculateDistance(lat1, lon1, lat2, lon2)
{
    const earthradius = 6371;

    const latDifference = (lat2 - lat1) * Math.PI / 180;
    const lonDifference = (lon2 - lon1) * Math.PI / 180;

    const a =
        Math.sin(latDifference / 2) * Math.sin(latDifference / 2) +
        Math.cos(lat1 * Math.PI / 180) *
        Math.cos(lat2 * Math.PI / 180) *
        Math.sin(lonDifference / 2) * Math.sin(lonDifference / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return earthradius * c;
}

const markers = {}

function showPlaces(category) 
{
    markerGroup.clearLayers();

    placeList.innerHTML = "";

    homeMarker.addTo(markerGroup);

    Object.keys(markers).forEach(function(name)
    {
        delete markers[name];
    })

    places.forEach(function(place) {
    
        const distance = calculateDistance(
            accomodation.latitude,
            accomodation.longitude,
            place.latitude,
            place.longitude
        )

        if ((category === "Kaikki" || place.category === category) && distance <= maxDistance)
        {
            const marker = L.marker([
                place.latitude,
                place.longitude
            ]).addTo(map);

            marker.placeId = place.name;

            markers[place.name] = marker;
        
            marker.bindPopup(`
                <div class="place-popup">

                    <img src="${place.image}"
                    alt="${place.name}"
                    >
                    <h2>${place.name}</h2>

                    <p class="category">
                        ${place.category}
                    </p>

                    <p>${place.description}</p>

                    <p>
                       ⚲ ${distance.toFixed(1)} km majoituksesta
                    </p>

                    <a
                        href="${place.website}"
                        target="_blank"
                    >
                    Verkkosivusto
                    </a>
                    
                    <br></br>

                    <a
                        href="https://www.google.com/maps/dir/?api=1&destination=${place.latitude}, ${place.longitude}"
                        target="_blank"
                    >
                        Avaa reittiohjeet
                    </a>
                </div>
            `);

            markerGroup.addLayer(marker);

            //place list

            const placeCard = document.createElement("div");

            placeCard.classList.add("place-card");

            placeCard.innerHTML = `

                <img class="card-image" src="${place.image}"
                    alt="${place.name}"
                >

                <h3>${place.name}</h3>

                <p class="category">
                    ${place.category}
                </p>

                <p>
                    ${place.description}
                </p>

                <p>
                    ⚲ ${distance.toFixed(1)}
                     km majoitukseen
                </p>

                <button class="show-on-map">
                    Katso kartalla
                </button>
            `;

            placeList.appendChild(placeCard);

            const showButton = placeCard.querySelector(".show-on-map");

            showButton.addEventListener("click", function() {

                const marker = markers[place.name];

                map.setView(
                    [place.latitude, place.longitude],
                    13
                );

                marker.openPopup();
                document.getElementById("map").scrollIntoView({behavior: "smooth", block: "end"});
            })
        }
    });
}

showPlaces("Kaikki");

const filterButtons = document.querySelectorAll("#filters button");

filterButtons.forEach(function(button){

    button.addEventListener("click", function() {
        
        const category = button.dataset.category;

        showPlaces(category);
    });

});

const navigationButtons = document.querySelectorAll("#main-navigation button");

const guideSection = document.getElementById("guide-section");

const mapSection = document.getElementById("map-section");

navigationButtons.forEach(function(button){

    button.addEventListener("click", function()
    {
        const section = button.dataset.section;

        if (section === "guide")
        {
            guideSection.classList.remove("hidden");
            mapSection.classList.add("hidden");
        }

        if (section === "map")
        {
            guideSection.classList.add("hidden");
            mapSection.classList.remove("hidden");
        }
    });
});

const infoButtons = document.querySelectorAll(".info-card");

const infoPanel = document.getElementById("info-panel");

infoButtons.forEach(function(button){

    button.addEventListener("click", function() {
        
        const infoId = button.dataset.info;

        const info = accomodation.information[infoId];

        infoPanel.innerHTML = `
            <div class="info-content">

                <h3>${info.title}</h3>

                ${info.content}
            </div>
        `;

        infoPanel.scrollIntoView({behavior: "smooth"});
    });
});

const accomodationName = document.getElementById("accomodation-name");

accomodationName.textContent = accomodation.name;

const accomodationAddres = document.getElementById("accomodation-addres");

accomodationAddres.textContent = accomodation.addres;

guideSection.classList.remove("hidden");
mapSection.classList.add("hidden");
