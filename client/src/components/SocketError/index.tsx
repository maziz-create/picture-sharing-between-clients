import { useState, useEffect } from 'react'

//socket methods
import { sendSocketError } from '../../socketApi'

import './styles.css'

//socketApi > sendSocketError fonksiyonundan döneceğimiz datayı temsil ediyor.
interface ErrorData {
    errorMessage: string;
    styleSocketError: {
        display: string
    };
}

const SocketError = () => {
    const [errorMessage, setErrorMessage] = useState("");
    const [styleSocketError, setStyleSocketError] = useState({ display: 'none' });

    useEffect(() => {
        sendSocketError((errorData: ErrorData) => {
            setErrorMessage(errorData.errorMessage);
            setStyleSocketError(errorData.styleSocketError);
        })
    }, []);

    return (
        <div style={styleSocketError} className="socket-error">
            <p>
                {errorMessage}
            </p>
        </div>
    )
}

export default SocketError