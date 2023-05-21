import { useActions } from '@/src/hooks/useActions';
import { useTypedSelector } from '@/src/hooks/useTypedSelector';
import styles from '../../../../styles/Options.module.css';
import '../../../../styles/globals.css'
import { optionsList } from '@/src/components/screen/home/data';
import cn from 'classnames'
import Image from 'next/image';


const Options = () => {
	const selectedOption = useTypedSelector(state => state.taxi.selectedOption)
	const travelTime = useTypedSelector(state => state.taxi.travelTime)
	const { setSelectedOption } = useActions()

	return (
		<div className={styles.container}>
			<div className={styles.list}>
				{optionsList.map((option) => (
					<button key={option._id} onClick={() => travelTime && setSelectedOption(option._id)} style={{ minWidth: 105 }} className={cn(styles.option_item, 'hide-scroll-bar')}>
						<div className={cn(styles.option_item_block, `${option._id === selectedOption ? styles.active_item : ''}`)}>
							<div className={styles.option_info}>
								<Image src={option.img} alt={option.title} width={50} height={50} />
								<div>
									<div className={styles.option_title}>{option.title}</div>
									<div className={styles.option_price}>{travelTime ? `${new Intl.NumberFormat('ru-Ru', { style: 'currency', currency: 'RUB' }).format(travelTime * option.multiplier)}` : ''}</div>
								</div>
							</div>
						</div>
					</button>
				))}
			</div>
		</div>
	)
}

export default Options;