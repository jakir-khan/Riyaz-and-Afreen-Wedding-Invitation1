const brideBtn = document.getElementById('bride-btn');
const groomBtn = document.getElementById('groom-btn');
const content = document.getElementById('content');
const slideshowContainer = document.getElementById('slideshow-container');

const brideImages = [
    'brides1.jpeg',
    'bride1.jpg',
    'brides3.jpeg',
    'bride2.jpg',
    'brides2.jpeg',
    'bride3.jpg'
];

const groomImages = [
    'groom11.jpg',
    'groom22.jpg',
    'groom33.jpg'

];

brideBtn.addEventListener('click', () => {
    showPage('Bride', brideImages, 'Meer Afreen Begum', 22, 'Student', 'B.Sc Computers');
});

groomBtn.addEventListener('click', () => {
    showPage('Groom', groomImages, 'Shaik Riyaz Basha', 27, 'Bakery and Pastry Chef at Welcome Hotel by ITC, guntur', 'CS & HA');
});

function showPage(person, images, name, age, occupation, qualification) {
    const pageContent = `
    <!-- <h2>${person}'s Page</h2> -->
    <div class="details" style="padding-left: 3%">
      <h3>Personal Details:</h3>
      <p> <b> <u> Name </u></b>: ${name}</p>
      <p> <b> <u> Age </u></b>: ${age}</p>
      <!-- Add more personal details here -->
      <h3>Professional Details:</h3>
      <p> <b> <u>Qualification</u></b>: ${qualification}</p>
      <p> <b> <u>Occupation</u></b>: ${occupation}</p>
      <!-- Add more professional details here -->
    </div>
  `;
    content.innerHTML = pageContent;

    const slideshow = document.querySelector('.slideshow');
    slideshow.innerHTML = '';
    images.forEach((image, index) => {
        const img = document.createElement('img');
        img.src = image;
        img.alt = `${person} Image`;
        // img.style.objectFit = 'contain';
        slideshow.appendChild(img);
    });

    let currentSlide = 0;
    const slides = slideshow.querySelectorAll('img');

    function showSlide(index) {
        slides.forEach((slide, idx) => {
            if (idx === index) {
                slide.style.display = 'block';
            } else {
                slide.style.display = 'none';
            }
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % images.length;
        showSlide(currentSlide);
    }

    showSlide(currentSlide);
    setInterval(nextSlide, 3000); // Change slide every 3 seconds
}
