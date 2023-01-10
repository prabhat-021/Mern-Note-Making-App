import { NOTE_LIST_REQUEST, NOTE_LIST_SUCCESS, NOTE_LIST_FAIL } from "../constants/notesConstant.js";
import axios from 'axios';

export const listNotes = () => async (dispatch, getState) => {

    try {
        dispatch({ type: NOTE_LIST_REQUEST });

        const { userLogin: { userInfo } } = getState();
        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            },
        };

        const { data } = await axios.get("/api/notes", config);

        dispatch({ type: NOTE_LIST_SUCCESS, payload: data });

    } catch (error) {
        dispatch({ type: NOTE_LIST_FAIL, payload: error.response && error.response.data.message ? error.response.data.message : error.message, });
    }
}