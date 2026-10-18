import { projects as localProjects } from "../data/projects.js";

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL?.replace(/\/$/, "");

// The API can return either an array or an object with a `projects`/`data` array.
export const getProjects = async ({ signal } = {}) => {
  if (!apiBaseUrl) return localProjects;

  try {
    const response = await fetch(`${apiBaseUrl}/api/projects`, { signal });
    if (!response.ok) throw new Error(`Projects request failed (${response.status})`);

    const payload = await response.json();
    const records = Array.isArray(payload) ? payload : payload.projects ?? payload.data;
    if (!Array.isArray(records)) throw new Error("Projects API returned an invalid response");

    return records.map((project) => {
      const image = project.image ?? project.imageUrl ?? "";
      return {
        ...project,
        id: project.id ?? project._id ?? project.slug ?? project.name,
        image: typeof image === "string" ? image : image.url ?? image.secure_url ?? "",
        imageAlt: project.imageAlt ?? `${project.name} project preview`,
        stack: Array.isArray(project.stack) ? project.stack : [],
        features: Array.isArray(project.features) ? project.features : []
      };
    });
  } catch (error) {
    if (error.name === "AbortError") throw error;
    console.error("Could not load projects from the API; showing local project data.", error);
    return localProjects;
  }
};
