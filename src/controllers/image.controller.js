import {
  insertImageData,
  insertImageInBucket,
  updateArchived,
  updateFavorites,
  getImagesModel,
} from "../model/image.model.js"

export async function imageUpload(req, res, next) {

  const userId = req.user 
  const files = req.files
  const uploadPromises = []
  const currTime = Date.now()

  for ( let file of files ){

    const image = file.buffer
    const imageName = ( currTime + 1 ) + "-" + file.originalname

    uploadPromises.push( 
      insertImageInBucket(userId, imageName, image)
    )
  }

  const results = await Promise.allSettled(uploadPromises)

  const arrayOfImageInfo = []

  for ( let result of results ){

    const { error , data } = result.value

    if (error) {
      console.log("uploading err", error)
      res.status(400).json(error)
      return
    }

    const { fullPath } = data
    arrayOfImageInfo.push({ user_id : userId , image_path : fullPath  })

  }

  insertImageData( arrayOfImageInfo )
    .then((imagesData) => res.json(imagesData))
    .catch((error) => {
      res.status(400).json(error)
    })
  
  //   {
  //     path: 'user/images_name.jpg',
  //     id: 'ffb18ba3-72e1-40db-9a1f-a62f72c823ea',
  //     fullPath: 'user-photos/user/images_name.jpg'
  //   }
}

export async function imagesFavorite(req, res, next) {
  const { imageIds, toBool } = req.body

  updateFavorites(imageIds, toBool)
    .then((updatedImageData) => res.send(updatedImageData))
    .catch((err) => res.status(400).json(error)
    )
}

export async function imagesArchive(req, res, next) {
  const { imageIds, toBool } = req.body

  updateArchived(imageIds, toBool)
    .then((updatedImageData) => res.send(updatedImageData))
    .catch((error) => res.status(400).json(error)
    )
}

export async function getImages(req, res, next) {


  const userId = req.user 

  getImagesModel(userId)
    .then((imagesData) => {
      res.json(imagesData)
    })
    .catch((error) => res.status(400).json(error))

}
