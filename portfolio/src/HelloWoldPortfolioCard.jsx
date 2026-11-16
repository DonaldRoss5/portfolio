import { useState } from "react";

function HelloWorldPortfolioCard() {
  const project = {
    name: "Hello World Portfolio",
    description: "A card page that loads its list from my own data.",
    liveUrl: "https://donaldross5.github.io/hello-world-2026/",
    repoUrl:
      "https://github.com/DonaldRoss5/hello-world-2026/deployments/github-pages",
  };

  const [likes, setLikes] = useState(0);
  const [open, setOpen] = useState(false);

  const addLike = () => {
    setLikes(likes + 1);
  };

  const toggleOpen = () => {
    setOpen(!open);
  };

  let text = project.description;
  if (open) {
    text = project.description + " " + project.details;
  }

  let label = "Show More";
  if (open) {
    label = "Show Less";
  }

  return (
    <article>
      <h2>{project.name}</h2>
      <p>{text}</p>
      <button onClick={toggleOpen}>{label}</button>
      <p>
        <a href={project.liveUrl}>https://donaldross5.github.io/hello-world-2026/</a> ·{" "}
        <a href={project.repoUrl}>
          https://github.com/DonaldRoss5/hello-world-2026/deployments/github-pages
        </a>
      </p>
      <button onClick={addLike}>Like {likes}</button>
    </article>
  );
}

export default HelloWorldPortfolioCard;
