'use client'
import Home from '@/src/components/screen/home/Home';
import '../styles/globals.css'
import { Provider } from 'react-redux';
import { store } from '@/src/store/store';


export default function HomePage() {
	return <Provider store={store}> <Home /></Provider>
}
