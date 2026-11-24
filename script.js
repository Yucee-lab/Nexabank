function showMessage(message) {
    alert(message);
}

function copyAccount() {
    const accountNumber = "0123456789";

    navigator.clipboard.writeText(accountNumber)
        .then(() => {
            alert("Account number copied successfully!");
        })
        .catch(() => {
            alert("Unable to copy account number.");
        });
}