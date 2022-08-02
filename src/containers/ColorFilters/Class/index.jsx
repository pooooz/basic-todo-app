import React from 'react';

import { selectColors } from 'store/selectors/filterSelectors';
import { StyledHeading } from 'containers/generalStyled';
import { connect } from 'react-redux';
import {
  ColorFieldset,
  ColorFilterInput,
  ColorFilterLabel,
  ColorForm,
} from '../styled';

const mapStateToProps = (state) => ({
  colors: selectColors(state),
});

class ColorFilters extends React.Component {
  render() {
    const { colors, onChange } = this.props;
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
  }
}

export const ClassColorFilters = connect(mapStateToProps)(ColorFilters);
