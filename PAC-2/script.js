let num1 = parseInt(prompt("Introdueix el PRIMER número entre 1 y 50"));
let num2 = parseInt(prompt("Introdueix el SEGON número entre 1 y 50"));

// EVITAR ELS VALORS VUITS O NULLS AL PROMPT:

if (
  typeof num1 != "number" ||
  !Number.isInteger(num1) ||
  typeof num2 != "number" ||
  !Number.isInteger(num2)
) {
  alert(
    "No has introduït cap valor. Recarrega la pàgina i torna-ho a intentar"
  );
}

// EVITAR QUE ELS VALORS MENORS A 1 O MAJORS A 50 SIGUIN VÀLIDS:

if (num1 < 1 || num1 > 50 || num2 < 1 || num2 > 50) {
  alert(
    "ALERTA!! \n" +
      "El/s número/s introduït/s no compleixe/n la condició demanada!!.\n\nRecarrega la pàgina i torna-ho a intentar"
  );
} else {
  // 1. SUMAR DOS NÚMEROS:
  function sumarNumeros(num1, num2) {
    let suma = num1 + num2;
    return "La suma dels valors " + num1 + " i " + num2 + " és: " + suma;
  }

  // 2. NÚMEROS PRIMERS:
  function numerosPrimersNum1(num1) {
    let primer = true;
    let i = 2;

    if (num1 % i == 0) {
      primer = false;
    }

    if (primer == true) {
      return num1 + " és un número PRIMER";
    } else {
      return num1 + " NO és un número PRIMER";
    }
  }
  function numerosPrimersNum2(num2) {
    let primer = true;
    let i = 2;

    if (num2 % i == 0) {
      primer = false;
    }

    if (primer == true) {
      return num2 + " és un número PRIMER";
    } else {
      return num2 + " NO és un número PRIMER";
    }
  }

  // 3. NÚMEROS PARELLS:
  function numerosParells(num1, num2) {
    if (num1 % 2 == 0 && num2 % 2 == 0) {
      return num1 + " i " + num2 + " són números parells";
    } else if (num1 % 2 == 0 && num2 % 2 != 0) {
      return (
        num1 + " és un número PARELL. \n" + num2 + " NO és un número parell"
      );
    } else if (num1 % 2 != 0 && num2 % 2 == 0) {
      return (
        num1 + " NO és un número parell. \n" + num2 + " és un número PARELL"
      );
    } else {
      return num1 + " i " + num2 + " NO són números parells";
    }
  }

  // 4. NUM1 MENOR NUM2 - PARELLS:
  function num1MenorNum2(num1, num2) {
    let arrayParells = [];
    if (num1 < num2) {
      for (let i = num1; i <= num2; i++) {
        if (i % 2 == 0) {
          arrayParells.push(i);
        }
      }
      return (
        "Els números PARELLS entre " +
        num1 +
        " i " +
        num2 +
        " són: " +
        arrayParells
      );
    } else {
      return "No es produeix aquesta opció entre " + num1 + " i " + num2;
    }
  }

  // 5. NUM1 MAJOR NUM2 - IMPARELLS:
  function num1MajorNum2(num1, num2) {
    let arrayImparells = [];
    if (num1 > num2) {
      for (let i = num1; i >= num2; i--) {
        if (i % 2 != 0) {
          arrayImparells.push(i);
        }
      }
      return (
        "Els números IMPARELLS entre " +
        num1 +
        " i " +
        num2 +
        " són: " +
        arrayImparells
      );
    } else {
      return "No es produeix aquesta opció entre " + num1 + " i " + num2;
    }
  }

  // 6. NUM1 IGUAL NUM2:
  function num1IgualNum2(num1, num2) {
    if (num1 === num2) {
      //numerosPrimersNum1(num1);
      //numerosPrimersNum2(num2);
      numerosParells(num1, num2);
      return "Ambdós números anotats són iguals: " + num1;
    } else {
      return "No es produeix aquesta opció entre " + num1 + " i " + num2;
    }
  }

  // CRIDA DE LES FUNCIONS CREADES:
  // 1. SUMAR DOS NÚMEROS:
  sumarNumeros(num1, num2);
  // 2. NÚMEROS PRIMERS:
  numerosPrimersNum1(num1);
  numerosPrimersNum2(num2);
  // 3. NÚMEROS PARELLS:
  numerosParells(num1, num2);
  // 4. NUM1 MENOR NUM2:
  num1MenorNum2(num1, num2);
  // 5. NUM1 MAJOR NUM2:
  num1MajorNum2(num1, num2);
  // 6. NUM1 MAJOR NUM2:
  num1IgualNum2(num1, num2);
}
