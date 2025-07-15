const images = import.meta.glob(
  "../assets/images/projects/*/*.{jpg,jpeg,png}",
  {
    eager: true,
    import: "default",
  }
);

type Project = {
  title: string;
  gallery: string[];
};

export const getProjectsData = (): Project[] => {
  const projectMap: Record<string, string[]> = {};

  for (const [path, imageUrl] of Object.entries(images)) {
    const match = path.match(/projects\/(.+?)\//);
    if (!match) continue;

    const folderName = match[1];

    if (!projectMap[folderName]) {
      projectMap[folderName] = [];
    }

    projectMap[folderName].push(imageUrl as string);
  }

  return Object.entries(projectMap).map(([title, gallery]) => ({
    title,
    gallery: gallery.sort(),
  }));
};

export const projectsData = getProjectsData();
