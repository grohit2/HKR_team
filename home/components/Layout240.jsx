"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout240() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="rb-12 mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          <h2 className="text-4xl leading-[1.2] font-bold md:text-5xl lg:text-6xl">
            Experience a Seamless Journey to Your Dream Job with Us
          </h2>
        </div>
        <div className="grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
          <div className="flex w-full flex-col items-center text-center">
            <div className="rb-6 mb-6 md:mb-8">
              <video
                src="/success-path-simple-effective.mp4"
                className="rounded-image w-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                alt="Your path to success starts here video"
              />
            </div>
            <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
              Your Path to Success Starts Here: Simple and Effective
            </h3>
            <p>
              Apply once, connect with top companies, and let us handle the
              rest.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button iconRight={<RxChevronRight />} variant="link" size="link">
                Apply
              </Button>
            </div>
          </div>
          <div className="flex w-full flex-col items-center text-center">
            <div className="rb-6 mb-6 md:mb-8">
              <video
                src="/company-hiring-process.mp4"
                className="rounded-image w-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                alt="Company hiring process video"
              />
            </div>
            <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
              Meet Vetted Companies Ready to Hire Talented Professionals Like
              You
            </h3>
            <p>Engage with employers who value your skills and experience.</p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button iconRight={<RxChevronRight />} variant="link" size="link">
                Connect
              </Button>
            </div>
          </div>
          <div className="flex w-full flex-col items-center text-center">
            <div className="rb-6 mb-6 md:mb-8">
              <video
                src="/onboarding-support-process.mp4"
                className="rounded-image w-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                alt="Onboarding support process video"
              />
            </div>
            <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
              We Negotiate and Support Your Onboarding for a Smooth Transition
            </h3>
            <p>
              From offer to onboarding, we ensure a hassle-free experience for
              you.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button iconRight={<RxChevronRight />} variant="link" size="link">
                Join
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
