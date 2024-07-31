import { Button } from "@material-tailwind/react";
import React from "react";

const ReportRow = ({ title }: any) => {
  return (
    <div className="flex flex-row border-2 py-2 border-x-0  border-t-0">
      <div className="basis-3/4 my-auto font-semibold  ">{title}</div>
      <div className="basis-1/4">
        <Button
          onPointerEnterCapture={""}
          onPointerLeaveCapture={""}
          variant="outlined"
          placeholder={""}
          color="green"
          size="sm"
          className="flex items-center gap-2"
        >
          Download{" "}
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 13V4M7 14H5a1 1 0 0 0-1 1v4c0 .6.4 1 1 1h14c.6 0 1-.4 1-1v-4c0-.6-.4-1-1-1h-2m-1-5-4 5-4-5m9 8h0"
            />
          </svg>
        </Button>
      </div>
    </div>
  );
};

export default ReportRow;
