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
  location: string;
  description: string;
};

const exampleLocations = [
  "Warszawa, Polska",
  "Kraków, Polska",
  "Berlin, Niemcy",
  "Dolor City",
  "Lorem Town",
];

const exampleDescriptions = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sodales. Curabitur blandit tempus porttitor. Maecenas faucibus mollis interdum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Curabitur blandit tempus porttitor. Maecenas faucibus mollis interdum. Curabitur blandit tempus porttitor. Maecenas faucibus mollis interdum.",
  "Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Curabitur blandit tempus porttitor. Maecenas faucibus mollis interdum. Curabitur blandit tempus porttitor. Maecenas faucibus mollis interdum.Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Curabitur blandit tempus porttitor. Maecenas faucibus mollis interdum. Curabitur blandit tempus porttitor. Maecenas faucibus mollis interdum.",
  "Curabitur blandit tempus porttitor. Maecenas faucibus mollis interdum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Curabitur blandit tempus porttitor. Maecenas faucibus mollis interdum. Curabitur blandit tempus porttitor. Maecenas faucibus mollis interdum. Curabitur blandit tempus porttitor. Maecenas faucibus mollis interdum.",
  "Sed posuere consectetur est at lobortis. Etiam porta sem malesuada magna. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Curabitur blandit tempus porttitor. Maecenas faucibus mollis interdum. Curabitur blandit tempus porttitor. Maecenas faucibus mollis interdum.",
  "Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Curabitur blandit tempus porttitor. Maecenas faucibus mollis interdum. Curabitur blandit tempus porttitor. Maecenas faucibus mollis interdum.",
];

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

  return Object.entries(projectMap).map(([title, gallery], index) => ({
    title,
    gallery: gallery.sort(),

    location: exampleLocations[index % exampleLocations.length],
    description: exampleDescriptions[index % exampleDescriptions.length],
  }));
};

export const projectsData = getProjectsData();
