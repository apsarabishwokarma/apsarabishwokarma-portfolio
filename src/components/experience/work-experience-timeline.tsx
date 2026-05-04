import { experienceData } from "@/components/experience/experience-data";

export default function WorkExperienceTimeline() {
  return (
    <div className="mt-20">
      <h3 className="text-2xl lg:text-3xl font-bold text-white mb-8">
        Work Experience
      </h3>

      <div className="space-y-8">
        {experienceData.map((company) => (
          <div
            key={company.company}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 lg:p-7"
          >
            <h4 className="text-xl font-semibold text-white">{company.company}</h4>
            <p className="text-neutral-300 mt-1">{company.tenure}</p>
            {company.location ? (
              <p className="text-neutral-400 text-sm">{company.location}</p>
            ) : null}

            <div className="mt-6 space-y-6 border-l border-white/20 pl-5">
              {company.roles.map((role) => (
                <div
                  key={`${company.company}-${role.title}-${role.date}`}
                  className="relative"
                >
                  <span className="absolute -left-[28px] top-2 h-3 w-3 rounded-full bg-emerald-400" />
                  <h5 className="text-lg font-semibold text-white">{role.title}</h5>
                  {role.type ? <p className="text-neutral-400">{role.type}</p> : null}
                  <p className="text-neutral-300 text-sm">
                    {role.date} {role.duration ? `- ${role.duration}` : ""}
                  </p>
                  {role.location ? (
                    <p className="text-neutral-400 text-sm">{role.location}</p>
                  ) : null}
                  {role.description ? (
                    <p className="text-neutral-300 mt-2">{role.description}</p>
                  ) : null}
                  <p className="text-emerald-300 mt-2 text-sm font-medium">
                    {role.skills}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
