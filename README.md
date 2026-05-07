# OrbitalWatch

A realtime 3D satellite tracker built with Node.js, Socket.IO, Three.js, and satellite.js.

Watch satellites orbit Earth live in a futuristic control center.

---

# Features

- 3D interactive Earth
- Live satellite tracking
- ISS and Hubble included
- Realtime websocket updates
- Space-themed visuals
- Live telemetry display
- Smooth globe controls
- Night Earth texture
- Expandable architecture

---

# Preview

OrbitalWatch displays satellites moving around Earth in realtime with live telemetry data.

Useful for:
- portfolios
- learning websockets
- astronomy projects
- realtime visualization
- dashboards
- Three.js projects

---

# Tech Stack

## Backend

- Node.js
- Express
- Socket.IO
- satellite.js

## Frontend

- Globe.gl
- Three.js
- HTML
- CSS
- JavaScript

---

# Project Structure

```txt
orbitalwatch/
│
├── server.js
├── package.json
├── public/
│   ├── index.html
│   ├── style.css
│   └── client.js
```

---

# Installation

## 1. Create the project

```bash
mkdir orbitalwatch
cd orbitalwatch
```

## 2. Initialize npm

```bash
npm init -y
```

## 3. Install dependencies

```bash
npm install express socket.io satellite.js cors
```

---

# Running The Project

Start the server:

```bash
node server.js
```

Open in browser:

```txt
http://localhost:3000
```

---

# How It Works

The backend:
1. Reads TLE satellite data
2. Calculates realtime orbital positions
3. Sends coordinates through Socket.IO
4. Frontend renders satellites on a 3D globe

---

# Included Satellites

- ISS
- Hubble Space Telescope

You can also add:
- Starlink
- NOAA satellites
- GPS satellites
- Weather satellites

---

# Future Upgrades

## Visual Improvements

- Orbit trails
- Radar sweeps
- Dynamic atmosphere
- Space debris layer
- Earth clouds
- Day/night cycle

## Features

- Satellite search
- Live launch tracking
- NASA API integration
- Time controls
- Ground stations
- Collision prediction
- Satellite categories

## Multiplayer

- Shared control rooms
- Live annotations
- User markers
- Realtime collaboration

---

# Learning Goals

This project teaches:
- realtime networking
- websocket communication
- orbital calculations
- 3D rendering
- backend/frontend communication
- live visualization systems

---

# Recommended Libraries

```bash
npm install axios dotenv mongoose
```

Optional additions:
- MongoDB logging
- API integrations
- authentication
- saved satellites

---

# Inspiration

Inspired by:
- NASA mission control systems
- satellite tracking software
- cybersecurity dashboards
- space visualization tools

---

# License

MIT License

Free to modify and expand.
