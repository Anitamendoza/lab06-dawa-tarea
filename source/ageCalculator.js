function calculateAge(dateOfBirth) {
    const today = new Date();
    const birthDate = new Date(dateOfBirth);
    const age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      return age - 1;
    }
    return age;
  }
  
  module.exports = { calculateAge };
  
//   // Agrega el código para imprimir la fecha de nacimiento y la edad
//   const dateOfBirth = '2002-06-01';
//   const age = calculateAge(dateOfBirth);
//   console.log(`--------------------------------------------------------`);
//   console.log(`===> Fecha de nacimiento: ${dateOfBirth}, Edad: ${age} años`);
//   console.log(`--------------------------------------------------------`);
  