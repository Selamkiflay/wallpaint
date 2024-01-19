document.addEventListener('DOMContentLoaded', function() {
  const calculateButton = document.getElementById('calculateButton');
  calculateButton.addEventListener('click', calculatePaintAmount);

  function calculatePaintAmount() {
    const widthInput = document.getElementById('widthInput');
    const width = parseFloat(widthInput.value);

    const lengthInput = document.getElementById('lengthInput');
    const length = parseFloat(lengthInput.value);

    const windowsInput = document.getElementById('windowsInput');
    const windows = parseInt(windowsInput.value);

    const doorsInput = document.getElementById('doorsInput');
    const doors = parseInt(doorsInput.value);

    if (isNaN(width) || isNaN(length) || width <= 0 || length <= 0 || isNaN(windows) || isNaN(doors) || windows < 0 || doors < 0) {
      document.getElementById('paintAmount').textContent = 'Invalid input. Please enter valid numbers for width, length, windows, and doors.';
      return;
    }

    const wallArea = width * length;
    const windowArea = windows * 2; // Assuming each window has an area of 2 square meters
    const doorArea = doors * 1.5; // Assuming each door has an area of 1.5 square meters

    const adjustedArea = wallArea - (windowArea + doorArea);
    const paintNeeded = adjustedArea / 10; // Assuming 1 liter of paint covers 10 square meters

    document.getElementById('paintAmount').textContent = `You will need ${paintNeeded.toFixed(2)} liters of paint.`}});