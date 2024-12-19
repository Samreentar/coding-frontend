import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page | Automated Grading System for Programming Courses",
  description:
    "Learn more about the Automated Grading System, a platform designed to streamline grading, feedback, and report generation for programming assignments.",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Page"
        description="Our Automated Grading System for Programming Courses simplifies the grading process for teachers and students. It allows teachers to upload exam papers, automatically evaluates student submissions, and provides timely feedback and reports to enhance learning outcomes."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
