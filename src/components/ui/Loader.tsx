import Image from 'next/image';
import preloaderImage from '../../assets/Logo_yandex_taxi_app.png'
import styles from '../../../styles/Loader.module.css'

const Loader = () => {
	return (
		<div className={styles.container}>
			<Image src={preloaderImage} alt="preloader" priority={true} />
		</div>
	)
}

export default Loader;