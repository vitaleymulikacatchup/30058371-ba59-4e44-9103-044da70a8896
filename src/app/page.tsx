"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Atom, BookOpen, Lightbulb, Zap, Magnet, TreePine, Star } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="background-highlight"
      borderRadius="sharp"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          logoSrc="https://images.pexels.com/photos/33927819/pexels-photo-33927819.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          logoAlt="Xeven Classes Logo"
          brandName="Xeven Classes"
          button={{
            text: "Enroll Now",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Master Physics Class 10 with Xeven Classes"
          description="Comprehensive physics education for Class 10 students with expert guidance, practical experiments, and proven teaching methods"
          tag="Physics Excellence"
          tagIcon={Atom}
          buttons={[
            {
              text: "Start Learning",
              href: "contact"
            },
            {
              text: "View Topics",
              href: "feature"
            }
          ]}
          imageSrc="https://images.pexels.com/photos/8471835/pexels-photo-8471835.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Physics laboratory with Class 10 students conducting experiments"
          imagePosition="right"
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="About Xeven Classes"
          description={[
            "We specialize in making Class 10 Physics engaging and understandable through interactive learning methods.",
            "Our experienced teachers focus on building strong fundamentals while preparing students for board exams and competitive tests."
          ]}
          buttons={[
            {
              text: "Learn More",
              href: "contact"
            }
          ]}
          showBorder={true}
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardTwo
          title="Physics Topics Covered"
          description="Complete Class 10 Physics curriculum with practical understanding and exam preparation"
          tag="Curriculum"
          tagIcon={BookOpen}
          features={[
            {
              title: "Light - Reflection & Refraction",
              description: "Understanding laws of reflection, refraction, mirrors, lenses and their applications in daily life",
              icon: Lightbulb
            },
            {
              title: "Electricity",
              description: "Electric current, potential difference, Ohm's law, resistance and electrical power concepts",
              icon: Zap
            },
            {
              title: "Magnetic Effects of Electric Current",
              description: "Magnetic field, electromagnetic induction, electric motor and generator principles",
              icon: Magnet
            },
            {
              title: "Management of Natural Resources",
              description: "Conservation of resources, sustainable development and environmental protection awareness",
              icon: TreePine
            }
          ]}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardTwo
          title="What Our Students Say"
          description="Success stories from Class 10 students who excelled in Physics"
          tag="Reviews"
          tagIcon={Star}
          testimonials={[
            {
              id: "1",
              name: "Priya Sharma",
              role: "Class 10 Student",
              testimonial: "Xeven Classes made physics so easy to understand. The practical examples helped me score 95% in my board exams!",
              imageSrc: "https://images.pexels.com/photos/3772511/pexels-photo-3772511.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Priya Sharma"
            },
            {
              id: "2",
              name: "Arjun Patel",
              role: "Class 10 Student",
              testimonial: "The teachers explain complex concepts in simple terms. I never thought I could love physics this much!",
              imageSrc: "https://images.pexels.com/photos/4143791/pexels-photo-4143791.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Arjun Patel"
            },
            {
              id: "3",
              name: "Sneha Gupta",
              role: "Class 10 Student",
              testimonial: "Thanks to Xeven Classes, I cleared my physics doubts and gained confidence for competitive exams.",
              imageSrc: "https://images.pexels.com/photos/3768126/pexels-photo-3768126.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Sneha Gupta"
            },
            {
              id: "4",
              name: "Rohit Kumar",
              role: "Class 10 Student",
              testimonial: "The laboratory sessions and practical experiments made learning physics really exciting and memorable.",
              imageSrc: "https://images.pexels.com/photos/8471835/pexels-photo-8471835.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Rohit Kumar"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Join Xeven Classes Today"
          description="Get in touch with us to enroll in our Class 10 Physics program and start your journey towards academic excellence."
          inputs={[
            {
              name: "studentName",
              type: "text",
              placeholder: "Student Name",
              required: true
            },
            {
              name: "parentName",
              type: "text",
              placeholder: "Parent Name",
              required: true
            },
            {
              name: "email",
              type: "email",
              placeholder: "Email Address",
              required: true
            },
            {
              name: "phone",
              type: "tel",
              placeholder: "Phone Number",
              required: true
            }
          ]}
          textarea={{
            name: "message",
            placeholder: "Any questions or specific topics you want to focus on?",
            rows: 4,
            required: false
          }}
          buttonText="Enroll Now"
          imageSrc="https://images.pexels.com/photos/3771074/pexels-photo-3771074.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Physics teacher at classroom blackboard"
          mediaPosition="right"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          columns={[
            {
              title: "Quick Links",
              items: [
                {
                  label: "Home",
                  href: "hero"
                },
                {
                  label: "About Us",
                  href: "about"
                },
                {
                  label: "Physics Topics",
                  href: "feature"
                }
              ]
            },
            {
              title: "Contact Info",
              items: [
                {
                  label: "Enroll Now",
                  href: "contact"
                },
                {
                  label: "Student Reviews",
                  href: "testimonial"
                }
              ]
            }
          ]}
          logoSrc="https://images.pexels.com/photos/33927819/pexels-photo-33927819.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          copyrightText="© 2025 | Xeven Classes - Excellence in Physics Education"
        />
      </div>
    </ThemeProvider>
  );
}