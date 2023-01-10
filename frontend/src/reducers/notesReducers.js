import {
    NOTE_LIST_REQUEST,
    NOTE_LIST_SUCCESS,
    NOTE_LIST_FAIL,
    NOTE_CREATE_REQUEST,
    NOTE_CREATE_SUCCESS,
    NOTE_CREATE_FAIL
} from "../constants/notesConstant.js";

export const noteListReducer = (state = { notes: [] }, action) => {
    switch (action.type) {

        case NOTE_LIST_REQUEST:
            return { loading: true }

        case NOTE_LIST_SUCCESS:
            return { loading: false, notes: action.payload }

        case NOTE_LIST_FAIL:
            return { loading: true, error: action.payload }

        default:
            return state;
    }
}

export const noteCreateReducer = (state = { notes: [] }, action) => {
    switch (action.type) {

        case NOTE_CREATE_REQUEST:
            return { loading: true }

        case NOTE_CREATE_SUCCESS:
            return { loading: false, success: true }

        case NOTE_CREATE_FAIL:
            return { loading: true, error: action.payload }

        default:
            return state;
    }
}