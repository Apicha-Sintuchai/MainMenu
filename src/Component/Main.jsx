import React from "react";
import "./Main.css";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div className="backgroud">
      <div className="container" id="blur">
        <div className="content">
          <div className="con">
            <h1 className="ex5"> ของดี </h1>
            <h1 font="70px" className="ex4">
              ศรีสะเกษ
            </h1>
            <h2 className="ex1"> เที่ยวดีที่ศรีสะเกษ </h2>
          </div>
          <br />
          <h2 className="ex3"> หาร้านค้าและลงทะเบียนร้านได้ที่นี่ </h2>
          <header>
            <ul className="forul">
              <li className="forul2">
                <Link to={"/addmenu"} className="abatacum">
                  ลูกค้า
                </Link>
              </li>
              <li className="forul2">
                <Link to={"/Allcost"} className="abatacum">
                  ลงทะเบียนร้านค้า
                </Link>
              </li>
            </ul>
          </header>
          <br />
          <p className="ex2">
            เว็บไซต์นี้จัดทำเป็นโครงการเพื่อการศึกษาและสนับสนุนด้านการหารายได้ของจังหวัดศรีสะเกษเท่านั้น
          </p>
        </div>
      </div>
      {/* <div id="popup">
        <h2>กรุณาเลือกหมวดหมู่</h2>
        <ul>
          <li></li>
        </ul>
      </div> */}
    </div>
  );
};

export default Main;
