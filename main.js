const images = document.querySelectorAll('#carousel img');
const pagination = document.querySelector('#pagination');

function createPaginationMarkers() {
  images.forEach((img) => {
    const imgViewName = `--${img.id}`;
    img.style.viewTimelineName = imgViewName;
    const marker = document.createElement('button');
    marker.type = 'button';
    marker.role = 'tab';
    marker.style.animationTimeline = imgViewName;
    marker.addEventListener('click', () => img.scrollIntoView());
    pagination.appendChild(marker);
  });

  document.body.style.timelineScope = `${Array.from(images).map(
    (image) => image.style.viewTimelineName
  )}`;
}

if (CSS.supports('view-timeline-axis', 'inline')) {
  createPaginationMarkers();
}

images[1].scrollIntoView();

const shareDateInput = document.getElementById('shareDate');
const option1Input = document.getElementById('option1');
const option2Input = document.getElementById('option2');
const option3Input = document.getElementById('option3');
const sendMessageLink = document.getElementById('sendMessageLink');

sendMessageLink.addEventListener('click', function(event) {
    // Membentuk URL dengan nomor penerima dan pesan yang diambil dari input
    const phoneNumber = '6281210546289'; // Nomor penerima
    const message = `Yuk, aku kosong tanggal ${shareDateInput.value}, aku mau ${getSelectedOption()}`;
    const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    
    // Mengatur href tautan "Send Message" ke URL WhatsApp
    sendMessageLink.href = whatsappURL;
});

function getSelectedOption() {
    if (option1Input.checked) {
        return "kopi nako";
    } else if (option2Input.checked) {
        return "shabu hachi";
    } else if (option3Input.checked) {
        return "dua-duanya";
    } else {
        return 'Belum Milih';
    }
};

document.getElementById('insta').addEventListener('click', function() {
  window.open('https://www.instagram.com/frahmannnn/', '_blank');
});

