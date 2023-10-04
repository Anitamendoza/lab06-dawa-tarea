function daysUntilChristmas(currentYear, currentDate) {
    const christmasDate = new Date(currentYear, 11, 25); // Navidad es el 25 de diciembre (mes 11)
    const today = new Date();
    if (today > christmasDate) {
      christmasDate.setFullYear(currentYear + 1); // Si ya pasó Navidad, sumar un año
    }
    const timeDifference = christmasDate - today;
    const daysUntilChristmas = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
    return daysUntilChristmas;
}

module.exports = { daysUntilChristmas };

// // Obtén la fecha actual
// const currentDate = new Date();
// const currentYear = currentDate.getFullYear();
// const currentDay = currentDate.getDate();
// const currentMonth = currentDate.toLocaleString('default', { month: 'long' });

// // Llama a la función y obtén los días hasta Navidad
// const daysTillXmas = daysUntilChristmas(currentYear, currentDate);

// console.log(`--------------------------------------------------------`);
// console.log(`===> Hoy es ${currentDay} de ${currentMonth} y faltan ${daysTillXmas} días para Navidad`);
// console.log(`--------------------------------------------------------`);
