let totalWater = 0;

function logWater() {
  const waterAmount = parseFloat(document.getElementById("waterAmount").value);
  if (isNaN(waterAmount) || waterAmount <= 0) {
    alert("Please enter a valid amount of water!");
    return;
  }

  totalWater += waterAmount;
  updateDisplay();
}

function updateDisplay() {
  document.getElementById("totalWater").innerText = `${totalWater} L`;
  
  const progressBar = document.getElementById("progressBar");
  const percentage = Math.min((totalWater / 2) * 100, 100);  // assuming 2L goal
  progressBar.style.width = `${percentage}%`;
  
  if (totalWater >= 2) {
    document.getElementById("reminderMessage").innerText = "Great job! You've met your water goal today!";
  } else {
    document.getElementById("reminderMessage").innerText = "You haven't logged water in a while! Please stay hydrated!";
  }
}

function resetWater() {
  totalWater = 0;
  updateDisplay();
  document.getElementById("waterAmount").value = "";
}
