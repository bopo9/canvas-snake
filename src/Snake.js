export default class Snake {
    constructor(config) {

        this.config = config;

        this.x = 160;
        this.y = 160;
        this.dx = this.config.sizeCell;
        this.dy = 0;


        this.tails = [];
        this.maxSize = 1;

        this.control();
    }

    update(canvas, food){
        this.x += this.dx;
        this.y += this.dy;

        if (this.x >= canvas.canvasEl.width) this.x = 0;
        else if(this.x < 0) this.x = canvas.canvasEl.width - this.config.sizeCell;

        if (this.y >= canvas.canvasEl.height) this.y = 0;
        else if(this.y < 0) this.y = canvas.canvasEl.height - this.config.sizeCell;

        this.tails.unshift({x: this.x, y: this.y})

        if (this.tails.length > this.maxSize) this.tails.pop();


        this.tails.map((tail, idx) => {
            if ( tail.x === food.x && tail.y === food.y ) {
                this.maxSize++;
                // score.incScore();
                food.randomPosition();
            }
        })
    }

    draw(ctx) {
        this.tails.map( (tail, index) => {
            if (index === 0) ctx.fillStyle = "#dc1e5f";
            else ctx.fillStyle = "#9d1342";

            ctx.fillRect( tail.x, tail.y, this.config.sizeCell, this.config.sizeCell );
        })
    }

    eat() {

    }

    checkCollision() {

    }

    control () {

        document.addEventListener("keydown", e => {
            switch (e.code) {
                case "ArrowUp":
                    this.dy = -this.config.sizeCell;
                    this.dx = 0;
                    break;
                case "ArrowDown":
                    this.dy = this.config.sizeCell;
                    this.dx = 0;
                    break;
                case "ArrowLeft":
                    this.dx = -this.config.sizeCell;
                    this.dy = 0;
                    break;
                case "ArrowRight":
                    this.dx = this.config.sizeCell;
                    this.dy = 0;
                    break;
            }
        })
    }

}