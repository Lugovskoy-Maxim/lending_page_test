import { ButtonProps } from '@/types';
import styles from './button.module.scss';

export default function Button(props: ButtonProps) {
  return (
    <button
      className={`${styles.button} ${props.className ? props.className : ''}`}
      onClick={props.onClick}
    >
      Contact sales
    </button>
  );
}
