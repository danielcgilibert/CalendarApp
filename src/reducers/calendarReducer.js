import moment from "moment";
import { types } from "../types/types";

const initialState = {
  events: [
    {
      title: "title fin",
      start: moment().toDate(),
      end: moment().add(2, "hour").toDate(),
      bgColor: "#fafaff",
      notes: "Aprender React",
      user: {
        _id: "123",
        name: "Daniel",
      },
    },
  ],
  activeEvent: null,
};

export const calendarReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.eventSetActive:
      return {
        ...state,
        activeEvent: action.payload,
      };

    case types.eventAddNew:
      return {
        ...state,

        events: [...state.events, action.payload],
      };

    case types.eventClearActiveEvent:
      return {
        ...state,
        activeEvent: null,
      };

    default:
      return state;
  }
};
