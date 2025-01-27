import { FC } from "react";
import './profile.css'
import { Header } from "../components/Header/Header";

export const PageProfile:FC = ()=>{
  alert('Зарестрируйтесь')
    return (
        <div className="PageProfile">
          <Header/>
          <p className="logo_profile">Registration</p>
          <input type="text" placeholder="имя" className="unput"/>
          <input type="text" placeholder="почта" className="unput"/>
          <input type="text" placeholder="пароль" className="unput"/>
        </div>
    );
};