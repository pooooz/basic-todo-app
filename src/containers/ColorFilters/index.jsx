import React from 'react';

import { availableColors } from 'store/reducers/filtersSlice';
import { StyledHeading } from 'components/generalStyled';
import {
  ColorFieldset,
  ColorFilterInput,
  ColorFilterLabel,
  ColorForm,
} from './styled';

export const ColorFilters = ({ onChange }) => (
  <section>
    <StyledHeading>Filter by Color</StyledHeading>
    <ColorForm>
      <ColorFieldset>
        {availableColors.map((color) => {
          const checked = true;
          const handleChange = () => {
            onChange(color);
          };

          return (
            <ColorFilterLabel
              key={color}
              htmlFor={color}
              isActive={checked}
              color={color}
            >
              <ColorFilterInput
                type="checkbox"
                name={color}
                id={color}
                checked={checked}
                onChange={handleChange}
              />
              {color[0].toUpperCase() + color.slice(1)}
            </ColorFilterLabel>
          );
        })}
      </ColorFieldset>
    </ColorForm>
  </section>
);
