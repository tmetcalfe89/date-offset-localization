document.querySelector("form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const date = new Date(`${document.querySelector("#date").value} ${document.querySelector("#time").value}`);
  const offset = date.getTimezoneOffset();
  const offsetHours = offset / 60;
  console.log(date, offsetHours);
  const response = await fetch("/api/testdate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ date, offsetHours })
  });
  const { date: sDate, offsetHours: sOffsetHours } = await response.json()
  const accidentTime = new Date(new Date(sDate).getTime() + (offsetHours - sOffsetHours) * 3600000);
  console.log(accidentTime);
})