import {authAPI} from "../../api/auth-api";
import {Dispatch} from "redux";

export const LOADING = 'authReducer/SET-LOADING' as const;
export const ERROR = 'authReducer/SET-ERROR' as const;
export const SUCCESS = 'authReducer/SET-SUCCESS' as const;


type InitialStateType = {
    error: string
    loading: boolean
    success:boolean
}

export const initialState: InitialStateType = {
    loading: false,
    error: '',
    success:false
}

type PropertiesType<ActionType> = ActionType extends { [key: string]: infer ResponseType } ? ResponseType : never;
type ActionsType = ReturnType<PropertiesType<typeof registrationActions>>


export const registrationReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {

        case LOADING: {
            return ({
                ...state,
                loading: action.payload.loading
            })
        }
        case ERROR: {
            return ({
                ...state,
                error: action.payload.error
            })
        }
        case SUCCESS:
            return ({
                ...state,
                success:action.payload.success
            })
        default:
            return state
    }
}


export const registrationActions = {
    errorAC: (error: string) => {
        return ({
            type: ERROR,
            payload: {
                error
            }
        })
    },
    loadingAC: (loading: boolean) => {
        return ({
            type: LOADING,
            payload: {
                loading
            }
        })
    },
    successAC: (success: boolean) => {
        return ({
            type: SUCCESS,
            payload: {
                success
            }
        })
    }
}

export const RegistrationTC = (email: string, password: string) => async (dispatch: Dispatch) => {
    dispatch(registrationActions.loadingAC(true))
    try {
        const res = await authAPI.registration(email, password)
        dispatch(registrationActions.successAC(true))
    } catch (e) {
        dispatch(registrationActions.errorAC('error'))
    } finally {
        dispatch(registrationActions.loadingAC(false))
    }

}
