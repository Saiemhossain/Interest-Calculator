let btn = document.getElementById('btn');

document.getElementById('btn').onclick = function () {
  const totalAmmount = document.getElementById('total-ammount');
  const principalInput = document.getElementById('principal');
  const rateInput = document.getElementById('rate');
  const yearsInput = document.getElementById('years');

  let principal = Number(principalInput.value);
  let rate = Number(rateInput.value / 100);
  let years = Number(yearsInput.value);

  if (principal < 0) {
    principal = 0;
  }
  if (rate < 0) {
    rate = 0;
  }
  if (years < 0) {
    years = 0;
  }

  const result = principal * Math.pow(1 + rate / 1, 1 * years);

  totalAmmount.textContent = result.toLocaleString(undefined,{style:'currency',currency:'usd'});
}