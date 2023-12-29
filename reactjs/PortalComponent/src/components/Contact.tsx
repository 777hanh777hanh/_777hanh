import './css/contact.css';
import { useRef, useEffect } from 'react';

interface ContactProps {
    children?: React.ReactNode | undefined | null;
}

const ContactComponent: React.FC<ContactProps> = () => {
    const contactRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const timerId = setTimeout(() => {
            contactRef.current && contactRef.current.classList.add('show');
        }, 10);

        return () => {
            clearTimeout(timerId);
        };
    }, []);

    const handleHide = () => {
        // setTimeout(() => {
        contactRef.current && contactRef.current.classList.add('hide');
        // }, 0);
        contactRef.current &&
            contactRef.current.addEventListener(
                'transitionend',
                () => {
                    contactRef.current && (contactRef.current.style.visibility = '');
                    contactRef.current && (contactRef.current.style.opacity = '');
                    contactRef.current && contactRef.current.classList.remove('hide');
                },
                { once: true },
            );
    };

    useEffect(() => {
        const contactCurrentRef = contactRef.current!;

        contactCurrentRef.addEventListener(
            'transitionend',
            () => {
                contactCurrentRef.style.visibility = 'visible';
                contactCurrentRef.style.opacity = '1';
                contactCurrentRef.classList.remove('show');
            },
            { once: true },
        );

        return () => {
            contactCurrentRef.removeEventListener('transitionend', () => {
                contactCurrentRef.style.visibility = 'visible';
                contactCurrentRef.style.opacity = '1';
                contactCurrentRef.classList.remove('show');
            });
        };
    }, []);

    return (
        <div className="contact">
            <h2 ref={contactRef}>Contact Component is Displayed</h2>
            <button type="button" onClick={handleHide}>
                Hide
            </button>
        </div>
    );
};

export default ContactComponent;
