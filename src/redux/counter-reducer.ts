import { CounterType } from "../App"


type AddNumberActionType = {
    type: 'ADD-NUMBER'
}
type ResetNumberActionType = {
    type: 'RESET-NUMBER'
}
type SetMinimumActionType = {
    type: 'SET-MINIMUM'
    minValue: number
    isDisabled: boolean
}
type SetMaximumActionType = {
    type: 'SET-MAXIMUM'
    maxValue: number
    isDisabled: boolean
}
type SetAsDisableActionType = {
    type: 'SET-AS-DISABLE'
    isDisabled: boolean
}

type ActionType = AddNumberActionType | ResetNumberActionType
| SetMinimumActionType
| SetMaximumActionType
| SetAsDisableActionType


const initialState: CounterType = {
    counter: 0,
    minValue: 0,
    maxValue: 5,
    isDisabled: false
}


export const CounterReducer = (state: CounterType = initialState, action: ActionType) => {
    switch (action.type) {
        case 'ADD-NUMBER': {
            const stateCopy = {...state}
            stateCopy.counter = stateCopy.counter + 1
            return stateCopy
        }
        case 'RESET-NUMBER': {
            const stateCopy = {...state}
            stateCopy.counter = stateCopy.minValue
            return stateCopy
        }
        case 'SET-MINIMUM': {
            const stateCopy = {...state}
            stateCopy.minValue = action.minValue
            stateCopy.isDisabled = action.isDisabled
            return stateCopy
        }
        case 'SET-MAXIMUM': {
            const stateCopy = {...state}
            stateCopy.maxValue = action.maxValue
            stateCopy.isDisabled = action.isDisabled
            return stateCopy
        }
        case 'SET-AS-DISABLE': {
            const stateCopy = {...state}
            stateCopy.isDisabled = false
            stateCopy.counter = stateCopy.minValue
            return stateCopy
        }
        default: return state
    }
}

export const AddNumberAC = ():AddNumberActionType => (
    {type: 'ADD-NUMBER'}
)
export const ResetNumberAC = ():ResetNumberActionType => (
    {type: 'RESET-NUMBER'}
)
export const SetMinimumAC = (minValue: number, isDisabled: boolean):SetMinimumActionType => (
    {type: 'SET-MINIMUM', minValue, isDisabled }
)
export const SetMaximumAC = (maxValue: number, isDisabled: boolean):SetMaximumActionType => (
    {type: 'SET-MAXIMUM', maxValue, isDisabled }
)
export const SetAsDisableAC = (isDisabled: boolean):SetAsDisableActionType => (
    {type: 'SET-AS-DISABLE', isDisabled}
)
