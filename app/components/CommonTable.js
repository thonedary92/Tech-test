import React from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { CheckBox, MoreVertOutlined } from "@mui/icons-material";
import Image from "next/image";
import { Status } from "../general/constant";
import { addChatId } from "../store/features/chatSlice";
import { useDispatch, useSelector } from "react-redux";

function CommonTable({ dataArr }) {
  const dispatch = useDispatch();
  const chatId = useSelector((state) => state?.chat?.chatId); // Accessing state managed by your slice

  const handleButtonClick = (id) => {
    dispatch(addChatId({ chatId: id }));
  };

  console.log("dataArr", dataArr);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>
              <FormControlLabel
                control={<Checkbox />}
                label="Lead"
                style={{ color: "black" }}
              />
            </TableCell>
            <TableCell></TableCell>
            <TableCell align="right" style={{ color: "black" }}>
              Tags
            </TableCell>
            <TableCell align="right" style={{ color: "black" }}>
              Campaign
            </TableCell>
            <TableCell align="right" style={{ color: "black" }}>
              Sender
            </TableCell>
            <TableCell align="right" style={{ color: "black" }}>
              Last Message
            </TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dataArr?.map((user) => (
            <TableRow
              className="pointer"
              hover
              onClick={(event) => handleButtonClick(user.id)}
              key={user.id}
            >
              <TableCell component="th" scope="row">
                <div className="flex items-center">
                  <Checkbox />
                  <Image
                    className=" rounded-full w-16"
                    src={user.contact?.receiverImage}
                    width={200}
                    height={200}
                    alt="Receiver Image"
                  />
                </div>
              </TableCell>
              <TableCell>
                <div className="flex flex-col w-full">
                  {" "}
                  <h1 className="text-lg leading-none  text-black">
                    {user?.contact?.name}
                  </h1>
                  <p className="text-xs text-slate-500">
                    {user?.contact?.position}
                  </p>{" "}
                </div>
              </TableCell>
              <TableCell align="right">
                <p
                  className={`${
                    Status[user?.leadStatus]
                  } bg-green-500 text-xs rounded-full text-white p-2`}
                >
                  {user?.leadStatus}
                </p>
              </TableCell>
              <TableCell align="right" className={`text-black`}>
                {user?.contact?.campaign}
              </TableCell>
              <TableCell align="right">
                {" "}
                <Image
                  className="border rounded-full h-12"
                  src={user.senderImage}
                  width={50}
                  height={50}
                  alt="Receiver Image"
                />
              </TableCell>
              <TableCell align="right">
                <p className={`text-black`}>
                  {user?.lastMessage?.time
                    ?.toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })
                    .toString()}
                </p>
              </TableCell>
              <TableCell className={`text-black`}>
                <MoreVertOutlined />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default CommonTable;
