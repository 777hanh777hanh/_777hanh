import { useNavigate } from 'react-router-dom';

const Contact = () => {
    const navigate = useNavigate();
    const handleGoBack = () => {
        console.log(window.history.state.idx);

        if (window.history.state.idx > 0) {
            navigate(-1);
        } else {
            navigate('/');
        }
    };

    return (
        <div>
            <h2>Contact</h2>
            <button type="button" onClick={handleGoBack}>
                Go Back
            </button>
        </div>
    );
};

export default Contact;
