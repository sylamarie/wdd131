document.addEventListener("DOMContentLoaded", function() {
    const addExpenseButton = document.getElementById("add-expense");
    const budgetForm = document.getElementById("budget-form");
    const expensesContainer = document.getElementById("expenses-container");
    const resultDiv = document.getElementById("result");

    // Function to add a new expense row
    addExpenseButton.addEventListener("click", function() {
        const expenseItem = document.createElement("div");
        expenseItem.classList.add("expense-item");

        expenseItem.innerHTML = `
            <select class="expense-type">
                <option value="Rent">Rent</option>
                <option value="Groceries">Groceries</option>
                <option value="Utilities">Utilities</option>
                <option value="Transportation">Transportation</option>
                <option value="Entertainment">Entertainment</option>
                <option value="Other">Other</option>
            </select>
            <input type="number" class="expense-amount" placeholder="Amount" required>
            <button type="button" class="remove-expense">Remove</button>
        `;
        expensesContainer.appendChild(expenseItem);

        // Add event listener to the "Remove" button of each new expense
        expenseItem.querySelector(".remove-expense").addEventListener("click", function() {
            expensesContainer.removeChild(expenseItem);
        });
    });

    // Function to calculate the budget
    budgetForm.addEventListener("submit", function(e) {
        e.preventDefault();

        const income = parseFloat(document.getElementById("income").value);
        let totalExpenses = 0;

        // Get all the expenses
        const expenseAmounts = document.querySelectorAll(".expense-amount");
        expenseAmounts.forEach(function(input) {
            totalExpenses += parseFloat(input.value) || 0; // Handle empty fields as 0
        });

        const remainingBudget = income - totalExpenses;

        // Display result
        resultDiv.innerHTML = `
            <h3>Budget Summary:</h3>
            <p>Income: $${income.toFixed(2)}</p>
            <p>Total Expenses: $${totalExpenses.toFixed(2)}</p>
            <p><strong>Remaining Budget: $${remainingBudget.toFixed(2)}</strong></p>
        `;
    });
});