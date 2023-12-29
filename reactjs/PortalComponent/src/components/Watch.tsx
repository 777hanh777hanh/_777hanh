import { Portal } from './Portal/Portal';
import { useEffect, useRef, useState } from 'react';
import './css/watch.css';
import ContactComponent from './Contact';

interface WatchProps {
    children?: React.ReactNode | undefined | null;
}

const WatchComponent: React.FC<WatchProps> = () => {
    const [value, setValue] = useState('');
    const [showPortal, setShowPortal] = useState(false);

    const labelRef = useRef<HTMLLabelElement | null>(null);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleValueChange = (e: any) => {
        setValue(e.target.value);
        console.log(e.target.value);
    };

    const handleShowPortal = () => {
        setShowPortal(!showPortal);
    };

    useEffect(() => {
        labelRef.current?.addEventListener('mouseenter', () => setShowPortal(!showPortal));
        return labelRef.current?.removeEventListener('mouseenter', () => setShowPortal(!showPortal));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="watch">
            <h2>Watch Component is Displayed</h2>
            <div id="parent">
                <label htmlFor="watch" className="label" ref={labelRef}>
                    label
                </label>
                <hr />
                <input id="watch" name="watch" onChange={handleValueChange} value={value} />
                <button type="button" onClick={handleShowPortal}>
                    Clicked
                </button>
                {showPortal && (
                    <Portal className="watchPortal">
                        <ContactComponent />
                    </Portal>
                )}
            </div>
        </div>
    );
};

export default WatchComponent;
