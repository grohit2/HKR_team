"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Cta1() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Kickstart Your Design Journey
            </h2>
            <p className="md:text-md">
              Join our community of creative thinkers and launch your UI-UX
              design career today!
            </p>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              <a href="https://forms.gle/FRnfmNcaAUhkkq2b6" target="_blank" rel="noopener noreferrer">
                <Button title="Apply">Apply</Button>
              </a>
              <Button title="Learn More" variant="secondary">
                Learn More
              </Button>
            </div>
          </div>
          <div>
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
              className="w-full rounded-image object-cover"
              alt="Relume placeholder image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
