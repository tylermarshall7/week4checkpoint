import imageService from "../services/image-service.js";
import store from "../store.js";


function _drawImg() {
    let img = store.State.image.url
    document.getElementById("bg-image").style.backgroundImage = `url('${img} ')`
}

export default class ImageController {
    constructor() {
        store.subscribe('image', _drawImg)
    }

    getImg() {
        imageService.getImg()
    }
}
