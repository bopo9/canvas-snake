import Snake from "./Snake";
import Canvas from "./Canvas";
import GameLoop from "./gameLoop";
import Food from "./Food";
import Config from "./config";

class Game {
    constructor(canvasEl) {
        this.canvas = new Canvas('canvas');
        this.config = new Config();
        this.Snake = new Snake(this.config);
        this.food = new Food(this.canvas, this.config);

        new GameLoop(this.update.bind(this), this.draw.bind(this), this.config)
    }

   update () {
        this.Snake.update(this.canvas, this.food)
   }

   draw() {
       this.canvas.ctx.clearRect( 0, 0, this.canvas.canvasEl.width, this.canvas.canvasEl.height );

       this.Snake.draw(this.canvas.ctx);
       this.food.draw(this.canvas.ctx)
   }

}

const game = new Game('canvas');


