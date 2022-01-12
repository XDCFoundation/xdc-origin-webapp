const createImage = url =>
  new Promise((resolve, reject) => {
    const image = new Image()
    image.addEventListener('load', () => resolve(image))
    image.addEventListener('error', error => reject(error))
    image.setAttribute('crossOrigin', 'anonymous')
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
  ctx.rotate(getRadianAngle(rotation))
  ctx.translate(-safeArea , -safeArea )

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
//   return canvas.toDataURL('image/jpeg')

//   return canvas.toBlob(function(blob) {
//     canvas.saveAs(blob, "pretty image.png");
// });
  // As a blob
  return new Promise(resolve => {
    canvas.toBlob(file => {
      resolve(URL.createObjectURL(file))
    }, 'image/jpeg')
  })
}
