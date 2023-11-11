import React, { useEffect, useState } from "react";
import "./AddMenu.css";
import axios from "axios";

const ShowMenu = () => {
  const [data, setdata] = useState([]);
  const GETDATA = async () => {
    axios
      .get("https://mainshop-production.up.railway.app/shop")
      .then((res) => {
        setdata(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    GETDATA();
  }, []);

  return (
    <>
    <div className="back">
    <header>
      <div className="Appbar">
        <h1 className="Font-color">เมนูทั้งหมด</h1>
      </div>
    </header>
      <div className="background">
        {data
          ? data.map((menu, index) => (
              <div className="container1">
                <div className="grid">
                  <div className="card">
                    <img
                      src={
                        "https://mainshop-production.up.railway.app/savepic/" +
                        menu.file
                      }
                      alt=""
                    ></img>
                    <div className="inside-card">
                      <h4>{menu.shopname}</h4>
                      <h4>{menu.local_at}</h4>
                      <p>{menu.connect}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))
          : null}
      </div>
      </div>
    </>
  );
};

export default ShowMenu;
