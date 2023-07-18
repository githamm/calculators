// Variables for calculation by home price
var homePrice;
var downPayment;
var loanTerm;
var apr;
var taxes;
var insurance;
var hoaDues;
var mortgageRatio;
var taxWithholding;
var loanAmount;
var monthlyPayment;
var totalPayment;
var netMonthlyIncome;
var grossMonthlyIncome;
var grossAnnualIncome;

// Variables for calculation by income
var grossAnnualIncome2;
var netAnnualIncome;
var taxWithholding2;
var taxes2;
var insurance2;
var hoaDues2;
var downPaymentPct2;
var apr2;
var loanTerm2;
var netMonthlyIncome2;
var availableIncome2;
var loanAmount2;
var monthlyPayment2;
var totalPayment2;
var downPayment2;
var homePrice2;



window.onload = function() {
    document.getElementById('submit-button-home').onclick = buttonClickHome;
    document.getElementById('submit-button-income').onclick = buttonClickIncome;
};

function buttonClickHome() {
    if ($('#home-price').val() == '') {
        $("#modal-home-price").modal('show');
    } else if ($('#down-payment-pct').val() == '') {
        $("#modal-down-payment").modal('show');
    } else if ($('#apr').val() == '') {
        $("#modal-apr").modal('show');
    } else if ($('#loan-term').val() == '') {
        $("#modal-loan-term").modal('show');
    } else if ($('#property-taxes').val() == '') {
        $("#modal-property-taxes").modal('show');
    } else if ($('#insurance').val() == '') {
        $("#modal-insurance").modal('show');
    } else if ($('#hoa-dues').val() == '') {
        $("#modal-hoa-dues").modal('show');
    } else if ($('#payment-ratio').val() == '') {
        $("#modal-payment-ratio").modal('show');
    } else if ($('#tax-withholding').val() == '') {
        $("#modal-tax-withholding").modal('show');
    } else getValuesHome()
}

function buttonClickIncome() {
    if ($('#gross-annual-income-2').val() == '') {
        $("#modal-gross-annual-income-2").modal('show');
    } else if ($('#down-payment-pct-2').val() == '') {
        $("#modal-down-payment-2").modal('show');
    } else if ($('#apr-2').val() == '') {
        $("#modal-apr-2").modal('show');
    } else if ($('#loan-term-2').val() == '') {
        $("#modal-loan-term-2").modal('show');
    } else if ($('#property-taxes-2').val() == '') {
        $("#modal-property-taxes-2").modal('show');
    } else if ($('#insurance-2').val() == '') {
        $("#modal-insurance-2").modal('show');
    } else if ($('#hoa-dues-2').val() == '') {
        $("#modal-hoa-dues-2").modal('show');
    } else if ($('#tax-withholding-2').val() == '') {
        $("#modal-tax-withholding-2").modal('show');
    } else getValuesIncome()
}

// Get values for calculation by home price
function getValuesHome() {
    homePrice = document.getElementById("home-price").value;
    downPaymentPct = document.getElementById("down-payment-pct").value;
    loanTerm = document.getElementById("loan-term").value;
    apr = document.getElementById("apr").value;
    taxes = document.getElementById("property-taxes").value;
    insurance = document.getElementById("insurance").value;
    hoaDues = document.getElementById("hoa-dues").value;
    mortgageRatio = document.getElementById("payment-ratio").value;
    taxWithholding = document.getElementById("tax-withholding").value;
    apr /= 1200;
    loanTerm *= 12;
    loanAmount = calculateLoanAmount();
    downPayment = calculateDownPayment();
    monthlyPayment = calculatePayment();
    totalPayment = calculateTotalPayment();
    netMonthlyIncome = calculateNetMonthlyIncome();
    grossMonthlyIncome = calculateGrossMonthlyIncome();
    grossAnnualIncome = calculateGrossAnnualIncome();
    document.getElementById("loan-amount").value = "$" + (loanAmount.toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    document.getElementById("down-payment").value = "$" + (downPayment.toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    document.getElementById("monthly-payment").value = "$" + (monthlyPayment.toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    document.getElementById("total-payment").value = "$" + (totalPayment.toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    document.getElementById("net-monthly-income").value = "$" + (netMonthlyIncome.toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    document.getElementById("gross-monthly-income").value = "$" + (grossMonthlyIncome.toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    document.getElementById("gross-annual-income").value = "$" + (grossAnnualIncome.toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

// Get values for calculation by income
function getValuesIncome() {
    grossAnnualIncome2 = document.getElementById("gross-annual-income-2").value;
    taxWithholding2 = document.getElementById("tax-withholding-2").value;
    taxes2 = document.getElementById("property-taxes-2").value;
    insurance2 = document.getElementById("insurance-2").value;
    hoaDues2 = document.getElementById("hoa-dues-2").value;
    downPaymentPct2 = document.getElementById("down-payment-pct-2").value;
    apr2 = document.getElementById("apr-2").value;
    loanTerm2 = document.getElementById("loan-term-2").value;
    apr2 /= 1200;
    loanTerm2 *= 12;
    netMonthlyIncome2 = calculateNetMonthlyIncome2();
    availableIncome2 = calculateAvailableIncome2();
    loanAmount2 = calculateLoanAmount2();
    monthlyPayment2 = calculateMonthlyPayment2();
    totalPayment2 = calculateTotalPayment2();
    homePrice2 = calculateHomePrice2();
    downPayment2 = calculateDownPayment2();
    document.getElementById("net-monthly-income-2").value = "$" + (netMonthlyIncome2.toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    document.getElementById("monthly-payment-2").value = "$" + (monthlyPayment2.toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    document.getElementById("total-payment-2").value = "$" + (totalPayment2.toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    document.getElementById("loan-amount-2").value = "$" + (loanAmount2.toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    document.getElementById("down-payment-2").value = "$" + (downPayment2.toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    document.getElementById("home-price-2").value = "$" + (homePrice2.toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    console.log('monthly: ' + monthlyPayment2 + ' ... taxes: ' + taxes2 + ' ... insurance: ' + insurance2 + ' ... hoa: ' + hoaDues2 + ' ... total: ' + totalPayment2);
};

function calculateLoanAmount() {
    var amount = homePrice * ((100 - downPaymentPct) / 100);
    return amount;
}

function calculateDownPayment() {
    var downPayment = homePrice * (downPaymentPct / 100);
    return downPayment;
}

function calculatePayment() {
    var payment = loanAmount * (apr * Math.pow((1 + apr), loanTerm)) / (Math.pow((1 + apr), loanTerm) - 1);
    return payment;
}

function calculateTotalPayment() {
    var totalPayment = monthlyPayment + parseInt(taxes) + parseInt(insurance) + parseInt(hoaDues);
    return totalPayment;
}

function calculateNetMonthlyIncome() {
    var netMonthlyIncome = totalPayment / (mortgageRatio / 100);
    return netMonthlyIncome;
}

function calculateGrossMonthlyIncome() {
    var grossMonthlyIncome = netMonthlyIncome / (1 - (taxWithholding / 100));
    return grossMonthlyIncome;
}

function calculateGrossAnnualIncome() {
    var grossAnnualIncome = grossMonthlyIncome * 12;
    return grossAnnualIncome;
}

// FUNCTIONS FOR CALCULATIONS BY INCOME
function calculateNetMonthlyIncome2() {
    var netMonthlyIncome2 = (grossAnnualIncome2 * (1 - (taxWithholding2 / 100))) / 12;
    return netMonthlyIncome2;
}

function calculateAvailableIncome2() {
    var availableIncome2 = netMonthlyIncome2 * .28;
    return availableIncome2;
}

function calculateLoanAmount2() {
    var loanAmount2 = (availableIncome2 - (parseInt(taxes2) + parseInt(insurance2) + parseInt(hoaDues2))) / apr2 * (1 - (1 / Math.pow((1 + apr2), loanTerm2)));
    return loanAmount2;
}

function calculateMonthlyPayment2() {
    var monthlyPayment2 = loanAmount2 * (apr2 * Math.pow((1 + apr2), loanTerm2)) / (Math.pow((1 + apr2), loanTerm2) - 1);
    return monthlyPayment2;
}

function calculateTotalPayment2() {
    var totalPayment2 = monthlyPayment2 + (parseInt(taxes2) + parseInt(insurance2) + parseInt(hoaDues2));
    return totalPayment2;
}

function calculateHomePrice2() {
    var homePrice2 = loanAmount2 / ((100 - downPaymentPct2) / 100);
    return homePrice2;
}

function calculateDownPayment2() {
    var downPayment2 = homePrice2 * (downPaymentPct2 / 100);
    return downPayment2;
}