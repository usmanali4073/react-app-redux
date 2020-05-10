import { CREATE_COURSE } from "../reduxconst/actionConst";

export default function courseReducer(state = [], action) {
  switch (action) {
    case CREATE_COURSE:
      return [...state, { ...action.course }];
    default:
      return state;
  }
}
