export interface ITagProps {
  id: number;
  name: string;
  isReadOnly: boolean;
  type: string;
  onRemove: (id: number) => void;
}