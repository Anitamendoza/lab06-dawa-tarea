function validateForm(formData) {
    // Aquí implementa la lógica de validación de los datos del formulario
    // Puedes validar fechas, emails, campos obligatorios, etc.
    // Retorna true si los datos son válidos, false si no lo son.
    // Ejemplo de validación de email:
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return false;
    }
    // Agrega más validaciones según tus necesidades
    // ...
    return true;
  }
  
  module.exports = { validateForm };
  
//   // Agrega el código para imprimir los datos del formulario y su validación
//   const formData = {
//     name: 'John Doe',
//     email: 'john.doe@example.com',
//   };
  
//   console.log('===> Datos del formulario:');
//   console.log(`Nombre: ${formData.name}`);
//   console.log(`Email: ${formData.email}`);
  
//   if (validateForm(formData)) {
//     console.log('----- Formulario válido -----');
//   } else {
//     console.log('----- Formulario no válido -----');
//   }
//   console.log(`--------------------------------------------------------`);
  