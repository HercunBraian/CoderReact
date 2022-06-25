import { useState ,createContext } from "react";

const Notification = ({message, severity}) => {

    const notificationStyle = {
        position: 'absolute',
        top: 100,
        right: 5,
        with: 'auto',
        height: 'auto',
        backgroundColor: severity === 'error' ? 'red' : 'green',
        color: 'white',
        padding: '10px 20px 10px 20px',
        borderRadius: '10px'
    }

    if(message === '') return
    return (
        <div style={notificationStyle} className={`${severity === 'error' ? 'Error' : 'Success'}`} >
            {message}
        </div>
    )
}

const NotificacionContext = createContext()

export  const NotificacionProvider = ({children}) => {
                const [msgConfig, setMsgConfig] = useState({
                    severity: 'success',
                    message: ''
                })

        const setNotification = (sev, msg, timeout) => {
            setMsgConfig({severity: sev, message: msg})
            setTimeout(() => {
                setMsgConfig({ ...msgConfig, message: '' })
            }, timeout * 1000)

        }

    return (
        <NotificacionContext.Provider value={setNotification}>
            <Notification message={msgConfig.message} severity={msgConfig.severity} />
            
            {children}
        </NotificacionContext.Provider>
    )
}

export default NotificacionContext