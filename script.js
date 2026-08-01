// Envia o clique do botão para o WhatsApp da Falconik
(function () {
  const PHONE = '5551992404519'; // 55 (Brasil) + DDD 51 + número
  const MESSAGE = 'Olá! Vim pelo site da Falconik e gostaria de conversar.';

  const btn = document.getElementById('btnContato');

  if (!btn) return;

  btn.addEventListener('click', function () {
    const url = `https://wa.me/${PHONE}?text=${encodeURIComponent(MESSAGE)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  });
})();