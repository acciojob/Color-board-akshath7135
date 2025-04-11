document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".container");

    // Function to create the squares
    function createSquares() {
        for (let i = 0; i < 800; i++) { // Create 800 squares
            const square = document.createElement("div");
            square.classList.add("square");

            // Add event listeners for hover effect
            square.addEventListener("mouseover", () => {
                square.style.backgroundColor = "rgb(52, 152, 219)"; // Change color on hover
            });

            square.addEventListener("mouseout", () => {
                setTimeout(() => {
                    square.style.backgroundColor = "rgb(29, 29, 29)"; // Revert color after hover
                }, 500); // Adjust timeout as needed
            });

            container.appendChild(square);
        }
    }

    createSquares();
});
