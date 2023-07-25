const qrText = document.getElementById('qr-text');
const sizes = document.getElementById('sizes');
const generateBtn = document.getElementById('generateBtn');
const downloadBtn = document.getElementById('downloadBtn');
const qrContainer = document.querySelector('.qr-body');

let size = sizes.value;
generateBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    isEmptyInput();
});

sizes.addEventListener('change',(e)=>{
    size = e.target.value;
    isEmptyInput();
});

downloadBtn.addEventListener('click', ()=>{
    let img = document.querySelector('.qr-body img');

    if(img !== null){
        let imgAtrr = img.getAttribute('src');
        downloadBtn.setAttribute("href", imgAtrr);
    }
    else{
        downloadBtn.setAttribute("href", `${document.querySelector('canvas').toDataURL()}`);
    }
});

function isEmptyInput(){
    // if(qrText.value.length > 0){
    //     generateQRCode();
    // }
    // else{
    //     alert("Enter the text or URL to generate your QR code");
    // }
    qrText.value.length > 0 ? generateQRCode() : alert("Enter the text or URL to generate your QR code");;
}
// ... (existing code)

let qrCodeColor = "#00FFFF"; // Initial color of the QR code

qrContainer.addEventListener('click', changeQRCodeColor);

function changeQRCodeColor() {
  // Generate a random hexadecimal color code
  const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);

  // Update the QR code color
  qrCodeColor = randomColor;

  // Regenerate the QR code with the new color
  generateQRCode();
}

function generateQRCode() {
  qrContainer.innerHTML = "";
  new QRCode(qrContainer, {
    text: qrText.value,
    height: size,
    width: size,
    colorLight: qrCodeColor, // Use the selected color
    colorDark: "#FFFFFF",    // Fixed dark color
  });
}

// ... (existing code)
