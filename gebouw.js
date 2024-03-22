function generateMockDepartureData(hour, minute) {
    const departureData = [];
    let departureTime = `${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`;
  
    for (let i = 0; i < 3; i++) {
      departureData.push({ time: departureTime, destination: `Gebouw ${String.fromCharCode(65 + i)}` });
      minute += 20;
      if (minute >= 60) {
        minute -= 60;
        hour += 1;
        if (hour >= 24) {
          hour -= 24;
        }
      }
      departureTime = `${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`;
    }
  
    return departureData;
  }
  
  function updateDepartureList(departureData) {
    const departureList = document.getElementById("departure-list");
    departureList.innerHTML = ''; 
  
    
    departureData.forEach((departure) => {
      const listItem = document.createElement("li");
      listItem.textContent = `${departure.time} - ${departure.destination}`;
      departureList.appendChild(listItem);
    });
  }
  

  function updateTimeAndDepartureList() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
  
    let nextHours = hours;
    let nextMinutes;
  
    if (minutes >= 39) {
      nextHours += 1;
      nextMinutes = 9;
    } else if (minutes >= 9) {
      nextMinutes = 39;
    } else {
      nextMinutes = 9;
    }
 
    const mockDepartureData = generateMockDepartureData(nextHours, nextMinutes);
    updateDepartureList(mockDepartureData);
  }
  
  
  updateTimeAndDepartureList();
  
  
  setInterval(updateTimeAndDepartureList, 1000);
  

  