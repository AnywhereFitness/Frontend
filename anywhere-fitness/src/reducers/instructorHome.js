import {
    GETALLCLASSES_BYINSTRUCTOR_START,
    GETALLCLASSES_BYINSTRUCTOR_SUCCESS,
    GETALLCLASSES_BYINSTRUCTOR_FAILURE,
} from '../actions';

const initialState = {
    instructorClasses: [],
    singleClass: "",
    creatingClass: false,
    gettingClassesByInstructor: false,
    gettingClassById: false,
    updatingClassById: false,
    deleteingClassById: false,
    error: ""
}

export const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case GETALLCLASSES_BYINSTRUCTOR_START:
            return {
                ...state,
                error: "",
                gettingClassesByInstructor: true
            }
        case GETALLCLASSES_BYINSTRUCTOR_SUCCESS:
            return {
                ...state,
                instructorClasses: action.payload,
                gettingClassesByInstructor: false
            }
        case GETALLCLASSES_BYINSTRUCTOR_FAILURE:
            return {
                ...state,
                error: action.payload,
                gettingClassesByInstructor: false
            }
        default:
            return state;
    }
}