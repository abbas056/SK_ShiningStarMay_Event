import unknown from "../assets/unknown.png";
import axios from "axios";
import beans50 from "../assets/dart_wheel/50-beans.gif";
import beans100 from "../assets/dart_wheel/100-beans.gif";
import beans150 from "../assets/dart_wheel/150-beans.gif";
import beans200 from "../assets/dart_wheel/200-beans.gif";
import beans300 from "../assets/dart_wheel/300-beans.gif";
import beans1000 from "../assets/dart_wheel/1000-beans.gif";
import phatom from "../assets/dart_wheel/phantom.gif";
import svip from "../assets/dart_wheel/svip.gif";
import thunder from "../assets/dart_wheel/thunder.gif";
import victorySlide from "../assets/dart_wheel/victory-slide.gif";
import vip from "../assets/dart_wheel/vip.gif";
import forever from "../assets/dart_wheel/forever.gif";
import { baserUrl } from "./baserUrl";
let env = 1;
export const actorURL = `${baserUrl}streamkar/common/img/tlv/`;
export const userURL = `${baserUrl}streamkar/common/img/ulv/`;

export const overFlowAuto = () => {
  if (typeof window != "undefined" && window.document) {
    document.body.style.overflow = "auto";
  }
};
export const overFlowHidden = () => {
  if (typeof window != "undefined" && window.document) {
    document.body.style.overflow = "hidden";
  }
};
export const currencySlang = (n) => {
  if (n < 1e3) return n;
  if (n >= 1e3 && n < 1e6) return +(n / 1e3).toFixed(1) + "K";
  if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(1) + "M";
  if (n >= 1e9 && n < 1e12) return +(n / 1e9).toFixed(1) + "B";
  if (n >= 1e12) return +(n / 1e12).toFixed(1) + "T";
};
export const captureImageError = (event) => {
  event.target.src = unknown;
  return true;
};
export const slicePlease = (array, from, to) => {
  const cutting = array?.slice(from, to);
  return cutting;
};
export const callingApi = async (url, uid, uToken) => {
  if (env == 0) {
    return redeem();
  } else {
    var config = {
      method: "post",
      maxBodyLength: Infinity,
      url: url,
      headers: {
        userId: uid,
        token: uToken,
      },
    };
    const result = await axios.request(config);
    return result.data;
  }
};
export const redeem = () => {
  return {
    errorCode: 0,
    msg: "success",
    data: true,
  };
};
export const successAlert = (yayy, data) => [
  {
    headtext: `${yayy}`,
    data: <>{data}</>,
  },
];
export const unsuccessAlert = (oops, msj) => [
  {
    headtext: `${oops}`,
    data: <>{msj}</>,
  },
];
export const estimatedBeans = (rank, potvalue, categ, tab2) => {
  let beans;
  if (tab2) {
    if (categ.categS) {
      if (rank == 1) {
        beans = Math.floor((potvalue * 22) / 100);
      } else if (rank == 2) {
        beans = Math.floor((potvalue * 16) / 100);
      } else if (rank == 3) {
        beans = Math.floor((potvalue * 14) / 100);
      }
    }
    if (categ.categA) {
      if (rank == 1) {
        beans = Math.floor((potvalue * 10) / 100);
      } else if (rank == 2) {
        beans = Math.floor((potvalue * 9) / 100);
      } else if (rank == 3) {
        beans = Math.floor((potvalue * 8) / 100);
      }
    }
    if (categ.categB) {
      if (rank == 1) {
        beans = Math.floor((potvalue * 6) / 100);
      } else if (rank == 2) {
        beans = Math.floor((potvalue * 5) / 100);
      } else if (rank == 3) {
        beans = Math.floor((potvalue * 4) / 100);
      }
    }
    if (categ.categC) {
      if (rank == 1) {
        beans = Math.floor((potvalue * 3) / 100);
      } else if (rank == 2) {
        beans = Math.floor((potvalue * 2) / 100);
      } else if (rank == 3) {
        beans = Math.floor((potvalue * 1) / 100);
      }
    }
  }

  return beans;
};
export const callDartApi = async (url, uid, uToken) => {
  var config = {
    method: "post",
    maxBodyLength: Infinity,
    url: url,
    headers: {
      userId: uid,
      token: uToken,
    },
  };
  const result = await axios.request(config);
  return result.data;
};
export const formatData = (originalArray) => {
  const newArray = [];
  for (let i = 0; i < originalArray?.length; i += 3) {
    newArray?.push(originalArray?.slice(i, i + 3));
  }
  return newArray;
};
export function goTo(isLive, userId, roomId) {
  if (window.UA.android) {
    let url = "streamkar://m.streamkar.com/route";
    if (isLive) {
      url = url + "/room?roomId=" + roomId;
    } else {
      url = url + "/user?userId=" + userId;
    }
    if (userId || roomId) {
      window.phone.routeViewPage(url);
    }
  } else {
    window.location.href = "http://www.kktv1.com/m/?roomid=" + userId + "";
  }
}
export const animation = (desc, count) => {
  let gif;
  if (desc.includes("Beans") && count.includes(50)) {
    gif = beans50;
  } else if (desc.includes("Beans") && count.includes(100)) {
    gif = beans100;
  } else if (desc.includes("Beans") && count.includes(150)) {
    gif = beans150;
  } else if (desc.includes("Beans") && count.includes(200)) {
    gif = beans200;
  } else if (desc.includes("Beans") && count.includes(300)) {
    gif = beans300;
  } else if (desc.includes("Beans") && count.includes(1000)) {
    gif = beans1000;
  } else if (desc.includes("Phantom entrance")) {
    gif = phatom;
  } else if (desc.includes("SVIP") || desc.includes("svip")) {
    gif = svip;
  } else if (desc.includes("Thunder Audio broadcast theme")) {
    gif = thunder;
  } else if (desc.includes("Victory Slide entrance")) {
    gif = victorySlide;
  } else if (desc.includes("VIP")) {
    gif = vip;
  } else if (desc.includes("Beans")) {
    gif = beans1000;
  } else {
    gif = forever;
  }

  return gif;
};
