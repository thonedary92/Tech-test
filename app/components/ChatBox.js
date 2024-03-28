import React, { useState } from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  ButtonGroup,
  Button,
  TextField,
} from "@mui/material";

import SendIcon from "@mui/icons-material/Send";
import { useDispatch } from "react-redux";
import { sendMessage } from "../store/features/userSlice";

function ChatBox({ UserData }) {
  const [sendText, setSendText] = useState("");
  const [replyType, setReplyType] = useState("");
  const [ChatList, setChatList] = useState(UserData?.messageList);

  const dispatch = useDispatch();
  const sendChat = () => {
    const message = {
      message: sendText,
      destination: "to",
      time: new Date(),
      variant: 1,
      replyType: "Ice Breaker",
      isAiAssited: true,
      sentVia: "LinkedIn",
    };
    const updatedUserData = { ...UserData };

    updatedUserData.messageList = [...updatedUserData?.messageList, message];
    setSendText("");
    dispatch(sendMessage(updatedUserData));
  };
  return (
    <div className="p-3 grid grid-cols-3 gap-3 w-full">
      <div
        className="col-span-full reply-row"
        rows={4}
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
        }}
      >
        <FormControl style={{ width: "50%" }}>
          <InputLabel id="demo-simple-select-label">Reply Type</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Reply Type"
            onChange={(e) => setReplyType(e.target.value + "")} // to convert into string
          >
            <MenuItem value={"Ice Breaker"} selected>
              Ice Breaker
            </MenuItem>
            <MenuItem value={"Candy Crusher"}>Candy Crusher</MenuItem>
            <MenuItem value={"Honey Keeper"}>Honey Keeper</MenuItem>
          </Select>
        </FormControl>
        <div class="btn-group" className="col-span-2 ml-auto btn-group">
          {" "}
          <button
            style={{
              backgroundColor: "#7b0035",
              color: "white",
              padding: 10,
              border: "solid 1px #7b0035",
              borderRadius: 5,
            }}
          >
            Variant 1
          </button>
          <button
            key="one"
            style={{
              padding: 10,
              border: "solid 1px #7b0035",
              borderRadius: 5,
            }}
          >
            Variant 2
          </button>
          <button
            key="two"
            style={{
              padding: 10,
              border: "solid 1px #7b0035",
              borderRadius: 5,
            }}
          >
            Variant 3
          </button>
        </div>
      </div>
      <TextField
        id="outlined-multiline-static"
        label="Type Something..."
        className="col-span-full"
        multiline
        rows={4}
        value={sendText}
        onChange={(e) => setSendText(e.target.value)}
      />
      <button
        // startIcon={}
        className="col-span-full"
        onClick={sendChat}
        style={{
          backgroundColor: "#3F0035",
          color: "white",
          paddingTop: 3,
          paddingBottom: 3,
        }}
      >
        <>
          <SendIcon className="send-icon" />
          Send
        </>
      </button>
    </div>
  );
}

export default ChatBox;
