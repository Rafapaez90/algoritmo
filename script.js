function mostrarCampos() {
    const figura = document.getElementById('figura').value;
    const campos = document.getElementById('campos');
    campos.innerHTML = '';
  
    switch (figura) {
      case 'triangulo':
        campos.innerHTML = `
          <label for="base">Base:</label>
          <input type="number" id="base" placeholder="Ingresa la base" required>
          <label for="altura">Altura:</label>
          <input type="number" id="altura" placeholder="Ingresa la altura" required>
          <label for="lado1">Lado 1:</label>
          <input type="number" id="lado1" placeholder="Ingresa el lado 1" required>
          <label for="lado2">Lado 2:</label>
          <input type="number" id="lado2" placeholder="Ingresa el lado 2" required>
        `;
        break;
      case 'cuadrado':
        campos.innerHTML = `
          <label for="lado">Lado:</label>
          <input type="number" id="lado" placeholder="Ingresa el lado" required>
        `;
        break;
      case 'rectangulo':
        campos.innerHTML = `
          <label for="largo">Largo:</label>
          <input type="number" id="largo" placeholder="Ingresa el largo" required>
          <label for="ancho">Ancho:</label>
          <input type="number" id="ancho" placeholder="Ingresa el ancho" required>
        `;
        break;
      case 'circulo':
        campos.innerHTML = `
          <label for="radio">Radio:</label>
          <input type="number" id="radio" placeholder="Ingresa el radio" required>
        `;
        break;
      case 'trapecio':
        campos.innerHTML = `
          <label for="baseMayor">Base Mayor:</label>
          <input type="number" id="baseMayor" placeholder="Ingresa la base mayor" required>
          <label for="baseMenor">Base Menor:</label>
          <input type="number" id="baseMenor" placeholder="Ingresa la base menor" required>
          <label for="altura">Altura:</label>
          <input type="number" id="altura" placeholder="Ingresa la altura" required>
          <label for="lado1">Lado 1:</label>
          <input type="number" id="lado1" placeholder="Ingresa el lado 1" required>
          <label for="lado2">Lado 2:</label>
          <input type="number" id="lado2" placeholder="Ingresa el lado 2" required>
        `;
        break;
    }
  }
  
  function calcular() {
    const figura = document.getElementById('figura').value;
    let resultado = '';
  
    switch (figura) {
      case 'triangulo':
        const base = parseFloat(document.getElementById('base').value);
        const altura = parseFloat(document.getElementById('altura').value);
        const lado1 = parseFloat(document.getElementById('lado1').value);
        const lado2 = parseFloat(document.getElementById('lado2').value);
        const perimetroTri = base + lado1 + lado2;
        const areaTri = (base * altura) / 2;
        resultado = `Área: ${areaTri.toFixed(2)}, Perímetro: ${perimetroTri.toFixed(2)}`;
        break;
      case 'cuadrado':
        const lado = parseFloat(document.getElementById('lado').value);
        const perimetroCuad = 4 * lado;
        const areaCuad = lado * lado;
        resultado = `Área: ${areaCuad.toFixed(2)}, Perímetro: ${perimetroCuad.toFixed(2)}`;
        break;
      case 'rectangulo':
        const largo = parseFloat(document.getElementById('largo').value);
        const ancho = parseFloat(document.getElementById('ancho').value);
        const perimetroRec = 2 * (largo + ancho);
        const areaRec = largo * ancho;
        resultado = `Área: ${areaRec.toFixed(2)}, Perímetro: ${perimetroRec.toFixed(2)}`;
        break;
      case 'circulo':
        const radio = parseFloat(document.getElementById('radio').value);
        const perimetroCirc = 2 * Math.PI * radio;
        const areaCirc = Math.PI * radio * radio;
        resultado = `Área: ${areaCirc.toFixed(2)}, Perímetro: ${perimetroCirc.toFixed(2)}`;
        break;
      case 'trapecio':
        const baseMayor = parseFloat(document.getElementById('baseMayor').value);
        const baseMenor = parseFloat(document.getElementById('baseMenor').value);
        const alturaTrap = parseFloat(document.getElementById('altura').value);
        const lado1Trap = parseFloat(document.getElementById('lado1').value);
        const lado2Trap = parseFloat(document.getElementById('lado2').value);
        const perimetroTrap = baseMayor + baseMenor + lado1Trap + lado2Trap;
        const areaTrap = ((baseMayor + baseMenor) * alturaTrap) / 2;
        resultado = `Área: ${areaTrap.toFixed(2)}, Perímetro: ${perimetroTrap.toFixed(2)}`;
        break;
    }
  
    document.getElementById('resultado').innerHTML = resultado;
  }
  