import { useRef } from 'react';
import Logging from '../library/Logging';

/**
 * A hook for a simple logging library.
 * @param namespace  string that will be displayed after the timestamp and before the log level as [namespace].
 * @returns object of type Logging
 */
export const useLogging = (namespace?: string): [Logging] => {
    const { current: logging } = useRef(new Logging(namespace));

    return [logging];
};
