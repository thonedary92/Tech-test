"use client";
import Image from "next/image";
import { useContext } from "react";
import { useSelector } from "react-redux";
import CommonTable from "./components/CommonTable";
import Indox from "./components/Indox";
import TopNavBar from "./components/TopNavBar";
import structuredData from "./general/constant";
import RootLayout from "./layout";
import LeftSide from "./page/leftSide";
import RightSide from "./page/rightSide";

export default function Home() {
  const chatId = useSelector((state) => state.chat?.chatId);
  const importData = useSelector((state) => state.user?.user);

  let clickedUserData = importData?.filter((user) => user.id === chatId)[0];
  console.log(
    "clickedUserData",
    clickedUserData,
    importData,
    importData?.filter((user) => user.id === chatId),
    chatId
  );

  return (
    <RootLayout>
      <main className="bg-slate-200">
        <TopNavBar />
        <div className="p-3">
          <Indox />
          <div className="flex gap-5">
            <LeftSide chatId={chatId} />
            <RightSide UserData={clickedUserData} chatId={chatId} />
          </div>
        </div>
      </main>
    </RootLayout>
  );
}
