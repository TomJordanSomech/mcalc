document.getElementById('salaryForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const profit = parseFloat(document.getElementById('profit').value);
    if (isNaN(profit) || profit < 0) {
        alert('Please enter a valid profit amount.');
        return;
    }

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    const structureFive = calculateSalaryStructureFive(profit);
    const structureSix = calculateSalaryStructureSix(profit);

    resultDiv.innerHTML += `<p><strong>Structure One:</strong> ${structureFive.salary.toFixed(2)} AED</p>`;
    resultDiv.innerHTML += `<p>${structureFive.explanation}</p>`;
    resultDiv.innerHTML += `<p><strong>Structure Two:</strong> ${structureSix.salary.toFixed(2)} AED</p>`;
    resultDiv.innerHTML += `<p>${structureSix.explanation}</p>`;
});

function calculateSalaryStructureFive(profit_usd) {
    let bonus_usd, explanation;
    if (profit_usd <= 100000) {
        bonus_usd = 0.04 * profit_usd;
        explanation = `4% of ${profit_usd} USD`;
    } else if (profit_usd <= 150000) {
        bonus_usd = (0.04 * 100000) + (0.06 * (profit_usd - 100000));
        explanation = `4% of 100000 USD + 6% of ${profit_usd - 100000} USD`;
    } else if (profit_usd <= 200000) {
        bonus_usd = (0.04 * 100000) + (0.06 * 50000) + (0.1 * (profit_usd - 150000));
        explanation = `4% of 100000 USD + 6% of 50000 USD + 10% of ${profit_usd - 150000} USD`;
    } else if (profit_usd <= 250000) {
        bonus_usd = (0.04 * 100000) + (0.06 * 50000) + (0.1 * 50000) + (0.12 * (profit_usd - 200000));
        explanation = `4% of 100000 USD + 6% of 50000 USD + 10% of 50000 USD + 12% of ${profit_usd - 200000} USD`;
    } else {
        bonus_usd = (0.04 * 100000) + (0.06 * 50000) + (0.1 * 50000) + (0.12 * 50000) + (0.15 * (profit_usd - 250000));
        explanation = `4% of 100000 USD + 6% of 50000 USD + 10% of 50000 USD + 12% of 50000 USD + 15% of ${profit_usd - 250000} USD`;
    }
    const salary_aed = bonus_usd * 3.67;
    return { salary: salary_aed, explanation: explanation };
}

function calculateSalaryStructureSix(profit_usd) {
    const base_salary_aed = 6500;
    let bonus_usd, explanation;
    if (profit_usd <= 100000) {
        bonus_usd = 0.03 * profit_usd;
        explanation = `3% of ${profit_usd} USD + 6500 AED base salary`;
    } else if (profit_usd <= 150000) {
        bonus_usd = (0.03 * 100000) + (0.05 * (profit_usd - 100000));
        explanation = `3% of 100000 USD + 5% of ${profit_usd - 100000} USD + 6500 AED base salary`;
    } else if (profit_usd <= 200000) {
        bonus_usd = (0.03 * 100000) + (0.05 * 50000) + (0.07 * (profit_usd - 150000));
        explanation = `3% of 100000 USD + 5% of 50000 USD + 7% of ${profit_usd - 150000} USD + 6500 AED base salary`;
    } else if (profit_usd <= 250000) {
        bonus_usd = (0.03 * 100000) + (0.05 * 50000) + (0.07 * 50000) + (0.08 * (profit_usd - 200000));
        explanation = `3% of 100000 USD + 5% of 50000 USD + 7% of 50000 USD + 8% of ${profit_usd - 200000} USD + 6500 AED base salary`;
    } else {
        bonus_usd = (0.03 * 100000) + (0.05 * 50000) + (0.07 * 50000) + (0.08 * 50000) + (0.10 * (profit_usd - 250000));
        explanation = `3% of 100000 USD + 5% of 50000 USD + 7% of 50000 USD + 8% of 50000 USD + 10% of ${profit_usd - 250000} USD + 6500 AED base salary`;
    }
    const salary_aed = base_salary_aed + bonus_usd * 3.67;
    return { salary: salary_aed, explanation: explanation };
}
