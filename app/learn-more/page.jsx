"use client";

import React from "react";
import { Button } from "@relume_io/relume-ui";

export default function LearnMore() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-[5%] py-8">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Land a Full-Time Role You'll Love
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl leading-relaxed">
            Here's how our proven process helps you discover opportunities that align with your career aspirations and values.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-[5%] py-16">
        
        {/* Introduction */}
        <div className="mb-16">
          <p className="text-lg text-gray-900 mb-6 leading-relaxed">
            The easiest way to accelerate your career is with a dedicated team that understands your goals — one that's committed to your success and has the network to make it happen. You also need access to opportunities that 80% of candidates never see.
          </p>
          
          <p className="text-lg text-gray-900 leading-relaxed">
            <a href="#our-process" className="text-blue-600 hover:text-blue-800 underline">Our proven process</a> when combined with exclusive access is the fastest way to land your dream role.
          </p>
        </div>

        {/* Why Choose Us Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Why work with HKR Team?</h2>
          
          <div className="space-y-8">
            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Join 2,000+ Successful Placements at 500+ Leading US Companies
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Our track record speaks for itself. We've successfully placed over 2,000 professionals at top-tier companies across the United States, from Fortune 500 enterprises to innovative startups.
              </p>
            </div>

            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Discover Opportunities That Align with Your Values
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We don't just match skills to job descriptions. We understand what matters to you — company culture, growth opportunities, work-life balance, and career trajectory.
              </p>
            </div>

            <div className="border-l-4 border-purple-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Access Exclusive Job Openings
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Through our extensive network of hiring managers and C-level executives, you'll have access to roles that are never posted publicly — giving you a significant competitive advantage.
              </p>
            </div>

            <div className="border-l-4 border-orange-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Get Your Personal Recruiter Within 24 Hours
              </h3>
              <p className="text-gray-700 leading-relaxed">
                From the moment you join, you'll have a dedicated recruiter who understands your background, goals, and preferences. They'll work tirelessly to find opportunities that are perfect for you.
              </p>
            </div>

            <div className="border-l-4 border-teal-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Join a Thriving Community of Professionals
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Beyond job placement, you become part of a network of successful professionals who support each other's continued growth and success.
              </p>
            </div>
          </div>
        </div>

        {/* Our Process */}
        <div id="our-process" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Your Path to Success Starts Here</h2>
          
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-8">
            <p className="text-lg text-gray-900 leading-relaxed mb-6">
              At HKR Team, we approach job search with a software-first, analyst-driven strategy to get you the job you want—faster. Every day, we push the needle forward, constantly improving our methods based on your feedback.
            </p>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <p className="text-blue-900 font-semibold">
                Results that speak for themselves: In just 6 months, we've boosted our candidate satisfaction from 60% to 95%, and we're still aiming higher.
              </p>
            </div>
          </div>

          <ol className="mt-8 space-y-6">
            <li className="flex items-start">
              <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold mr-4 mt-1">1</span>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Apply once, connect with top companies</h3>
                <p className="text-gray-700">Submit your information once, and we'll match you with multiple opportunities that fit your criteria.</p>
              </div>
            </li>
            
            <li className="flex items-start">
              <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold mr-4 mt-1">2</span>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Let us handle the introductions</h3>
                <p className="text-gray-700">We'll present you to hiring managers and facilitate the initial connections.</p>
              </div>
            </li>
            
            <li className="flex items-start">
              <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold mr-4 mt-1">3</span>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">We support you through negotiation and onboarding</h3>
                <p className="text-gray-700">From offer negotiation to your first day, we ensure a smooth transition to your new role.</p>
              </div>
            </li>
          </ol>
        </div>

        {/* CTA */}
        <div className="text-center bg-gray-50 border border-gray-200 rounded-lg p-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to land your dream job?
          </h3>
          <p className="text-lg text-gray-700 mb-8">
            Let's make your career goals a reality.
          </p>
          
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <Button 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-semibold w-full sm:w-auto"
            >
              Apply Now
            </Button>
            <Button 
              variant="secondary"
              className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 text-lg font-semibold w-full sm:w-auto"
              onClick={() => window.history.back()}
            >
              Back to Home
            </Button>
          </div>
        </div>

        {/* Success Stories */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Success Stories</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  S
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Sarah M.</p>
                  <p className="text-sm text-gray-600">Software Engineer at Google</p>
                </div>
              </div>
              <p className="text-gray-700 italic leading-relaxed">
                "HKR Team helped me land my dream role at Google in just 3 weeks. Their personalized approach and exclusive access to opportunities made all the difference."
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  M
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Michael R.</p>
                  <p className="text-sm text-gray-600">Product Manager at Meta</p>
                </div>
              </div>
              <p className="text-gray-700 italic leading-relaxed">
                "The dedicated support and exclusive opportunities exceeded my expectations. The team truly understands what candidates need to succeed."
              </p>
            </div>
          </div>
        </div>

        {/* Published Date */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            <span className="font-medium">Published Date:</span> August 14, 2025
          </p>
        </div>

      </div>
    </div>
  );
}