document.querySelector("button").addEventListener("click", async () => {
  try {
    const res = await fetch(
      `https://rap-names-api-six.vercel.app/rappers/${document
        .querySelector("input")
        .value.toLowerCase()}`
    );
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
});
