export default class Canvas {
    constructor(canvasElName) {
        this.canvasEl = document.getElementById(canvasElName);
        this.ctx = this.canvasEl.getContext('2d');

        this.canvasEl.width = window.innerWidth;
        this.canvasEl.height = window.innerHeight;
    }

}