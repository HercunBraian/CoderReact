import { useState ,createContext } from "react";
import "../notification/Notificacion.css"

const Notification = ({message}) => {

    if(message === '') return
    return (
        <div className="d-flex justify-content-center">
        <div className="notificationStyle" >
            {message}
        </div>
        </div>
    )
}

const NotificacionContext = createContext()

export  const NotificacionProvider = ({children}) => {
                const [msgConfig, setMsgConfig] = useState({
                    message: ''
                })

        const setNotification = (sev, msg, timeout) => {
            setMsgConfig({message: msg})
            setTimeout(() => {
                setMsgConfig({ ...msgConfig, message: '' })
            }, timeout * 1000)

        }

    return (
        <NotificacionContext.Provider value={setNotification}>
              {children}
            <Notification message={msgConfig.message} />
            
          
        </NotificacionContext.Provider>
    )
}

export default NotificacionContext