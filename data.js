var branch = "สำนักงานใหญ่";
var billingMonth = "กันยายน 2567";
var waterRate = "10 บาท";
var discount = "50 บาท";
var monthlyServiceFee = "100 บาท";
var amountBeforeTax = "500 บาท";
var vat = "35 บาท";
var totalAmount = "535 บาท";
var previousMonth = "450 บาท";
var totalDue = "535 บาท";
var pleasePayBy = "ชำระภายใน";

var userRegistrationNumber = "12456789";
var routeNumber = "01-001";
var billNumber = "0001234567";
var billDate = "01 กันยายน 2567";
var readingDate = "01 กันยายน 2567";
var meterReading = "123456";
var previousReadingDate = "01 สิงหาคม 2567";
var previousMeterReading = "123000";
var waterUsage = "150 ลูกบาศก์เมตร";

function loadBillData() {
    document.getElementById('branch').textContent = branch;
    document.getElementById('billingMonth').textContent = billingMonth;
    document.getElementById('waterRate').textContent = waterRate;
    document.getElementById('discount').textContent = discount;
    document.getElementById('monthlyServiceFee').textContent = monthlyServiceFee;
    document.getElementById('amountBeforeTax').textContent = amountBeforeTax;
    document.getElementById('vat').textContent = vat;
    document.getElementById('totalAmount').textContent = totalAmount;
    document.getElementById('previousMonth').textContent = previousMonth;
    document.getElementById('totalDue').textContent = totalDue;
    document.getElementById('pleasePayBy').textContent = pleasePayBy;

    document.getElementById('userRegistrationNumber').textContent = userRegistrationNumber;
    document.getElementById('routeNumber').textContent = routeNumber;
    document.getElementById('billNumber').textContent = billNumber;
    document.getElementById('billDate').textContent = billDate;
    document.getElementById('readingDate').textContent = readingDate;
    document.getElementById('meterReading').textContent = meterReading;
    document.getElementById('previousReadingDate').textContent = previousReadingDate;
    document.getElementById('previousMeterReading').textContent = previousMeterReading;
    document.getElementById('waterUsage').textContent = waterUsage;
}
