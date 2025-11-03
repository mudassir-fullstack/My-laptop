"use client";

import { useEducation } from "@/hooks/useEducation";

const EducationPage = () => {
  const { data, loading, error } = useEducation();

  if (loading) return <p className="text-center mt-10">Loading education...</p>;
  if (error) return <p className="text-center text-red-500 mt-10">{error}</p>;

  return (
    <section id="skills" className="overflow-x-hidden pt-6 pb-20 md:pb-52 fade-in-up">
      <h2>Education</h2>

      <div className=" space-y-6">
        {data.map((edu, index) => (
          <div
            key={edu._id || index}
            className="
              grid grid-cols-1 sm:grid-cols-3 md:grid-cols-12 
              gap-4 items-start  pb-4
            "
          >
            {/* 🎓 Degree & Institution */}
            <div className="col-span-12 md:col-span-9">
              <h3 className="font-semibold text-lg text-(--text-color)">
                {edu.degree}
              </h3>
              <h6 className=" text-sm md:text-base">
                {edu.institution}{" "}
                {edu.grade && (
                  <span className="font-medium">
                    {" - "}
                    ({edu.grade})
                  </span>
                )}
              </h6>
            </div>

            {/* 📅 Duration */}
            <div className="col-span-12 md:col-span-3 text-sm md:text-right font-medium ">
              <p>
                {edu.startDate?.split("-")[0]} —{" "}
                {edu.isCurrent ? "Present" : edu.endDate?.split("-")[0]}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EducationPage;
