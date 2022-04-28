import { ISuggestionListProps } from './types';
import styles from './SuggestionList.module.css';

export function SuggestionList(props: ISuggestionListProps) {

  return <ul className={`w-32 absolute border-solid border-2 border-t-[0] ${styles.suggestions}`}>
    {props.suggestions.map((suggestion, index) => {
      let className;
      if (index === props.activeSuggestionIndex) {
        className = styles.suggestionActive;
      }
      return (
        <li className={`${className} px-1 cursor-pointer`} key={suggestion} onClick={(e) => props.onClick(index)}>
          {suggestion}
        </li>
      );
    })}
  </ul>
}