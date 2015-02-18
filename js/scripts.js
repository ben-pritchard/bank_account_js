var BankAccount = {
  balance: 0,
  deposit: function(amount) {
    this.balance += amount;
  },
  withdraw: function(amount) {
    this.balance -= amount;
  }
}

$('#tabs a').click(function (e) {
  e.preventDefault();
  $(this).tab('show');
});
