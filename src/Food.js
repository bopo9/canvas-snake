export default class Food {
    constructor(canvas, config) {
        this.config = config;
        this.x = 0;
        this.y = 0;
        this.canvas = canvas;

        this.randomPosition();
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.fillStyle = "#23a000";
        ctx.arc( this.x + (this.config.sizeCell / 2 ), this.y + (this.config.sizeCell / 2 ), this.config.sizeBerry, 0, 2 * Math.PI );
        ctx.fill();
    }

    randomPosition () {
        this.x = Math.floor(this.getRandomInt( 0, this.canvas.canvasEl.width / this.config.sizeCell ) * this.config.sizeCell);
        this.y = Math.floor(this.getRandomInt( 0, this.canvas.canvasEl.height / this.config.sizeCell ) * this.config.sizeCell);
    }

     getRandomInt(min, max) {
        return Math.floor( Math.random() * (max - min) + min );
    }


}