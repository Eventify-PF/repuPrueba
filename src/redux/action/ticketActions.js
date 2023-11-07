import { CREATE_TICKET } from "../action-type/ticketConstants";
import axios from "axios";

export const createTicket = (ticket) => {
    return async (dispatch) => {
      const { data } = await axios.post("http://localhost:3001/events/ticket", ticket);
      return dispatch({ type: CREATE_TICKET, payload: data });
    };
  };