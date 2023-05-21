'use client'
import { Coords } from 'google-map-react';
import InputPlaces from '../../ui/InputPlaces';
import { useActions } from '@/src/hooks/useActions';

const ToInput = () => {
	const { setTo } = useActions()

	const onSuccess = (address: string, location: Coords) => {
		setTo({ location, description: address })
	}

	return (
		<InputPlaces onSuccess={onSuccess} type="to" />
	)
}

export default ToInput;