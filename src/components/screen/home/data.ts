import economy from '../../../assets/options/1_2882.png';
import comfort from '../../../assets/options/acura_PNG129.png';
import comfortPlus from '../../../assets/options/1663071641_2-gamerwall-pro-p-mashina-na-belom-fone-instagram-2.png';
import premier from '../../../assets/options/avto_camaro-min.png';


interface IList {
	_id: string,
	title: string,
	img: string,
	multiplier: number
}

export const optionsList: IList[] = [
	{
		_id: 'economy',
		title: 'Economy',
		img: economy.src,
		multiplier: 46,
	},
	{
		_id: 'comfort',
		title: 'Comfort',
		img: comfort.src,
		multiplier: 64,
	},
	{
		_id: 'comfort+',
		title: 'Comfort+',
		img: comfortPlus.src,
		multiplier: 72,
	},
	{
		_id: 'premier',
		title: 'Premier',
		img: premier.src,
		multiplier: 196,
	},
]