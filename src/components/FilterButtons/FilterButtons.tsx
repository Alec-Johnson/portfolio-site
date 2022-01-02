import { useState } from 'react';
import './styles.scss'

type Button = {
  name: string;
  slug: string;
}

type FilterButtonsProps = {
  buttons: Button[],
  setFilter: React.Dispatch<React.SetStateAction<string>>
}

export const FilterButtons = ({ buttons, setFilter }: FilterButtonsProps) => {
  // Set default active button class when first load (defaullt is 'all')
  // When filter button is clicked, set active class to that button
  const [clickedId, setClickedId] = useState(0);

  const handleOnClick = (index: any, button: Button) => {
    setClickedId(index);
    setFilter(button.slug);
  };

  return (
    <>
      {buttons &&
        buttons.map((button, index) => {
          return (
            <button
              key={index}
              onClick={() => handleOnClick(index, button)}
              className={
                index === clickedId ? 'customButton active' : 'customButton'
              }
            >
              {button.name}
            </button>
          );
        })}
    </>
  );
};