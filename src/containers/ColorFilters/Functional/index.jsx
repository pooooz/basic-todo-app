import React from 'react';
import { useSelector } from 'react-redux';

import { StyledHeading } from 'containers/generalStyled';
import { selectColors } from 'store/selectors/filterSelectors';
import {
  ColorFieldset,
  ColorFilterInput,
  ColorFilterLabel,
  ColorForm,
} from '../styled';

export const ColorFilters = ({ onChange }) => {
  const colors = useSelector(selectColors);

  return (
    <section>
      <StyledHeading>Filter by Color</StyledHeading>
      <ColorForm>
        <ColorFieldset>
          {colors.map((elem) => {
            const handleChange = () => {
              onChange(elem.color);
            };

            return (
              <ColorFilterLabel
                key={elem.color}
                htmlFor={elem.color}
                isActive={elem.isChecked}
                color={elem.color}
              >
                <ColorFilterInput
                  type="checkbox"
                  name={elem.color}
                  id={elem.color}
                  checked={elem.isChecked}
                  onChange={handleChange}
                />
                {elem.color[0].toUpperCase() + elem.color.slice(1)}
              </ColorFilterLabel>
            );
          })}
        </ColorFieldset>
      </ColorForm>
    </section>
  );
};
