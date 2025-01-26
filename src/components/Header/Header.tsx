import { FC } from "react";
import logo from '../images/logo.png'
import './Header.css'
import { MenuComponents } from "../Menu/Menu";

export const Header:FC = ()=> {
    return (
        <header className="Header">
          <div className="Header-Content">
            <div className="Logo">
              <img src={logo} alt="" className="logo"/>
              </div>
           <MenuComponents/>
          </div>
        </header>
    )
}