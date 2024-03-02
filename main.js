const indiatime = document.getElementById("indiatime");
const usatime = document.getElementById("usatime");
const romaniatime = document.getElementById("romaniatime");

const updatetime = () => {
    let currentdatetime = new Date();
    usatime.innerHTML = currentdatetime.toLocaleString("en-US", {
        timeZone: "America/Los_Angeles",
    })
    console.log(usatime.textContent);
}

// ====================== update time after each and every single second ======================
setInterval(updatetime, 1000);