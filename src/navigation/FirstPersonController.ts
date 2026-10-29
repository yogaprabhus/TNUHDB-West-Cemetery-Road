import * as THREE from 'three';

export interface ColliderBox {
  x1: number;
  z1: number;
  x2: number;
  z2: number;
  isDoor?: boolean;
}

export class FirstPersonController {
  public pos = new THREE.Vector3(1.70, 1.62, 4.40);
  public yaw = 0;
  public pitch = -0.05;
  public speed = 2.8;
  public eyeHeight = 1.62;
  public collisionEnabled = true;

  public checkCollides(nx: number, nz: number, colliders: ColliderBox[], radius = 0.22): boolean {
    if (!this.collisionEnabled) return false;
    for (const c of colliders) {
      if (nx + radius > c.x1 && nx - radius < c.x2 && nz + radius > c.z1 && nz - radius < c.z2) {
        return true;
      }
    }
    return false;
  }
}
