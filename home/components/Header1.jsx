"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Header1() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16 lg:grid-cols-2 lg:items-center">
          <div>
            <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">
              Land a Full-Time Role You’ll Love
            </h1>
            <p className="md:text-md">
              Join over 2,000 successful placements at more than 500 leading US
              companies. Discover opportunities that align with your career
              aspirations and values.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              <a href="https://forms.gle/FRnfmNcaAUhkkq2b6" target="_blank" rel="noopener noreferrer">
                <Button title="Apply">Apply</Button>
              </a>
              <Button 
                title="Learn More" 
                variant="secondary"
                onClick={() => window.open('https://scarlet-knave-234.notion.site/Aspire-EASE-Unlock-Your-Career-Potential-24f02cd76a2180649a38d3310630ea69', '_blank')}
              >
                Learn More
              </Button>
            </div>
          </div>
          <div>
            <video
              src="/career-success-hero-animation.mp4"
              className="w-full rounded-image object-cover"
              autoPlay
              loop
              muted
              playsInline
              alt="Career success animation"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
