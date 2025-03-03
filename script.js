document.addEventListener("DOMContentLoaded", function () {
  let ctx = document.getElementById("donutChart_3").getContext("2d");

  let dataValues = [100, 60, 40]; // JOB, LOST, ALIVE
  let total = dataValues.reduce((a, b) => a + b, 0);

  document.getElementById("totalValue").innerText = total;

  new Chart(ctx, {
      type: "doughnut",
      data: {
          labels: ["JOB", "LOST", "ALIVE"],
          datasets: [{
              data: dataValues,
              backgroundColor: ["#008000", "#D70000", "#E67E22"],
              borderWidth: 1
          }]
      },
      options: {
          cutout: "70%",
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
              legend: { display: false }
          }
      }
  });
});

let target = 235;
let orderBooked = 156;

// Calculate yet to achieve
let yetToAchieve = target - orderBooked;

// Update the HTML content
document.getElementById("yetToAchieve").innerText = yetToAchieve;


document.addEventListener("DOMContentLoaded", function () {
  let ctx2 = document.getElementById("barChart").getContext("2d");

  let departments = ["INC", "EHS", "PV", "HEX", "FMC", "DAS", "SKID"];
  let bookedValues = [3, 9, 13, 13, 11, 14, 13]; // Actual Booking
  let targetValues = [5, 3, 2, 1, 2, 5, 2]; // Target Values

  // Assign color dynamically: Green if booked >= target, else Red
  let bookedColors = bookedValues.map((value, index) =>
      value >= targetValues[index] ? "green" : "red"
  );

  // Determine Y-axis max value
  let maxBooked = Math.max(...bookedValues);
  let maxTarget = Math.max(...targetValues);
  let yMax = maxBooked > maxTarget ? maxBooked + 1 : undefined; // If booked is higher, set yMax

  new Chart(ctx2, {
      type: "bar",
      data: {
          labels: departments,
          datasets: [
              {
                  label: "Booked", // Hide this from the legend
                  data: bookedValues,
                  backgroundColor: bookedColors,
              },
              {
                  label: "Target", // Keep only this in the legend
                  data: targetValues,
                  backgroundColor: "black"
              }
          ]
      },
      options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
              y: {
                  beginAtZero: true,
                  suggestedMax: yMax, // Set max value dynamically
                  title: {
                      display: true,
                      text: "ORDER BOOKED"
                  }
              }
          },
          plugins: {
              legend: {
                  position: "top",
                  labels: {
                      filter: function (legendItem) {
                          return legendItem.text !== "Booked"; // Hide 'Booked' from legend
                      }
                  }
              },
              datalabels: {
                  anchor: "center", // Position inside bar
                  align: "center", // Center align text
                  color: "white", // Ensure text is readable
                  font: {
                      weight: "bold",
                      size: 14
                  }
              }
          }
      },
      plugins: [ChartDataLabels] // Register the datalabels plugin
  });
});


document.addEventListener("DOMContentLoaded", function () {
  let ctx3 = document.getElementById("barChart_2").getContext("2d");

  let departments = ["Apr/25", "May/25", "Jun/25", "Jul/25", "Aug/25", "Sep/25", "Oct/25", "Nov/25", "Dec/25", "Jan/26","Feb/26","Mar/26"];
  let bookedValues = [3, 9, 13, 13, 11, 14, 13, 13, 13, 11, 14, 13]; // Actual Booking
  let targetValues = [5, 3, 2, 1, 2, 5, 2, 2, 1, 2, 5, 2]; // Target Values

  // Assign color dynamically: Green if booked >= target, else Red
  let bookedColors = bookedValues.map((value, index) =>
      value >= targetValues[index] ? "green" : "red"
  );

  // Determine Y-axis max value
  let maxBooked = Math.max(...bookedValues);
  let maxTarget = Math.max(...targetValues);
  let yMax = maxBooked > maxTarget ? maxBooked + 1 : undefined; // If booked is higher, set yMax

  new Chart(ctx3, {
      type: "bar",
      data: {
          labels: departments,
          datasets: [
              {
                  label: "Booked", // Hide this from the legend
                  data: bookedValues,
                  backgroundColor: bookedColors,
              },
              {
                  label: "Target", // Keep only this in the legend
                  data: targetValues,
                  backgroundColor: "black"
              }
          ]
      },
      options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
              y: {
                  beginAtZero: true,
                  suggestedMax: yMax, // Set max value dynamically
                  title: {
                      display: true,
                      text: "ORDER BOOKED"
                  }
              }
          },
          plugins: {
              legend: {
                  position: "top",
                  labels: {
                      filter: function (legendItem) {
                          return legendItem.text !== "Booked"; // Hide 'Booked' from legend
                      }
                  }
              },
              datalabels: {
                  anchor: "center", // Position inside bar
                  align: "center", // Center align text
                  color: "white", // Ensure text is readable
                  font: {
                      weight: "bold",
                      size: 14
                  }
              }
          }
      },
      plugins: [ChartDataLabels] // Register the datalabels plugin
  });
});

document.addEventListener("DOMContentLoaded", function () {
    loadTableData();
});

let tableData = [
    { id: 1, person: "Aravinthan", category: "General", parameter: "Total", offer: 21, major: 21, minor: 21, crf: 21, technical: 21, budget: 21, job: 21 },
    { id: 1, person: "Aravinthan", category: "Performance", parameter: "Ontime", offer: "15 (90%)", major: "15 (90%)", minor: "15 (90%)", crf: "15 (90%)", technical: "15 (90%)", budget: "15 (90%)", job: "15 (90%)" },
    { id: 2, person: "Ragul", category: "Pending", parameter: "Within Due", offer: 5, major: 5, minor: 5, crf: 5, technical: 5, budget: 5, job: 5 },
];

function loadTableData() {
    let tableBody = document.getElementById("tableBody");
    let personFilter = document.getElementById("personFilter");
    let categoryFilter = document.getElementById("categoryFilter");
    let parameterFilter = document.getElementById("parameterFilter");

    // Populate table
    tableBody.innerHTML = "";
    tableData.forEach(row => {
        let tr = document.createElement("tr");
        tr.dataset.person = row.person;
        tr.dataset.category = row.category;
        tr.dataset.parameter = row.parameter;

        tr.innerHTML = `
            <td>${row.id}</td>
            <td>${row.person}</td>
            <td>${row.category}</td>
            <td>${row.parameter}</td>
            <td>${row.offer}</td>
            <td>${row.major}</td>
            <td>${row.minor}</td>
            <td>${row.crf}</td>
            <td>${row.technical}</td>
            <td>${row.budget}</td>
            <td>${row.job}</td>
        `;
        tableBody.appendChild(tr);
    });

    // Populate filters dynamically
    populateFilter(personFilter, "person");
    populateFilter(categoryFilter, "category");
    populateFilter(parameterFilter, "parameter");
}

function populateFilter(selectElement, key) {
    let uniqueValues = [...new Set(tableData.map(item => item[key]))];
    uniqueValues.forEach(value => {
        let option = document.createElement("option");
        option.value = value;
        option.textContent = value;
        selectElement.appendChild(option);
    });
}

function applyFilter() {
    let person = document.getElementById("personFilter").value;
    let category = document.getElementById("categoryFilter").value;
    let parameter = document.getElementById("parameterFilter").value;

    let rows = document.querySelectorAll("#tableBody tr");

    rows.forEach(row => {
        let personMatch = person === "" || row.dataset.person === person;
        let categoryMatch = category === "" || row.dataset.category === category;
        let parameterMatch = parameter === "" || row.dataset.parameter === parameter;

        row.style.display = personMatch && categoryMatch && parameterMatch ? "" : "none";
    });
}

function toggleTable() {
    document.getElementById("tablePanel").classList.toggle("active");
}

function toggleFilter() {
    let filterContainer = document.getElementById("filterContainer");
    filterContainer.style.display = filterContainer.style.display === "block" ? "none" : "block";
}



