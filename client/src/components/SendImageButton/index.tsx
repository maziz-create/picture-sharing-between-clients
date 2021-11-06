import './styles.css'
import styles from '../styles.module.css'

//socket methods
import { send } from '../../socketApi'

//alacağım propun tipini belirtmek için.
import { ImageListType } from "react-images-uploading";

interface Images {
    images: ImageListType,
}

const SendImageButton: React.FC<Images> = (images) => {
    return (
        <div>
            <button
                onClick={() => {
                    /*
                    images alanını burada ben eklediğim için images.images olarak gönderiyorum.
                    gönderilen data ImageListType türünde olduğu için gönderilen data
                    aldığım prop'un images.images kısmına eklendi.
                    */
                    send(images.images);
                }}
                className={`send-button ${styles.buttonType3}`}
            >
                Gönder
            </button>
        </div>
    )
}

export default SendImageButton
