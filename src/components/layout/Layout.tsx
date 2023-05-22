'use client'

import Head from 'next/head';
import Script from 'next/script';
import { FC, ReactNode, useEffect, useState } from 'react';
import FavIcon from '../../assets/images/favicon.ico';
import Loader from '../ui/Loader';


interface ILayout {
	title: string;
	children: ReactNode;
}


const Layout: FC<ILayout> = ({ children, title }) => {
	const [isLoading, setIsLoading] = useState<boolean>(false)

	useEffect(() => {
		setIsLoading(true)

		const timeout = setTimeout(() => {
			setIsLoading(false)
		}, 3000)

		return () => {
			clearTimeout(timeout)
		}
	}, [])

	return (
		<div>
			<Head>
				<title>{title} | Yandex Taxi</title>
				<meta name="description" content='Taxi App' />
				<link rel="shortcut icon" href={FavIcon.src} type='image/png' />
			</Head>

			<Script strategy='beforeInteractive' src={`https://maps.googleapis.com/maps/api/js?key=${process.env.MAP_KEY}&libraries=places`} />

			<div style={{ minHeight: '100vh' }} >{isLoading ? <Loader /> : children}</div>
		</div>
	)
}

export default Layout;