// Global variables
let scanning = false; // Flag to check if scanning is active
let scanInterval; // Interval for scanning
let sonarSound; // Reference to the sonar sound element
let scanAnimation; // Reference to the scan animation element

// Command handling
document.getElementById('command-input').addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    handleCommand(this.value.trim());
    this.value = '';
  }
});

// Handle commands
function handleCommand(command) {
  const terminalOutput = document.getElementById('terminal-output');
  switch (command) {
    case 'COMMENCE_SCAN':
      if (!scanning) {
        startScanning();
        scanning = true;
        playSonarSound();
        scanAnimation.style.display = 'block'; // Show scan animation
      } else {
        terminalOutput.innerText += 'Scanning is already active.\n';
      }
      break;
    case 'CLEAR':
      terminalOutput.innerText = '';
      break;
    case 'HELP':
      terminalOutput.innerText += 'Available commands:\n';
      terminalOutput.innerText += '- COMMENCE_SCAN: Start the scanning process.\n';
      terminalOutput.innerText += '- CLEAR: Clear the terminal.\n';
      terminalOutput.innerText += '- INFO_BEACON_ID-XXXXX: Display information about the BEACON.\n';
      terminalOutput.innerText += '- EXTRACT_BEACON_ID-XXXXX: Extract information from the BEACON.\n';
      break;
      default:
        if (command.startsWith('INFO_BEACON_ID-')) {
          let beaconId = command.split('-')[1];
          accessBeaconData(beaconId);
        } else if (command.startsWith('EXTRACT_BEACON_ID-')) {
          let beaconId = command.split('-')[1];
          extractBeaconData(beaconId);
        } else if (command === 'MOON_DATA') {
          displayMoonData();
        } else {
          terminalOutput.innerText += `Command '${command}' not recognized.\n`;
        }
        break;
    }
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
  }
// Simulate scanning
function startScanning() {
  const radar = document.querySelector('.radar');
  const terminalOutput = document.getElementById('terminal-output');

  terminalOutput.innerText += 'Scanning initiated...\n';

  let detectedIds = ['LR630', 'NN401', 'SB747', 'AS652']; // Example IDs
  let index = 0;

  scanInterval = setInterval(function() {
    if (index < detectedIds.length) {
      displayBeacon(detectedIds[index]);
      index++;
    } else {
      clearInterval(scanInterval);
      scanning = false;
      terminalOutput.innerText += 'Scanning complete.\n';
      stopSonarSound(); // Stop sonar sound
      scanAnimation.style.display = 'none'; // Hide scan animation
    }
  }, 5000); // Adjust interval to 5000ms (5 seconds) or desired interval
}

// Display beacon on radar at fixed positions or as corrupted
function displayBeacon(id) {
  const radar = document.querySelector('.radar');
  const point = document.createElement('div');
  point.classList.add('point');
  
  // Create span for ID
  const idSpan = document.createElement('span');
  idSpan.textContent = id;
  idSpan.classList.add('id-span');
  
  // Append ID span to point
  point.appendChild(idSpan);

  // Define fixed positions for each beacon
  let posX, posY;
  switch (id) {
    case 'LR630':
      posX = 100; // X position for beacon 001
      posY = 200; // Y position for beacon 001
      break;
    case 'NN401':
      posX = 300; // X position for beacon 002
      posY = 100; // Y position for beacon 002
      break;
    case 'SB747':
      posX = 200; // X position for beacon 003
      posY = 320; // Y position for beacon 003
      break;
    case 'AS652': // Corrupted beacon
      corruptedBeaconMovement(point); // Trigger corrupted movement for this beacon
      radar.appendChild(point);
      return; // Exit early, as the position is updated continuously
    default:
      posX = Math.random() * radar.clientWidth; // Random X position
      posY = Math.random() * radar.clientHeight; // Random Y position
      break;
  }

  point.style.left = `${posX}px`;
  point.style.top = `${posY}px`;

  radar.appendChild(point);

  // Remove point after animation
  setTimeout(() => {
    point.classList.add('fade-out');
    setTimeout(() => {
      point.remove();
    }, 1000); // Match the duration of the fadeOut animation
  }, 3000);
}

// Corrupted beacon movement (for 'C999')
function corruptedBeaconMovement(point) {
  const radar = document.querySelector('.radar');

  // Update the position every 500ms with random movement
  corruptedInterval = setInterval(() => {
    const posX = Math.random() * radar.clientWidth;
    const posY = Math.random() * radar.clientHeight;
    
    point.style.left = `${posX}px`;
    point.style.top = `${posY}px`;
    
    point.classList.add('corrupted'); // Optional: add a class to style the corrupted beacon differently
  }, 500); // Move every 500ms

  // Remove corrupted beacon after a certain time
  setTimeout(() => {
    clearInterval(corruptedInterval);
    point.classList.add('fade-out');
    setTimeout(() => {
      point.remove();
    }, 1000); // Match the duration of the fadeOut animation
  }, 10000); // Remove after 10 seconds
}

// Access beacon data
function accessBeaconData(beaconId) {
  const terminalOutput = document.getElementById('terminal-output');
  terminalOutput.innerText += `Accessing data for beacon ID ${beaconId}...\n`;

  // Simulated data for each beacon
  let beaconData;
  switch (beaconId) {
    case 'LR630':
      beaconData = {
        carrier: 'Lyn Ruiz',
        model: 'EXT-DS-BC-0450',
        position: 'Lat: 45.4215, Lon: -75.6972',
        status: 'Inactive'
      };
      break;
    case 'NN401':
      beaconData = {
        carrier: 'Natalya Nowak',
        model: 'EXT-DS-BC-0450',
        position: 'Lat: 34.0522, Lon: -118.2437',
        status: 'Inactive'
      };
      break;
    case 'SB747':
      beaconData = {
        carrier: 'Sebastien Benali',
        model: 'EXT-DS-BC-0450',
        position: 'Lat: 51.5074, Lon: -0.1278',
        status: 'Inactive'
      };
      break;
    case 'AS652':
      beaconData = {
        carrier: 'Adam Fältskog',
        model: 'EXT-DS-BC-0450',
        position: 'Unknown',
        status: 'Active'
      };
      break;
    default:
      terminalOutput.innerText += `Beacon ID ${beaconId} not found.\n`;
      return;
  }

  // Display the data in the terminal
  setTimeout(() => {
    terminalOutput.innerText += `Beacon ID ${beaconId} data:\n`;
    terminalOutput.innerText += `- Model Number: ${beaconData.model}\n`;
    terminalOutput.innerText += `- Carrier: ${beaconData.carrier}\n`;
    terminalOutput.innerText += `- Position: ${beaconData.position}\n`;
    terminalOutput.innerText += `- Status: ${beaconData.status}\n`;
  }, 2000); // Simulate delay for fetching data
}

// Extract beacon data
function extractBeaconData(beaconId) {
  const terminalOutput = document.getElementById('terminal-output');
  terminalOutput.innerText += `Extracting data from beacon ID ${beaconId}...\n`;

  // Define Google Drive links for each beacon ID
  let driveLink;
  switch (beaconId) {
    case 'LR630':
      driveLink = 'https://drive.google.com/file/d/1fXfpoS0FY4lHRovRn-CJhB-1FXYKWgj0/view?usp=drive_link';
      break;
    case 'NN401':
      driveLink = 'https://drive.google.com/file/d/1QsFdHTSLxUcy5wAoaOUS7KrplGneWZkN/view?usp=drive_link';
      break;
    case 'SB747':
      driveLink = 'https://drive.google.com/file/d/1J5EjvFLuZOYZcO_aumAQxf55htqrM_ni/view?usp=drive_link';
      break;
    default:
      terminalOutput.innerText += `Beacon ID ${beaconId} cannot be found.\n`;
      return;
  }

  // Simulate extracting beacon data by opening Google Drive link
  setTimeout(() => {
    window.open(driveLink, '_blank');
  }, 2000); // Simulate delay for extracting data
}
  
  // Display Moon data
  function displayMoonData() {
    const terminalOutput = document.getElementById('terminal-output');
    terminalOutput.innerText += `Fetching moon data...\n`;
    
  // Simulate fetching Moon data
  setTimeout(() => {
    terminalOutput.innerText += `Moon data:\n`;
    terminalOutput.innerText += `-------------------------------------------------------------------------------------------------------------\n`;
    terminalOutput.innerText += `Moon Name: VESP-14ERA\n`;
    terminalOutput.innerText += `-------------------------------------------------------------------------------------------------------------\n`;
    terminalOutput.innerText += `- Ocean Composition:\n`;
    terminalOutput.innerText += `  - Methane (CH₄): Most abundant.\n`;
    terminalOutput.innerText += `  - Ethane (C₂H₆): Significant presence.\n`;
    terminalOutput.innerText += `-------------------------------------------------------------------------------------------------------------\n`;
    terminalOutput.innerText += `- Mantle Composition:\n`;
    terminalOutput.innerText += `  - Water Ice (H₂O): Predominantly in solid form, with varying layers of ice depending on depth and pressure.\n`;
    terminalOutput.innerText += `  - Ammonia Hydrate (NH₃•H₂O): Likely present, helping to lower the freezing point of water in the mantle.\n`;
    terminalOutput.innerText += `  - Hydrocarbon Ices (CH₄, C₂H₆): Solid methane and ethane due to extreme cold temperatures.\n`;
    terminalOutput.innerText += `-------------------------------------------------------------------------------------------------------------\n`;
    terminalOutput.innerText += `- Pressure: 1367.8 kPa.\n`; // Example pressure value
    terminalOutput.innerText += `- Temperature: -189.25°C.\n`; // Example temperature value
    terminalOutput.innerText += `- Diameter: 6,055 kilometers.\n`;
    terminalOutput.innerText += `-------------------------------------------------------------------------------------------------------------\n`;
  }, 2000); // Simulate delay for fetching data
}

// Play sonar sound
function playSonarSound() {
  if (sonarSound.paused) {
    sonarSound.currentTime = 0;
    sonarSound.loop = true;
    sonarSound.play().catch(error => {
      console.log('Failed to play sound:', error);
    });
  }
}

// Stop sonar sound
function stopSonarSound() {
  sonarSound.pause();
  sonarSound.currentTime = 0;
}

// Initialize sonar sound and scan animation
document.addEventListener('DOMContentLoaded', () => {
  sonarSound = document.getElementById('sonar-sound');
  scanAnimation = document.getElementById('scan-animation');
});
