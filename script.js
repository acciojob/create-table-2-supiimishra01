function createTable() {
    //Write your code here
	const rows = prompt("Input number of rows");
            const cols = prompt("Input number of columns");

            const table = document.getElementById("myTable");

            for (let i = 1; i <= rows; i++) {
                const tr = document.createElement("tr");
                for (let j = 1; j <= cols; j++) {
                    const td = document.createElement("td");
                    td.innerText = `Row-${i} Column-${j}`;
                    tr.appendChild(td);
                }
                table.appendChild(tr);
            }


  
}
