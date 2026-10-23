import { useEffect, useRef } from "react";
import { Check, Lightbulb, X } from "lucide-react";

const DetailText = ({ item }) => {
  const topicEnd = item.indexOf(":");
  if (topicEnd === -1) return item;

  return (
    <>
      <strong className="font-bold text-zinc-800">{item.slice(0, topicEnd + 1)}</strong>
      {item.slice(topicEnd + 1)}
    </>
  );
};

const DetailList = ({ items }) => (
  <ul className="mt-5 space-y-3">
    {items.map((item, index) => (
      <li key={item} className="flex items-start gap-3 text-sm leading-6 text-zinc-600">
        <span className="mt-0.5 w-5 shrink-0 font-bold tabular-nums text-emerald-800" aria-hidden="true">
          {index + 1}.
        </span>
        <span><DetailText item={item} /></span>
      </li>
    ))}
  </ul>
);

const ProjectDetailsSection = ({ project, onClose }) => {
  const closeButtonRef = useRef(null);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    const previouslyFocused = document.activeElement;
    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      previouslyFocused?.focus?.();
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-zinc-950/25 p-4 backdrop-blur-[2px]"
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        id="project-details"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-details-title"
        className="project-details-section project-details-scroll relative max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-[8px] border border-lime-200 bg-[#F8FAF5]/90 shadow-2xl backdrop-blur-xl"
      >
        <div className="sticky top-0 z-20 flex justify-end border-b border-zinc-200/70 bg-[#F8FAF5]/90 px-5 py-3 backdrop-blur-xl">
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Close project details"
            className="focus-ring inline-flex items-center gap-2 rounded-full border border-red-200 bg-white/80 px-4 py-2.5 text-sm font-bold text-red-600 transition-colors hover:border-red-300 hover:bg-red-50"
          >
            Close <X size={16} />
          </button>
        </div>
        <div className="container-shell py-8 sm:py-10">
          <div className="max-w-3xl">
            <span className="eyebrow">Project overview</span>
            <h2 id="project-details-title" className="section-title mt-5">
              {project.name}
            </h2>
            <p className="mt-2 text-sm font-semibold text-zinc-500">{project.type}</p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <article className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-lime-100 text-emerald-800">
                  <Check size={19} />
                </span>
                <h3 className="font-display text-xl font-bold text-zinc-950">Key features</h3>
              </div>
              {project.features?.length ? (
                <DetailList items={project.features} />
              ) : (
                <p className="mt-5 text-sm leading-6 text-zinc-500">Project features will be added soon.</p>
              )}
            </article>

            <article className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-lime-100 text-emerald-800">
                  <Lightbulb size={19} />
                </span>
                <h3 className="font-display text-xl font-bold text-zinc-950">Challenges</h3>
              </div>
              {project.challenges?.length ? (
                <DetailList items={project.challenges} />
              ) : (
                <p className="mt-5 text-sm leading-6 text-zinc-500">Project challenges will be added soon.</p>
              )}
            </article>
          </div>

        </div>
      </section>
    </div>
  );
};

export default ProjectDetailsSection;
