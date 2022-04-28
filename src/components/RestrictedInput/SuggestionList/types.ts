export interface ISuggestionListProps {
  suggestions: string[];
  activeSuggestionIndex: number;
  onClick: (index: number) => void;
}