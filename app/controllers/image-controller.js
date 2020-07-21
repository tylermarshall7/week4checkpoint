import imageService from "../services/image-service.js";
import store from "../store.js";
<<<<<<< HEAD


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
=======

function _drawImg() {
  let img = store.State.image.url
  document.getElementById("bg-image").style.backgroundImage = `url('${img}')`
>>>>>>> 4710c4ff2dbfbbb798f4a1e6b73e712c06ce876f
}


export default class ImageController {
  constructor() {
    store.subscribe('image', _drawImg)
  }

  // get image from sandbox
  getImg() {
    imageService.getImg()
  }
}