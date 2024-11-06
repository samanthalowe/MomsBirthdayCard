function showCard() {
  const card = document.getElementById('card');
  card.classList.add('animate');
  
  // Play the birthday song
  const song = document.getElementById('birthdaySong');
  song.play();
}

document.getElementById('playButton').addEventListener('click', showCard);
