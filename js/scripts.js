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
  var currentAccount = null;
  $("form#add-account").submit(function(event) {
    event.preventDefault();
    var name = $("input#name").val();
    var initialDeposit = parseInt($("input#initial-deposit").val());

    var newAccount = Object.create(BankAccount);
    newAccount.name = name;
    newAccount.deposit(initialDeposit);

    $("input#name").val("");
    $("input#initial-deposit").val("");

    $(".account-list").append("<li class='account'>" + newAccount.name + "</li>")

    $('.account').last().click(function() {
      currentAccount = newAccount;
      $('#show-account').show();
      $(".name-on-account").text(currentAccount.name);
      $(".balance").text(currentAccount.balance);
    });
  });

  $("form#deposit-form").submit(function(event) {
    event.preventDefault();
    var depositAmount = parseInt($("input#deposit-amount").val());
    currentAccount.deposit(depositAmount);
    $("input#deposit-amount").val("");
  });

  $("form#withdraw-form").submit(function(event) {
    event.preventDefault();
    var withdrawAmount = parseInt($("input#withdraw-amount").val());
    currentAccount.withdraw(withdrawAmount);
    $("input#withdraw-amount").val("");
  });

  $("li#show-balance").click(function() {
    $(".balance").text(currentAccount.balance);
  });
});
