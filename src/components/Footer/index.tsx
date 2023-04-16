import React from "react";
import { IconType } from "react-icons";
import {
  MdOutlineWavingHand,
  MdOutlineTravelExplore,
  MdCode,
} from "react-icons/md";

const Section = ({
  title,
  Icon,
  body,
}: {
  title: string;
  Icon: IconType;
  body: React.ReactNode;
}) => {
  return (
    <>
      <div className="flex gap-4 items-center">
        <div>
          <Icon size="25px" />
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-xs text-gray-500">{title}</p>
          <div className="flex gap-2">{body}</div>
        </div>
      </div>
    </>
  );
};

export default function Footer() {
  const d = new Date();
  let year = d.getFullYear();

  return (
    <div className="mb-12">
      <div className="card flex  flex-col gap-3 justify-between !py-10 my-12 lg:flex-row">
        <Section
          title={"Say hi"}
          Icon={MdOutlineWavingHand}
          body={<p className="text-sm">eli.sv@outlook.com</p>}
        />
        <Section
          title={"Find me on"}
          Icon={MdOutlineTravelExplore}
          body={
            <>
              <a
                href="https://www.linkedin.com/in/elisvcodes/"
                className="text-sm"
                target="_blank"
              >
                linkedin
              </a>
              <a
                href="https://github.com/elisvcodes"
                className="text-sm"
                target="_blank"
              >
                github
              </a>
            </>
          }
        />
        <Section
          title={"View source code?"}
          Icon={MdCode}
          body={
            <a
              href="https://github.com/elisvcodes/portfolio-v2"
              className="text-sm"
              target="_blank"
            >
              github
            </a>
          }
        />
      </div>
      <div className="text-sm text-center">
        Designed & Built by Eli Sultanov in NYC 🌮
      </div>
    </div>
  );
}
