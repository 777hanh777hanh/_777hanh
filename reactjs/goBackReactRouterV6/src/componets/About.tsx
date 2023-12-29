import { useNavigate } from 'react-router-dom';

const About = () => {
    const navigate = useNavigate();
    const handleGoBack = () => {
        if (!isNaN(window.history.state.idx)) {
            if (window.history.state.idx > 0) {
                navigate(-1);
            } else {
                navigate('/');
            }
        } else {
            navigate('/');
        }
    };

    return (
        <div>
            <h2>About</h2>
            <button type="button" onClick={handleGoBack}>
                Go Back
            </button>
        </div>
    );
};

export default About;
