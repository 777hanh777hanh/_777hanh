/* eslint-disable @typescript-eslint/no-explicit-any */
const initSearchParams = {
    v: '',
    order: 'desc',
};

const searchParamsReducer = (state = initSearchParams, action: any) => {
    switch (action.type) {
        case 'searchParams/updateV':
            return {
                ...state,
                v: action.payload,
            };

        case 'searchParams/updateOrder':
            return {
                ...state,
                order: action.payload,
            };

        default:
            return {
                ...state,
            };
    }
};

export default searchParamsReducer;
