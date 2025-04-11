//your JS code here. If required.
// Get the container element
const container = document.querySelector('.container');

// Function to create the squares
function createSquares() {
    for (let i = 0; i < 800; i++) { // Create 800 squares
        const square = document.createElement('div');
        square.classList.add('square');

        // Add hover event listener
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = '#3498db'; // Change color on hover
            setTimeout(() => {
                square.style.backgroundColor = '#ffffff'; // Revert color after 1 second
            }, 1000); // 1000 milliseconds = 1 second
        });

        // Append the square to the container
        container.appendChild(square);
    }
}

// Call the function to create squares
createSquares();
