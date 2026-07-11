import { COPY_PENDING } from "./copy";

/**
 * Shared project shape for /work and /work/[slug].
 *
 * kind:
 * - "public" — open source / GitHub project
 * - "case-study" — concepts-only; codeUrl / recreationUrl usually empty
 *
 * sections: problem → approach → outcome (all Jacob-written)
 */
export const projects = [
  {
    slug: "fitness-tracker",
    title: "Fitness Tracker",
    summary: COPY_PENDING,
    kind: "public",
    tags: ["iOS", "Swift"],
    codeUrl: "https://github.com/gibbonsjacob/fitness_tracker",
    recreationUrl: null,
    sections: {
      problem: COPY_PENDING,
      approach: COPY_PENDING,
      outcome: COPY_PENDING,
    },
  },
  {
    slug: "songs-db",
    title: "songs_db",
    summary: COPY_PENDING,
    kind: "public",
    tags: ["Python", "data"],
    codeUrl: "https://github.com/gibbonsjacob/songs_db",
    recreationUrl: null,
    sections: {
      problem: COPY_PENDING,
      approach: COPY_PENDING,
      outcome: COPY_PENDING,
    },
  },
  {
    slug: "automate-life",
    title: "automate_life",
    summary: COPY_PENDING,
    kind: "public",
    tags: ["automation", "Python"],
    codeUrl: "https://github.com/gibbonsjacob/automate_life",
    recreationUrl: null,
    sections: {
      problem: COPY_PENDING,
      approach: COPY_PENDING,
      outcome: COPY_PENDING,
    },
  },
  {
    slug: "case-study-placeholder",
    title: "Case study (placeholder)",
    summary: COPY_PENDING,
    kind: "case-study",
    tags: ["concepts"],
    codeUrl: null,
    recreationUrl: null,
    sections: {
      problem: COPY_PENDING,
      approach: COPY_PENDING,
      outcome: COPY_PENDING,
    },
  },
];

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug) ?? null;
}

export function getAllProjectSlugs() {
  return projects.map((project) => project.slug);
}
