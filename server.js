const express = require("express")
const http = require("http")
const { Server } = require("socket.io")
const satellite = require("satellite.js")

const app = express()
const server = http.createServer(app)
const io = new Server(server)

app.use(express.static("public"))

const satellites = [
{
    name: "ISS",
    tle1: "1 25544U 98067A   24180.51005787  .00016717  00000+0  10270-3 0  9993",
    tle2: "2 25544  51.6417 148.8025 0004900 198.5517 242.0174 15.50087668459611"
},
{
    name: "Hubble",
    tle1: "1 20580U 90037B   24180.15011776  .00000852  00000+0  40111-4 0  9991",
    tle2: "2 20580  28.4694 190.2450 0002947 286.5094  73.5464 15.09299858734911"
}
]

function getSatellitePositions() {
    const results = []

    satellites.forEach((sat) => {
        const satrec = satellite.twoline2satrec(sat.tle1, sat.tle2)

        const now = new Date()

        const positionAndVelocity = satellite.propagate(satrec, now)

        const gmst = satellite.gstime(now)

        const geo = satellite.eciToGeodetic(
            positionAndVelocity.position,
            gmst
        )

        const lat = satellite.degreesLat(geo.latitude)
        const lon = satellite.degreesLong(geo.longitude)
        const height = geo.height

        results.push({
            name: sat.name,
            lat,
            lon,
            height
        })
    })

    return results
}

setInterval(() => {
    io.emit("satellites", getSatellitePositions())
}, 1000)

server.listen(3000, () => {
    console.log("OrbitalWatch running on http://localhost:3000")
})
