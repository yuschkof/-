class Grpah3D {
    constructor ({WINDOW}) {
        this.WINDOW = WINDOW;
    }
    xS(point) {
        const zS = this.WINDOW.CENTER;
        const z0 = this.WINDOW.CAMERA;
        return (point.x / (point.z - z0) * (zS - z0));
    }
    yS(point) {
        const yS = this.WINDOW.CENTER;
        const y0 = this.WINDOW.CAMERA;
        return (point.x / (point.y - y0) * (yS - y0));
    }
}