const europe_berlintime = document.getElementById("europe-berlintime");
const usatime = document.getElementById("usatime");
const romaniatime = document.getElementById("romaniatime");

const updatetime = () => {
  let currentdatetime = new Date();
  usatime.innerHTML = currentdatetime.toLocaleString("en-US", {
    timeZone: "America/Los_Angeles",
  });
  // console.log(usatime.textContent);
  europe_berlintime.innerHTML = currentdatetime.toLocaleString("de-DE", {
    timeZone: "Europe/Berlin",
  });
  // console.log(europe_berlintime.textContent);
  romaniatime.innerHTML = currentdatetime.toLocaleString("ro-RO", {
    timeZone: "Europe/Bucharest",
  });
  // console.log(romaniatime.textContent);
};

// ====================== update time after each and every single second ======================
setInterval(updatetime, 1000);
