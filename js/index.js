var marginY = 0;
var destination = 0;
var speed = 8;
var scroller = null;

function initScroll(elementId) {
  destination = document.getElementById(elementId).offsetTop;

  scroller = setTimeout(function() {
    initScroll(elementId);
  }, 1);

  marginY = marginY + speed;

  if (marginY >= destination) {
    clearTimeout(scroller);
  }

  window.scroll(0, marginY);
}

window.onscroll = function() {
  marginY = this.pageYOffset;
  if (window.scrollY > 0) {
    arrowTop.classList.remove("hidden");
    arrowTop.classList.add("show");
    navbar.classList.add("border-bottom");
  } else {
    arrowTop.classList.remove("show");
    arrowTop.classList.add("hidden");
    navbar.classList.remove("border-bottom");
  }
};

function toTop() {
  scroller = setTimeout(function() {
    toTop();
  }, 1);

  marginY = marginY - speed;

  if (marginY <= 0) {
    clearTimeout(scroller);
  }

  window.scroll(0, marginY);
}

function downloadFile(blob, fileName) {
  console.log("entro");
  const link = document.createElement("a");
  // create a blobURI pointing to our Blob
  link.href = URL.createObjectURL(blob);
  link.download = fileName;
  // some browser needs the anchor to be in the doc
  document.body.append(link);
  link.click();
  link.remove();
  // in case the Blob uses a lot of memory
  window.addEventListener("focus", e => URL.revokeObjectURL(link.href), {
    once: true
  });
}
