document.addEventListener('DOMContentLoaded', () => {
    const financialForm = document.getElementById('financial-form');
    const incomeInput = document.getElementById('income');
    const expensesInput = document.getElementById('expenses');
    const ctx = document.getElementById('incomeExpenseChart').getContext('2d');
    const resultContainer = document.getElementById('result');  // To show the result message

    // Initial chart data
    let incomeExpenseChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Income', 'Expenses'],
            datasets: [{
                backgroundColor: ['#4CAF50', '#FF6347'], // Green for Income, Red for Expenses
                data: [0, 0] // Initial values, will update based on input
            }]
        },
        options: {
            title: {
                display: true,
                text: 'Income-to-Expense Ratio'
            }
        }
    });

    // Handle form submission to update the chart and display results
    financialForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get values from the form
        const income = parseFloat(incomeInput.value);
        const expenses = parseFloat(expensesInput.value);

        // Validate inputs
        if (isNaN(income) || isNaN(expenses) || income <= 0 || expenses < 0) {
            alert('Please enter valid income and expenses values.');
            return;
        }

        // Update chart data
        incomeExpenseChart.data.datasets[0].data = [income, expenses];
        incomeExpenseChart.update();

        // Calculate remaining income
        const remainingIncome = income - expenses;

        // Display appropriate message based on income and expenses
        let message = '';
        if (expenses > income) {
            message = `<p>Warning: Your expenses are higher than your income!</p>
                       <p>Remember to budget wisely and use money carefully to ensure your expenses stay within your income.</p>`;
        } else if (expenses < income) {
            message = `<p>Good job! Your expenses are lower than your income.</p>
                       <p>Keep up the good work! Consider saving or investing the remaining income.</p>`;
        } else {
            message = `<p>You're breaking even! Your income matches your expenses.</p>
                       <p>It's time to think about how you can save or increase your income.</p>`;
        }

        // Show the remaining income
        if (remainingIncome > 0) {
            message += `<p>Remaining Income: $${remainingIncome.toFixed(2)}</p>`;
        } else if (remainingIncome < 0) {
            message += `<p>You are in a deficit of $${Math.abs(remainingIncome).toFixed(2)}. Consider cutting unnecessary expenses.</p>`;
        }

        // Display the message to the user
        resultContainer.innerHTML = message;

        // Clear form inputs after submitting
        incomeInput.value = '';
        expensesInput.value = '';
    });
});