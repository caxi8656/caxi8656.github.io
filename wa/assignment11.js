document.getElementById("jokeButton").addEventListener("click", fetchComic);

function fetchComic() {
    // Generate a random comic number between 1 and 3000
    const randomNumber = Math.floor(Math.random() * 3000) + 1;
    const apiUrl = `https://corsproxy.io/?https://xkcd.com/${randomNumber}/info.0.json`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Update the comic title and image
            document.getElementById("comicTitle").textContent = data.title;
            document.getElementById("comicImage").src = data.img;
            document.getElementById("comicImage").alt = data.alt;
        })
        .catch(error => {
            console.error("Error fetching comic:", error);
            document.getElementById("comicTitle").textContent = "Sorry, something went wrong!";
            document.getElementById("comicImage").src = "";
        });
}
