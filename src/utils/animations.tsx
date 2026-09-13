import { Variants } from 'framer-motion';

// shared animation used with whileInView across pages, content bounces up into view from below
export const bounceFromBelowVariants = (delay: number = 0): Variants => ({
    offscreen: {
        y: 150,
        opacity: 0
    },
    onscreen: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            bounce: 0.3,
            duration: 1,
            delay: delay
        }
    }
});
