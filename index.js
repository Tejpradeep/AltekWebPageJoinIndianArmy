let i = 1;

function changeimg() {
  let pic = document.getElementById("image");

  if (i == 1) {
    pic.src = "images/adventure.jpg";
    i = 2;
  } 
  else if (i == 2) {
    pic.src = "images/agnipath.jpg";
    i = 3;
  } 
  else if (i == 3) {
    pic.src = "images/armyRun.jpg";
    i = 4;
  } 
  else if (i == 4) {
    pic.src = "images/bharmos.jpg";
    i = 5;
  } 
  else if (i == 5) {
    pic.src = "images/bharmos.jpg";
    i = 6;
  } 
  else if (i == 6) {
    pic.src = "images/helicopter.jpg";
    i = 7;
  } 
  else if (i == 7) {
    pic.src = "images/republic.png";
    i = 8;
  } 
  else if (i == 8) {
    pic.src = "images/rifile.jpg";
    i = 9;
  }
  else if (i == 9) {
    pic.src = "images/snow.jpg";
    i = 10;
  }
  else if (i == 10) {
    pic.src = "images/snow.jpg";
    i = 11;
  }
  else if (i == 11) {
    pic.src = "images/tank.jpg";
    i = 12;
  }
  else if (i == 12) {
    pic.src = "images/tanks.jpg";
    i = 1; // ✅ Loop back to start
  }
}

// Automatic slideshow every 10 seconds
setInterval(changeimg, 10000);

// Button functions
function nextImage() {
  changeimg();
}

function prevImage() {
  i = i - 2;
  if (i < 1) i = 12; // ✅ Matches total number of images
  changeimg();
}




let j = 1;

function changeVideoThumb() {
  let vid = document.getElementById("videoThumb");

  if (j == 1) {
    vid.src = "images/videos/1_video-thumb.png";
    j = 2;
  }
  else if (j == 2) {
    vid.src = "images/videos/2_Morals_Values_Traditions_Ethics_of_Indian_Army.jpg";
    j = 3;
  }
  else if (j == 3) {
    vid.src = "images/videos/3_Army_Day_Ad_2014_30_Sec.jpg";
    j = 4;
  }
  else if (j == 4) {
    vid.src = "images/videos/5_img_108.jpeg";
    j = 5;
  }
 
  else if (j == 5) {
    vid.src = "images/videos/6_imgpsh_fullsize.jpg";
    j = 6;
  }
  else if (j == 6) {
    vid.src = "images/videos/9_thumb_4.jpg";
    j = 7;
  }
  else if (j == 7) {
    vid.src = "images/videos/10_thumb_1.jpg";
    j = 1;
  }
 
}

// Automatic change every 5 seconds
setInterval(changeVideoThumb, 2000);






let k = 1;

function changePhotoThumb() {
  let photo = document.getElementById("photoThumb");

  if (k == 1) {
    photo.src = "images/photos/1.png";
    k = 2;
  }
  else if (k == 2) {
    photo.src = "images/photos/2.png";
    k = 3;
  }
  else if (k == 3) {
    photo.src = "images/photos/3.png";
    k = 4;
  }
  else if (k == 4) {
    photo.src = "images/photos/4.png";
    k = 5;
  }
  else if (k == 5) {
    photo.src = "images/photos/5.png";
    k = 6;
  }
  else if (k == 6) {
    photo.src = "images/photos/6.png";
    k = 1;
  }
  
}

// Automatic change every 2 seconds
setInterval(changePhotoThumb, 2000);



