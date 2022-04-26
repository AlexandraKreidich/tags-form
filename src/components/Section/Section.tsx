import { ITag } from '../App/types';
import Tag from '../Tag';
import { ISectionProps } from './types';

export function Section(props: ISectionProps) {

  const onTagRemove = (id: number): void => {
    props.onTagRemove(id, props.type);
  }

  const SectionName = props.type.split('-')[1];
  return (
    <div className="container mx-auto px-4 my-4">
      <h3 className="text-left my-2">{SectionName}</h3>
      <div className="flex gap-2">
        {props.tags.map((tag: ITag) => {
          return <Tag id={tag.id} onRemove={onTagRemove} name={tag.name} key={tag.id} type={tag.type} isReadOnly={tag.id === 1}></Tag>
        })}
      </div>
    </div>
  )
}