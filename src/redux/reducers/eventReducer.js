import {
  FETCH_EVENT_REQUEST,
  FETCH_EVENT_SUCCESS,
  FETCH_EVENT_FAILED,
  SEARCH_EVENT_REQUEST,
  SEARCH_EVENT_SUCCESS,
  SEARCH_EVENT_FAILED,
  FILTER_EVENTTYPE,
  FILTER_EVENT_DATE,
  CREATE_EVENT,
  GET_EVENTS,
  SET_CURRENT_PAGE,
} from "../action-type/eventConstans";

const initialState = {
  events: [],
  eventsBackup: [],
  eventsFilter: [],
  doubleFilter: [],
  filteredType: [],
  pagination: {
    currentPage: 1,
  },
};

const eventReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_EVENTS:
      return {
        ...state,
        events: action.payload,
        eventsFilter: action.payload,
      };
    case CREATE_EVENT:
      return {
        ...state,
        events: [...state.events, action.payload],
      };
    case FETCH_EVENT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_EVENT_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        events: action.payload,
        eventsBackup: action.payload,
      };
    case FETCH_EVENT_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case SEARCH_EVENT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SEARCH_EVENT_SUCCESS:
      return {
        ...state,
        loading: false,
        events: action.payload,
        filteredEventDates: action.payload,
      };
    case SEARCH_EVENT_FAILED:
      return {
        ...state,
        loading: true,
        error: action.payload,
      };
    case FILTER_EVENT_DATE:
     
  
      let filteredEventsDate;
  
      if (!action.payload) {
        filteredEventsDate = state.eventsBackup;
      } else if (state.filteredType.length === 0) {
        filteredEventsDate = state.eventsBackup.filter((event) => event.date === action.payload);
      } else {
        filteredEventsDate = state.filteredType.filter((event) => event.date === action.payload);
      }
  
      return {
        ...state,
        events: filteredEventsDate,
        doubleFilter: filteredEventsDate,
      };
    case FILTER_EVENTTYPE:
       
      const typeId = parseInt(action.payload);
  
      if (action.payload === "all") {
        return {
          ...state,
          events: state.eventsBackup,
        };
      } else {
        let filterEvents;
  
        if (state.doubleFilter.length > 0) {
          filterEvents = state.doubleFilter.filter((event) => event.EventTypeId === typeId);
        } else {
          filterEvents = state.eventsBackup.filter((event) => event.EventTypeId === typeId);
        }
  
        if (filterEvents.length === 0) {
          alert("No hay eventos con esas especificaciones");
          return state;
        }
  
        return {
          ...state,
          events: filterEvents,
          filteredType: filterEvents,
        };
      }
    case SET_CURRENT_PAGE:
      return {
        ...state,
        pagination: {
          ...state.pagination,
          currentPage: action.payload,
        },
      };
    default:
      return state;
  }
};

export default eventReducer;

