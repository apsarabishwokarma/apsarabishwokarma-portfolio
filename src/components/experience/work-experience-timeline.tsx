import { experienceData } from "@/components/experience/experience-data";
import { motion } from "framer-motion";

export default function WorkExperienceTimeline() {
  const timelineEntries = experienceData.flatMap((company) =>
    company.roles.map((role) => ({
      company: company.company,
      companyTenure: company.tenure,
      companyLocation: company.location,
      ...role,
    }))
  );

  return (
    <div className="mt-20">
      <h3 className="text-2xl lg:text-3xl font-bold text-white mb-10 text-center">
        Work Experience
      </h3>

      <div className="relative mx-auto max-w-5xl">
        <div className="absolute left-3 top-0 h-full w-px bg-gradient-to-b from-emerald-400/80 via-emerald-300/40 to-transparent md:left-1/2" />

        <div className="space-y-8">
          {timelineEntries.map((entry, index) => (
            <motion.div
              key={`${entry.company}-${entry.title}-${entry.date}`}
              className="relative grid grid-cols-1 md:grid-cols-2 md:gap-12"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{
                opacity: 1,
                y: 0,
                x: index % 2 === 0 ? [0, -6, 0] : [0, 6, 0],
              }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.45,
                delay: index * 0.08,
                ease: "easeOut",
              }}
            >
              <span className="absolute left-3 top-6 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-emerald-400 ring-4 ring-emerald-400/20 md:left-1/2" />

              <div
                className={`md:px-2 ${
                  index % 2 === 0 ? "md:col-start-1" : "md:col-start-2"
                }`}
              >
                <article className="ml-10 rounded-2xl border border-white/10 bg-white/[0.03] p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] md:ml-0">
                  <p className="text-xs uppercase tracking-widest text-emerald-300/90">
                    {entry.date}
                    {entry.duration ? ` • ${entry.duration}` : ""}
                  </p>
                  <h4 className="mt-2 text-lg font-semibold text-white">
                    {entry.title}
                  </h4>
                  {entry.type ? (
                    <p className="text-sm text-neutral-300">{entry.type}</p>
                  ) : null}
                  <p className="mt-1 text-sm text-neutral-300">
                    {entry.company} • {entry.companyTenure}
                  </p>
                  {entry.location || entry.companyLocation ? (
                    <p className="text-sm text-neutral-400">
                      {entry.location ?? entry.companyLocation}
                    </p>
                  ) : null}
                  {entry.description ? (
                    <p className="mt-3 text-sm leading-6 text-neutral-300">
                      {entry.description}
                    </p>
                  ) : null}
                  <p className="mt-3 text-sm font-medium text-emerald-300">
                    {entry.skills}
                  </p>
                </article>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
