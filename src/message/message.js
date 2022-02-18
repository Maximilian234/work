import { useState, useEffect} from "react";
import "./style.css";

export const App = () => {
  const [value, setValue] = useState("");
  const [messagelist, setMessagelist] = useState([]);
  // messagelist - это переменная массива, которую хочу использовать.
  // setMessagelist - это функция, для изменения значения массива messageList
  // useState - это функция для изменения состояния. возвращает массив; 
  // messagelist - это значение по умолчанию для переменной состояния. Как обычная переменная   
  // Вызывая функцию setMessagelist для изменения значения messagelist в используемом компоненте, например handleButton, будет повторно активирован хуком useState([]) и начнет заново отображаться с новым значением messagelist
  

  useEffect(() => {
    let timeOutBot = null;
    const lastmessage = messagelist[messagelist.length-1];

    if(lastmessage?.user !== "Bot" && messagelist.length) {
      console.log('ok')
        timeOutBot = setTimeout(()=> {
        setMessagelist([...messagelist, { user: "Bot", value: "Hello i'm Bot"}]);
      }, 2500);
    }
    return () => clearInterval(timeOutBot);
  
  },[messagelist]);

  const handleClick = (event) => {
    setValue(event.target.value);
  };

  const nahdleKey = (event) => {
    if (event.code === "Enter") {
      handleButton();
    }
  };

  const handleButton = () => {
    if (value) {
      setMessagelist([...messagelist, { user: "Maxim Mescheryakov", value }]);
      setValue("");
    } else {
      alert("error");
    }
  };

  

  return (
    <div className="container">
      <div className="containerBox">
        <div className="boxChat">
          {messagelist.map((item, keyId) => {
            return (
              <div key={keyId}>
                <p className="p">{item.user}</p>
                <p className="p">{item.value}</p>
                {/* <p className="p">{item.bot}</p> */}
              </div>
           
            );
          })}
        </div>
        <div className="boxInput">
          <input
            className="input"
            value={value}
            onKeyPress={nahdleKey}
            onChange={handleClick}
          />
          <button className="button" type={"button"} onClick={handleButton}>
            Отправить
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
