import {
    LOAD_WEB3_SUCCESS,
    LOAD_WEB3_FAIL,
    LOAD_BLOCKCHAIN_DATA_SUCCESS,
    LOAD_BLOCKCHAIN_DATA_FAIL,
    LOAD_CENT_FAIL,
    LOAD_CENT_SUCCESS,
    LOAD_CENT_BALANCE_SUCCESS,
    LOAD_CENT_BALANCE_FAIL,
    LOAD_XCENT_FAIL,
    LOAD_XCENT_SUCCESS,
    LOAD_XCENT_BALANCE_SUCCESS,
    LOAD_XCENT_BALANCE_FAIL,
    LOAD_BNB_FAIL,
    LOAD_BNB_SUCCESS,
    LOAD_BNB_BALANCE_SUCCESS,
    LOAD_BNB_BALANCE_FAIL,
    LOAD_MCENT_FAIL,
    LOAD_MCENT_SUCCESS,
    LOAD_MCENT_BALANCE_SUCCESS,
    LOAD_MCENT_BALANCE_FAIL,
    LOAD_BANK_SUCCESS,
    LOAD_BANK_FAIL,
    LOAD_BANK_BALANCE_SUCCESS,
    LOAD_BANK_BALANCE2_SUCCESS,
    LOAD_BANK_BALANCE3_SUCCESS,
    LOAD_BANK_BALANCE_FAIL,
    SET_LOADING_SUCCESS,
    SET_LOADING_FAIL
} from '../actions/types'

const initialState = {
    account: null,
    web3: null,
    tether: null,
    tether_balance: null,
    uridium: null,
    uridium_balance: null,
    muridium: null,
    muridium_balance: null,
    muridiumBNB : null,
    muridiumBNB_balance : null,
    decentralBank: null,
    stakingBalance: null,
    stakingBalance2: null,
    stakingBalance3: null,
    loading_success: false
}

export default function wallet(state = initialState, action) {
    const { type, payload } = action;

    switch(type){
        case LOAD_BLOCKCHAIN_DATA_SUCCESS:
            return {
                ...state,
                account: payload
            }
        case LOAD_WEB3_SUCCESS:
            return {
                ...state,
                web3: payload
            }
        case LOAD_CENT_SUCCESS:
            return {
                ...state,
                tether: payload
            }
        case LOAD_CENT_BALANCE_SUCCESS:
            return {
                ...state,
                tether_balance: payload
            }
        case LOAD_XCENT_SUCCESS:
            return {
                ...state,
                uridium: payload
            }
        case LOAD_XCENT_BALANCE_SUCCESS:
            return {
                ...state,
                uridium_balance: payload
            }
        case LOAD_MCENT_SUCCESS:
            return {
                ...state,
                muridium: payload
            }
        case LOAD_MCENT_BALANCE_SUCCESS:
            return {
                ...state,
                muridium_balance: payload
            }
        case LOAD_BANK_SUCCESS:
            return {
                ...state,
                decentralBank: payload
            }
        case LOAD_BANK_BALANCE_SUCCESS:
            return {
                ...state,
                stakingBalance: payload
            }
        case LOAD_BANK_BALANCE2_SUCCESS:
            return {
                ...state,
                stakingBalance2: payload
            }
        case LOAD_BANK_BALANCE3_SUCCESS:
            return {
                ...state,
                stakingBalance3: payload
            }            
        case SET_LOADING_SUCCESS:
            return {
                ...state,
                loading_success: payload
            }
        case LOAD_BLOCKCHAIN_DATA_FAIL:
            return {
                ...state,
                account: null
            }
        case LOAD_WEB3_FAIL:
            return {
                ...state,
                web3: null
            }
        case LOAD_CENT_FAIL:
            return {
                ...state,
                tether: null
            }
        case LOAD_CENT_BALANCE_FAIL:
            return {
                ...state,
                tether_balance: null
            }
        case LOAD_XCENT_FAIL:
            return {
                ...state,
                uridium: null
            }
           
        case LOAD_XCENT_BALANCE_FAIL:
            return {
                ...state,
                uridium_balance: null
            }
        case LOAD_MCENT_FAIL:
            return {
                ...state,
                muridium: null
            }
        case LOAD_MCENT_BALANCE_FAIL:
            return {
                ...state,
                muridium_balance: null
            }    
        case LOAD_BANK_FAIL:
            return {
                ...state,
                decentralBank: null
            }
        case LOAD_BANK_BALANCE_FAIL:
            return {
                ...state,
                stakingBalance: null
            }
        case SET_LOADING_FAIL:
            return {
                ...state,
                loading_success: null
            }

        case LOAD_BNB_FAIL:
                return {
                    ...state,
                    muridiumBNB: null
                }
               
        case LOAD_BNB_SUCCESS:
                return {
                    ...state,
                    muridiumBNB_balance: null
                }
        case LOAD_BNB_BALANCE_SUCCESS:
                return {
                    ...state,
                    muridiumBNB: null
                }
        case LOAD_BNB_BALANCE_FAIL:
                return {
                    ...state,
                    muridiumBNB_balance: null
                } 




        default:
            return state
    }
}