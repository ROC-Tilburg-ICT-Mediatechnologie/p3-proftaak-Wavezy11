const tijdDiv = document.querySelector('.tijd');

function updateTime() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();

  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
}


tijdDiv.textContent = updateTime();
