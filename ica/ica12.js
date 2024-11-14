document.getElementById("jokeButton").addEventListener("click", fetchJoke);

function fetchJoke() {
    fetch("https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single") // Replace this with your API URL
        .then(response => response.json())
        .then(data => {
            // Assuming the API structure you provided, display the joke
            document.getElementById("jokeText").textContent = data.joke;
        })
        .catch(error => {
            console.error("Error fetching joke:", error);
            document.getElementById("jokeText").textContent = "Sorry, something went wrong!";
        });
}
