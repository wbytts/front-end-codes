class Arrow {
  constructor(props) {
    this.x = 0;
    this.y = 0;
    this.w = 60;
    this.h = 30;
    this.rotation = 0;
    this.fillStyle = '#F00';
    this.strokeStyle = '#CCC';
    Object.assign(this, props);
    return this;
  }
  createPath(ctx) {
    ctx.beginPath();
    ctx.moveTo();

  }
  render(ctx) {

  }
}
