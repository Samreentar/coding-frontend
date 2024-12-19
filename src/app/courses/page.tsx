import SingleCourse from "@/components/Courses/SingleCourse";
import courseData from "@/components/Courses/CourseData";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Courses Page | AI Grading System",
  description:
    "Explore courses like C++, Java, Python graded with AI-powered Smart Grader.",
};

const Courses = () => {
  return (
    <>
      {/* Page Header */}
      <Breadcrumb
        pageName="Available Courses"
        description="Select a programming course to upload exam papers and auto-grade student submissions with Smart Grader."
      />

      {/* Courses Section */}
      <section className="pb-[120px] pt-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            {courseData.map((course) => (
              <div
                key={course.id}
                className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3"
              >
                <SingleCourse course={course} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Courses;
