document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('#game-board');
    const startButton = document.getElementById('start-game');
    let photosChosen = [];
    let photosChosenId = [];
    let photosWon = [];

    const cardArray = [
        { name: 'photo1', img: 'images/img1.png' },
        { name: 'photo1', img: 'images/img1.png' },
        { name: 'photo2', img: 'images/img2.png' },
        { name: 'photo2', img: 'images/img2.png' },
        { name: 'photo3', img: 'images/img3.png' },
        { name: 'photo3', img: 'images/img3.png' },
        { name: 'photo4', img: 'images/img4.png' },
        { name: 'photo4', img: 'images/img4.png' },
        { name: 'photo5', img: 'images/img5.png' },
        { name: 'photo5', img: 'images/img5.png' },
        { name: 'photo6', img: 'images/img6.png' },
        { name: 'photo6', img: 'images/img6.png' },
        { name: 'photo7', img: 'images/img7.png' },
        { name: 'photo7', img: 'images/img7.png' },
        { name: 'photo8', img: 'images/img8.png' },
        { name: 'photo8', img: 'images/img8.png' },
        { name: 'photo9', img: 'images/img9.png' },
        { name: 'photo9', img: 'images/img9.png' },
        { name: 'photo9', img: 'images/img10.png' },
        { name: 'photo9', img: 'images/img10.png' },
        // ...add more pairs as needed
    ];

    function shuffle(array) {
        array.sort(() => 0.5 - Math.random());
    }

    function createBoard() {
        shuffle(photoArray);
        grid.innerHTML = '';
        cardsWon = [];

        for (let i = 0; i < photoArray.length; i++) {
            const card = document.createElement('img');
            photo.setAttribute('src', 'images/blank.jpg');
            photo.setAttribute('data-id', i);
            photo.addEventListener('click', flipPhoto);
            grid.appendChild(photo);
        }
    }

    function flipPhoto() {
        let photoId = this.getAttribute('data-id');
        if (!photosChosenId.includes(photoId)) {
            photosChosen.push(photoArray[photoId].name);
            photosChosenId.push(photoId);
            this.setAttribute('src', photoArray[photoId].img);
            if (photosChosen.length === 2) {
                setTimeout(checkForMatch, 500);
            }
        }
    }

    function checkForMatch() {
        const photos = document.querySelectorAll('#game-board img');
        const firstPhotoId = photosChosenId[0];
        const secondPhotoId = photosChosenId[1];

        if (photosChosen[0] === photosChosen[1] && firstPhotoId !== secondPhotoId) {
            photos[firstPhotoId].style.visibility = 'hidden';
            photos[secondPhotoId].style.visibility = 'hidden';
            photos[firstPhotoId].removeEventListener('click', flipPhoto);
            photos[secondPhotoId].removeEventListener('click', flipPhoto);
            photosWon.push(photosChosen);
        } else {
            photos[firstPhotoId].setAttribute('src', 'images/blank.jpg');
            photos[secondPhotoId].setAttribute('src', 'images/blank.jpg');
        }

        photosChosen = [];
        photosChosenId = [];

        if (photosWon.length === photoArray.length / 2) {
            alert('Congratulations! You found them all!');
        }
    }

    startButton.addEventListener('click', createBoard);
});