function calcularPromedio() {
    // Obtener los valores de las notas
    var nota1 = parseFloat(document.getElementById('nota1').value);
    var nota2 = parseFloat(document.getElementById('nota2').value);
    var nota3 = parseFloat(document.getElementById('nota3').value);

    // Calcular el promedio
    var promedio = (nota1 + nota2 + nota3) / 3;

    // Mostrar el resultado en el campo del formulario
    document.getElementById('promedio').value = promedio.toFixed(2);
}