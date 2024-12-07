(function() {
            function $(id) {
                return document.getElementById(id);
            }

            var card = $('card'),
                openB = $('open'),
                closeB = $('close'),
                timer = null;

            // Function to open the card
            function openCard() {
                card.setAttribute('class', 'open-half');
                if (timer) clearTimeout(timer);
                timer = setTimeout(function () {
                    card.setAttribute('class', 'open-fully');
                    timer = null;
                }, 1000);
            }

            // Event listener for the open button
            openB.addEventListener('click', function () {
                openCard();
                const audio = $('audio');
                audio.volume = 0.2; // Set volume to 20%
                audio.play();
            });

            // Event listener for the close button
            closeB.addEventListener('click', function () {
                card.setAttribute('class', 'close-half');
                if (timer) clearTimeout(timer);
                timer = setTimeout(function () {
                    card.setAttribute('class', '');
                    timer = null;
                }, 1000);
            });

            // Automatically open the card if not clicked in 10 seconds
            setTimeout(function() {
                if (!card.classList.contains('open-fully')) {
                    openCard();
                }
            }, 10000); // 10 seconds

        }());


// JavaScript to play audio automatically when the page loads
window.addEventListener('DOMContentLoaded', function() {
  const audio = document.getElementById('audio');
  audio.volume = 0.2; // Set volume to 20%
  audio.play().catch(function(error) {
      console.log('Audio playback failed:', error);
  });
});