"use client";
import Image from "next/image";
import AppBar from "../components/AppBar";
import TopBar from "../components/TopBar";
import { bod, members } from "../data/members";
import {
  Avatar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Tooltip,
  Typography,
} from "@material-tailwind/react";

export default function Home() {
  return (
    <main>
      <TopBar />
      <AppBar />
      <div className="h-[100vh] w-full px-14 ">
        <div className="grid grid-rows  justify-items-center ">
          <h1 className="text-5xl font-bold text-[#0C164B] my-5">
            Board of Directors
          </h1>
        </div>
        <div className="grid grid-cols-4 gap-10">
          {bod.map((item: members) => {
            return (
              <Card className="max-w-[24rem] overflow-hidden">
                <CardHeader
                  floated={false}
                  shadow={false}
                  color="transparent"
                  className="m-0 rounded-none"
                >
                  <Image
                    src={item.img}
                    height={100}
                    width={300}
                    alt="ui/ux review check"
                  />
                </CardHeader>
                <CardBody>
                  <Typography variant="h4" color="blue-gray">
                    {item.name}
                  </Typography>
                  <Typography
                    variant="lead"
                    color="gray"
                    className="mt-3 font-normal"
                  >
                    {item.title}
                  </Typography>
                </CardBody>
                {/* <CardFooter className="flex items-center justify-between">
                  <div className="flex items-center -space-x-3">
                    <Tooltip content="Natali Craig">
                      <Avatar
                        size="sm"
                        variant="circular"
                        alt="natali craig"
                        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
                        className="border-2 border-white hover:z-10"
                      />
                    </Tooltip>
                    <Tooltip content="Tania Andrew">
                      <Avatar
                        size="sm"
                        variant="circular"
                        alt="tania andrew"
                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                        className="border-2 border-white hover:z-10"
                      />
                    </Tooltip>
                  </div>
                  <Typography className="font-normal">January 10</Typography>
                </CardFooter> */}
              </Card>
            );
          })}
        </div>
      </div>
    </main>
  );
}
