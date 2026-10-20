import { ExternalLink, Info } from "lucide-react";

export const ProjectImagePlaceholder = () => (
  <div
    aria-label="Project image placeholder"
    className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-dashed border-zinc-300 bg-zinc-100 dark:border-white/15 dark:bg-zinc-900"
  >
    <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(16,185,129,0.09)_25%,transparent_25%),linear-gradient(225deg,rgba(16,185,129,0.09)_25%,transparent_25%),linear-gradient(45deg,rgba(16,185,129,0.09)_25%,transparent_25%),linear-gradient(315deg,rgba(16,185,129,0.09)_25%,transparent_25%)] bg-[length:26px_26px] bg-[position:13px_0,13px_0,0_0,0_0] opacity-70" />
  </div>
);

const ProjectCard = ({ project, onAboutProject, isSelected }) => (
  <article className="project-card flex h-full flex-col rounded-3xl border border-zinc-200 bg-white p-4 shadow-sm dark:border-white/10 dark:bg-white/[0.055]">
    <div className="project-preview relative aspect-[16/10] overflow-hidden rounded-2xl border border-zinc-200 bg-stone-50">
      {project.image ? (
        <img
          src={project.image}
          alt={project.imageAlt || `${project.name} project preview`}
          className="h-full w-full object-contain"
          loading="lazy"
        />
      ) : (
        <ProjectImagePlaceholder />
      )}
    </div>
    <div className="flex flex-1 flex-col p-2 pt-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="mt-3 font-display text-2xl font-bold text-zinc-950 dark:text-white">
            {project.name}
          </h3>
          <p className="mt-1 text-sm font-semibold text-zinc-500 dark:text-zinc-400">
            {project.type}
          </p>
        </div>
      </div>

      <p className="mt-4 leading-7 text-zinc-600 dark:text-zinc-300">{project.description}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="project-stack-badge rounded-full px-3 py-1.5 text-xs font-bold"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="mt-auto flex w-full flex-wrap items-center justify-between gap-3 pt-7">
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="focus-ring inline-flex w-fit items-center gap-2 rounded-full border border-zinc-300 px-5 py-3 text-sm font-bold text-zinc-800 dark:border-white/10 dark:text-white"
          >
            Live <ExternalLink size={17} />
          </a>
        )}
        <button
          type="button"
          onClick={() => onAboutProject(project)}
          aria-haspopup="dialog"
          aria-expanded={isSelected}
          aria-controls="project-details"
          className="focus-ring inline-flex w-fit items-center gap-2 rounded-full border border-zinc-300 px-5 py-3 text-sm font-bold text-zinc-800 dark:border-white/10 dark:text-white"
        >
          About project <Info size={16} />
        </button>
      </div>
    </div>
  </article>
);

export default ProjectCard;
