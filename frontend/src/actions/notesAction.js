import {
    NOTE_LIST_REQUEST,
    NOTE_LIST_SUCCESS,
    NOTE_LIST_FAIL,
    NOTE_CREATE_REQUEST,
    NOTE_CREATE_SUCCESS,
    NOTE_CREATE_FAIL,
    NOTE_UPDATE_FAIL,
    NOTE_UPDATE_REQUEST,
    NOTE_UPDATE_SUCCESS
} from "../constants/notesConstant.js";
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

export const createNotes = (title, category, content) => async (dispatch, getState) => {

    try {
        dispatch({ type: NOTE_CREATE_REQUEST });

        const { userLogin: { userInfo } } = getState();
        const config = {
            headers: {
                "Content-type": "application/json",
                Authorization: `Bearer ${userInfo.token}`
            },
        };

        const { data } = await axios.post("/api/notes/create", { title, content, category }, config);

        dispatch({ type: NOTE_CREATE_SUCCESS, payload: data });

    } catch (error) {

        dispatch({ type: NOTE_CREATE_FAIL, payload: error.response && error.response.data.message ? error.response.data.message : error.message, });
    }
}

export const updateNotes = (id, title, content, category) => async (dispatch, getState) => {

    try {
        dispatch({ type: NOTE_UPDATE_REQUEST });

        const { userLogin: { userInfo } } = getState();
        const config = {
            headers: {
                "Content-type": "application/json",
                Authorization: `Bearer ${userInfo.token}`
            },
        };

        const { data } = await axios.put(`/api/notes/${id}`, { title, content, category }, config);

        dispatch({ type: NOTE_UPDATE_SUCCESS, payload: data });

    } catch (error) {

        dispatch({ type: NOTE_UPDATE_FAIL, payload: error.response && error.response.data.message ? error.response.data.message : error.message, });
    }
}