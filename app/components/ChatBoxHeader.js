import React from "react";
import Image from "next/image";
import { MoreVertOutlined, Close } from "@mui/icons-material";
import { Status } from "../general/constant";
import { useDispatch } from "react-redux";
import { addChatId } from "../store/features/chatSlice";

function ChatBoxHeader({ UserData }) {
  const dispatch = useDispatch();
  return (
    <div className="flex w-full p-3">
      <Image
        className="rounded-full"
        style={{ width: 40, height: 40 }}
        src={UserData?.contact?.receiverImage}
        width={200}
        height={200}
        alt="Receiver Image"
      />
      <div className="flex flex-col flex-grow">
        <div className="flex gap-5 items-center mb-5">
          <h1 className="text-xl">{UserData?.contact?.name} </h1>
          <p
            className={`${
              Status[UserData?.leadStatus]
            } bg-green-500 text-xs rounded-full text-white p-2`}
          >
            {UserData?.leadStatus}
          </p>
        </div>

        <h2 className="text-sm text-slate-500">
          Occupation: {UserData?.contact?.position}
        </h2>
        <p className="text-xs opacity-75">Company: Sales Mind AI</p>
        <p className="text-xs opacity-75">Location: Bangkok</p>
      </div>
      <MoreVertOutlined />
      <Close
        onClick={() => {
          dispatch(addChatId({ chatId: null }));
        }}
      />
    </div>
  );
}

export default ChatBoxHeader;
