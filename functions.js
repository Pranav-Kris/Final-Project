//Game Functions

function Startscreen() {
  //Background
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, cnv.width, cnv.height);

  //Title
  ctx.font = "100px Consolas";
  ctx.fillStyle = "white";
  ctx.fillText("JS JAILBREAK", 550, 250);

  //Press Start
  ctx.font = "50px Consolas";
  ctx.fillStyle = "white";
  ctx.fillText("PRESS ANYWHERE TO START...", 450, 400);
}
