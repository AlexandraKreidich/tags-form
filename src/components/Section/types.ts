import { TAG_TYPE, ITag } from './../App/types';

export interface ISectionProps {
  type: string;
  tags: ITag[];
  onTagRemove: (id: number, sectionName: string) => void;
}