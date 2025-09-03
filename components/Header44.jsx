"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Header44() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="w-full max-w-lg">
          <p className="mb-3 font-semibold md:mb-4">Explore</p>
          <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">
            Your Dream Job
          </h1>
          <p className="md:text-md">
            Discover exciting opportunities in your field and take the next step
            in your career.
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
      </div>
    </section>
  );
}
