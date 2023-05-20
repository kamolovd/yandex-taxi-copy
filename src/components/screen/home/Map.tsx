'use client'
import GoogleMapReact from 'google-map-react';
import styles from '../../../../styles/Map.module.css';
const Map = () => {
	return (
		<div className={styles.map_container}>
			<GoogleMapReact
				bootstrapURLKeys={{ key: String(process.env.MAP_KEY) }}
				defaultCenter={{
					lat: 50.123,
					lng: 8.21312
				}}
				defaultZoom={13}

			/>
		</div>
	)
}

export default Map;