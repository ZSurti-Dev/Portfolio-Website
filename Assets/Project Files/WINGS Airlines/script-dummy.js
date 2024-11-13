document.addEventListener('DOMContentLoaded', function() {
    const destinationCards = document.querySelector('.offers-wrapper');
    const scrollLeftButton = document.getElementById('leftScroll-btn');
    const scrollRightButton = document.getElementById('rightScroll-btn');

    if (scrollLeftButton && scrollRightButton) {
        scrollLeftButton.addEventListener('click', () => {
            destinationCards.scrollBy({ left: -300, behavior: 'smooth' });
        });

        scrollRightButton.addEventListener('click', () => {
            destinationCards.scrollBy({ left: 300, behavior: 'smooth' });
        });
    }

    const bookAndPrepare = document.getElementById('book-and-prepare');
    if (bookAndPrepare) {
        bookAndPrepare.addEventListener('click', function(e) {
            e.preventDefault();
            this.style.color = '#b60505';
            window.location.href = "book&prepare.html";
        });
    }

    const fromInput = document.getElementById('from');
    if (fromInput) {
        fromInput.addEventListener('input', function() {
            const query = this.value;