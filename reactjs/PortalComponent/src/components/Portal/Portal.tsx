import { FC, MutableRefObject, ReactNode, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

interface PortalProps {
    children: ReactNode | undefined | null;
    className?: string | undefined;
    parentRef?: MutableRefObject<HTMLDivElement> | null;
}

export const Portal: FC<PortalProps> = ({ children, className, parentRef }) => {
    const el = useRef(document.createElement('div'));

    el.current.classList.add(className || 'portal');
    useEffect(() => {
        const portal = parentRef?.current || document.querySelector('body');
        const eleRef = el.current;
        portal?.appendChild(eleRef);

        return () => {
            portal?.removeChild(eleRef);
        };
    }, [parentRef]);

    return ReactDOM.createPortal(children, el.current);
};
