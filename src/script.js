const myStorage = window.sessionStorage;

function loadViewer(imageUrl) {
  const viewer = document.getElementById("viewer");
  let psv = new PhotoSphereViewer({
    panorama: imageUrl,
    container: viewer,
    time_anim: 0,
    navbar: true,
    navbar_style: {
      backgroundColor: "rgba(58, 67, 77, 0.7)",
    },
  });

  viewer.classList.add("show");
}

function onUpload(event) {
  const file = event.target.files[0];
  // if (!file.type) {
  //   status.textContent =
  //     "Error: The File.type property does not appear to be supported on this browser.";
  //   return;
  // }
  // if (!file.type.match("image.*")) {
  //   status.textContent =
  //     "Error: The selected file does not appear to be an image.";
  //   return;
  // }
  const reader = new FileReader();
  reader.addEventListener("load", (event) => {
    loadViewer(event.target.result);
  });
  reader.readAsDataURL(file);
}

window.addEventListener("DOMContentLoaded", () => {
  const imageInput = document.getElementById("imageInput");
  const buttons = document.querySelectorAll(".load-image-button");

  imageInput.addEventListener("change", onUpload);
  buttons.forEach((button) => {
    const imageUrl = button.getAttribute("data-image-url");
    button.addEventListener("click", () => {
      loadViewer(imageUrl);
    });
  });
});
