const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var palyer, playerBase, playerArcher;
var arrow;
var baseimage;
var playerimage;

function preload() {
  backgroundImg = loadImage("./assets/background.jpg");
  baseimage = loadImage("./assets/base.png");
  playerimage = loadImage("./assets/player.png");
}

function setup() {
  canvas = createCanvas(windowWidth-15, windowHeight-15);

  engine = Engine.create();
  world = engine.world;

  angleMode(DEGREES);

  var options = {
    isStatic: true
  };

  playerBase = Bodies.rectangle(100, height-170, 180, 150, options);
  World.add(world, playerBase);

  player = Bodies.rectangle(playerBase.position.x +50, playerBase.position.y - 160, 50, 180, options);
  World.add(world,player)

  playerArcher = new PlayerArcher(playerBase.position.x + 130, playerBase.position.y - 105, 90, 100);

  arrow = new PlayerArrow(playerArcher.body.position.x, playerArcher.body.position.y, 100, 10);
}

function draw() {
  background(backgroundImg);
  image(baseimage,playerBase.position.x,playerBase.position.y,180,150)
  image(playerimage,player.position.x,player.position.y,50,180)
  Engine.update(engine);

  playerArcher.display();
  arrow.display();

  if (keyCode === 32) {
    arrow.shoot(playerArcher.body.angle);
  }

  // Title
  fill("#FFFF");
  textFont("Courier New")
  textAlign("center");
  textSize(70);
  text("EPIC ARCHERY", width / 2, 100)
}
