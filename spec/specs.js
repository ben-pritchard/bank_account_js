describe("BankAccount", function() {
  describe("deposit", function() {
    it("increases the bank account's balance by a given amount", function() {
      var account = Object.create(BankAccount);
      account.deposit(10);
      expect(account.balance).to.equal(10);
    });
  });


  describe("withdraw", function() {
    it("decreases the balance by the amount passed to it", function() {
      var account = Object.create(BankAccount);
      account.deposit(20);
      account.withdraw(10);
      expect(account.balance).to.equal(10);
    });
  });
});
