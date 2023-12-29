import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './componets/Home';
import Contact from './componets/Contact';
import Error from './componets/Error';
import About from './componets/About';

function App() {
    return (
        <>
            {/* navbar */}
            <nav>
                <Link to="/">Home</Link>
                <br />
                <Link to={'/contact'}>Contact</Link>
                <br />
                <Link to={'/about'}>About</Link>
                <br />
                <Link to={'/Error'}>Error</Link>
            </nav>

            {/* Routes */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </>
    );
}

export default App;
