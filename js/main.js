document.querySelector("button").addEventListener("click", async () => {
  try {
    const res = await fetch(
      `http://localhost:8000/rappers/${document
        .querySelector("input")
        .value.toLowerCase()}`
    );
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
});
