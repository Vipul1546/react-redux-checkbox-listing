import * as actions from "../actions/actionType";

const initialState = [
  {
    id: 0,
    name: "Aasiya Jayavant",
    isSelected: true,
    parent: "Portugal",
  },
  {
    id: 1,
    name: "Luvleen Lawrence",
    isSelected: false,
    parent: "Portugal",
  },
  {
    id: 3,
    name: "Ray Mibourne",
    isSelected: false,
    parent: "Portugal",
  },
  {
    id: 4,
    name: "Cayla Brister",
    isSelected: true,
    parent: "Portugal",
  },
  {
    id: 5,
    name: "Devaada Nandi",
    isSelected: true,
    parent: "Nicaragua",
  },
  {
    id: 6,
    name: "Obasey Chidy",
    isSelected: false,
    parent: "Nicaragua",
  },
  {
    id: 7,
    name: "Ray Mibourne",
    isSelected: true,
    parent: "Nicaragua",
  },
  {
    id: 8,
    name: "Aron Almaz",
    isSelected: true,
    parent: "Nicaragua",
  },
];

const updateList = (state = initialState, action) => {
  switch (action.type) {
    case actions.ELEMENT_CHECKED:
      return state.map((element) =>
        element.id !== action.payload.id
          ? element
          : { ...element, isSelected: !element.isSelected }
      );

    default:
      return state;
  }
};

export default updateList;
