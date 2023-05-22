'use client'
import { useState, useEffect } from 'react';
import GoogleMapReact, { Coords } from 'google-map-react';
import styles from '../../../../styles/Map.module.css';
import { useTypedSelector } from '@/src/hooks/useTypedSelector';
import { useActions } from '@/src/hooks/useActions';
import { optionsList } from './data';

interface IMAP {
	map: google.maps.Map,
	maps: any,
}

const Map = () => {
	const [MAP, setMAP] = useState<IMAP>({} as IMAP)
	const [isExistRoute, setIsExistRoute] = useState(false)
	const from = useTypedSelector(state => state.taxi.from)
	const to = useTypedSelector(state => state.taxi.to)
	const { setTravelTime, setSelectedOption } = useActions()

	const renderWay = () => {
		const { map, maps } = MAP

		if (typeof maps.DirectionsRenderer === 'function') {
			const directionsRenderer: google.maps.DirectionsRenderer = new maps.DirectionsRenderer()
			const directionsService: google.maps.DirectionsService = new maps.DirectionsService()

			directionsService.route({
				origin: from.location,
				destination: to.location,
				travelMode: google.maps.TravelMode.DRIVING
			}).then(res => {
				directionsRenderer.setDirections(res)

				const durationSec = res.routes[0].legs[0].duration?.value

				if (durationSec) {
					setTravelTime(Math.ceil(durationSec / 60))
					setSelectedOption(optionsList[0]._id)
				}

			}).catch(e => alert(e))

			directionsRenderer.setOptions({
				markerOptions: {
					clickable: false,
				}
			})

			directionsRenderer.setMap(map)

		}
	}

	useEffect(() => {
		if (from.location?.lat && to.location?.lat && MAP?.map && MAP?.maps && !isExistRoute) {
			renderWay()
		}
	}, [from, to, MAP?.map, MAP?.maps, isExistRoute])

	return (
		<div className={styles.map_container}>
			<GoogleMapReact
				bootstrapURLKeys={{ key: String(process.env.MAP_KEY) }}
				defaultCenter={{
					lat: 50.123,
					lng: 8.21312
				}}
				defaultZoom={13}
				options={{
					zoomControl: false,
				}}
				center={from?.location?.lat ? {
					lat: from?.location?.lat,
					lng: from?.location?.lng
				} : undefined}
				yesIWantToUseGoogleMapApiInternals
				onGoogleApiLoaded={setMAP}
			/>
		</div>
	)
}

export default Map;