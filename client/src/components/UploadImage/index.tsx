import React, { useState } from 'react'
import buttons from '../buttons.module.css'

//components
import SendImageButton from '../SendImageButton'

import ImageUploading, { ImageListType } from "react-images-uploading";

/*
Socket servere ilk bağlandığımızda alacağımız default image'i App.tsx'den
prop olarak alabilmek ve Typescript'in tip kısıtlamasına da takılmamak için bu Entity'i ürettik. 
*/
interface DefaultImage {
    path: string;
}

const UploadImage: React.FC<DefaultImage> = (defaultImage) => {
    const [images, setImages] = useState([]);
    const maxNumber = 69;

    const onChange = (
        imageList: ImageListType,
    ) => {
        setImages(imageList as never[]);
    };

    return (
        <div>
            <h2>Gönderilecek Resimler</h2>
            <ImageUploading
                multiple
                value={images}
                onChange={onChange}
                maxNumber={maxNumber}
            >
                {({
                    imageList,
                    onImageUpload,
                    onImageRemoveAll,
                    onImageUpdate,
                    onImageRemove,
                    isDragging,
                    dragProps
                }) => (
                    <div className="upload__image-wrapper">
                        <button
                            className={buttons.type1}
                            style={isDragging ? { backgroundColor: "black", color: "#fff" } : undefined}
                            onClick={onImageUpload}
                            {...dragProps}
                        >
                            Tıkla veya Sürükle
                        </button>
                        <button
                            className={buttons.type2}
                            onClick={onImageRemoveAll}
                        >
                            Bütün Resimleri Sil
                        </button>
                        {
                            !imageList[0]
                                ? <div className="image-item"><img src={defaultImage.path} alt="default" /></div>
                                : <div></div>
                        }
                        {imageList.map((image, index) => (
                            <div key={index} className="image-item">
                                <img src={image.dataURL} alt="" width="100" />
                                <div className="image-item__btn-wrapper">
                                    <button
                                        className={buttons.type3}
                                        onClick={() => onImageUpdate(index)}
                                    >
                                        Güncelle
                                    </button>
                                    <button
                                        className={buttons.type3}
                                        onClick={() => onImageRemove(index)}
                                    >
                                        Sil
                                    </button>
                                </div>
                            </div>
                        ))}
                        <SendImageButton images={images} />
                    </div>
                )}
            </ImageUploading>
        </div>
    )
}

export default UploadImage
