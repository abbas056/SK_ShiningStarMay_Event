import React from "react";
import categSBtn from "../assets/Category-S.png";
import categABtn from "../assets/Category-A.png";
import categBBtn from "../assets/Category-B.png";
import categCBtn from "../assets/Category-C.png";
import star from "../assets/Category-btn.png";
import dot from "../assets/Unselect-icon.png";

function CategoryBar({ categ, setcateg }) {
  const tabSwitch = (id) => {
    let newCat = {
      categS: false,
      categA: false,
      categB: false,
      categC: false,
    };
    setcateg({ ...newCat, [id]: true });
  };
  return (
    <div className="category-bar m-auto d-flex fd-column al-center jc-sEven gap-2">
      <div className="category-bar-top m-auto d-flex al-center jc-s-between">
        <img
          onClick={() => tabSwitch("categS")}
          style={categ?.categS ? { width: "8vw", marginLeft: "-1vw" } : { width: "4vw" }}
          src={categ?.categS ? star : dot}
          alt=""
        />
        <img
          onClick={() => tabSwitch("categA")}
          style={categ?.categA ? { width: "8vw" } : { width: "4vw" }}
          src={categ?.categA ? star : dot}
          alt=""
        />
        <img
          onClick={() => tabSwitch("categB")}
          style={categ?.categB ? { width: "8vw" } : { width: "4vw" }}
          src={categ?.categB ? star : dot}
          alt=""
        />
        <img
          onClick={() => tabSwitch("categC")}
          style={categ?.categC ? { width: "8vw", marginRight: "-1vw" } : { width: "4vw" }}
          src={categ?.categC ? star : dot}
          alt=""
        />
      </div>
      <div className="category-bar-bottom d-flex jc-s-between m-auto">
        <button onClick={() => tabSwitch("categS")}>
          <img style={{ width: "18vw" }} className={categ?.categS ? "gray-0" : "gray-1"} src={categSBtn} alt="" />
        </button>
        <button onClick={() => tabSwitch("categA")}>
          <img style={{ width: "18vw" }} className={categ?.categA ? "gray-0" : "gray-1"} src={categABtn} alt="" />
        </button>
        <button onClick={() => tabSwitch("categB")}>
          <img style={{ width: "18vw" }} className={categ?.categB ? "gray-0" : "gray-1"} src={categBBtn} alt="" />
        </button>
        <button onClick={() => tabSwitch("categC")}>
          <img style={{ width: "18vw" }} className={categ?.categC ? "gray-0" : "gray-1"} src={categCBtn} alt="" />
        </button>
      </div>
    </div>
  );
}

export default CategoryBar;
