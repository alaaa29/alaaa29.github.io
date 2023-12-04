document.addEventListener('DOMContentLoaded', function () {
    // Set the starting point of the countdown in seconds
    let countdownValue = localStorage.getItem('countdownValue') || 950400; // Default to 1 hour if not in local storage
  
    // Function to update the countdown
    function updateCountdown() {
      // Calculate hours, minutes, and seconds
      const days = Math.floor(countdownValue / 86400);
      const hours = Math.floor((countdownValue % 86400) / 3600);
      const minutes = Math.floor((countdownValue % 3600) / 60);
      const seconds = countdownValue % 60;
  
      // Display the current countdown value in the format "hour:min:sec"
      document.getElementById('h1').innerHTML = `${formatTime(days)}d:${formatTime(hours)}h:${formatTime(minutes)}m:${formatTime(seconds)}s`;
  
      // Check if the countdown has reached zero
      if (countdownValue === 0) {
        clearInterval(intervalId); 
        alert('Countdown reached zero!');
      } else {
        countdownValue--; 
        localStorage.setItem('countdownValue', countdownValue);
      }
    }
  
    // Update the countdown every second (1000 milliseconds)
    const intervalId = setInterval(updateCountdown, 1000);
  
    // Function to format time values (add leading zero if needed)
    function formatTime(time) {
      return time < 10 ? `0${time}` : time;
    }
  });
  