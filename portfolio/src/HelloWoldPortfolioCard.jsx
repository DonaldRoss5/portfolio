function HelloWorldPortfolioCard() {
  let name = "Hello World Portfolio";
  let description = "A card page that loads its list from my own data.";
  let liveUrl = "https://donaldross5.github.io/hello-world-2026/";
  let repoUrl =
    "https://github.com/DonaldRoss5/hello-world-2026/deployments/github-pages";
  return (
    <article>
      <h2>{name}</h2>
      <p>{description}</p>
      <p>
        <a href={liveUrl}>https://donaldross5.github.io/hello-world-2026/</a> ·{" "}
        <a href={repoUrl}>
          https://github.com/DonaldRoss5/hello-world-2026/deployments/github-pages
        </a>
      </p>
    </article>
  );
}

export default HelloWorldPortfolioCard;
