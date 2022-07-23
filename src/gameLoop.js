

export default class GameLoop {
    constructor( update, draw, config) {
        this.update = update;
        this.draw = draw;

        this.step = {
            init:  0,
            max: config.maxStep,
        }

        this.animate = this.animate.bind(this)
        this.animate();
    }

    animate() {
        requestAnimationFrame( this.animate );
        if ( ++this.step.init < this.step.max) {
            return;
        }
        this.step.init = 0;

        this.update();
        this.draw();

    }
}