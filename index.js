let inputClick = document.querySelector('#userImage');

let uimage = document.querySelector('#uimage');
let wimage = document.querySelector('#wimage');

function convertImage (e){
    console.log('test')
    if (e.target.files.length > 0) {
        let src = URL.createObjectURL(e.target.files[0])
        uimage.src = src;
        console.log(src)

        let canvas = document.createElement('canvas');
        let ctx = canvas.getContext('2d');

        let userImage = new Image();
        userImage.src = src;

        userImage.onload = function() {
            canvas.width = userImage.width;
            canvas.height = userImage.height;
            ctx.drawImage(userImage,0,0);
           
            let webImage = canvas.toDataURL("image/webp", 1)

            wimage.src = webImage;
        }
    }
}

inputClick.addEventListener('change', convertImage)