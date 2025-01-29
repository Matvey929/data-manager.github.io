import { FC } from "react";

export const Profile: FC = () => {
    return(
     <div className="Profile">
        <h2 className="Profile-Title">
            Форма регистрации
        </h2>
        <form className="Profile-Form">
            <input type="text" className="Profile-Input" placeholder="Name"/>
            <input type="text" className="Profile-Input" placeholder="Email"/>
            <input type="text" className="Profile-Input" placeholder="Password"/>
            <button className="Profile-Button">Зарегистрироваться</button>
        </form>
     </div>
    );
};