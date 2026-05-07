const socket = io()

const globe = Globe()
(document.getElementById("globe"))
.globeImageUrl("//unpkg.com/three-globe/example/img/earth-night.jpg")
.backgroundImageUrl("//unpkg.com/three-globe/example/img/night-sky.png")

let satData = []

socket.on("satellites", (data) => {
    satData = data

    globe
    .pointsData(
        satData.map(s => ({
            lat: s.lat,
            lng: s.lon,
            size: 0.4,
            color: "#00ffcc",
            name: s.name
        }))
    )
    .pointAltitude(0.02)
    .pointRadius("size")
    .pointColor("color")
})

globe(document.getElementById("globe"))

setInterval(() => {
    document.getElementById("satInfo").innerHTML =
        satData.map(s => `
            <div>
                ${s.name}<br>
                LAT: ${s.lat.toFixed(2)}<br>
                LON: ${s.lon.toFixed(2)}<br>
                ALT: ${s.height.toFixed(0)} km
            </div>
            <hr>
        `).join("")
}, 500)
