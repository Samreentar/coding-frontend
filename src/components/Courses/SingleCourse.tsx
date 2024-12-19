"use client"; // Required because this is a React component using props

import Image from "next/image"; // Import Next.js Image component
import { Course } from "@/types/course";

interface SingleCourseProps {
  course: Course;
}

const SingleCourse = ({ course }: SingleCourseProps) => {
  return (
    <div className="rounded-lg shadow-md overflow-hidden bg-white">
      <Image
        src={course.image}
        alt={course.title}
        width={400} // Adjust width based on your design
        height={192} // Adjust height proportionately
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{course.title}</h3>
        <p className="text-sm text-gray-600">{course.description}</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {course.tags.map((tag, index) => (
            <span
              key={index}
              className="inline-block bg-gray-200 text-sm px-2 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
        <p className="mt-4 text-xs text-gray-500">
          Published: {course.publishDate}
        </p>
      </div>
    </div>
  );
};

export default SingleCourse;
