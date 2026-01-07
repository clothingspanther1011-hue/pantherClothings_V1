"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, Heart, Zap, Shield, Truck, Award } from "lucide-react";

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: "Vibe Check Passed",
      description:
        "We don't just make clothes; we curate aesthetic experiences. Every piece is a whole mood.",
    },
    {
      icon: Shield,
      title: "Built Different",
      description:
        "No fast-fashion trash here. We use premium fabrics designed to survive your daily grind.",
    },
    {
      icon: Zap,
      title: "Zero Gatekeeping",
      description:
        "High-end streetwear aesthetics made accessible. We're staying ahead of the trend cycle.",
    },
    {
      icon: Truck,
      title: "Hyper-Speed",
      description:
        "We know you hate waiting. Our logistics are optimized for the fastest possible unboxing.",
    },
  ];

  const stats = [
    { number: "500+", label: "Unique Fits" },
    { number: "10K+", label: "Panther Tribe" },
    { number: "4.9★", label: "Certified Hype" },
    { number: "24/7", label: "Real Human Support" },
  ];

  const milestones = [
    {
      year: "2024",
      title: "The Manifestation",
      description:
        "Panther Clothing started in a dorm room with a mission to kill boring fashion forever.",
    },
    {
      year: "2024",
      title: "The First Drop",
      description:
        "Launched 50+ designs that sold out faster than we imagined. The movement was born.",
    },
    {
      year: "2025",
      title: "Going Viral",
      description:
        "Expanded across India, building a community that values authenticity over everything.",
    },
    {
      year: "Future",
      title: "The Vision",
      description:
        "Continuously redefining the digital fashion landscape. We're just getting started.",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] bg-black overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1523398002811-999ca8dec234?w=1200&q=80"
          alt="Gen Z Streetwear Vibe"
          fill
          className="object-cover opacity-60"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black/90" />

        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 animate-fade-in tracking-tighter">
              PANTHER MOVEMENT.
            </h1>
            <p className="text-lg md:text-xl text-gray-200 animate-slide-up font-medium">
              Curating Main Character Energy since &apos;24
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="relative h-[400px] md:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80"
                  alt="Streetwear Culture"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            </div>

            <div className="order-1 md:order-2">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-[0.3em]">
                The Origin
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-black mt-3 mb-6 tracking-tight">
                Not Your Average <br />
                Clothing Brand
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
                <p>
                  Let&apos;s be real—the world doesn&apos;t need another boring
                  clothing label. Panther was built for the creators, the
                  disruptors, and the ones who refuse to blend in.
                </p>
                <p>
                  We believe your fit is your visual CV. It’s how you tell the
                  world who you are without saying a word. That&apos;s why we
                  obsess over every stitch, ensuring you get that premium feel
                  without the &quot;luxury&quot; gatekeeping.
                </p>
                <p>
                  We&apos;re not just shipping packages; we&apos;re fueling a
                  community of people who dare to stand out. No fluff. No mid
                  fits. Just pure heat.
                </p>
              </div>

              <Link
                href="/products"
                className="mt-8 inline-flex items-center gap-2 bg-black text-white px-10 py-4 rounded-full font-bold hover:bg-gray-900 transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl"
              >
                Secure the Fit
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-6xl font-black mb-2 italic tracking-tighter">
                  {stat.number}
                </div>
                <div className="text-gray-500 text-xs md:text-sm uppercase tracking-widest font-bold">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-[0.3em]">
              The Philosophy
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-black mt-3 tracking-tight">
              Why We Exist
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                >
                  <div className="w-14 h-14 bg-black rounded-2xl flex items-center justify-center mb-6 transform -rotate-6">
                    <Icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-3 italic">
                    {value.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-[0.3em]">
              The Timeline
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-black mt-3 tracking-tight">
              Evolution of the Tribe
            </h2>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-[1px] bg-gray-200" />

            <div className="space-y-12 md:space-y-16">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div
                    className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}
                  >
                    <div className="inline-block bg-gray-100 text-black px-4 py-1 rounded-md text-xs font-black mb-3">
                      {milestone.year}
                    </div>
                    <h3 className="text-2xl font-bold text-black mb-3 italic">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-500 leading-relaxed text-sm md:text-base">
                      {milestone.description}
                    </p>
                  </div>

                  <div className="hidden md:flex items-center justify-center">
                    <div className="w-3 h-3 bg-black rounded-full ring-8 ring-white shadow-sm" />
                  </div>

                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quality Promise */}
      <section className="py-16 md:py-24 bg-zinc-900 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-bold text-gray-500 uppercase tracking-[0.3em]">
                Quality Control
              </span>
              <h2 className="text-4xl md:text-5xl font-black mt-3 mb-6 tracking-tight">
                No Fast Fashion <br />
                Glitches.
              </h2>
              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p>
                  Every drop goes through a brutal quality check. We source
                  heavy-weight cotton and eco-conscious dyes because
                  &quot;disposable&quot; isn&apos;t in our vocabulary.
                </p>
                <p>
                  We don&apos;t just care about the clothes—we care about the
                  experience. Easy returns, zero-hassle exchanges, and a support
                  team that actually speaks your language.
                </p>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center gap-2 bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-all duration-300"
                >
                  Shop the Drop
                </Link>
                <a
                  href="https://wa.me/7084721011"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-zinc-800 text-white px-8 py-4 rounded-full font-bold hover:bg-zinc-700 transition-all duration-300"
                >
                  <Phone size={18} />
                  Hit Us Up
                </a>
              </div>
            </div>

            <div className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
              <Image
                src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&q=80"
                alt="Detailed Streetwear Texture"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Award className="w-12 h-12 mx-auto mb-8 text-black" />
          <h2 className="text-5xl md:text-6xl font-black text-black mb-6 tracking-tighter">
            JOIN THE <br className="md:hidden" /> PANTHER TRIBE
          </h2>
          <p className="text-xl text-gray-500 mb-10 max-w-2xl mx-auto font-medium">
            Be the first to know about secret drops, exclusive collabs, and
            community events. No spam, just heat.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/products"
              className="inline-flex items-center justify-center gap-2 bg-black text-white px-10 py-5 rounded-full font-bold hover:bg-zinc-900 transition-all duration-300 shadow-2xl"
            >
              Start Shopping
            </Link>
            <a
              href="https://wa.me/7084721011?text=Hi! I want to join the movement"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white text-black border-2 border-black px-10 py-5 rounded-full font-bold hover:bg-black hover:text-white transition-all duration-300"
            >
              Contact Crew
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
