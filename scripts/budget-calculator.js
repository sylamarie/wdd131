document.addEventListener("DOMContentLoaded", function() {
    const addExpenseButton = document.getElementById("add-expense");
    const budgetForm = document.getElementById("budget-form");
    const expensesContainer = document.getElementById("expenses-container");
    const resultDiv = document.getElementById("result");
    const pastBudgetsDiv = document.getElementById("past-budgets");

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

        const incomeMonth = document.getElementById("income-month").value;
        const income = parseFloat(document.getElementById("income").value);
        let totalExpenses = 0;

        // Get all the expenses
        const expenseAmounts = document.querySelectorAll(".expense-amount");
        expenseAmounts.forEach(function(input) {
            totalExpenses += parseFloat(input.value) || 0; // Handle empty fields as 0
        });

        const remainingBudget = income - totalExpenses;

        // Create a budget object to store the details
        const budgetData = {
            incomeMonth,
            income,
            totalExpenses,
            remainingBudget
        };

        // Retrieve previous budgets from localStorage, or create a new array
        let allBudgets = JSON.parse(localStorage.getItem("budgets")) || [];

        // Add the new budget to the array
        allBudgets.push(budgetData);

        // Store the updated budgets in localStorage
        localStorage.setItem("budgets", JSON.stringify(allBudgets));

        // Display the latest budget summary
        displayBudgetSummary(budgetData);

        // Update past budget summaries
        loadPastBudgets();
    });

    // Function to display the budget summary
    function displayBudgetSummary(budgetData) {
        resultDiv.innerHTML = `
            <h3>Budget Summary for ${budgetData.incomeMonth}:</h3>
            <p>Income: $${budgetData.income.toFixed(2)}</p>
            <p>Total Expenses: $${budgetData.totalExpenses.toFixed(2)}</p>
            <p><strong>Remaining Budget: $${budgetData.remainingBudget.toFixed(2)}</strong></p>
        `;
    }

    // Function to load and display past budgets from localStorage
    function loadPastBudgets() {
        let allBudgets = JSON.parse(localStorage.getItem("budgets")) || [];
        pastBudgetsDiv.innerHTML = "";

        allBudgets.forEach((budget, index) => {
            const budgetDiv = document.createElement("div");
            budgetDiv.classList.add("budget-summary");
            budgetDiv.innerHTML = `
                <p><strong>Month: </strong>${budget.incomeMonth}</p>
                <p><strong>Income: </strong>$${budget.income.toFixed(2)}</p>
                <p><strong>Total Expenses: </strong>$${budget.totalExpenses.toFixed(2)}</p>
                <p><strong>Remaining Budget: </strong>$${budget.remainingBudget.toFixed(2)}</p>
                <button class="remove-budget" data-index="${index}">Remove</button>
            `;
            pastBudgetsDiv.appendChild(budgetDiv);

            // Add event listener to remove a specific budget
            budgetDiv.querySelector(".remove-budget").addEventListener("click", function() {
                removeBudget(index);
            });
        });
    }

    // Function to remove a specific budget summary
    function removeBudget(index) {
        let allBudgets = JSON.parse(localStorage.getItem("budgets")) || [];
        allBudgets.splice(index, 1); // Remove the budget at the given index
        localStorage.setItem("budgets", JSON.stringify(allBudgets));

        // Reload the past budgets
        loadPastBudgets();
    }

    // Load past budgets when the page loads
    loadPastBudgets();
});
