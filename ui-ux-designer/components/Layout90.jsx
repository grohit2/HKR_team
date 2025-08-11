"use client";

import React from "react";

export function Layout90() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 grid grid-cols-1 items-start justify-between gap-x-12 gap-y-8 md:mb-18 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:mb-20 lg:gap-x-20">
          <h3 className="text-4xl leading-[1.2] font-bold md:text-5xl lg:text-6xl">
            Essential Skills and Qualifications for a Successful UI-UX Design
            Career
          </h3>
          <p className="md:text-md">
            A successful career in UI-UX Design requires a blend of creativity
            and technical skills. Key qualifications include proficiency in
            design tools like Sketch and Adobe XD, as well as a strong
            understanding of user research and usability testing. Additionally,
            effective communication and collaboration skills are essential for
            working with cross-functional teams.
          </p>
        </div>
        <img
          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
          className="w-full rounded-image object-cover"
          alt="Relume placeholder image"
        />
      </div>
    </section>
  );
}
