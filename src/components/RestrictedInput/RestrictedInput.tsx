import React, { useEffect, useRef, useState } from 'react';
import SuggestionList from './SuggestionList';
import { IRestrictedInputProps } from './types';

export function RestrictedInput(props: IRestrictedInputProps) {
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>(props.suggestions);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState<number>(0);
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);
  const [input, setInput] = useState<string>("");

  const divElement = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [])

  const handleClickOutside = (e: MouseEvent) => {
    if (divElement.current && !divElement.current.contains(e.target as Node)) {
      setShowSuggestions(false);
    }
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const userInput = e.target.value;

    const unLinked = props.suggestions.filter(
      (suggestion) =>
        suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );

    setInput(userInput);
    setFilteredSuggestions(unLinked);
    setActiveSuggestionIndex(0);
    setShowSuggestions(true);
  };

  const onClick = (index: number) => {
    props.onNewTagAdded(filteredSuggestions[index], false);
  };

  const clear = (): void => {
    setActiveSuggestionIndex(0);
    setShowSuggestions(false);
  }

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      props.onNewTagAdded(filteredSuggestions[activeSuggestionIndex], false);
    }
    if (e.key === 'Tab') {
      e.preventDefault()
      props.onNewTagAdded(filteredSuggestions[activeSuggestionIndex], true);
      setInput('');
      setFilteredSuggestions(props.suggestions);
      clear();
    }
  }

  const onFocus = (): void => {
    setShowSuggestions(true);
  }

  return (<div className='px-4' ref={divElement}>
    <input
      className="w-32 shadow appearance-none border rounded text-gray-700 leading-tight focus:outline-none focus:shadow-outline relative"
      id="tag"
      type="text"
      onChange={onChange}
      onKeyDown={onKeyDown}
      onFocus={onFocus}
      value={input}
    ></input>
    {showSuggestions && filteredSuggestions.length > 0 &&
      <SuggestionList
        suggestions={filteredSuggestions}
        activeSuggestionIndex={activeSuggestionIndex}
        onClick={onClick}></SuggestionList>}
  </div>)
}