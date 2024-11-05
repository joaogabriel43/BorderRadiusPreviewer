let realTimeMode = true;

function updateBorderRadius() {
    const topLeftHorizontal = document.getElementById('top-left-horizontal').value;
    const topLeftVertical = document.getElementById('top-left-vertical').value;
    const topRightHorizontal = document.getElementById('top-right-horizontal').value;
    const topRightVertical = document.getElementById('top-right-vertical').value;
    const bottomRightHorizontal = document.getElementById('bottom-right-horizontal').value;
    const bottomRightVertical = document.getElementById('bottom-right-vertical').value;
    const bottomLeftHorizontal = document.getElementById('bottom-left-horizontal').value;
    const bottomLeftVertical = document.getElementById('bottom-left-vertical').value;

    const box = document.getElementById('box');
    const borderRadiusValue = `${topLeftHorizontal}px ${topRightHorizontal}px ${bottomRightHorizontal}px ${bottomLeftHorizontal}px / ${topLeftVertical}px ${topRightVertical}px ${bottomRightVertical}px ${bottomLeftVertical}px`;
    box.style.borderRadius = borderRadiusValue;

    const cssOutput = document.getElementById('css-output');
    cssOutput.value = `border-radius: ${borderRadiusValue};`;
}

function applyBorderRadius() {
    if (!realTimeMode) {
        updateBorderRadius();
    }
}

function toggleMode() {
    realTimeMode = !realTimeMode;
    const applyButton = document.getElementById('apply');
    const toggleButton = document.getElementById('toggle-mode');

    if (realTimeMode) {
        applyButton.style.display = 'none';
        toggleButton.textContent = 'Mudar após aplicar';
        document.querySelectorAll('.input').forEach(input => {
            input.addEventListener('input', updateBorderRadius);
        });
    } else {
        applyButton.style.display = 'block';
        toggleButton.textContent = 'Mudar em tempo real';
        document.querySelectorAll('.input').forEach(input => {
            input.removeEventListener('input', updateBorderRadius);
        });
    }
}

document.getElementById('toggle-mode').addEventListener('click', toggleMode);
document.getElementById('apply').addEventListener('click', applyBorderRadius);

// Inicialize no modo "Mudar em tempo real"
toggleMode();
