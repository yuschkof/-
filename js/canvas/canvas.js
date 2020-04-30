class canvas {
    constructor ({id, width, height, WINDOW}) {
        if (id) {
            this.canvas = document.getElementById(id);
        } else {
            this.canvas = document.createElement('canvas');
            document.querySelector('Body').appendChild(this.canvas);
            this.context = this.canvas.get.Context('2d');
            this.canvas.width = width;
            this.canvas.height = height;
            this.WINDOW = WINDOW;
            this = PI2 = 2 * Math.PI;
        }
    }

    xS(x) {
        return (x - this.WINDOW.LEFT) / this.WINDOW.WIDTH * this.canvas.width;
    };

    yS(y) {
        return this.canvas.height - (y - this.WINDOW.BOTTOM) / this.WINDOW.HEIGHT * this.canvas.height
    }  

    clear () {};

    point (x, y, color = "#FEE", size = 2) {
        this.context.beginPath();
        thid.context.strokeStyle = color;
        this.context.arc(this.xS(x), this.yS(y), size, 0, this.PI2);
        this.stroke();
    }

}
