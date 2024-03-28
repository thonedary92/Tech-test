"use client";
import React, { useState } from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { Calendar, DateRangePicker } from "react-date-range";
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormGroup,
  FormControlLabel,
  Checkbox,
  TableContainer,
  TableRow,
  Table,
  TableCell,
  TableBody,
  TableHead,
  Paper,
} from "@mui/material";
import {
  Send,
  Autorenew,
  Mail,
  Drafts,
  CreateOutlined,
  Image,
} from "@mui/icons-material";
import CommonTable from "../components/CommonTable";
import structuredData from "../general/constant";
import "../style/left.css";

function LeftSide({ chatId }) {
  //   let UserData = importData;
  const [UserData, setStateUserData] = useState(structuredData);
  const [searchText, setsearchText] = useState("");
  //   const [stateUserData, setStateUserData] = useState(UserData)
  const leadStatusFilter = (status) => {
    let filterUserData = structuredData.filter(
      (user) => user.leadStatus === status || status === ""
    );
    setStateUserData(filterUserData);
  };
  const campaignFilter = (campaign) => {
    let filterUserData = structuredData.filter(
      (user) => user?.contact?.campaign === campaign || campaign === ""
    );
    setStateUserData(filterUserData);
  };
  //   const dateFilter = (date: Date) => {
  //     console.log(date);
  //   };
  const textFilter = (text) => {
    let searchText = text.toLowerCase();
    let filterUserData = structuredData.filter(
      (user) =>
        user?.contact?.name.toLowerCase().includes(searchText) ||
        user?.contact?.position.toLowerCase().includes(searchText) ||
        user?.contact?.campaign.toLowerCase().includes(searchText)
    );
    setsearchText(text);
    setStateUserData(filterUserData);
  };

  let defaultTableColumns = [
    {
      Header: "Lead",
      Cell: (row) => "-",
      accessor: "id",
      resize: true,
      minWidth: 100,
    },
    {
      Header: "Tags",
      Cell: (row) => row.row.original.leadStatus,
      accessor: "tag",
      resize: true,
      minWidth: 100,
    },
    {
      Header: "Campaign",
      Cell: (row) => row.row.original.campaign,
      accessor: "campaign",
      resize: true,
      minWidth: 100,
    },
    {
      Header: "Sender",
      Cell: (row) => {
        return (
          <Image
            className="rounded-full w-16"
            src={row.row.original.senderImage}
            width={200}
            height={200}
            alt="Sender Image"
          />
        );
      },
      accessor: "sender",
      resize: true,
      minWidth: 100,
    },
    {
      Header: "Last Message",
      Cell: (row) => row.row.original.lastMessage,
      accessor: "last-message",
      resize: true,
      minWidth: 100,
    },
  ];

  console.log("userData", UserData);

  return (
    <>
      <div className={chatId ? "withChatID" : "woChatID"}>
        <div className="flex gap-4">
          <FormControl fullWidth>
            <TextField
              id="outlined-basic"
              label="Search"
              variant="outlined"
              value={searchText}
              onChange={(e) => textFilter(e.target.value)}
            />
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id="campaign" className={`text-black`}>
              Campaign
            </InputLabel>
            <Select
              labelId="campaign"
              id="campaign-select"
              onChange={(e) => campaignFilter(e.target.value + "")}
            >
              <MenuItem value={""} selected className={`text-black`}>
                All
              </MenuItem>
              <MenuItem
                value={"UI/UX designers in Bangkok"}
                className={`text-black`}
              >
                UI/UX designers in Bangkok
              </MenuItem>
              <MenuItem
                value={"Developers in New York"}
                className={`text-black`}
              >
                Developers in New York
              </MenuItem>
              <MenuItem
                value={"Product Managers in San Francisco"}
                className={`text-black`}
              >
                Product Managers in San Francisco
              </MenuItem>
              <MenuItem
                value={"Software Engineers in Silicon Valley"}
                className={`text-black`}
              >
                Software Engineers in Silicon Valley
              </MenuItem>
              <MenuItem
                value={"Marketing Professionals in Chicago"}
                className={`text-black`}
              >
                Marketing Professionals in Chicago
              </MenuItem>
              <MenuItem
                value={"Project Managers in Los Angeles"}
                className={`text-black`}
              >
                Project Managers in Los Angeles
              </MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth>
            <InputLabel id="lead-status" className={`text-black`}>
              Lead Status
            </InputLabel>
            <Select
              labelId="lead-status"
              id="lead-status-label"
              onChange={(e) => leadStatusFilter(e.target.value + "")}
            >
              <MenuItem value={""} selected className={`text-black`}>
                All
              </MenuItem>
              <MenuItem value={"Qualified Lead"} className={`text-black`}>
                Qualified Lead
              </MenuItem>
              <MenuItem value={"Interested"} className={`text-black`}>
                Interested
              </MenuItem>
              <MenuItem value={"Not Interested"} className={`text-black`}>
                Not Interested
              </MenuItem>
              <MenuItem value={"Referral"} className={`text-black`}>
                Referral
              </MenuItem>
            </Select>
          </FormControl>
        </div>

        <div className="flex justify-between my-5">
          <p className={`text-black`}>Selected: 0</p>
          <div className="flex gap-5 text-black">
            <Send />
            <Autorenew />
            <Mail />
            <Drafts />
            <CreateOutlined />
          </div>
        </div>

        <div className="flex">
          <FormControlLabel control={<Checkbox />} label="Unread" />
          <FormControlLabel control={<Checkbox />} label="Unreplied" />
          <FormControlLabel control={<Checkbox />} label="Drafting" />
        </div>

        {/* Data Table Section */}
        <CommonTable
          filterError={false}
          dataArr={UserData}
          defaultColumns={defaultTableColumns}
          orderColName={""}
          recordName="chat-list"
        />
      </div>
    </>
  );
}

export default LeftSide;
