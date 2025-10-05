declare module 'three/examples/jsm/lines/Line2' {
  import { Line } from 'three';
  export class Line2 extends Line {
    constructor(geometry?: any, material?: any);
  }
}

declare module 'three/examples/jsm/lines/LineGeometry' {
  import { BufferGeometry } from 'three';
  export class LineGeometry extends BufferGeometry {
    setPositions(array: number[] | Float32Array): this;
  }
}

declare module 'three/examples/jsm/lines/LineMaterial' {
  import { ShaderMaterial, Vector2 } from 'three';
  export class LineMaterial extends ShaderMaterial {
    resolution: Vector2;
    linewidth: number;
    dashed: boolean;
    constructor(parameters?: any);
  }
}


declare module 'three/examples/jsm/controls/OrbitControls' {
  import { Camera } from 'three';
  import { EventDispatcher } from 'three';
  export class OrbitControls extends EventDispatcher {
    constructor(object: Camera, domElement?: HTMLElement);
    update(): void;
    dispose(): void;
  }
}
