import { useRef } from 'react';
import Logging from '../library/Logging';

export const useLogging = (namespace?: string): [Logging] => {
    const { current: logging } = useRef(new Logging(namespace));

    return [logging];
};
