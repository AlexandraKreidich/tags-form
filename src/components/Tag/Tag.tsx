import { ITagProps } from './types';
import styles from './Tag.module.css';

export function Tag(props: ITagProps) {
  return (
    <div className={`pl-4 pr-5 rounded-lg cursor-pointer ${styles.tagContainer}`}>
      <p>{props.name}</p>
      {!props.isReadOnly && <div onClick={() => props.onRemove(props.id)} className={`${styles.close}`}></div>}
    </div>
  )
}