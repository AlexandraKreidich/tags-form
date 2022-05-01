import { useState } from 'react';
import { IInputProps } from './types';

export function Input(props: IInputProps) {
  const [input, setInput] = useState<string>("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      props.onNewTagAdded(input, false);
    }
    if (e.key === 'Tab') {
      e.preventDefault();
      props.onNewTagAdded(input, true);
      setInput('');
    }
  }

  return (
    <div className='px-4'>
      <input
        className="w-32 shadow appearance-none border rounded text-gray-700 leading-tight focus:outline-none focus:shadow-outline relative"
        id="tag"
        type="text"
        onChange={onChange}
        onKeyDown={onKeyDown}
        value={input}
      ></input>
    </div>
  )
}