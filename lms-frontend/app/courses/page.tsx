"use client";  // Ensure this is at the top

import { useEffect, useState } from "react";

const API_URL = "http://localhost:8000/api/courses";

interface Course {
  id: number;
  title: string;
  description: string;
}

export default function Courses() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setCourses(data);
        setLoading(false);

        // **Set the page title dynamically based on the number of courses**
        if (data.length > 0) {
          document.title = `LMS - ${data.length} Courses Available`;
        } else {
          document.title = "LMS - No Courses Available";
        }
      })
      .catch((err) => {
        console.error("Error fetching courses:", err);
        setError("Failed to load courses");
        setLoading(false);
        document.title = "LMS - Error Loading Courses"; // Update title on error
      });
  }, []);

  if (loading) return <p>Loading courses...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Courses</h1>
      {courses.length > 0 ? (
        <ul className="mt-4 space-y-4">
          {courses.map((course) => (
            <li key={course.id} className="border p-4 rounded-md">
              <h2 className="text-lg font-semibold">{course.title}</h2>
              <p className="text-gray-600">{course.description}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500 mt-4">No courses available.</p>
      )}
    </div>
  );
}
