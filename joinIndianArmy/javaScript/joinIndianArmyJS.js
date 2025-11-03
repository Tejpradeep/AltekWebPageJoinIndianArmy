  let i = 1;

    function changeimg() {
      let pic = document.getElementById("image");

      if (i == 1) {
        pic.src = "../images/adventure.jpg";
        i = 2;
      } else if (i == 2) {
        pic.src = "../images/agnipath.jpg";
        i = 3;
      } else if (i == 3) {
        pic.src = "../images/armyRun.jpg";
        i = 4;
      } else if (i == 4) {
        pic.src = "../images/bharmos.jpg";
        i = 5;
      } else if (i == 5) {
        pic.src = "../images/helicopter.jpg";
        i = 6;
      } else if (i == 6) {
        pic.src = "../images/republic.png";
        i = 7;
      } else if (i == 7) {
        pic.src = "../images/rifile.jpg";
        i = 1;
      }
    }

    // Automatic slideshow every second
    setInterval(changeimg, 10000);

    // Button functions
    function nextImage() {
      changeimg();
    }

    function prevImage() {
      i = i - 2;
      if (i < 1) i = 7;
      changeimg();
    }