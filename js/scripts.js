var BankAccount = {
  balance: 0,
  deposit: function(amount) {
    this.balance += amount;
  },
  withdraw: function(amount) {
    this.balance -= amount;
  }
}

$(document).ready(function() {
  $("form#add-account").submit(function(event) {
    event.preventDefault();
    var name = $("input#name").val();
    var initialDeposit = parseInt($("input#initial-deposit").val());

    var newAccount = Object.create(BankAccount);
    newAccount.name = name;
    newAccount.deposit(initialDeposit);

    $(".name-on-account").text(newAccount.name);
    $(".balance").text(newAccount.balance);

    $(".account-list").append("<li class='contact'>" + newAccount.name + "</li>")

    $("input#name").val("");
    $("input#initial-deposit").val("");

    
  });

});
