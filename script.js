// Variable to track if real-time mode is enabled
let realTimeMode = true;

// Function to update the border radius of the box
function updateBorderRadius() {
    // Get the values from the input fields
    const topLeftHorizontal = document.getElementById('top-left-horizontal').value;
    const topLeftVertical = document.getElementById('top-left-vertical').value;
    const topRightHorizontal = document.getElementById('top-right-horizontal').value;
    const topRightVertical = document.getElementById('top-right-vertical').value;
    const bottomRightHorizontal = document.getElementById('bottom-right-horizontal').value;
    const bottomRightVertical = document.getElementById('bottom-right-vertical').value;
    const bottomLeftHorizontal = document.getElementById('bottom-left-horizontal').value;
    const bottomLeftVertical = document.getElementById('bottom-left-vertical').value;

    // Construct the border-radius value
    const borderRadiusValue = `${topLeftHorizontal}px ${topRightHorizontal}px ${bottomRightHorizontal}px ${bottomLeftHorizontal}px / ${topLeftVertical}px ${topRightVertical}px ${bottomRightVertical}px ${bottomLeftVertical}px`;

    // Apply the border-radius value to the box
    const box = document.getElementById('box');
    box.style.borderRadius = borderRadiusValue;

    // Display the generated CSS code in the textarea
    const cssOutput = document.getElementById('css-output');
    cssOutput.value = `border-radius: ${borderRadiusValue};`;
}

// Function to apply the border radius when not in real-time mode
function applyBorderRadius() {
    if (!realTimeMode) {
        updateBorderRadius();
    }
}

// Function to toggle between real-time mode and apply mode
function toggleMode() {
    realTimeMode = !realTimeMode;
    const applyButton = document.getElementById('apply');
    const toggleButton = document.getElementById('toggle-mode');

    if (realTimeMode) {
        // Hide the apply button and enable real-time updates
        applyButton.style.display = 'none';
        toggleButton.textContent = 'Apply After Changes';
        document.querySelectorAll('.input').forEach(input => {
            input.addEventListener('input', updateBorderRadius);
        });
    } else {
        // Show the apply button and disable real-time updates
        applyButton.style.display = 'block';
        toggleButton.textContent = 'Real-Time Changes';
        document.querySelectorAll('.input').forEach(input => {
            input.removeEventListener('input', updateBorderRadius);
        });
    }
}

// Event listener for the toggle mode button
document.getElementById('toggle-mode').addEventListener('click', toggleMode);

// Event listener for the apply button
document.getElementById('apply').addEventListener('click', applyBorderRadius);

// Initialize in real-time mode
toggleMode();
