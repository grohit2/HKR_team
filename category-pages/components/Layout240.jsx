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
            Unlock Your Potential with Leading Companies in Your Field
          </h2>
        </div>
        <div className="grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
          <div className="flex w-full flex-col items-center text-center">
            <div className="rb-6 mb-6 md:mb-8">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image"
                className="rounded-image"
              />
            </div>
            <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
              Elevate Your Career with Growth Opportunities and Competitive
              Salaries
            </h3>
            <p>Join us to enhance your skills and achieve your career goals.</p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button iconRight={<RxChevronRight />} variant="link" size="link">
                Learn More
              </Button>
            </div>
          </div>
          <div className="flex w-full flex-col items-center text-center">
            <div className="rb-6 mb-6 md:mb-8">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image"
                className="rounded-image"
              />
            </div>
            <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
              Receive Tailored Support from Your Personal Career Advocate
            </h3>
            <p>
              Get expert guidance to navigate your job search and career path.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <a href="https://forms.gle/FRnfmNcaAUhkkq2b6" target="_blank" rel="noopener noreferrer">
                <Button iconRight={<RxChevronRight />} variant="link" size="link">
                  Sign Up
                </Button>
              </a>
            </div>
          </div>
          <div className="flex w-full flex-col items-center text-center">
            <div className="rb-6 mb-6 md:mb-8">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image"
                className="rounded-image"
              />
            </div>
            <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
              Access Exclusive Job Openings Not Found on Public Job Boards
            </h3>
            <p>
              Discover opportunities that are tailored to your expertise and
              ambitions.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <a href="https://forms.gle/FRnfmNcaAUhkkq2b6" target="_blank" rel="noopener noreferrer">
                <Button iconRight={<RxChevronRight />} variant="link" size="link">
                  Apply Now
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
