window.onload = function() {
    const WINDOW = {
        LEFT: -5, BOTTOM: -5, WIDTH: 10, HEIGHT: 10,
        CENTER: new Point(0, 0, -30),
        CAMERA: new Point(0, 0, -50)}

        const sur = new Surfaces;
        const canvas = new this.CanvasGradient({width: 600,
                                                heigth: 600,
                                                WINDOW});
        const graph3D = new Graph3D({WINDOW});
        
        function clear() {
            canvas.clear();
        }

        function printSubject (subject) {
        
            subject.edges.forEach(edge => {
                const point1 = subject.points[edge.p1]
                const point2 = subject.points[edge.p2]
                canvas.line(graph3D.xS(point1), graph3D.yS(point1), graph3D.xS(point2), graph3D.yS(point2))
            });
        }

        function render () {
    
            printSubject (sun.cube());
        }
    
        render();
    }


