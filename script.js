window.addEventListener('DOMContentLoaded', () => {
  const faixa = document.querySelector('.faixa');
  const iniciais = document.getElementById('gatilho');
  const intro = document.getElementById('intro');
  const conteudo = document.getElementById('conteudo');
  const musica = document.getElementById('musica');

  if (!iniciais) {
    console.error("Elemento com id 'gatilho' não encontrado!");
    return;
  }

  iniciais.addEventListener('click', () => {
    faixa.classList.add('fade-out');
    iniciais.classList.add('fade-out');

    setTimeout(() => {
      intro.style.display = 'none';
      conteudo.classList.remove('oculto');
      document.body.classList.add('fundo-espelho');
    }, 1000);

    function atualizarRelogioAmor() {
    const inicio = new Date("2024-05-03T19:00:00");
    const agora = new Date();
    
    let anos = agora.getFullYear() - inicio.getFullYear();
    let meses = agora.getMonth() - inicio.getMonth();
    let dias = agora.getDate() - inicio.getDate();
    let horas = agora.getHours() - inicio.getHours();
    let minutos = agora.getMinutes() - inicio.getMinutes();
    let segundos = agora.getSeconds() - inicio.getSeconds();

    if (segundos < 0) {
      segundos += 60;
      minutos--;
    }
    if (minutos < 0) {
      minutos += 60;
      horas--;
    }
    if (horas < 0) {
      horas += 24;
      dias--;
    }
    if (dias < 0) {
      const mesAnterior = new Date(agora.getFullYear(), agora.getMonth(), 0);
      dias += mesAnterior.getDate();
      meses--;
    }
    if (meses < 0) {
      meses += 12;
      anos--;
    }

    const tempo = `${anos} ano${anos !== 1 ? 's' : ''}, ${meses} mês${meses !== 1 ? 'es' : ''}, ${dias} dia${dias !== 1 ? 's' : ''}, ${horas}h ${minutos}min ${segundos}s`;
    document.getElementById('tempo-juntos').textContent = tempo;
  }

  setInterval(atualizarRelogioAmor, 1000);
  atualizarRelogioAmor();

    if (musica) {
      musica.play().catch((error) => {
        console.log('Erro ao reproduzir a música:', error);
      });
    }
  });
});
