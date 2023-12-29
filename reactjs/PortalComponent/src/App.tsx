import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import HomeComponent from './components/Home';
import ContactComponent from './components/Contact';
import WatchComponent from './components/Watch';

function App() {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<HomeComponent />}>
                    <Route path="?watch=:id" element={<ContactComponent />} />
                    <Route path="watch" element={<WatchComponent />} />
                </Route>
                <Route path="/contact" element={<ContactComponent />} />
                <Route path="*" element={<h1>Not Found</h1>} />
            </Routes>
        </>
    );
}

export default App;
