import "./style.css"


export const Message = ({myname}) => {
  return (
    <div className="container">
      <h1 className="stH1"> Это сообщение от Message</h1>
      <h2 className="stH1">Мое имя {myname}</h2>
    </div>
  );
};

export default Message;