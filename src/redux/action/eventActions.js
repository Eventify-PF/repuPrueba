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
import axios from "axios";

export const getEvents = () => {
  return async (dispatch) => {
    const { data } = await axios.get("http://localhost:3001/events/");
    return dispatch({ type: GET_EVENTS, payload: data });
  };
};

export const createEvent = (event) => {
  return async (dispatch) => {
    const { data } = await axios.post("http://localhost:3001/events/", event);
    return dispatch({ type: CREATE_EVENT, payload: data });
  };
};

export const fetchEvents = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_EVENT_REQUEST });
    try {
      const { data } = await axios.get("http://localhost:3001/events");
      dispatch({ type: FETCH_EVENT_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: FETCH_EVENT_FAILED,
        payload: error.response.data.error,
      });
    }
  };
};

export const searchEvent = (name) => {
  return async (dispatch) => {
    try {
      dispatch({ type: SEARCH_EVENT_REQUEST });
      const response = await axios.get(
        `http://localhost:3001/events?name=${name}`
      );
      return dispatch({
        type: SEARCH_EVENT_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: SEARCH_EVENT_FAILED,
        payload: error.response.data.error,
      });
    }
  };
};

export const filterEventType = (name) => {
  return {
    type: FILTER_EVENTTYPE,
    payload: name,
  };
};

export const filterEventDate = (name) => {
  return {
    type: FILTER_EVENT_DATE,
    payload: name,
  };
};

export const setCurrentPage = (page) => {
  return {
    type: SET_CURRENT_PAGE,
    payload: page,
  };
};
