import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function NavigateHome() {
    const navigate = useNavigate();

    useEffect(() => {
        navigate('/home', { replace: true });
    }, [navigate]);

    return <></>;
}

export default NavigateHome;
