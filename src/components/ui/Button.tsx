import { FC, ButtonHTMLAttributes } from 'react';
import cn from 'classnames';
import styles from '../../../styles/Button.module.css';

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
	title: string;
	color: string;
	bgColor: string;
	cb: () => void;
	isDisabled?: boolean;
}

const Button: FC<IButton> = (props) => {
	const { title, bgColor, color, cb, isDisabled, ...left } = props;
	return (
		<button {...left} className={cn(styles.button, `${isDisabled ? styles.isDisabled : ''}`)} style={{ backgroundColor: isDisabled ? 'rgb(229,231, 235)' : bgColor, color }} onClick={cb} disabled={isDisabled}>
			{title}
		</button>
	)
}

export default Button;