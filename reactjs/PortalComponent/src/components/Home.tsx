import { Link, Outlet } from 'react-router-dom';

interface HomeProps {
    children?: React.ReactNode | undefined | null;
}

const HomeComponent: React.FC<HomeProps> = () => {
    return (
        <div className="home">
            <h2>Home Component is Displayed</h2>
            <Link to="/?watch=1">Go</Link>
            <br />
            <Link to="/watch">watch</Link>
            <hr />
            <Outlet />
        </div>
    );
};

export default HomeComponent;
