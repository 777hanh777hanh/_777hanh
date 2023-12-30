const UPDATE_V = (data: string | undefined | null) => {
    return {
        type: 'searchParams/updateV',
        payload: data,
    };
};

const UPDATE_ORDER = (data: string | undefined | null) => {
    return {
        type: 'searchParams/updateOrder',
        payload: data,
    };
};

export { UPDATE_V, UPDATE_ORDER };
