//  input nhập số có 2 chữ số

//xử lý
/**
 * tính số hàng đơn vị
 * tính số hàng chục
 * tính tổng 2 ký số
 */

var n, unit, ten, sum;

n = 11;
unit = n % 10;
ten = Math.floor(n / 10);
sum = unit + ten;
console.log("Tổng 2 ký số", sum);
