import React, { useState } from 'react';
import Header from '../Header';
import Section from '../Section';
import './App.css';
import { ISupplierData, ITag, SupplierKeys, TAG_TYPE } from './types';

const defaultSupplier: ISupplierData = {
  'name': 'Volkswagenzentrum Berlin GmbH',
  'tags-general': [{
    'id': 1,
    'name': 'volkswagen',
    'type': 'supplierBranch-general'
  },
  {
    'id': 2,
    'name': 'cars',
    'type': 'supplierBranch-general'
  }],
  'tags-certificates': [{
    'id': 1,
    'name': 'ISO 9001',
    'type': 'supplierBranch-certificates'
  }],
  'tags-portfolio': [],
}

function App() {

  const [supplier, setSupplier] = useState<ISupplierData>(defaultSupplier);

  const onTagRemove = (id: number, sectionName: string): void => {
    const tags = ((supplier[sectionName as SupplierKeys]) as ITag[]).filter(tag => tag.id !== id);

    setSupplier({
      ...supplier,
      [sectionName]: tags
    });
  }

  const onNewTagAdded = (sectionName: string, value: string, tagType: TAG_TYPE): void => {
    console.log('onNewTagAdded', value);
    setSupplier({
      ...supplier,
      [sectionName]: [...(supplier[sectionName as SupplierKeys] as ITag[]), {
        id: new Date().getTime(),
        name: value,
        type: tagType
      }]
    });
  }

  return (
    <div className="container mx-auto px-4">
      <Header title={supplier.name}></Header>
      {Object.keys(supplier).map((key: string) => {
        if (key === 'name') return null;
        return <Section
          onNewTagAdded={onNewTagAdded}
          onTagRemove={onTagRemove}
          type={key}
          tags={(supplier[key as SupplierKeys] as ITag[])}
          key={key}></Section>
      })}
    </div>
  );
}

export default App;
