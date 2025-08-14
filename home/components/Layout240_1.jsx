"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout240_1() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="rb-12 mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          <h2 className="text-4xl leading-[1.2] font-bold md:text-5xl lg:text-6xl">
            Explore Our Diverse Range of Specialized Roles for Your Team
          </h2>
        </div>
        <div className="grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
          <div className="flex w-full flex-col items-center text-center">
            <div className="rb-6 mb-6 md:mb-8">
              <video
                src="/onboarding-support-process.mp4"
                className="rounded-image w-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                alt="Find the perfect fit for your remote workforce video"
              />
            </div>
            <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
              Find the Perfect Fit for Your Remote Workforce
            </h3>
            <p>
              From Data Engineers to Product Designers, we cover all
              specialties.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button iconRight={<RxChevronRight />} variant="link" size="link">
                Learn More
              </Button>
            </div>
          </div>
          <div className="flex w-full flex-col items-center text-center">
            <div className="rb-6 mb-6 md:mb-8">
              <video
                src="/team-potential-expert-talent.mp4"
                className="rounded-image w-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                alt="Unlock your team's potential with expert talent video"
              />
            </div>
            <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
              Unlock Your Team's Potential with Expert Talent
            </h3>
            <p>
              Access top-tier professionals who can drive your projects forward.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button iconRight={<RxChevronRight />} variant="link" size="link">
                Join Us
              </Button>
            </div>
          </div>
          <div className="flex w-full flex-col items-center text-center">
            <div className="rb-6 mb-6 md:mb-8">
              <video
                src="/tailored-solutions-every-role.mp4"
                className="rounded-image w-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                alt="Tailored solutions for every role in your organization video"
              />
            </div>
            <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
              Tailored Solutions for Every Role in Your Organization
            </h3>
            <p>
              We provide customized talent solutions to meet your unique needs.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button iconRight={<RxChevronRight />} variant="link" size="link">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
