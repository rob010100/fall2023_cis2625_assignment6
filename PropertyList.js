
let output = "table_deets";
const resource_url =
  "https://z8tnv5jj23.execute-api.us-east-1.amazonaws.com/addrental/property";
  
  async function getProperties() {
      try {
          const res = await fetch(resource_url);
          const jsdata = await res.json();
          const data = JSON.parse(jsdata.body);
          
    if (Array.isArray(data)) {
            
            const table = document.createElement("table");

            const headerRow = table.insertRow();
            for (const key in data[0]) {
                const th = document.createElement("th");
                th.textContent = key;
                headerRow.appendChild(th);
            }

            data.forEach(item => {
                const row = table.insertRow();
                for (const key in item) {
                    const cell = row.insertCell();
                    cell.textContent = item[key];
                }
            });

            
            document.getElementById(output).appendChild(table);
        } else {
            console.log("Data is not an array");
        }
    } catch (error) {
        console.error(error);
    }
}

getProperties();
  
  