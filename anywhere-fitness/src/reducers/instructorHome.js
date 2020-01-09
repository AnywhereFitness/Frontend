import {
    GETALLCLASSES_BYINSTRUCTOR_START,
    GETALLCLASSES_BYINSTRUCTOR_SUCCESS,
    GETALLCLASSES_BYINSTRUCTOR_FAILURE,
    GETCLASS_BYID_START,
    GETCLASS_BYID_SUCCESS,
    GETCLASS_BYID_FAILURE,
    CREATE_CLASS_START,
    CREATE_CLASS_SUCCESS,
    CREATE_CLASS_FAILURE,
    UPDATE_INSTRUCTOR_CLASS_START,
    UPDATE_INSTRUCTOR_CLASS_SUCCESS,
    UPDATE_INSTRUCTOR_CLASS_FAILURE,
    DELETE_INSTRUCTOR_CLASS_START,
    DELETE_INSTRUCTOR_CLASS_SUCESS,
    DELETE_INSTRUCTOR_CLASS_FAILURE
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
        case GETCLASS_BYID_START:
            return {
                ...state,
                error: "",
                gettingClassById: true
            }
        case GETCLASS_BYID_SUCCESS:
            return {
                ...state,
                singleClass: action.payload,
                gettingClassById: false
            }
        case GETCLASS_BYID_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        case CREATE_CLASS_START:
            return {
                ...state,
                creatingClass: true,
                error: ""
            }
        case CREATE_CLASS_SUCCESS:
            return {
                ...state,
                singleClass: action.payload,
                error: ""
            }
        case CREATE_CLASS_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        case UPDATE_INSTRUCTOR_CLASS_START:
            return {
                ...state,
                error: "",
                updatingClassById: true
            }
        case UPDATE_INSTRUCTOR_CLASS_SUCCESS:
            return {
                ...state,
                updatingClassById: false,
                singleClass: action.payload
            }
        case UPDATE_INSTRUCTOR_CLASS_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        case DELETE_INSTRUCTOR_CLASS_START:
            return {
                ...state,
                error: "",
                deleteingClassById: true
            }
        case DELETE_INSTRUCTOR_CLASS_SUCESS:
            return {
                ...state,
                deleteingClassById: false,
                singleClass: action.payload
            }
        case DELETE_INSTRUCTOR_CLASS_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}