import {Dispatch} from "redux";
import {authAPI} from "../../api/auth-api";


export const LOGIN_FLOW = 'authReducer/SET-LOGIN' as const;
export const LOADING = 'authReducer/SET-LOADING' as const;
export const ERROR = 'authReducer/SET-ERROR' as const;


type InitialStateType = {
    isLoggedIn: boolean
    loading: boolean
    error: string
}

export const initialState: InitialStateType = {
    isLoggedIn: false,
    loading: false,
    error: '',
}

type PropertiesType<ActionType> = ActionType extends { [key: string]: infer ResponseType } ? ResponseType : never;
type ActionsType = ReturnType<PropertiesType<typeof authActions>>

export const authReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case LOGIN_FLOW: {
            return ({
                ...state,
                isLoggedIn: action.payload.isLoggedIn
            })
        }
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

        default:
            return state
    }
}

export const authActions = {
    loginFlowAC: (isLoggedIn: boolean) => {
        return ({
            type: LOGIN_FLOW,
            payload: {
                isLoggedIn
            } as InitialStateType,
        })
    },
    loadingAC: (loading: boolean) => {
        return ({
            type: LOADING,
            payload: {
                loading
            } as InitialStateType,
        })
    },
    errorAC: (error: string) => {
        return ({
            type: ERROR,
            payload: {
                error
            } as InitialStateType,
        })
    },
}


export const loginTC = (email: string, password: string, rememberMe?: boolean) => async (dispatch: Dispatch) => {
    dispatch(authActions.loadingAC(true))
    try {
        let res = await authAPI.logIn(email, password, rememberMe = true)
        dispatch(authActions.loginFlowAC(true))
    } catch (e) {
        dispatch(authActions.loginFlowAC(false))
        dispatch(authActions.errorAC(e.message))
    } finally {
        dispatch(authActions.loadingAC(false))
    }
}


export const LogoutTC = () => async (dispatch: Dispatch) => {
    dispatch(authActions.loadingAC(true))
    try {
        let res =await authAPI.logOut()
        dispatch(authActions.loginFlowAC(false))
    } catch (e) {
        dispatch(authActions.errorAC(e.error))
        dispatch(authActions.loginFlowAC(false))
    } finally {
        dispatch(authActions.loadingAC(false))
    }


}
