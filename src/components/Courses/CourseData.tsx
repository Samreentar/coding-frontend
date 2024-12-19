// Corrected CourseData.tsx
import { Course } from "@/types/course";

const courseData: Course[] = [
  {
    id: 1,
    title: "C++ Programming Course",
    description:
      "Learn C++ programming basics to advanced level. Auto-grade your submissions with our AI system.",
    image: "/images/courses/cpp-course.jpg",
    tags: ["C++", "Programming", "AI Grading"],
    publishDate: "2024",
  },
  {
    id: 2,
    title: "Java Programming Course",
    description:
      "Master Java programming with hands-on projects and AI-based grading for assignments.",
    image: "/images/courses/java-course.jpg",
    tags: ["Java", "Backend", "AI Grading"],
    publishDate: "2024",
  },
  {
    id: 3,
    title: "Python Programming Course",
    description:
      "Explore Python fundamentals to advanced topics with instant grading feedback.",
    image: "/images/courses/python-course.jpg",
    tags: ["Python", "Data Science", "AI Grading"],
    publishDate: "2024",
  },
];

export default courseData;
