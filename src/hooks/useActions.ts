import { useDispatch } from 'react-redux'
import { taxiSlice } from '../store/slice'
import { bindActionCreators } from 'redux'

export const useActions = () => {
	const dispatch = useDispatch()

	return bindActionCreators(taxiSlice.actions, dispatch)
}