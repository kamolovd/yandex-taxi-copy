'use client'
import { FC, useState, useRef, useEffect } from 'react'
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import { FiSearch } from 'react-icons/fi'
import styles from '../../../styles/InputPlaces.module.css';
import cn from 'classnames';
import { Coords } from 'google-map-react';
import { useTypedSelector } from '@/src/hooks/useTypedSelector';

interface IInputPlcaes {
	onSuccess?: (address: string, location: Coords) => void;
	type: 'from' | 'to';
}

const InputPlaces: FC<IInputPlcaes> = ({ onSuccess, type = 'from' }) => {
	const [address, setAddress] = useState<string>("")
	const inputRef = useRef<HTMLInputElement>(null)
	const travelTime = useTypedSelector(state => state.taxi.travelTime);

	const handleSelect = (address: string) => {
		geocodeByAddress(address).then(results => getLatLng(results[0])).then(location => {
			onSuccess && onSuccess(address, location)
			setAddress(address)
		}).catch(e => console.log(e))
	}

	const setFocus = () => inputRef?.current?.focus();


	const isFrom = type === "from";

	useEffect(() => {
		if (isFrom) setFocus()
		setFocus()
	}, [isFrom])

	return (
		<PlacesAutocomplete value={address} onChange={setAddress} onSelect={handleSelect} onError={err => console.log('Error', err)}>
			{
				({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
					<div className={cn(`${styles.container}`, `${isFrom && styles.isFrom_margin}`)}>
						<div className={styles.input} style={suggestions.length ? {
							borderBottomLeftRadius: 0,
							borderBottomRightRadius: 0,
						} : {}} onClick={setFocus}>
							<FiSearch color={isFrom ? '#ffbc00' : '#615f5d'} className={styles.input_icon} size={26} />
							<input className={styles.inp} {...getInputProps({
								placeholder: isFrom ? 'Where from?' : 'Where to?',
								ref: inputRef
							})} />
							{!isFrom && <div className={styles.road_duration}>{travelTime ? `${travelTime} min. (${Math.ceil(travelTime / 60)} h.)` : `-min.`}</div>}
						</div>

						<div className={cn(styles.input_menu_list, `${suggestions.length || loading ? styles.check_suggestions : ''}`)}>
							{suggestions?.map((suggestions, idx) => {
								return <div key={idx} {...getSuggestionItemProps(suggestions, {
									className: cn(styles.list, `${suggestions ? styles.suggestions_active : styles.suggestions_not_active}`)
								})}>
									<span>{suggestions?.description}</span>
								</div>
							})}
						</div>

					</div>
				)
			}
		</PlacesAutocomplete >
	)
}

export default InputPlaces;