[readme.md](https://github.com/user-attachments/files/34141855/readme.md)
# TNUHDB-West-Cemetery-Road
An interactive, real-time 3D and 2D architectural visualization web application of the Tamil Nadu Urban Habitat Development Board (TNUHDB) proposed reconstruction project at West Cemetery Road, Tondiarpet Village, Chennai.
# TNUHDB West Cemetery Road — Interactive 3D & 2D Floor Plan Explorer

An interactive, real-time 3D and 2D architectural visualization web application built from **Sheet No. 02/15 (Unit Plan, Scale 1:100)** of the **Tamil Nadu Urban Habitat Development Board (TNUHDB)** proposed reconstruction project at West Cemetery Road, Tondiarpet Village, Chennai.

The application transforms the 2D engineering floor plan into a navigable, physically based 3D residential environment supporting both the **General Unit (26.27 sq.m)** and the **PwD Accessible Unit (28.08 sq.m)**, complete with orbit inspection, human-scale first-person walkthrough, a 1:1 synchronized 2D CAD blueprint viewport, and mobile touch controls.

## Key Features

- **Dual Tenement Configurations**: Switch instantaneously between the **General Unit (26.27 m²)**, the **PwD Accessible Unit (28.08 m²)**, or a **Side-by-Side Comparison** view.
- **Four Synchronized View Modes**:
  - **3D Orbit View**: Smoothly rotate, zoom, and pan around the property with 1-click camera presets (**Isometric**, **Top Ortho**, **Front South**, **Rear North**, **West**, and **East**).
  - **1st-Person Walkthrough**: Explore connected rooms at human eye level (**Standing 1.62 m** or **Wheelchair 1.18 m**) using `WASD` / Arrow keys, on-screen touch D-pad controls, or **Click/Tap-on-Floor** navigation with sliding wall collision detection.
  - **2D Floor Plan Blueprint**: Top-down vector CAD view with room boundaries, furniture symbols, door swing arcs, joinery code tags, pinch-to-zoom, and a toggleable overlay of the original scanned engineering drawing.
  - **Split 2D + 3D View**: Side-by-side (desktop) or stacked top-and-bottom (mobile portrait) synchronized 3D viewport and live 2D radar showing your real-time camera position.
- **Interactive Doors & Door Removal**:
  - **Open / Close All Doors (`E`)**: Smoothly animate hinged doors (`MD`, `UD`, `D`, `BD`, `D1`) and sliding doors (`SD`, `SD1`) between open and closed states, dynamically updating walkthrough collision barriers.
  - **Remove / Show Doors (`X`)**: Independently strip or restore all door frames, door leaves, sliding panels, and 2D swing arcs while keeping windows and ventilators intact for unobstructed room-to-room views.
- **Markings & Annotation Controls (`M`)**: Toggle all 3D and 2D markings in one click, or independently control **Room Name & Area Tags**, **Joinery Code Tags**, **CAD Dimension Lines**, and **Floor Grid & Access Markings** (including the PwD `1.50 m` wheelchair turning circle).
- **Section Cutaways & Layer Toggles**: Switch between **Full Height (2.90 m)**, **Dollhouse Cutaway (1.30 m)**, **Glass X-Ray**, and **Slab Only (0.15 m)** modes; adjust ceiling height dynamically (`2.40 m – 3.40 m`); and toggle exterior walls, interior partitions, windows/ventilators, furniture, overhead lofts, and ceilings.
- **Dynamic Lighting & Atmosphere**: Choose between **Daylight Sun**, **Golden Hour**, **Warm Interior LED**, and **Bright Studio** lighting presets with a 360° sun azimuth slider and soft PCF shadows.
- **Mobile & Touch Optimized**: Responsive compact header, slide-over room and settings drawers with backdrop dismissal, two-finger pinch-to-zoom on the 2D blueprint, and thumb-friendly first-person D-pad and look controls.

## Tech Stack

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **3D Rendering Engine** | **Three.js (WebGL)** | Parametric wall/opening geometry, procedural PBR canvas textures, soft shadow mapping, and raycasting |
| **2D Blueprint Engine** | **HTML5 2D Canvas** | Vector CAD plan rendering, dimension chains, door swing arcs, scanned sheet overlay, and pan/pinch-zoom |
| **UI & Styling** | **Tailwind CSS** | Responsive dark-glassmorphism BIM interface, mobile drawers, and floating 3D HTML label projection |
| **Build & Tooling** | **Vite + TypeScript** | Modular development server, strict type definitions for architectural specs, and production bundling |

## Project Structure

```text
tnuhdb-3d-floorplan-app/
├── index.html                           # Main application entry point (Vite)
├── package.json                         # Dependencies and build scripts
├── tsconfig.json                        # TypeScript compiler configuration
├── vite.config.ts                       # Vite bundler configuration
├── README.md                            # Project documentation
├── public/
│   └── assets/
│       └── floorplan_upright.jpg        # Upright auto-rotated TNUHDB Sheet 02/15 reference drawing
├── standalone/
│   └── tnuhdb_3d_floorplan_viewer.html  # Zero-build self-contained single-file production bundle
└── src/
    ├── data/
    │   └── floorPlanData.ts             # CAD coordinates, room bounds, and Schedule of Joinery specs
    ├── scene/
    │   └── Materials.ts                 # Procedural PBR tile, wood, granite, and fabric texture generators
    └── navigation/
        └── FirstPersonController.ts     # First-person movement and AABB sliding collision logic
```

## Getting Started

### Option 1: Zero-Build Standalone HTML (Instant Run)

You can run the self-contained build (`standalone/tnuhdb_3d_floorplan_viewer.html`) directly in any modern desktop or mobile browser without installing Node.js:

```bash
# Clone the repository
git clone https://github.com/<your-username>/tnuhdb-3d-floorplan-explorer.git
cd tnuhdb-3d-floorplan-explorer

# Serve with Python's built-in HTTP server (or open standalone/tnuhdb_3d_floorplan_viewer.html directly)
python3 -m http.server 8080
```

Then open `http://localhost:8080/standalone/tnuhdb_3d_floorplan_viewer.html` in your browser.

### Option 2: Vite + TypeScript Development Server

**Prerequisites**: Node.js `>= 18.0.0` and `npm`.

```bash
# Install dependencies
npm install

# Start the local development server with hot reload (http://localhost:5173)
npm run dev

# Type-check and build the production bundle into dist/
npm run build

# Preview the production build locally
npm run preview
```

## Controls & Keyboard Shortcuts

| Input / Shortcut | Action in 3D Orbit / 2D Mode | Action in 1st-Person Walk Mode |
| :--- | :--- | :--- |
| **Left Click / 1-Finger Drag** | Orbit camera (3D) or Pan blueprint (2D) | Rotate camera look direction (Yaw / Pitch) |
| **Right Click / 2-Finger Drag** | Pan camera target in 3D | — |
| **Scroll Wheel / 2-Finger Pinch** | Zoom in and out (3D & 2D) | — |
| **Click / Tap Room Floor** | Select room, highlight floor, and open inspector | Smoothly walk toward the clicked floor coordinate |
| `W` `A` `S` `D` / **Arrow Keys** | — | Walk forward, backward, strafe left/right, or turn |
| `E` | Open or close all hinged and sliding doors | Open or close all doors to walk between rooms |
| `X` | Remove or restore all doors (frames, leaves, arcs) | Remove or restore all doors and door collisions |
| `M` | Show or hide all markings, labels, and dimensions | Show or hide all markings and room tags |
| `R` | Reset camera to isometric overview | Reset camera to isometric overview |
| `Esc` | Close active modal | Exit 1st-Person Walk mode back to 3D Orbit |

## Architectural Floor Plan Specifications (Sheet No. 02/15)

### Project Metadata

- **Authority**: Tamil Nadu Urban Habitat Development Board (TNUHDB)
- **Site**: West Cemetery Road, S.No. 1756, Block No. 25, Tondiarpet Village, Greater Chennai Corporation
- **Scope**: Proposed reconstruction consisting of 6 Blocks (Partially Stilt + 09 Floors, 792 total residential units)
- **Envelope**: `6.60 m × 5.80 m` (`0.20 m` exterior walls, `0.10 m` interior partitions)

### Room Dimensions & Carpet Area Breakdown

| Unit Variant | Room / Space | Internal CAD Dimensions | Floor Area | Flooring Material |Connected Joinery |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **General (26.27 m²)** | **Hall (Living/Dining)** | `3.00 m × 2.50 m` | `7.50 m²` | Ivory Vitrified Tile | `MD`, `SW/NV`, `W`, `O1`, `D` |
| **General (26.27 m²)** | **Bedroom** | `3.10 m × 2.50 m` | `7.75 m²` | Warm Beige Vitrified Tile | `D`, `SW/NV`, `D1`, `BD` |
| **General (26.27 m²)** | **Kitchen** | `1.80 m × 2.50 m` (`2.70 m` bay) | `4.86 m²` | Matte Kitchen Ceramic | `O1`, `KW`, `V1`, `O` |
| **General (26.27 m²)** | **Passage & WM Utility** | `1.00 m × 1.30 m` | `1.30 m²` | Anti-Skid Grey Ceramic | `O`, `D1` |
| **General (26.27 m²)** | **W.C.** | `0.90 m × 1.20 m` | `1.08 m²` | Anti-Skid Wet-Area Tile | `D1`, `V` |
| **General (26.27 m²)** | **Bathroom** | `1.00 m × 1.40 m` | `1.40 m²` | Anti-Skid Bath Ceramic | `D1`, `V` |
| **General (26.27 m²)** | **Balcony** | `1.00 m × 1.40 m` | `1.40 m²` | Outdoor Textured Slate | `BD`, `OGW` |
| **General (26.27 m²)** | **O.T.S. Shaft** | `1.00 m × 1.30 m` | `1.30 m²` | Sunken Concrete Core | `V` (from Bath & W.C.) |
| **PwD (28.08 m²)** | **Accessible Bath & W.C.** | `2.00 m × 2.70 m` | `4.85 m²` | Tactile Anti-Skid Tile | `SD1`, `UD`, `V` (`1.50 m` turning circle) |
| **PwD (28.08 m²)** | **Hall–Bedroom Partition** | `2.50 m × 2.10 m` | — | Zero-Threshold Tile | `SD` (`2.50 m` wide sliding door), `UD` |

### Schedule of Joinery Per Tenement

| Code | Description | Width × Height (m) | Sill Height (m) | Type |
| :--- | :--- | :--- | :--- | :--- |
| **MD** | Main Door (General Unit) | `1.00 × 2.10` | `0.00` | Hinged Teak Door |
| **UD** | Universal Door (PwD Accessible Unit) | `1.00 × 2.10` | `0.00` | Barrier-Free Hinged Door |
| **D** | Bedroom Interior Door | `0.90 × 2.10` | `0.00` | Hinged Flush Door |
| **BD** | Balcony Door | `0.90 × 2.10` | `0.00` | Hinged Utility Door |
| **D1** | Bath / W.C. Door | `0.75 × 2.10` | `0.00` | Water-Resistant Door |
| **SD** | Accessible Sliding Door (Hall–Bedroom) | `2.50 × 2.10` | `0.00` | Top-Track Sliding Partition |
| **SD1** | Accessible Bath Sliding Door | `1.00 × 2.10` | `0.00` | Top-Track Sliding Door |
| **O1** | Hall–Kitchen Cased Opening | `1.80 × 2.10` | `0.00` | Open Architrave Passage |
| **O** | Kitchen–Passage Opening | `1.30 × 2.10` | `0.00` | Open Cased Passage |
| **W** | Hall Casement Window | `0.90 × 1.35` | `0.75` | Glazed Casement Window |
| **KW** | Kitchen Window | `1.00 × 1.05` | `1.05` | Countertop Glazed Window |
| **OGW** | Openable Grill Window (Balcony) | `0.90 × 0.90` | `1.05` | Security Grill + Frame |
| **V** | Louvered Ventilator (Bath / W.C.) | `0.60 × 0.60` | `1.95` | High-Level Louvered Vent |
| **V1** | N-Type Kitchen Ventilator | `1.70 × 0.60` | `1.95` | Wide Exhaust Ventilator |
| **SW/NV** | Sliding Window & N-Type Ventilator Above | `0.90×0.90 & 1.20×0.60` | `0.85` | Composite Window + Transom Vent |

## Assumptions & Known Limitations

### Modeling Assumptions
1. **Sheet Orientation**: The supplied photo of Sheet `02/15` was rotated 90° clockwise so that North points to the top of the viewport (matching the drawing's compass rose).
2. **Ceiling Height (`2.90 m` default)**: Because the 2D plan references Sheet B1 for vertical section elevations, a standard Indian high-rise residential floor-to-ceiling height of `2.90 m` was chosen to clear `2.10 m` door lintels, `0.60 m` upper ventilators, and overhead storage lofts. A live slider in the right sidebar allows adjusting wall height from `2.40 m` to `3.40 m`.
3. **Window Sill Heights**: Standard residential sill heights (`0.75 m` for `W`, `0.85 m` for `SW/NV`, `1.05 m` above kitchen/balcony ledges for `KW` and `OGW`, and `1.95 m` for ventilators `V` and `V1`) are used for vertical opening placement.

### Known Limitations
- **2D AABB Sliding Collision**: First-person walkthrough uses 2D axis-aligned bounding-box (AABB) sliding collision against walls, furniture, and closed doors rather than a 3D triangular navmesh.
- **Procedural PBR Textures**: All ceramic tile, wood grain, granite, and fabric textures are generated procedurally via HTML5 `<canvas>` at initialization so the app loads instantaneously offline without external texture asset dependencies.

## Customizing the Floor Plan or Adding New Layouts

To modify room dimensions, wall positions, or joinery openings:

1. Open `src/data/floorPlanData.ts` (or locate `UNITS_DATA` and `JOINERY_SPECS` inside `standalone/tnuhdb_3d_floorplan_viewer.html`).
2. **Edit Room Footprints**: Update `bounds: { x1, z1, x2, z2 }` (in meters) and `spawn: { x, z, yaw }` inside `UNITS_DATA.<unit>.rooms`.
3. **Edit Wall Segments & Cutouts**: Modify `UNITS_DATA.<unit>.walls`. Each wall segment defines `{ x1, z1, x2, z2, axis: 'x' | 'z', type: 'ext' | 'int', openings: [...] }`. Both the 3D wall geometry and the 2D blueprint automatically recalculate cutouts, lintels, sills, and collision boxes.

## Deployment

### GitHub Pages / Netlify Drop / Cloudflare Pages (Static)
Copy `standalone/tnuhdb_3d_floorplan_viewer.html` to `index.html` and deploy directly to any static host—no build step required.

### Vercel / Netlify (Vite Build)
- **Build Command**: `npm run build`
- **Output Directory**: `dist`

## License

MIT License — Free for architectural visualization, educational, and portfolio use.
