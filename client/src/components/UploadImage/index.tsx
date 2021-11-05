import { useState } from 'react'
import styles from '../styles.module.css'

//components
import SendImageButton from '../SendImageButton'

import ImageUploading, { ImageListType } from "react-images-uploading";

const UploadImage = () => {
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
                            className={styles.buttonType1}
                            style={isDragging ? { backgroundColor: "black", color: "#fff" } : undefined}
                            onClick={onImageUpload}
                            {...dragProps}
                        >
                            Tıkla veya Sürükle
                        </button>
                        <button
                            className={styles.buttonType2}
                            onClick={onImageRemoveAll}
                        >
                            Bütün Resimleri Sil
                        </button>
                        {imageList.map((image, index) => (
                            <div key={index} className="image-item">
                                <img src={image.dataURL} alt="" width="100" />
                                <div className="image-item__btn-wrapper">
                                    <button
                                        className={styles.buttonType3}
                                        onClick={() => onImageUpdate(index)}
                                    >
                                        Güncelle
                                    </button>
                                    <button
                                        className={styles.buttonType3}
                                        onClick={() => onImageRemove(index)}
                                    >
                                        Sil
                                    </button>
                                </div>
                            </div>
                        ))}
                        <SendImageButton />
                    </div>
                )}
            </ImageUploading>
        </div>
    )
}

export default UploadImage
