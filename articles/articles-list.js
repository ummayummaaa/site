const copy = {
  en: { doctor:"Ioannis Kotidis", role:"Medical doctor", call:"Call now", back:"← Back to the main page", eyebrow:"Travel health library", title:"Useful information", intro:"Practical medical guidance for travellers in Greece. New topics will be added here over time.", read:"Read more →", emergency:"Emergency medical care", emergencyText:"For a life-threatening emergency, call 112 or 166 immediately." },
  el: { doctor:"Ιωάννης Κοτίδης", role:"Ιατρός", call:"Καλέστε τώρα", back:"← Επιστροφή στην αρχική σελίδα", eyebrow:"Βιβλιοθήκη υγείας για ταξιδιώτες", title:"Χρήσιμες πληροφορίες", intro:"Πρακτικές ιατρικές πληροφορίες για ταξιδιώτες στην Ελλάδα. Νέα θέματα θα προστίθενται σταδιακά.", read:"Διαβάστε περισσότερα →", emergency:"Επείγουσα ιατρική βοήθεια", emergencyText:"Σε απειλητικό για τη ζωή περιστατικό, καλέστε αμέσως 112 ή 166." },
  ru: { doctor:"Иоаннис Котидис", role:"Врач-терапевт", call:"Позвонить", back:"← Вернуться на главную", eyebrow:"Медицинские памятки для путешественников", title:"Полезная информация", intro:"Практические медицинские рекомендации для путешественников в Греции. Здесь постепенно будут появляться новые темы.", read:"Читать дальше →", emergency:"Экстренная медицинская помощь", emergencyText:"При угрозе жизни немедленно звоните 112 или 166." }
};
// Full article sources are preserved under _drafts/before-article-hide-20261027/.
const articles = [
  { topic:"ear", icon:"◖", en:["Ear pain while on vacation","Common causes and how to get relief."], el:["Πόνος στο αυτί στις διακοπές","Συχνές αιτίες και τρόποι ανακούφισης."], ru:["Боль в ухе во время отпуска","Частые причины и способы облегчить состояние."] }
];
const el = id => document.getElementById(id);
function setLanguage(lang) {
  const safe = copy[lang] ? lang : "en", t = copy[safe];
  document.documentElement.lang = safe; document.title = `${t.title} — Ioannis Kotidis`; localStorage.setItem("siteLanguage", safe);
  el("doctor-name").textContent=t.doctor; el("doctor-title").textContent=t.role; el("header-call").textContent=t.call; el("back-link").textContent=t.back; el("eyebrow").textContent=t.eyebrow; el("page-title").textContent=t.title; el("page-intro").textContent=t.intro; el("emergency-title").textContent=t.emergency; el("emergency-text").textContent=t.emergencyText;
  el("article-list").replaceChildren(...articles.map(a => { const link=document.createElement("a"); link.className="list-card"; link.href=`article.html?topic=${a.topic}`; link.innerHTML=`<span class="list-icon" aria-hidden="true">${a.icon}</span><strong>${a[safe][0]}</strong><p>${a[safe][1]}</p><span class="list-more">${t.read}</span>`; return link; }));
  document.querySelectorAll(".lang-btn").forEach(b=>b.classList.toggle("active",b.dataset.lang===safe));
}
document.querySelectorAll(".lang-btn").forEach(b=>b.addEventListener("click",()=>setLanguage(b.dataset.lang)));
el("year").textContent=new Date().getFullYear(); setLanguage(localStorage.getItem("siteLanguage")||"en");

