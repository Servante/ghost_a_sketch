// function that creates grid(mine)

function createGrid(x) {
	for (var rows = 0; rows < x; rows ++) {
		for (var columns = 0; columns < x; columns ++){
			$("#container").append("<div class='grid'></div>");
		};
	};
	$(".grid").width(550/x);
	$(".grid").height(550/x);
};

// function that clears the grid

function clearGrid(){
	$(".grid").remove();
};

// function that prompts the user to select th enumber of boxes in a new grid
// the function then also creates new grid

function refreshGrid() {
	var z = prompt("How many boxes do you vant?");
	clearGrid();
	createGrid(z);
};

//create a 16x16 grid when the page loads
//creates a hover effect that changes the color of a square to black when the mouse passes over it, leaving a pixel trail throught the grid.
//allows the click of a button to prompt the user to create a new grid


$(document).ready(function(){
	createGrid(16);
	randomize();

	$(".grid").mouseover(function() {
		$(this).css("background-color", "white");
	});

	$(".newGrid").click(function(){
		refreshGrid();

	$(".grid").mouseover(function(){
	$(this).css("background-color", "white");

	
		});
	});
});



//code to be reworked

function randomize(){
	$('.randomize').click(function(){
		$('#container').hover(function(){ 
			$(this).css("background-color", '.' + Math.floor(Math.random()*16777215).toString(16));
		})
	})


	//not sure if I need or not


	//var timer = 0;

//$(document).ready(function(){
	//initGrid(3);
	//newGrid();
	//randomize();
	//dance();


}

