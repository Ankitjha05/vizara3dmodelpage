// Handles loading the events for <model-viewer>'s slotted progress bar
const onProgress = (event) => {
    const progressBar = event.target.querySelector('.progress-bar');
    const updatingBar = event.target.querySelector('.update-bar');
    updatingBar.style.width = `${event.detail.totalProgress * 100}%`;
    if (event.detail.totalProgress === 1) {
        progressBar.classList.add('hide');
    } else {
        progressBar.classList.remove('hide');
        if (event.detail.totalProgress === 0) {
            event.target.querySelector('.center-pre-prompt').classList.add('hide');
        }
    }
};
document.querySelector('model-viewer').addEventListener('progress', onProgress);

let model = document.getElementById('modelview')
let model2 = document.getElementById('modelview2')
let model3 = document.getElementById('modelview3')

document.querySelector('#cross1').addEventListener('click', () => {
    model.classList.add("hiden")
})
document.querySelector('#cross2').addEventListener('click', () => {
    model2.classList.add("hiden")
})
document.querySelector('#cross3').addEventListener('click', () => {
    model3.classList.add("hiden")
})

function display360(name) {
    name.classList.remove("hiden")
}


