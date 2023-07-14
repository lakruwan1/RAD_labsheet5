class Shape{
    Area(){}
    Volume(){}
}

class cube extends Shape{
    constructor(length){
        this.length = length;
    }

    Area(){return this.length*this.length*6;}
    Volume(){return this.length*this.length*this.length}
}

class cuboid extends Shape{
    constructor(length, width, height){
        this.length = length;
        this.width = width;
        this.height = height;
    }

    Area(){return this.length*this.width*2 + this.length*this.height*2 + this.height*this.width*2}
    Volume(){return this.length*this.height*this.width}

}

class cylinder extends Shape{
    constructor(radius, height){
        this.radius = radius;
        this.height = height;
    }

    Area(){return Math.PI*this.radius*this.radius*2 + 2*Math.PI*this.radius*this.height}
    Volume(){return Math.PI*this.radius*this.radius*this.height}

}

class Sphere extends Shape{
    constructor(radius){
        this.radius = radius;
    }

    Area(){return 4*Math.PI*this.radius*this.radius}
    Volume(){return 4*Math.PI*(this.radius^3)}
    
}

class Cone extends Shape{
    constructor(radius, height, slant){
        this.radius = radius;
        this.height = height;
    }

    Area(){return Math.PI * this.radius * (this.radius + Math.sqrt(this.height^2 + this.radius^2)) }
    Volume(){return Math.PI*this.radius * this.radius * this.height / 3}
}