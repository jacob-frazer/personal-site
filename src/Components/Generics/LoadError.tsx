import { BasicText, LoadingPage } from '@generics/SimpleStyledComponents';

import colours from '@utils/colours';

// full page message for when the data a page needs fails to load
const LoadError = (props: { message: string }) => {
    return (
        <LoadingPage>
            <BasicText fontCol={colours.white} fontSize='1.5rem' padding='5rem 2rem 2rem 2rem' fontWeight='300' letterSpacing='2px'>
                {props.message}
            </BasicText>
        </LoadingPage>
    )
};

export default LoadError;
