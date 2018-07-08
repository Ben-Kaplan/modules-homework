	


// 	console.log("car.js is running...");


module.exports = {
    color: "red",
    convertible: true,
    speed: 0,
    oldSpeed: 0,
    accelerate(input) {
        this.oldSpeed = this.speed;
        this.speed = this.oldSpeed + input;
        return `This is the old speed: ${this.oldSpeed} This is the new speed: ${this.speed}`
    },
    decelerate(input) {
        this.oldSpeed = this.speed;
        this.speed = this.oldSpeed - input;
        return `This is the old speed: ${this.oldSpeed} This is the new speed: ${this.speed}`
    }
}

module.exports.accelerate(10);

module.exports.decelerate(5);