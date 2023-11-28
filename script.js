const fetchData = (url) => {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          reject(new Error("Network response was not ok"));
        }
        return response.json();
      })
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
};

const displayCatFacts = () => {
  const catFactsSection = document.getElementById("catFactsSection");

  fetchData("https://meowfacts.herokuapp.com/")
    .then((catFacts) => {
      catFacts.data.forEach((fact) => {
        const factElement = document.createElement("p");
        factElement.className = "cat-fact";
        factElement.textContent = fact;
        catFactsSection.appendChild(factElement);
      });
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
};

displayCatFacts();
