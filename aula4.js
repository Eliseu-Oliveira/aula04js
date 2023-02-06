      // Recebendo entrada do usuário
      let letter = prompt("Digite uma letra do alfabeto:");

      // Verificando se é uma vogal ou consoante
      if (letter.length === 1) {
        if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u' || 
            letter === 'A' || letter === 'E' || letter === 'I' || letter === 'O' || letter === 'U') {
          alert("A letra digitada é uma vogal.");
        } else {
          alert("A letra digitada é uma consoante.");
        }
      } else {
        alert("Deve digitar uma letra do alfabeto para obter o resultado.");
      }