import { useState } from 'react';
import { ITag } from '../App/types';
import RestrictedInput from '../RestrictedInput';
import Tag from '../Tag';
import { ISectionProps } from './types';

const suggestedTagsPortfolio = ['European', 'Eco-friendly', 'German']
const suggestedTagsCertifications = ['ISO 9001', 'Vegan', 'Organic']

export function Section(props: ISectionProps) {

  const [isInputVisible, setIsInputVisible] = useState<boolean>(false);

  const onTagRemove = (id: number): void => {
    props.onTagRemove(id, props.type);
  }

  const onNewTagClicked = (): void => {
    setIsInputVisible(true);
  }

  const getTagSuggestions = (): string[] => {
    switch (props.type) {
      case 'tags-certificates':
        return suggestedTagsCertifications;
      case 'tags-portfolio':
        return suggestedTagsPortfolio;
      default:
        return [];
    }
  }

  const onTagAdded = (value: string, isInputVisible: boolean): void => {
    const tagType = `supplierBranch-${props.type.split('-')[1]}`
    props.onNewTagAdded(props.type, value, tagType);
    setIsInputVisible(isInputVisible);
  }

  const SectionName = props.type.split('-')[1];
  const tagSuggestions = getTagSuggestions();
  return (
    <div className="container mx-auto px-4 my-4">
      <h3 className="text-left my-2">{SectionName}</h3>
      <div className="flex gap-2">
        {props.tags.map((tag: ITag, index: number) => {
          return <Tag id={tag.id} onRemove={onTagRemove} name={tag.name} key={tag.id} type={tag.type} isReadOnly={index === 0}></Tag>
        })}
        {
          isInputVisible && tagSuggestions.length ? <RestrictedInput onNewTagAdded={onTagAdded} suggestions={tagSuggestions}></RestrictedInput> : <></>
        }
        <p className="px-2 rounded-lg cursor-pointer" onClick={onNewTagClicked}>+ New Tag</p>
      </div>
    </div>
  )
}