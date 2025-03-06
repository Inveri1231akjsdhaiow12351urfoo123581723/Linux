console.log("you shouldn't be seeing this");

document.addEventListener("DOMContentLoaded", () => {
    console.log("DOMContentLoaded event fired");
});

document.addEventListener("contextmenu", (event) => event.preventDefault());

document.addEventListener("keydown", (event) => {
    if (
        event.key === "F12" ||
        (event.ctrlKey && event.shiftKey && (event.key === "I" || event.key === "J" || event.key === "C")) ||
        (event.ctrlKey && event.key === "U")
    ) {
        event.preventDefault();
    }
});

if (window.location.href.startsWith("view-source:")) {
    window.location.replace("https://www.google.com");
 
}

let devtoolsOpen = false;
const checkDevTools = () => {
    const threshold = 160;
    const widthThreshold = window.outerWidth - window.innerWidth > threshold;
    const heightThreshold = window.outerHeight - window.innerHeight > threshold;
    if (widthThreshold || heightThreshold) {
        devtoolsOpen = true;
        window.open('', '_self').close();
        window.location.replace("https://www.google.com");
    } else {
        devtoolsOpen = false;
    }
};
setInterval(checkDevTools, 1000);

setInterval(() => {
    console.clear();
    console.log = function () {};
    console.warn = function () {};
    console.error = function () {};
}, 100);

if (window.location.href.startsWith("view-source:")) {
        document.write(" < h1 > 500 Internal Server Error < /h1>");
            document.write(" < p > The server encountered an internal error. < /p>");
              throw new Error("Fake Server Error to Block Source Code Viewing");
            }
document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("searchBar");
    const games = document.querySelectorAll(".LOL");

    if (!searchInput) {
        console.error("Search bar not found!");
        return;
    }

    // Store original positions so we can reset them later
    let originalPositions = [];
    games.forEach(game => {
        originalPositions.push({
            element: game,
            top: game.style.top,
            left: game.style.left
        });
    });

    searchInput.addEventListener("input", function () {
        const searchValue = searchInput.value.toLowerCase().trim();

        if (searchValue === "") {
            // Reset all elements to their original positions
            originalPositions.forEach(item => {
                item.element.style.top = item.top;
                item.element.style.left = item.left;
                item.element.style.display = "block";
            });
            return;
        }

        let matchingGames = [];
        let nonMatchingGames = [];

        games.forEach(game => {
            const gameName = game.getAttribute("data-name").toLowerCase();
            if (gameName.includes(searchValue)) {
                matchingGames.push(game);
            } else {
                nonMatchingGames.push(game);
            }
        });

        // If no matches are found, show everything
        if (matchingGames.length === 0) {
            originalPositions.forEach(item => {
                item.element.style.display = "block";
            });
            return;
        }

        // Positioning variables
        let startTop = 30;  // First row starts at 30% top
        let startLeft = 1;  // First column starts at 1% left
        let rowSpacing = 25; // Space between rows (Y-axis)
        let colSpacing = 12; // Space between columns (X-axis)
        let currentLeft = startLeft;
        let currentTop = startTop;

        // Position matching games at the top
        matchingGames.forEach(game => {
            game.style.position = "absolute";
            game.style.display = "block";
            game.style.top = `${currentTop}%`;
            game.style.left = `${currentLeft}%`;

            currentLeft += colSpacing;
            if (currentLeft > 85) { // Move to the next row
                currentLeft = startLeft;
                currentTop += rowSpacing;
            }
        });

        // Position non-matching games below matching games
        currentTop += rowSpacing; // Move non-matching section lower
        currentLeft = startLeft;

        nonMatchingGames.forEach(game => {
            game.style.position = "absolute";
            game.style.display = "block";
            game.style.top = `${currentTop}%`;
            game.style.left = `${currentLeft}%`;

            currentLeft += colSpacing;
            if (currentLeft > 85) { // Move to the next row
                currentLeft = startLeft;
                currentTop += rowSpacing;
            }
        });
    });
});
