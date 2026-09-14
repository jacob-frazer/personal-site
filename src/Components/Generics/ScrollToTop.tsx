import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// start each new page at the top, rather than wherever the previous page was scrolled to
const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
};

export default ScrollToTop;
