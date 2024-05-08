import React from "react";
import closeButton from "../../assets/close-Button.png";
import guideHead from "../../assets/Guide-tag.png";
import EventGifts from "../EventGifts";
import { guideContent } from "../../js/data";

function GuideContent({ guide, close, language }) {
  //LanguageBar
  let current;
  language === "Urdu/Hindi" ? (current = guideContent.Urdu) : (current = guideContent.English);
  return (
    <div className="overlay" style={{ visibility: guide ? "visible" : "hidden" }}>
      {guide ? (
        <div className="guide-content p-rel">
          <img className="head p-abs" src={guideHead} alt="" />
          <div className="inner-content ">
            <div className="content-box">
              <EventGifts />
              <div className="list">
                {current.topText}
                {current.heading1}
                {current.desc1}
                {current.heading2}
                {current.desc2}
                {current.bottomText}
              </div>
              <table className="b-collapse">
                <thead>
                  <th className="border-1-w c-yellow">Situation</th>
                  <th className="border-1-w c-yellow">Points</th>
                  <th className="border-1-w c-yellow">Note</th>
                </thead>
                <tbody>
                  <tr>
                    <td className="border-1-w">{current.td1_1}</td>
                    <td className="border-1-w">{current.td1_2}</td>
                    <td className="border-1-w">{current.td1_3}</td>
                  </tr>
                  <tr>
                    <td className="border-1-w">{current.td2_1}</td>
                    <td className="border-1-w">{current.td2_2}</td>
                    <td className="border-1-w">{current.td2_3}</td>
                  </tr>
                  <tr>
                    <td className="border-1-w">{current.td3_1}</td>
                    <td className="border-1-w">{current.td3_2}</td>
                    <td className="border-1-w">{current.td3_3}</td>
                  </tr>
                </tbody>
              </table>
              <div className="list">
                {current.desc3}
                {current.heading4}
              </div>
              <table className="b-collapse">
                <thead>
                  <th className="border-1-w c-yellow">Task for category</th>
                  <th className="border-1-w c-yellow">Tasks</th>
                  <th className="border-1-w c-yellow">Tokens</th>
                </thead>
                <tbody>
                  <tr>
                    <td className="border-1-w">{current.td4_1}</td>
                    <td className="border-1-w">{current.td4_2}</td>
                    <td className="border-1-w">{current.td4_3}</td>
                  </tr>
                  <tr>
                    <td className="border-1-w">{current.td4_4}</td>
                    <td className="border-1-w">{current.td4_5}</td>
                    <td className="border-1-w">{current.td4_6}</td>
                  </tr>
                  <tr>
                    <td className="border-1-w">{current.td4_7}</td>
                    <td className="border-1-w">{current.td4_8}</td>
                    <td className="border-1-w">{current.td4_9}</td>
                  </tr>
                  {/*  */}
                  <tr>
                    <td className="border-1-w">{current.td5_1}</td>
                    <td className="border-1-w">{current.td5_2}</td>
                    <td className="border-1-w">{current.td5_3}</td>
                  </tr>
                  <tr>
                    <td className="border-1-w">{current.td5_4}</td>
                    <td className="border-1-w">{current.td5_5}</td>
                    <td className="border-1-w">{current.td5_6}</td>
                  </tr>
                  <tr>
                    <td className="border-1-w">{current.td5_7}</td>
                    <td className="border-1-w">{current.td5_8}</td>
                    <td className="border-1-w">{current.td5_9}</td>
                  </tr>
                  {/*  */}
                  <tr>
                    <td className="border-1-w">{current.td6_1}</td>
                    <td className="border-1-w">{current.td6_2}</td>
                    <td className="border-1-w">{current.td6_3}</td>
                  </tr>
                  <tr>
                    <td className="border-1-w">{current.td6_4}</td>
                    <td className="border-1-w">{current.td6_5}</td>
                    <td className="border-1-w">{current.td6_6}</td>
                  </tr>
                  <tr>
                    <td className="border-1-w">{current.td6_7}</td>
                    <td className="border-1-w">{current.td6_8}</td>
                    <td className="border-1-w">{current.td6_9}</td>
                  </tr>
                  {/*  */}
                  <tr>
                    <td className="border-1-w">{current.td7_1}</td>
                    <td className="border-1-w">{current.td7_2}</td>
                    <td className="border-1-w">{current.td7_3}</td>
                  </tr>
                  <tr>
                    <td className="border-1-w">{current.td7_4}</td>
                    <td className="border-1-w">{current.td7_5}</td>
                    <td className="border-1-w">{current.td7_6}</td>
                  </tr>
                  <tr>
                    <td className="border-1-w">{current.td7_7}</td>
                    <td className="border-1-w">{current.td7_8}</td>
                    <td className="border-1-w">{current.td7_9}</td>
                  </tr>
                </tbody>
              </table>
              {/*  */}
              <div className="list">{current.desc5}</div>
              <table className="b-collapse">
                <thead>
                  <th className="border-1-w c-yellow">Task for category</th>
                  <th className="border-1-w c-yellow">Tasks</th>
                  <th className="border-1-w c-yellow">Tokens</th>
                </thead>
                <tbody>
                  <tr>
                    <td className="border-1-w">{current.td8_1}</td>
                    <td className="border-1-w">{current.td8_2}</td>
                    <td className="border-1-w">{current.td8_3}</td>
                  </tr>
                  <tr>
                    <td className="border-1-w">{current.td8_4}</td>
                    <td className="border-1-w">{current.td8_5}</td>
                    <td className="border-1-w">{current.td8_6}</td>
                  </tr>
                  <tr>
                    <td className="border-1-w">{current.td8_7}</td>
                    <td className="border-1-w">{current.td8_8}</td>
                    <td className="border-1-w">{current.td8_9}</td>
                  </tr>
                  <tr>
                    <td className="border-1-w">{current.td8_10}</td>
                    <td className="border-1-w">{current.td8_11}</td>
                    <td className="border-1-w">{current.td8_12}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="modal-close p-abs" onClick={close}>
            <img src={closeButton} alt="" />
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default GuideContent;
