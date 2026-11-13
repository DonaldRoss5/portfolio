function PotterHousePortfolioCard() {
  let name = "Potter House";
  let description = "A capstone that loads its page from my own data.";
  let liveUrl = "https://donaldross5.github.io/capstone-level-2-/";
  let repoUrl =
    "https://github.com/DonaldRoss5/capstone-level-2-/deployments/github-pages";
  return (
    <article>
      <h2>{name}</h2>
      <p>{description}</p>
      <p>
        <a href={liveUrl}>"https://donaldross5.github.io/capstone-level-2-/"</a>
        <a href={repoUrl}>
          "https://github.com/DonaldRoss5/capstone-level-2-/deployments/github-pages"
        </a>
      </p>
    </article>
  );
}

export default PotterHousePortfolioCard;
