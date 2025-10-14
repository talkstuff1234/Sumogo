import React from "react";
import { assets } from "@/assets/assets";

function Notification() {
  return (
    <div
      className="h-8 text-xs w-full text-center p-2 text-white"
      style={{ backgroundImage: `url(${assets.images.notificationBg.src})` }}
    >
      ✨Discover Your Dream Property with Estatein
    </div>
  );
}

export default Notification;
