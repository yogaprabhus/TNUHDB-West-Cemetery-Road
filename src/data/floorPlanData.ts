export interface JoinerySpec {
  code: string;
  name: string;
  w: number;
  h: number;
  sill: number;
  kind: 'door' | 'sliding' | 'opening' | 'window' | 'grill' | 'vent' | 'swnv';
  color: string;
}

export interface RoomSpec {
  id: string;
  name: string;
  shortLabel: string;
  dimsText: string;
  areaSqm: number;
  bounds: { x1: number; z1: number; x2: number; z2: number };
  floorType: string;
  floorLabel: string;
  color2d: string;
  stroke2d: string;
  joineryCodes: string[];
  furnitureList: string;
  desc: string;
  spawn: { x: number; z: number; yaw: number };
}

export interface WallOpening {
  code: string;
  offset: number;
  w: number;
  h: number;
  sill: number;
  hinge?: 'left' | 'right';
  swing?: number;
}

export interface WallSegment {
  x1: number;
  z1: number;
  x2: number;
  z2: number;
  axis: 'x' | 'z';
  type: 'ext' | 'int';
  openings: WallOpening[];
}

export const JOINERY_SPECS: Record<string, JoinerySpec> = {
  MD:    { code: 'MD',    name: 'Main Door',                     w: 1.00, h: 2.10, sill: 0.00, kind: 'door',    color: '#7c3f1c' },
  UD:    { code: 'UD',    name: 'Universal Door (Accessible)',   w: 1.00, h: 2.10, sill: 0.00, kind: 'door',    color: '#0d9488' },
  D:     { code: 'D',     name: 'Bedroom Interior Door',         w: 0.90, h: 2.10, sill: 0.00, kind: 'door',    color: '#8b5a2b' },
  BD:    { code: 'BD',    name: 'Balcony Door',                  w: 0.90, h: 2.10, sill: 0.00, kind: 'door',    color: '#64748b' },
  D1:    { code: 'D1',    name: 'Bath / WC Door',                w: 0.75, h: 2.10, sill: 0.00, kind: 'door',    color: '#475569' },
  SD:    { code: 'SD',    name: 'Accessible Sliding Door',       w: 2.50, h: 2.10, sill: 0.00, kind: 'sliding', color: '#0f766e' },
  SD1:   { code: 'SD1',   name: 'Bath Sliding Door',             w: 1.00, h: 2.10, sill: 0.00, kind: 'sliding', color: '#0f766e' },
  O1:    { code: 'O1',    name: 'Hall–Kitchen Cased Opening',    w: 1.80, h: 2.10, sill: 0.00, kind: 'opening', color: '#cbd5e1' },
  O:     { code: 'O',     name: 'Kitchen–Passage Opening',       w: 1.30, h: 2.10, sill: 0.00, kind: 'opening', color: '#cbd5e1' },
  W:     { code: 'W',     name: 'Casement Window',               w: 0.90, h: 1.35, sill: 0.75, kind: 'window',  color: '#38bdf8' },
  KW:    { code: 'KW',    name: 'Kitchen Window',                w: 1.00, h: 1.05, sill: 1.05, kind: 'window',  color: '#38bdf8' },
  OGW:   { code: 'OGW',   name: 'Openable Grill Window',         w: 0.90, h: 0.90, sill: 1.05, kind: 'grill',   color: '#94a3b8' },
  V:     { code: 'V',     name: 'Louvered Ventilator',           w: 0.60, h: 0.60, sill: 1.95, kind: 'vent',    color: '#a855f7' },
  V1:    { code: 'V1',    name: 'N-Type Kitchen Ventilator',     w: 1.70, h: 0.60, sill: 1.95, kind: 'vent',    color: '#a855f7' },
  'SW/NV': { code: 'SW/NV', name: 'Sliding Window & N-Ventilator', w: 1.15, h: 1.55, sill: 0.85, kind: 'swnv', color: '#38bdf8' }
};
