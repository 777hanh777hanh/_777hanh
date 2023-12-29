import { useNavigate } from 'react-router-dom';

const Home = () => {
    // Sử dụng hook useNavigate để điều hướng trang
    const navigate = useNavigate();

    // Xử lý sự kiện nút "Quay Lại"
    const handleGoBack = () => {
        // Nếu có url chung state trước đó thì quay lại url đó
        if (window.history.state.idx > 0) {
            navigate(-1);
        } else {
            // Nếu không có thì quay lại trang chủ
            navigate('/');
        }
    };

    return (
        <div>
            <h2>Home</h2>
            <button type="button" onClick={handleGoBack}>
                Go Back
            </button>
        </div>
    );
};

export default Home;
