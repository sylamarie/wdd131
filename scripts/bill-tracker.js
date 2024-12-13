document.addEventListener('DOMContentLoaded', () => {
    const billForm = document.getElementById('bill-form');
    const billNameInput = document.getElementById('bill-name');
    const billAmountInput = document.getElementById('bill-amount');
    const billDueDateInput = document.getElementById('bill-due-date');
    const billList = document.getElementById('bill-list');

    // Load bills from localStorage
    const loadBills = () => {
        const bills = JSON.parse(localStorage.getItem('bills')) || [];
        billList.innerHTML = '';
        bills.forEach((bill, index) => {
            const billItem = document.createElement('li');
            billItem.classList.add('bill-item');
            billItem.innerHTML = `
                <span>${bill.name} - $${bill.amount} - Due: ${bill.dueDate}</span>
                <button class="edit-btn" data-index="${index}">Edit</button>
                <button class="remove-btn" data-index="${index}">Remove</button>
            `;
            billList.appendChild(billItem);
        });
    };

    // Save bills to localStorage
    const saveBills = (bills) => {
        localStorage.setItem('bills', JSON.stringify(bills));
    };

    // Add new bill
    billForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const billName = billNameInput.value.trim();
        const billAmount = parseFloat(billAmountInput.value);
        const billDueDate = billDueDateInput.value;

        if (!billName || isNaN(billAmount) || !billDueDate) {
            alert('Please fill out all fields correctly.');
            return;
        }

        const newBill = {
            name: billName,
            amount: billAmount,
            dueDate: billDueDate,
        };

        const bills = JSON.parse(localStorage.getItem('bills')) || [];
        bills.push(newBill);
        saveBills(bills);

        billNameInput.value = '';
        billAmountInput.value = '';
        billDueDateInput.value = '';
        loadBills();
    });

    // Edit bill
    billList.addEventListener('click', (e) => {
        if (e.target.classList.contains('edit-btn')) {
            const index = e.target.getAttribute('data-index');
            const bills = JSON.parse(localStorage.getItem('bills')) || [];
            const bill = bills[index];

            // Populate the form with the existing bill data
            billNameInput.value = bill.name;
            billAmountInput.value = bill.amount;
            billDueDateInput.value = bill.dueDate;

            // Remove the bill after editing
            bills.splice(index, 1);
            saveBills(bills);
            loadBills();
        }

        if (e.target.classList.contains('remove-btn')) {
            const index = e.target.getAttribute('data-index');
            const bills = JSON.parse(localStorage.getItem('bills')) || [];
            bills.splice(index, 1);
            saveBills(bills);
            loadBills();
        }
    });

    loadBills(); // Initialize the bill list
});
