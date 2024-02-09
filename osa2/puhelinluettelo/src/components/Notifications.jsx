
const Notifications = ({message}) => {
    if(message === null)
        return null
    else if (message.includes("Error"))
        return (
            <div className="error">
                {message}
            </div>
        );
    return (
        <div className="notification">
            {message}
        </div>
    );
};

export default Notifications;