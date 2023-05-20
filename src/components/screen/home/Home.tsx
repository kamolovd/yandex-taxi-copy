import Layout from '../../layout/Layout';
import Map from './Map';

const Home = () => {
	return (
		<div className='absolute bottom-50 left-50'>
			<Layout title="Order Taxi">
				<Map />
			</Layout>
		</div>
	)
}

export default Home;