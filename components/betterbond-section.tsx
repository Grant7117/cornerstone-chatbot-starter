"use client";
import Image from "next/image";
import { Button } from "./ui/button";

export default function BetterBondSection() {
  return (
    <section id="betterbond" className="bg-white py-20 px-4">
      <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-12 items-center">
        {/* Left Column: Information */}
        <div className="text-center md:text-left">
          <Image
            src="/images/betterbond-logo.png"
            alt="BetterBond - our name says it all"
            width={240}
            height={80}
            className="mx-auto md:mx-0 mb-6"
          />
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Simplify Your Home Loan Application
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Cornerstone on Arum has partnered with <strong>BetterBond</strong> to assist
            buyers with obtaining pre-approvals and the best available home loan rates
            from all major South African banks.
          </p>
          <p className="text-gray-600 leading-relaxed">
            BetterBond will guide you through the process, ensuring a smooth and
            efficient bond application, free of charge.
          </p>
        </div>

        {/* Right Column: Call to Action */}
        <div className="bg-gray-50 p-8 rounded-2xl shadow-lg text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            Get Pre-approved Today
          </h3>
          <p className="text-gray-600 mb-6">
            Find out what you can afford in minutes. Click below to start your
            pre-approval process with BetterBond.
          </p>
          <a
            href="https://digiapp.betterbond.co.za/YolandaKensley/38613/129015"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" className="w-full md:w-auto">
              Apply for a Home Loan
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}