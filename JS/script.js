let birthday = new Date(1989, 8, 2);
let date_now = new Date();
let diff = new Date(date_now.getTime() - birthday.getTime());

age = (diff.getUTCFullYear() - 1970);

document.getElementById('age').textContent = age + " года";

const images = document.querySelectorAll(".cert_item img");
let imgSrc;
// get images src onclick
images.forEach((img) => {
    img.addEventListener("click", (e) => {
        imgSrc = e.target.src;
        //run modal function
        imgModal(imgSrc);
    });
});
//creating the modal
let imgModal = (src) => {
    const modal = document.createElement("div");
    modal.setAttribute("class", "modal");
    //add the modal to the main section or the parent element
    document.querySelector("main").append(modal);
    //adding image to modal
    const newImage = document.createElement("img");
    newImage.setAttribute("src", src);
    //creating the close button
    const closeBtn = document.createElement("div");
    closeBtn.setAttribute("class", "fas fa-times closeBtn");
    //close function

    closeBtn.innerText = 'X';
    closeBtn.onclick = () => {
        modal.remove();
    };
    modal.append(newImage, closeBtn);
};

