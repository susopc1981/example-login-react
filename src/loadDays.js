export const loadDays = (month, year) => {
  console.log(month, year);
  const bisiexto = calculateBisiexto(year);
  console.log(bisiexto);
  const largeMonth = [1, 3, 5, 7, 8, 10, 12];
  const data = largeMonth.find((value) => value === month);
  if (data) {
    const finalDays = [];
    for (let i = 1; i < 32; i++) {
      finalDays.push(i);
    }
    return finalDays;
  }
  if (!data) {
    if (bisiexto && month === 2) {
      const finalDays = [];
      for (let i = 1; i < 30; i++) {
        finalDays.push(i);
      }
      return finalDays;
    }
    if (month === 2) {
      const finalDays = [];
      for (let i = 1; i < 29; i++) {
        finalDays.push(i);
      }
      return finalDays;
    }
    const finalDays = [];
    for (let i = 1; i < 31; i++) {
      finalDays.push(i);
    }
    return finalDays;
  }
};

function calculateBisiexto(year) {
  let bisiexto;
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        bisiexto = true;
      } else bisiexto = false;
    } else bisiexto = true;
  } else bisiexto = false;
  return bisiexto;
}
