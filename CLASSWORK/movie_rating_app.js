const prompt = require('prompt-sync')();

function displayWelcome() {
    console.log(">>>>>>>>Welcome to Semicolon Movie Rating System<<<<<<<<");
    console.log("::::::::::::::::::::::::::::::::::::::::::::::::::::::::");
}

function displayMenu() {
    console.log(`
    1. Add a Movie 
    2. View Movies 
    3. Rate a Movie (1-5)
    4. View Average Ratings of All Movies 
    5. Exit
    `);
}

function addMovie(movieList) {
    const movieName = prompt("Enter Movie Name: ");
    movieList.push({ movieName: movieName, ratings: [] });
    console.log(`Added ${movieName} Movie: `);
}

function viewMovies(movieList) {
    if (movieList.length === 0) {
        console.log("No movies available.");
        return;
    }

    console.log("\nAll Movies:");
    console.log("--------------------------");
    movieList.forEach((movie, index) => {
        console.log(`${index + 1}. Movie: ${movie.movieName}`);
        console.log("--------------------------");
    });
}

function rateMovie(movieList) {
    if (movieList.length === 0) {
        console.log("No movies available to rate.");
        return;
    }

    viewMovies(movieList);
    try {
        const movieIndex = parseInt(prompt("Select a movie number to rate: ")) - 1;
        if (isNaN(movieIndex) || movieIndex < 0 || movieIndex >= movieList.length) {
            console.log("Invalid movie number.");
            return;
        }

        const rating = parseInt(prompt("Enter rating (1-5): "));
        if (isNaN(rating) || rating < 1 || rating > 5) {
            console.log("Invalid rating. Please enter a number between 1 and 5.");
            return;
        }

        movieList[movieIndex].ratings.push(rating);
        console.log(`Added rating ${rating} for ${movieList[movieIndex].movieName}.`);

    } catch (error) {
        console.log("Invalid input. Please enter numbers only.");
    }
}

function viewAverageRatings(movieList) {
    if (movieList.length === 0) {
        console.log("No movies available.");
        return;
    }

    console.log("\nAverage Ratings of Movies:");
    movieList.forEach(movie => {
        if (movie.ratings.length > 0) {
            const avgRating = movie.ratings.reduce((a, b) => a + b, 0) / movie.ratings.length;
            console.log(`${movie.movieName}: ${avgRating.toFixed(2)}/5`);
        } else {
            console.log(`${movie.movieName}: No ratings yet.`);
        }
    });
}

function main() {
    const movieList = [];
    displayWelcome();

    while (true) {
        displayMenu();
        try {
            const choice = parseInt(prompt("Enter your choice: "));

            switch (choice) {
                case 1:
                    addMovie(movieList);
                    break;
                case 2:
                    viewMovies(movieList);
                    break;
                case 3:
                    rateMovie(movieList);
                    break;
                case 4:
                    viewAverageRatings(movieList);
                    break;
                case 5:
                    console.log("Exiting the app. Goodbye!");
                    return;
                default:
                    console.log("Invalid choice. Please enter a number between 1 and 5.");
            }
        } catch (error) {
            console.log("Invalid choice. Please enter a number between 1 and 5.");
        }
    }
}

main();