import AppBar from "../components/AppBar/AppBar";
import TopBar from "../components/TopBar";

import Members from "../components/Members";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col px-14">
        <h1 className="mx-auto text-5xl font-bold text-[#0C164B] my-6">
          Message From Chairperson
        </h1>
        <div className="flex flex-row ">
          <div className="basis-1/4 ">
            <div className="flex flex-col w-64 rounded-xl">
              <img
                src={"./chairman.jpg"}
                className="h-64 w-72 rounded-t-lg"
                alt="bod members"
              />
              <div className="flex flex-col bg-[#E6F5EB] p-2 rounded-b-lg">
                <h5 className="mx-auto text-normal text-lg font-semibold">
                  Mr. John Doe
                </h5>
                <p className="mx-auto font-medium">Chairperson</p>
              </div>
            </div>
          </div>
          <div className="basis-3/4">
            <p className="text-justify">
              We are in our 13th year of operation. During this period, we have
              succeeded in achieving satisfactory progress in a short period of
              time in various fields including overall financial transactions.
              We have given high priority to institutional governance by
              applying the regulations, various policies and procedures and
              guidelines as much as possible to effectively advance the daily
              operations of the organization in view of the current situation,
              future possibilities and challenges. Our main specialty is to make
              annual programs and budgets according to immediate, short-term and
              long-term work plans and proceed accordingly. Despite the adverse
              economic and political instability of the country, we have further
              promoted the business capacity of the organization by making
              maximum use of our efficiency and capacity.
            </p>
            <p className="my-4 text-justify">
              In order to strengthen the management of the employees working in
              the organization, we have adopted various procedures. Along with
              the growth in the business of the organization, the
              responsibilities and responsibilities of the employees have been
              changed, promoted, various types of internal and external training
              have been arranged to increase the work efficiency. In order to
              fully implement various policy rules and annual programs and
              budgets for the short-term and long-term goals of the
              organization, it is arranged to hold regular meetings of the board
              of directors, the audit committee and other sub-committees and the
              staff management. The short-term and long-term services and
              facilities available have also been increased.
            </p>

            <p className="text-justify">
              We are moving towards institutional sustainability by adopting the
              ACCESS program run by the Asian Credit Federation with the
              technical support of Nefskoon. In the campaign to create an
              excellent, competitive, sustainable and safe organization through
              Access, taking "A1 Competitive Choice for Excellence in Service
              and Soundness" as the basic mantra, we will provide excellent
              service from the perspective of members, remain financially
              healthy and safe, and develop competitive capabilities internally.
              And we have adopted a strategy to run the organization sustainably
              with continuous learning and growth. By improving the 86
              indicators of ACCESS, with the technical support of Nefscon, the
              aim has been taken to obtain an Asia-level brand by verifying the
              program conducted by the Asian Credit Federation for the past 5
              years.
            </p>
            <p className="my-4 text-justify">
              Along with the growth in the business of CYC Savings and Credit
              Cooperatives, which is run under the guidance of the Federal and
              Provincial Cooperative Departments of the Government of Nepal, the
              subject associations, we have also increased the services and
              facilities we provide to our members. By making full use of
              technologies, we have succeeded in bringing technologies such as
              ATM, mobile banking, QR code, mixed banking, tablet, e-tailer to
              the members. We have strengthened the internal information system
              according to the capacity of the organization according to the
              competition of the market and the demand of the members. Regular
              distribution of benefits has been done to the members, while the
              members have been given loans and investments in the most
              accessible way, as well as competitive service facilities have
              been provided in savings. We are moving forward in strengthening
              the cooperative campaign through integration. According to the
              principle of cooperative, we have been doing various activities of
              corporate social responsibility.
            </p>

            <p className="text-justify">
              Finally, I express my commitment to establish our organization as
              a leading organization in the future and play a decisive role in
              the development and promotion of the entire cooperative sector.
              thank you Hail Co-worker!!!
            </p>

            <p className="font-bold my-4">Mr John Doe, Chairperson</p>
          </div>
        </div>
      </div>
    </main>
  );
}
