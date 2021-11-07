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
    const [displayError, setDisplayError] = useState({ display: 'none' })

    return (
        <div>
            <button
                onClick={() => {
                    /*
                    images alanını burada ben eklediğim için images.images olarak gönderiyorum.
                    */
                    images.images[0]
                        ? send(images.images)
                        : setDisplayError({ display: 'block' })
                }}
                className={`send-button ${buttons.type3}`}
            >
                Gönder
            </button>
            <p
                style={displayError}
                className="error"
            >
                *Henüz bir resim eklemediniz.
            </p>
        </div>
    )
}

export default SendImageButton
