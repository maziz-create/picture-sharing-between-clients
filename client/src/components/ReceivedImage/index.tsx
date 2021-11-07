import { useState, useEffect } from 'react'

import './styles.css'
import styles from '../styles.module.css'

//socket methods
import { receiveImage } from '../../socketApi'

//socketten gelecek olan imageList'in tipini belirtmek için.
import { ImageListType } from "react-images-uploading";

/*
Socket servere ilk bağlandığımızda alacağımız default image'i App.tsx'den
prop olarak alabilmek ve Typescript'in tip kısıtlamasına da takılmamak için bu Entity'i ürettik. 
*/
interface defaultImage {
    path: string;
}

const ReceivedImage: React.FC<defaultImage> = (defaultImage) => {
    const [imageList, setImageList] = useState<ImageListType>([]);

    useEffect(() => {
        receiveImage((imageListFromSocket: ImageListType) => {
            setImageList(imageListFromSocket);
        });
    }, [])

    return (
        <div>
            <h2>Alınacak Resimler</h2>
            <div className="received-images">
                <button className={styles.buttonType2}>Bütün Resimleri Sil</button>
                {
                    !imageList[0]
                        ? <div className="image-item"><img src={defaultImage.path} alt="default" /></div>
                        : <div></div>
                }

                {
                    imageList[0] &&
                    imageList.map((image, index) => (
                        <div key={index} className="image-item">
                            <img src={image.dataURL} alt="" width="100" />
                        </div>
                    ))}
            </div>
        </div>
    )
}

export default ReceivedImage
