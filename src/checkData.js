export function calculateDataSelect() {
  const years = [];
  const days = [];
  const monthName = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];
  const year = new Date().getFullYear();
  for (let i = 1951; i < year + 1; i++) {
    years.push(i);
  }
  for (let i = 1; i < 32; i++) {
    days.push(i);
  }
  const date = { years, days, monthName };
  return date;
}
