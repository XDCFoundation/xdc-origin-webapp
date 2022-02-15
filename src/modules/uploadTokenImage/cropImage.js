const createImage = url =>
  new Promise((resolve, reject) => {
    const image = new Image()
    image.addEventListener('load', () => resolve(image))
    image.addEventListener('error', error => reject(error))
    image.src = url
  })

function getRadianAngle(degreeValue) {
  return (degreeValue * Math.PI) / 180
}

export default async function GetCroppedImg(imageSrc, pixelCrop, rotation = 0) {
  const image = await createImage(imageSrc)
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')

  const safeArea = Math.max(image.width, image.height)

  canvas.width = safeArea
  canvas.height = safeArea

  ctx.translate(safeArea , safeArea )
  ctx.translate(-safeArea , -safeArea )
  ctx.fillStyle = "rgb(200,0,0)";
  ctx.drawImage(
    image,
    safeArea - image.width ,
    safeArea - image.height
  )
  const data = ctx.getImageData(0, 0, safeArea, safeArea)

  canvas.width = pixelCrop.width
  canvas.height = pixelCrop.height

  ctx.putImageData(
    data,
    0 - safeArea  + image.width - pixelCrop.x,
    0 - safeArea  + image.height - pixelCrop.y
  )

  // As Base64 string
  const dataUrl = canvas.toDataURL('image/png')
  const fileName = JSON.stringify(new Date().getTime())+".png"
  console.log("datr-name",fileName)

//   return canvas.toBlob(function(blob) {
//     canvas.saveAs(blob, "pretty image.png");
// });
  // As a blob
  // return new Promise(resolve => {
  //   canvas.toBlob(file => {
  //     resolve(URL.createObjectURL(file))
  //   }, 'image/jpeg')
  // })

  /**
 2 * convert dataurl to file
 3 * @ param {string} dataurl - dataurl address
 4 * @ param {string} file name - file name
 5 */

  const DataURLtoFile = async(dataUrl, fileName) =>{
         var arr = dataUrl.split(',');
         let mime = arr[0].match(/:(.*?);/)[1];
         let bstr = await atob(arr[1]);
         let n = bstr.length;
         let u8arr = await new Uint8Array(n);
         while(n--){
            u8arr[n] = bstr.charCodeAt(n);
        }
        return await new File([u8arr], fileName, {type:mime});
  }
 return await DataURLtoFile(dataUrl, fileName)
}
