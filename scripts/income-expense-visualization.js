// Wait for the document to load completely before running the script
document.addEventListener('DOMContentLoaded', () => {
    // Data for the chart (example values for income and expenses)
    const income = 5000; // Example monthly income
    const expenses = 3000; // Example monthly expenses

    // Get the context of the canvas element we want to draw the chart on
    const ctx = document.getElementById('incomeExpenseChart').getContext('2d');

    // Create the chart
    const incomeExpenseChart = new Chart(ctx, {
        type: 'pie', // This can be 'pie', 'bar', 'line', etc.
        data: {
            labels: ['Income', 'Expenses'], // Labels for the chart
            datasets: [{
                data: [income, expenses], // The data values (income and expenses)
                backgroundColor: ['#4CAF50', '#FF6347'], // Colors for the chart segments
                hoverOffset: 4
            }]
        },
        options: {
            responsive: true, // Make the chart responsive
            plugins: {
                legend: {
                    position: 'top', // Position of the legend
                },
                tooltip: {
                    callbacks: {
                        label: function(tooltipItem) {
                            return tooltipItem.label + ': $' + tooltipItem.raw;
                        }
                    }
                }
            }
        }
    });
});