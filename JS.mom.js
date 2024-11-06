function showCard() {
    const card = document.getElementById('card');
    card.classList.add('animate');

    // Play the birthday song
    const song = document.getElementById('birthdaySong');
    song.play();

    // Hide the play button after clicking
    const playButton = document.getElementById('playButton');
    playButton.style.display = 'none';
}
