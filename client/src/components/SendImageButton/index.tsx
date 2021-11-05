import './styles.css'
import styles from '../styles.module.css'

const SendImageButton = () => {
    return (
        <div>
            <button className={`send-button ${styles.buttonType3}`}>Gönder</button>
        </div>
    )
}

export default SendImageButton
