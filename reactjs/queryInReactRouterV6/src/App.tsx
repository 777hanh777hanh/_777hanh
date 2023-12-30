import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import NavigateHome from './components/NavigateHome';
import Contact from './components/Contact';

function App() {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to={{ pathname: '/home' }}>Home</Link>
                    </li>
                    <li>
                        <Link to={'/contact'}>Contact</Link>
                    </li>
                </ul>
            </nav>

            <Routes>
                <Route path="/" element={<NavigateHome />} />
                <Route path="/home" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </>
    );
}

export default App;
