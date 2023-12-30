/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { UPDATE_V } from '../redux/action';

function Contact() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // get state of search params from redux
    const stateSearchParams = useSelector((state: any) => state.searchParamsReducer);

    // get search params from url
    const [searchParams, setSearchParams] = useSearchParams();

    // state value input
    const [valueV, setValueV] = useState(stateSearchParams.v || '');

    // get v param from search params
    let vParam = useMemo(() => searchParams.get('v'), [searchParams]);

    // set v param
    useEffect(() => {
        // if v param is not exist in url, get v param from redux
        if (!vParam) {
            if (stateSearchParams.v) {
                vParam = stateSearchParams.v;
            }
        }

        // dispatch v param to redux
        dispatch(UPDATE_V(vParam));

        // if v param is exist in url or redux set v param to redux
        if (vParam) {
            setSearchParams({ v: vParam }, { replace: true });
        } else {
            // if v param is not exist in url and redux, delete v param in url
            searchParams.delete('v');
            setSearchParams(searchParams, { replace: true });
        }
    }, [vParam]);

    // just render params to UI
    const renderSearchParams = () => {
        const params = new URLSearchParams(searchParams);
        return [...params.entries()].map(([key, value]) => (
            <p key={key}>
                {key}: {value}
            </p>
        ));
    };

    // update param v to redux
    const handleUpdateV = () => {
        dispatch(UPDATE_V(valueV));
        setSearchParams({ v: valueV });
    };

    // two way binding input
    const handleOnChangeValue = useMemo(
        () => (e: any) => {
            setValueV(e.target.value);
        },
        [],
    );

    // remove param v of redux
    const handleRemoveVParamRedux = () => {
        setValueV('');
        dispatch(UPDATE_V(''));
        searchParams.delete('v');
        setSearchParams(searchParams, { replace: true });
    };

    return (
        <div>
            <h2>Contact Page</h2>
            <label htmlFor="setV">Input</label>
            <input type="text" id="setV" value={valueV} onChange={handleOnChangeValue} />
            <button onClick={handleUpdateV} type="button">
                update V
            </button>

            <h4>Search Param hien tai:</h4>
            {renderSearchParams()}
            <button
                onClick={() => {
                    navigate('/contact', { replace: true });
                }}
                type="button"
            >
                To Navigate
            </button>
            <button onClick={handleRemoveVParamRedux} type="button">
                Remote v of Redux
            </button>
        </div>
    );
}

export default Contact;
