const Notification = ({ user, message }) => {
  if (user === null || message === null) {
    return null;
  } else if (user) {
    return <div className="user">{user}</div>;
  }
  return <div className="message">{message}</div>;
};

export default Notification;
