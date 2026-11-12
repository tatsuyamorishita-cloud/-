/* 森下工務店 トップページ デザイン案：動きの最小限スクリプト */
(function () {
  'use strict';

  var header = document.querySelector('.site-header');
  var spCta = document.querySelector('.sp-fixed-cta');
  var hero = document.querySelector('.hero');

  /* 1. スクロールでヘッダーを白背景に／スマホ固定ボタンを表示 */
  function onScroll() {
    var y = window.scrollY;
    var heroH = hero ? hero.offsetHeight : 600;
    header.classList.toggle('is-scrolled', y > 40);
    if (spCta) spCta.classList.toggle('is-shown', y > heroH * 0.8);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* 2. スマホメニューの開閉 */
  var toggle = document.querySelector('.menu-toggle');
  toggle.addEventListener('click', function () {
    var open = document.body.classList.toggle('menu-open');
    toggle.setAttribute('aria-expanded', open);
    toggle.setAttribute('aria-label', open ? 'メニューを閉じる' : 'メニューを開く');
  });
  document.querySelectorAll('.global-nav a').forEach(function (a) {
    a.addEventListener('click', function () {
      document.body.classList.remove('menu-open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });

  /* 3. 画面に入った要素を順番にふわっと表示 */
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('is-visible'); io.unobserve(e.target); }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('is-visible'); });
  }

  /* 4. 施工実績のジャンル絞り込み */
  var grid = document.querySelector('.works-grid');
  var cards = grid.querySelectorAll('.work-card');
  document.querySelectorAll('.works-filter button').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var f = btn.dataset.filter;
      document.querySelectorAll('.works-filter button').forEach(function (b) {
        var on = b === btn;
        b.classList.toggle('is-active', on);
        b.setAttribute('aria-selected', on);
      });
      grid.classList.toggle('is-filtered', f !== 'all');
      cards.forEach(function (c) {
        var show = f === 'all' || c.dataset.cat === f;
        c.classList.toggle('is-hidden', !show);
        c.classList.remove('is-entering');
        if (show) { void c.offsetWidth; c.classList.add('is-entering'); }
      });
    });
  });

  /* 5. 数字のカウントアップ */
  var nums = document.querySelectorAll('.num-value');
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function countUp(el) {
    var target = parseInt(el.dataset.count, 10);
    if (reduce) { el.textContent = target.toLocaleString(); return; }
    var start = null, dur = 1600;
    function step(t) {
      if (!start) start = t;
      var p = Math.min((t - start) / dur, 1);
      el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3))).toLocaleString();
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  if ('IntersectionObserver' in window) {
    var nio = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { countUp(e.target); nio.unobserve(e.target); }
      });
    }, { threshold: 0.5 });
    nums.forEach(function (n) { nio.observe(n); });
  } else {
    nums.forEach(function (n) { n.textContent = n.dataset.count; });
  }
})();
