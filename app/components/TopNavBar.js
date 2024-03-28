import React from "react";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import PowerSettingsNewOutlinedIcon from "@mui/icons-material/PowerSettingsNewOutlined";
import Image from "next/image";

function TopNavBar() {
  return (
    <nav className="bg-white gap-3 p-3 flex w-full justify-end h-fit">
      <NotificationsNoneIcon />
      <ChatBubbleOutlineIcon />
      {/* <CircleOutlinedIcon /> */}
      <Image
        className="rounded-full"
        style={{ width: 24, height: 24 }}
        src={`/images/flag.jpeg`}
        width={200}
        height={200}
        alt="Flag"
      />
      <PowerSettingsNewOutlinedIcon />
    </nav>
  );
}

export default TopNavBar;
