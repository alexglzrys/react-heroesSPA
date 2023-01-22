import { types } from "../types/types";

export const authReducer = (state, action) => {
    switch (action.type) {
        // Estado para usuarios autenticados
        case types.login:    
            return {
                ...state,
                logged: true,
                name: action.payload
            };
        // Estado para usuarios invitados
        case types.logout:
            return {
                logged: false
            };
        default:
            return state;
    }
}