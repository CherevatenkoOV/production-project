import React, {useState} from 'react';
import styles from './Counter.module.scss'

const Counter: React.FunctionComponent = () => {
    const [state, setState] = useState<number>(0)
    const increment = (): void => {
        setState(state + 1)
    }

    return (
        <div className={styles.Counter}>
            <h1>{state}</h1>
            <button value={state} onClick={increment}>Increment</button>
        </div>
    );
};

export default Counter;