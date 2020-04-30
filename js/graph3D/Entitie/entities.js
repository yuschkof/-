class Point {
    constructor(x = 0, y = 0, z = 0) {
        this.x = x;
        this.y = y;
        this.z = z;
    }        
}

class Edge {
    constructor (p1 = 0, p2 = 0) {
        this.p1 = p1;
        this.p2 = p2;
    }
}

class Subject {
    constructor (points = [], edges = []) {
        this.points = points;
        this.edges = edges;
    }
}