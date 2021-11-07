import { useState } from 'react'

import './styles.css'
import buttons from '../buttons.module.css'

//socket methods
import { send } from '../../socketApi'

//alacağım propun tipini belirtmek için.
import { ImageListType } from "react-images-uploading";

interface Images {
    images: ImageListType,
}

const SendImageButton: React.FC<Images> = (images) => {
    const [styleError, setStyleError] = useState({ display: 'none' })

    return (
        <div>
            <button
                onClick={() => {
                    /*
                    images alanını burada ben eklediğim için images.images olarak gönderiyorum.
                    */
                    images.images[0]
                        ? send(images.images)
                        : setStyleError({ display: 'block' })
                }}
                className={`send-button ${buttons.type3}`}
            >
                Gönder
            </button>
            <p
                style={styleError}
                className="error"
            >
                *Henüz bir resim eklemediniz.
            </p>
        </div>
    )
}

export default SendImageButton
