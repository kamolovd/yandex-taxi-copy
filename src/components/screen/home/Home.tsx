import Layout from '../../layout/Layout';
import Map from './Map';
import styles from '../../../../styles/Home.module.css'
import FromInput from './FromInput';
import ToInput from './ToInput';
import Options from './Options';
import OrderButton from './OrderButton';

const Home = () => {
	return (
		<div className='absolute bottom-50 left-50'>
			<Layout title="Order Taxi">
				<Map />

				<div className={styles.btn_block}>
					<FromInput />
					<ToInput />
					<Options />
					<OrderButton />
				</div>

			</Layout>
		</div>
	)
}

export default Home;