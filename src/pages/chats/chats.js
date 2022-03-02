import Chtaroom from "../../list/list";
import App from "../../message/message";
import { useStyles } from "./use-styles";

export const Chats = () => {
  const st = useStyles();
  return (
    <section>
      <h1 className={st.h1}>Стр.ЧАТ</h1>
      <div className={st.chatroom}>
        <header className={st.header}>
          <Chtaroom className={st.chatroomUl} />
        </header>
        <content className={st.content}>
          <App />
        </content>
      </div>
    </section>
  );
};

export default Chats;