class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.resetbutton = createButton('RESET');
    this.greeting = createElement('h2');
    this.title = createElement('h2');
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
  }

  display(){
    this.title.html("Car Racing Game");
    this.title.position(displayWidth/2 - 450, -100);
    this.title.style('font-size', '100px');
    this.title.style('color', 'black');
  

    this.input.position(displayWidth/2 - 300 , displayHeight/2 - 80);
    this.input.style('width', '500px');
    this.input.style('height', '50px');
    this.input.style('font-size', '40px');
    this.input.style('background', 'cyan');

    this.button.position(displayWidth/2 + 100, displayHeight/2-80);
    this.button.style('width', '200px');
    this.button.style('height', '55px');
    this.button.style('font-size', '40px');
    this.button.style('color', 'yellow');
    this.button.style('background', 'black');
    this.resetbutton.position(displayWidth-130, displayHeight-100)
    this.resetbutton.style('width', '100px');
    this.resetbutton.style('height', '55px');
    this.resetbutton.style('font-size', '25px');
    this.resetbutton.style('color', 'yellow');
    this.resetbutton.style('background', 'black');

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(displayWidth/2 - 70, displayHeight/4);
      this.greeting.style('font-size', '100px');
      this.greeting.style('color', 'black');
    });
    this.resetbutton.mousePressed(()=>{
       player.updateCount(0);
       game.update(0)
    });
  }
 
}
