import Image from "next/image";
import React from "react";
import { Email, LinkedIn } from "@mui/icons-material";
import Tooltip from "@mui/material/Tooltip";
import { Typography } from "@mui/material";

function ChatMessage({ UserData }) {
  console.log("UserData...", UserData);
  const ChatList = UserData?.messageHistory;
  let messageIndex = 0;
  return (
    <div className="p-3 h-2/6 overflow-scroll border-t border-b">
      {ChatList?.map((message) =>
        message.destination === "from" ? (
          <div
            key={messageIndex++}
            className="my-2 flex gap-2 mr-auto "
            style={{ maxWidth: "50%" }}
          >
            <Image
              className=" rounded-full h-16 flex-grow-0"
              style={{ width: "70px" }}
              src={UserData?.contact?.receiverImage}
              width={200}
              height={200}
              alt="Image"
            />
            <div className="flex flex-col flex-grow">
              <div className="bg-slate-200 p-3 flex-grow ">
                <div className="flex justify-between items-center">
                  <h1 className="text-md">{UserData?.contact?.name}</h1>
                  {message.sentVia === "LinkedIn" ? (
                    <LinkedIn className="opacity-50" fontSize="small" />
                  ) : (
                    <Email className="opacity-50" fontSize="small" />
                  )}
                </div>

                <p className="text-xs text-slate-500 mt-3">{message.message}</p>
              </div>
              <p className="ml-auto text-xs text-slate-600 my-2 opacity-50">
                {message.time
                  .toLocaleTimeString("en-US", {
                    hour: "numeric",
                    minute: "numeric",
                    hour12: true, // Use 12-hour clock format
                  })
                  .toString()}
                {/* Time */}
              </p>
            </div>
          </div>
        ) : (
          <div key={messageIndex++} className="my-2 flex gap-2 justify-end ">
            <Image
              className=" rounded-full h-10 flex-grow-0"
              style={{ width: "50px" }}
              src={UserData?.senderImage}
              width={200}
              height={100}
              alt="Image"
            />
            <Tooltip
              title={
                <Typography>
                  Send via: {message.sentVia} <br />
                  Writer: AI & Human <br />
                  Reply Type: {message.replyType} <br />
                  Variant: {message.variant} <br />
                  Sent by: Jessica <br />
                </Typography>
              }
              arrow
              placement="top"
              slotProps={{
                popper: {
                  modifiers: [
                    {
                      name: "offset",
                      options: {
                        offset: [0, -30],
                      },
                    },
                  ],
                },
              }}
            >
              <div className="flex flex-col" style={{ maxWidth: "50%" }}>
                <div
                  className="bg-secondary text-slate-100 p-3"
                  style={{ backgroundColor: "#7B0035" }}
                >
                  <div className="flex justify-between items-center">
                    {message.sentVia === "LinkedIn" ? (
                      <LinkedIn
                        className="opacity-50 text-slate-200"
                        fontSize="small"
                        style={{ color: "#fff" }}
                      />
                    ) : (
                      <Email
                        className="opacity-50 text-slate-200"
                        fontSize="small"
                        style={{ color: "#fff" }}
                      />
                    )}
                    <h1 className="text-md text-slate-200">Jessica</h1>
                  </div>

                  <p className="text-xs text-slate-200 mt-2">
                    {message.message}
                  </p>
                </div>
                <p className="ml-auto text-xs text-slate-600 my-2 opacity-50">
                  {message.time
                    .toLocaleTimeString("en-US", {
                      hour: "numeric",
                      minute: "numeric",
                      hour12: true, // Use 12-hour clock format
                    })
                    .toString()}
                  {/* Time */}
                </p>
              </div>
            </Tooltip>
          </div>
        )
      )}
    </div>
  );
}

export default ChatMessage;
