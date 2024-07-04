// Write a program whose major task is to calculate an individual’s Net Salary by getting the inputs of basic salary and benefits. Calculate the payee (i.e. Tax), NHIF Deductions, NSSF Deductions, gross salary, and net salary. 

function calculateNetSalary() {
    let basicSalary = parseFloat(prompt("Enter the basic salary:"));
    let benefits = parseFloat(prompt("Enter the benefits:"));

    
    let grossSalary = basicSalary + benefits;

    function calculateTax(grossSalary) {
        let tax;
        if (grossSalary <= 24000) {
            tax = grossSalary * 0.1;
        } else if (grossSalary <= 32333) {
            tax = (24000 * 0.1) + ((grossSalary - 24000) * 0.25);
        } else {
            tax = (24000 * 0.1) + (8333 * 0.25) + ((grossSalary - 32333) * 0.3);
        }
        return tax;
    }

    let paye = calculateTax(grossSalary);

    function calculateNHIF(grossSalary) {
        if (grossSalary <= 5999) return 150;
        if (grossSalary <= 7999) return 300;
        if (grossSalary <= 11999) return 400;
        if (grossSalary <= 14999) return 500;
        if (grossSalary <= 19999) return 600;
        if (grossSalary <= 24999) return 750;
        if (grossSalary <= 29999) return 850;
        if (grossSalary <= 34999) return 900;
        if (grossSalary <= 39999) return 950;
        if (grossSalary <= 44999) return 1000;
        if (grossSalary <= 49999) return 1100;
        if (grossSalary <= 59999) return 1200;
        if (grossSalary <= 69999) return 1300;
        if (grossSalary <= 79999) return 1400;
        if (grossSalary <= 89999) return 1500;
        if (grossSalary <= 99999) return 1600;
        return 1700;
    }

    let nhif = calculateNHIF(grossSalary);

    let nssf = Math.min(grossSalary * 0.06, 1080);

    let netSalary = grossSalary - (paye + nhif + nssf);

    console.log("Gross Salary: " + grossSalary.toFixed(2));
    console.log("PAYE (Tax): " + paye.toFixed(2));
    console.log("NHIF Deductions: " + nhif.toFixed(2));
    console.log("NSSF Deductions: " + nssf.toFixed(2));
    alert(("Net Salary: " + netSalary.toFixed(2)));
}

calculateNetSalary();