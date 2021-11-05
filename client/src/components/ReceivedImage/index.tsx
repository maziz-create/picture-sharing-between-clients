import './styles.css'
import styles from '../styles.module.css'

/*
Socket servere ilk bağlandığımızda alacağımız default image'i App.tsx'den
prop olarak alabilmek ve Typescript'in tip kısıtlamasına da takılmamak için bu Entity'i ürettik. 
*/
interface defaultImage {
    path: string;
}

const ReceivedImage: React.FC<defaultImage> = (defaultImage) => {
    return (
        <div>
            <h2>Alınacak Resimler</h2>
            <div className="received-images">
                <button className={styles.buttonType2}>Bütün Resimleri Sil</button>
                <div className="image-item">
                    <img src={defaultImage.path} />
                </div>
            </div>
        </div>
    )
}

export default ReceivedImage
