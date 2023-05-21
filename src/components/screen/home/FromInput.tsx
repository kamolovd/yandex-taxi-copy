'use client'
import { Coords } from 'google-map-react';
import InputPlaces from '../../ui/InputPlaces';
import { useActions } from '@/src/hooks/useActions';

const FromInput = () => {
	const { setFrom, setTo } = useActions()

	const onSuccess = (address: string, location: Coords) => {
		setFrom({ location, description: address })
		setTo('')
	}

	return (
		<InputPlaces onSuccess={onSuccess} type="from" />
	)
}

export default FromInput;