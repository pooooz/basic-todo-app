export const StatusFilters = {
  all: 'all',
  active: 'active',
  completed: 'completed',
};

const colors = [
  { color: 'green', isChecked: true },
  { color: 'blue', isChecked: true },
  { color: 'orange', isChecked: true },
  { color: 'purple', isChecked: true },
  { color: 'red', isChecked: true },
];

export const availableColors = colors.map((elem) => elem.color);

const initialState = {
  status: StatusFilters.all,
  colors,
};

export function filtersReducer(state = initialState, action) {
  switch (action.type) {
    case 'filters/statusFilterChanged': {
      return {
        ...state,
        status: action.payload,
      };
    }
    case 'filters/colorFilterChanged': {
      return {
        ...state,
        colors: state.colors.map((elem) =>
          elem.color !== action.payload
            ? elem
            : { ...elem, isChecked: !elem.isChecked }
        ),
      };
    }
    default:
      return state;
  }
}
