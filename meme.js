function generateMeme(img, topText, bottomText, topTextSize, bottomTextSize) {
  const canvas = document.getElementById('meme-canvas');
  const ctx = canvas.getContext('2d');

  // Size canvas to image
  canvas.width = img.width;
  canvas.height = img.height;

  // Clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // Draw main image
  ctx.drawImage(img, 0, 0);

  // Text style: white with black borders
  ctx.fillStyle = 'white';
  ctx.strokeStyle = 'black';
  ctx.textAlign = 'center';

  // Top text font size
  let fontSize = canvas.width * topTextSize;
  ctx.font = `${fontSize}px Impact`;
  ctx.lineWidth = fontSize / 20;

  // Draw top text
  ctx.textBaseline = 'top';
  topText.split('\n').forEach((t, i) => {
    ctx.fillText(t, canvas.width / 2, i * fontSize, canvas.width);
    ctx.strokeText(t, canvas.width / 2, i * fontSize, canvas.width);
  });

  // Bottom text font size
  fontSize = canvas.width * bottomTextSize;
  ctx.font = `${fontSize}px Impact`;
  ctx.lineWidth = fontSize / 20;

  // Draw bottom text
  ctx.textBaseline = 'bottom';
  bottomText.split('\n').reverse().forEach((t, i) => { // .reverse() because it's drawing the bottom text from the bottom up
    ctx.fillText(t, canvas.width / 2, canvas.height - i * fontSize, canvas.width);
    ctx.strokeText(t, canvas.width / 2, canvas.height - i * fontSize, canvas.width);
  });
}

window.addEventListener('DOMContentLoaded', () => {
  // Initialize variables
  const topTextInput = document.getElementById('top-text');
  const bottomTextInput = document.getElementById('bottom-text');
  const topTextSizeInput = document.getElementById('top-text-size-input');
  const bottomTextSizeInput = document.getElementById('bottom-text-size-input');
  const imageInput = document.getElementById('image-input');
  const generateBtn = document.getElementById('generate-btn');
  const container = document.getElementById("container");

  // Generate button click listener
  generateBtn.addEventListener('click', () => {
    console.log("clicked")
    
    
    // step 1: get the top text value
    let topTextVal = topTextInput.value
    // step 1.5: create top text elemenet
    let topTextInner = document.createElement("p")
    topTextInner.textContent = topTextVal

    // step 2: get the bottom ttext value
    let bottomTextval = bottomTextInput.value
    // step 2.5: create the bottom text element 
    let bottomTextInner = document.createElement("p")
    bottomTextInner.textContent = bottomTextval
    bottomTextInner.className = "bottom-text"
    // step 3: get the image value
    
    const imageUrl = imageInput.value
    // step 3.5: create the image element
    const image = document.createElement("img")
    image.src = imageUrl

    // step 4. append to dom
    let memeContainer = document.createElement("div")
    memeContainer.className = "meme"
    /*
    <div class="meme"></div>
    */

    memeContainer.append(topTextInner)
    /*
    <div class="meme">
      <p>{topTextVal}</p>
    </div>
    */

    memeContainer.append(image)
    /*
    <div class="meme">
      <p>{topTextVal}</p>
      <img src="{imageUrl}"/>
    </div>
    */
    
     memeContainer.append(bottomTextInner)
      /*
    <div class="meme">
      <p>{topTextVal}</p>
      <img src="{imageUrl}"/>
      <p class"bottom-text">{bottomTextVal}</p>
    </div>
    */
   
     container.append(memeContainer)
     // Read image as DataURL using the FileReader API
   /* const reader = new FileReader();
    reader.onload = () => {
      const img = new Image();
      img.src = reader.result;
      img.onload = () => {
        generateMeme(img, topTextInput.value, bottomTextInput.value, topTextSizeInput.value, bottomTextSizeInput.value);
      };
    };
    reader.readAsDataURL(imageInput.files[0]);
    */
  });
});