$('document').ready(function () {

	var buttonHTML = '';
	var topics = ["Cat", "Dog", "Rabbit", "Hamster", "Horse", "Octopus", "Bird", "Frog", "Chicken", "Bear", "Chimpanzee", "Gray wolf", "Lion", "Tiger", "Pig", "Deer", "Snakes", "Sheep"];
	var newAnimalItem;
	var GIFarray = [];


	function createTheButtons() {
		for (var i = 0; i < topics.length; i++) {
			buttonHTML += "<button class='btn btn-lrg btn-success animalButtons' animalName=" + topics[i] + ">" + topics[i] + "</button>";
		}
		$('#buttonsDiv').html(buttonHTML);
	}

	createTheButtons();


	$("#submitUserData").on("click", function (event) {
		event.preventDefault();
		newAnimalItem = $('#userInput').val();
		var newAnimalButton = "<button class='btn btn-lrg btn-success animalButtons' animalName=" + newAnimalItem + ">" + newAnimalItem + "</button>";
		$('#buttonsDiv').append(newAnimalButton);
	});



	$('body').on('click', '.animalButtons', function (event) {
		$('.GIFdiv').empty();
		var chosenAnimalItem = $(this).attr('animalName');
		queryURL = "https://api.giphy.com/v1/gifs/search?q=" + chosenAnimalItem + "&limit=10" + "&api_key=dc6zaTOxFJmzC";
		$.ajax({ url: queryURL, method: 'GET' })
			.done(function (response) {
				for (var i = 0; i < response.data.length; i++) {
					$('.GIFdiv').append("Rating: " + response.data[i].rating + "<img class='animalIMG img-responsive center-block'" + "src='" + response.data[i].images.downsized_still.url + "'>");
					GIFarray.push(response.data[i].images.downsized.url);
				}
			});

	});
});