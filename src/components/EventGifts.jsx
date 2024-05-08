import React from "react";
import { eventGifts } from "../js/data";
import heading from "../assets/Event-gifts-tag.png";
import bean from "../assets/bean.png";

function EventGifts() {
  return (
    <div className="event-gifts d-flex jc-center al-start p-rel">
      <img className="heading-text p-abs" src={heading} alt="" />
      {eventGifts?.map((items, index) => (
        <div className="mt-10vw" key={index}>
          <div className="gift-details d-flex al-center jc-center fd-column">
            <div className="gift-img d-flex al-center jc-center">
              <img src={items?.img} alt="" />
            </div>
            <div className="details d-flex fd-column">
              <span className="c-yellow">{items.name}</span>
              <div className="d-flex al-center jc-center">
                <img className="w-3vw" src={bean} alt="" /> <span>{items.cost}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default EventGifts;
