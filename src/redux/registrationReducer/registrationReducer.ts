
export const LOADING = 'authReducer/SET-LOADING' as const;
export const ERROR = 'authReducer/SET-ERROR' as const;
export const SUCCESS = 'authReducer/SET-SUCCESS' as const;



type InitialStateType = {
    error: string
    loading:boolean
    success:boolean
}

export const initialState: InitialStateType = {
    loading: false,
    error: '',
    success:false
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
        case SUCCESS:
            return ({
                ...state,
                success:action.payload.success
            })
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
    },
    successAC:(success:boolean) => {
        return ({
            type:SUCCESS,
            payload : {
                success
            }
        })
    }
}
