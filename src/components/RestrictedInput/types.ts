export interface IRestrictedInputProps {
  suggestions: string[];
  onNewTagAdded: (tagName: string, closeInput: boolean) => void;
}