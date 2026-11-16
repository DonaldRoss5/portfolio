import { useState } from "react";

function HelloWorldPortfolioCard() {
  let name = "Hello World Portfolio";
  let description = "A card page that loads its list from my own data.";

  let details =
    "I built it in Level 2 to practice click listeners and the counter pattern.";
  let liveUrl = "https://donaldross5.github.io/hello-world-2026/";
  let repoUrl =
    "https://github.com/DonaldRoss5/hello-world-2026/deployments/github-pages";

  const [likes, setLikes] = useState(0);
  const [open, setOpen] = useState(false);

  const addLike = () => {
    setLikes(likes + 1);
  };

  const toggleOpen = () => {
    setOpen(!open);
  };

  let text = description;
  if (open) {
    text = description + " " + details;
  }

  let label = "Show More";
  if (open) {
    label = "Show Less";
  }

  return (
    <article>
      <h2>{name}</h2>
      <p>{text}</p>
      <button onClick={toggleOpen}>{label}</button>
      <p>
        <a href={liveUrl}>https://donaldross5.github.io/hello-world-2026/</a> ·{" "}
        <a href={repoUrl}>
          https://github.com/DonaldRoss5/hello-world-2026/deployments/github-pages
        </a>
      </p>
      <button onClick={addLike}>Like {likes}</button>
    </article>
  );
}

export default HelloWorldPortfolioCard;
