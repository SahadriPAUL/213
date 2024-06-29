canvas = document.getElementById('myCanvas'); 

ctx= canvas.get.Contex("2d");

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

greencar_width=75;
greencar_height=100;

greencar_x=5;
greencar_y=100;

function add() 
{
	background_imgTag= new Image();
	background_imgTag.onload=uploadBackground;
	background_imgTag.src=background_image;

	greencar_imgTag= new Image();
	greencar_imgTag.onload=uploadBackground;
	greencar_imgTag.src= background_image;

}

function uploadBackground() 
{
	ctx.drawImage(background_imgTag,0,0, canvas.width, canvas.height);

}

function uploadgreencar() 
{
	
      ctx.drawImage(greencar_imgTag, greencar_x, greencar_y, greencar_width, greencar_height);
	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(greencar_y >=0)
		{
			greencar_y= greencar_y - 10;
			console.log("When Up arrow key is pressed, x =  " + greencar_x + " , y = "+ greencar_y );
			uploadBackground();
			uploadBackground();
		}
}

function down()
{
	if(greencar_y <=500)
		{
			greencar_y= greencar_y + 10;
			console.log("When Down arrow key is pressed, x =  " + greencar_x + " , y = "+ greencar_y );
			uploadBackground();
			uploadBackground();
		}
}

function left()
{
	if(greencar_x >0)
		{
			greencar_x= greencar_x - 10;
			console.log("When Left arrow key is pressed, x =  " + greencar_x + " , y = "+ greencar_y );
			uploadBackground();
			uploadBackground();
		}
}

function right()
{
	if(greencar_x <=850)
		{
			greencar_x= greencar_x + 10;
			console.log("When Right arrow key is pressed, x =  " + greencar_x + " , y = "+ greencar_y );
			uploadBackground();
			uploadBackground();
		}
}
