function handleInput(event) {
    console.log("in handleInput");
    localStorage.setItem("notes", event.target.value);
}
function onLoad() {
    console.log("in onLoad");
    const notes = localStorage.getItem("notes");
    const notebox = document.querySelector(".notebox");
    notebox.value = notes;
}
onLoad();
const notebox = document.querySelector(".notebox");
notebox.addEventListener("input", handleInput);
