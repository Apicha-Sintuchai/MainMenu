import React, { useEffect, useState } from "react";
import "./AddMenu.css";
import axios from "axios";

// import { API_DATA } from "../../Axios/func";

const ShowMenu = () => {
  const [data, setdata] = useState([]);
  const GETDATA = async () => {
    axios
      .get("https://mainshop.up.railway.app/shop")
      .then((res) => setdata(res.data))
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    GETDATA();
  }, []);

  return (
    <div className="background">
      {data
        ? data.map((menu, index) => (
            <div className="container1">
                <div className="grid">
              <div className="card">
                <img
                  src={"https://mainshop.up.railway.app/savepic/" + menu.file}
                  alt=""
                ></img>
                <div className="inside-card">
                  <h4>
                   {menu.shopname}
                  </h4>
                  <p>{menu.connect}</p>
                </div>
              </div>
              </div>
            </div>
          ))
        : null}
    </div>
  );
};

export default ShowMenu;
