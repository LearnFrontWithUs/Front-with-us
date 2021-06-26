
export const LOADING = 'authReducer/SET-LOADING' as const;
export const ERROR = 'authReducer/SET-ERROR' as const;


type InitialStateType = {
    error: string
    loading:boolean
}

export const initialState: InitialStateType = {
    loading: false,
    error: '',
}

type PropertiesType<ActionType> = ActionType extends { [key: string]: infer ResponseType } ? ResponseType : never;
type ActionsType = ReturnType<PropertiesType<typeof authActions>>


export const authReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
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
        default:
            return state
    }
}


export const authActions = {
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
    }
}
