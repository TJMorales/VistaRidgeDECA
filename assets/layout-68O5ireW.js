(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const l={chapterName:"Vista Ridge DECA",schoolName:"Vista Ridge High School",district:"Leander ISD",advisorName:"Israel Martinez Jr.",advisorEmail:"israel.martinez@leanderisd.org"},c=["Welcome to the new VRHS DECA site — under construction, updated often.","General Chapter Meeting — [Date] — Room [###]","District CDC registration opens soon — talk to your officer team."],i="/VistaRidgeDECA/",p=[{label:"Members",href:`${i}members/`},{label:"Competitors",href:`${i}competitors/`},{label:"Parents",href:`${i}parents/`},{label:"Calendar",href:`${i}calendar/`}],f=[{label:"Instagram",href:"#",icon:"instagram"},{label:"Remind",href:"#",icon:"bell"},{label:"Discord",href:"#",icon:"discord"}],u=[{title:"Explore",links:[{label:"Home",href:i},{label:"Members",href:`${i}members/`},{label:"Competitors",href:`${i}competitors/`},{label:"Parents",href:`${i}parents/`},{label:"Full Calendar",href:`${i}calendar/`}]},{title:"Resources",links:[{label:"Join DECA",href:`${i}members/#join`},{label:"Study Materials",href:`${i}competitors/#study-materials`},{label:"Officer Applications",href:`${i}members/#leadership`},{label:"Scholarships",href:`${i}parents/#scholarships`}]},{title:"Connect",links:[{label:"Contact the Chapter",href:"#contact"},{label:`Email ${l.advisorName}`,href:`mailto:${l.advisorEmail}`},{label:"DECA Inc.",href:"https://www.deca.org"}]}];function h(a="/"){return`
  <header class="site-header" id="site-header">
    <div class="nav-inner">
      <a href="/VistaRidgeDECA/" class="brand-mark" aria-label="Vista Ridge DECA home">
        <img src="/VistaRidgeDECA/assets/images/vrhs-deca-logo.jpg" alt="Vista Ridge High School Rangers star and horseman crest" width="56" height="56" />
        <span class="brand-mark-text">Vista Ridge<span>DECA</span></span>
      </a>
      <nav class="nav-links" id="nav-links">
        ${p.map(r=>{const n=r.href===a;return`<a href="${r.href}"${n?' aria-current="page"':""}>${r.label}</a>`}).join("")}
        <a href="#contact" class="btn btn-primary nav-mobile-cta" data-contact-open>Contact</a>
      </nav>
      <div class="nav-actions">
        <a href="#contact" class="btn btn-primary" data-contact-open>Contact</a>
        <button class="nav-toggle" id="nav-toggle" aria-label="Toggle menu" aria-expanded="false" aria-controls="nav-links">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>
  </header>`}const v=[{lang:"English",body:["The Leander Independent School District offers Career and Technical Education programs in sixteen different career cluster areas. Admission to these programs is based on interests and aptitude, age appropriateness, and available class space.","It is the policy of Leander Independent School District not to discriminate on the basis of race, color, national origin, sex or handicap in its vocational programs, services or activities as required by Title VI of the Civil Rights Act of 1964, as amended; Title IX of the Education Amendments of 1972; and Section 504 of the Rehabilitation Act of 1973, as amended.","Leander Independent School District will take steps to assure that lack of English language skills will not be a barrier to admission and participation in all educational and vocational programs."]},{lang:"Español",body:["El Distrito Escolar Independiente de Leander ofrece programas de Educación Técnica y Vocacional en dieciséis áreas ocupacionales diferentes. La admisión a estos programas se basa en el interés y la aptitud, la edad apropiada y el espacio disponible en las clases.","Es norma del Distrito Escolar Independiente de Leander no discriminar por motivos de raza, color, origen nacional, sexo o impedimento en sus programas, servicios o actividades vocacionales, conforme lo exige el Título VI de la Ley de Derechos Civiles de 1964, según enmienda; el Título IX de las Enmiendas en la Educación de 1972; y la Sección 504 de la Ley de Rehabilitación de 1973, según enmienda.","El Distrito Escolar Independiente de Leander tomará las medidas necesarias para asegurar que la falta de dominio del idioma inglés no sea un obstáculo para la admisión y participación en todos los programas educativos y vocacionales."]}],d={instagram:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r="1"/></svg>',bell:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6 8a6 6 0 0 1 12 0c0 5 2 6 2 6H4s2-1 2-6Z"/><path d="M10 20a2 2 0 0 0 4 0"/></svg>',discord:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="6" width="18" height="13" rx="4"/><circle cx="9" cy="12.5" r="1.4" fill="currentColor" stroke="none"/><circle cx="15" cy="12.5" r="1.4" fill="currentColor" stroke="none"/><path d="M8 6 9 3h6l1 3"/></svg>',arrow:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',close:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 6l12 12M18 6 6 18"/></svg>',chevronLeft:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M15 6l-6 6 6 6"/></svg>',chevronRight:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M9 6l6 6-6 6"/></svg>',pin:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 21s7-6.5 7-12a7 7 0 0 0-14 0c0 5.5 7 12 7 12Z"/><circle cx="12" cy="9" r="2.4"/></svg>',clock:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/></svg>'};function g(){const a=u.map(n=>`
    <div class="footer-col">
      <h4>${n.title}</h4>
      <ul>
        ${n.links.map(e=>`<li><a href="${e.href}">${e.label}</a></li>`).join("")}
      </ul>
    </div>`).join(""),o=f.map(n=>`
    <a href="${n.href}" aria-label="${n.label}" target="_blank" rel="noopener">${d[n.icon]||""}</a>`).join(""),r=v.map(n=>`
    <div>
      <strong>${n.lang}</strong>
      ${n.body.map(e=>`<p>${e}</p>`).join("")}
    </div>`).join("");return`
  <footer class="site-footer" id="contact-anchor">
    <div class="container">
      <div class="footer-top">
        <div>
          <div class="footer-brand">
            <img src="/VistaRidgeDECA/assets/images/vrhs-deca-logo.jpg" alt="Vista Ridge Rangers crest" width="52" height="52" />
            <span class="footer-brand-text">Vista Ridge DECA</span>
          </div>
          <p style="max-width:34ch;font-size:var(--fs-small);">Cedar Park, TX — an official chartered chapter of DECA Inc., preparing emerging leaders and entrepreneurs in business, marketing, finance, hospitality, and management.</p>
          <div class="footer-social">${o}</div>
        </div>
        ${a}
      </div>
      <div class="footer-legal">
        <div class="footer-bottom-row">
          <span>&copy; <span id="footer-year"></span> ${l.chapterName}. Built by students, for students.</span>
          <span>${l.schoolName} &middot; ${l.district}</span>
        </div>
        <details>
          <summary>Non-Discrimination Statement</summary>
          <div class="statement-block">${r}</div>
        </details>
      </div>
    </div>
  </footer>`}function b(){if(c.length===0)return"";const a=c.map(o=>`<span class="marquee-item"><span class="dot">&bull;</span>${o}</span>`).join("");return`
  <div class="marquee" role="status" aria-label="Chapter announcements">
    <div class="marquee-track">
      <div style="display:flex;">${a}</div>
      <div style="display:flex;" aria-hidden="true">${a}</div>
    </div>
  </div>`}function y(){return`
  <div class="modal-overlay" id="contact-modal" role="dialog" aria-modal="true" aria-labelledby="contact-modal-title">
    <div class="modal-card">
      <button class="modal-close" id="contact-modal-close" aria-label="Close">${d.close}</button>
      <p class="eyebrow">Get in touch</p>
      <h3 id="contact-modal-title" style="font-family:var(--font-display);font-size:1.8rem;text-transform:uppercase;margin:var(--space-2) 0 var(--space-5);">Reach the Chapter</h3>
      <form id="contact-form">
        <div class="form-field">
          <label for="cf-name">Name</label>
          <input id="cf-name" name="name" type="text" required autocomplete="name" />
        </div>
        <div class="form-field">
          <label for="cf-email">Email</label>
          <input id="cf-email" name="email" type="email" required autocomplete="email" />
        </div>
        <div class="form-field">
          <label for="cf-role">I am a...</label>
          <select id="cf-role" name="role">
            <option>Prospective Member</option>
            <option>Current Member</option>
            <option>Parent / Guardian</option>
            <option>Community Partner / Judge</option>
            <option>Other</option>
          </select>
        </div>
        <div class="form-field">
          <label for="cf-message">Message</label>
          <textarea id="cf-message" name="message" rows="3" required></textarea>
        </div>
        <button type="submit" class="btn btn-primary" style="width:100%;justify-content:center;">Send Message</button>
        <p style="font-size:var(--fs-small);color:var(--color-text-muted);margin-top:var(--space-3);text-align:center;">This form isn't wired up to an inbox yet — for now, reach out directly to the chapter advisor in the footer.</p>
      </form>
    </div>
  </div>`}function m(a=document){const o=a.querySelectorAll("[data-reveal]");if(!o.length)return;if(!("IntersectionObserver"in window)){o.forEach(e=>e.classList.add("is-visible"));return}const r=new Map;o.forEach(e=>{const t=e.closest("[data-reveal-group]");if(t){const s=r.get(t)||[];s.push(e),r.set(t,s)}}),r.forEach(e=>{e.forEach((t,s)=>t.style.setProperty("--reveal-index",s))});const n=new IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting&&(t.target.classList.add("is-visible"),n.unobserve(t.target))})},{threshold:.15,rootMargin:"0px 0px -8% 0px"});o.forEach(e=>n.observe(e))}const k=Object.freeze(Object.defineProperty({__proto__:null,initReveal:m},Symbol.toStringTag,{value:"Module"}));function I({activePath:a="/"}={}){const o=document.getElementById("header-root"),r=document.getElementById("marquee-root"),n=document.getElementById("footer-root"),e=document.getElementById("modal-root");o&&(o.innerHTML=h(a)),r&&(r.innerHTML=b()),n&&(n.innerHTML=g()),e&&(e.innerHTML=y()),E(),w(),C(),x(),m()}function E(){const a=document.getElementById("site-header");if(!a)return;const o=()=>{a.classList.toggle("is-scrolled",window.scrollY>12)};o(),window.addEventListener("scroll",o,{passive:!0})}function w(){const a=document.getElementById("nav-toggle"),o=document.getElementById("nav-links");!a||!o||(a.addEventListener("click",()=>{const r=o.classList.toggle("is-open");a.setAttribute("aria-expanded",String(r))}),o.querySelectorAll("a").forEach(r=>{r.addEventListener("click",()=>{o.classList.remove("is-open"),a.setAttribute("aria-expanded","false")})}))}function C(){const a=document.getElementById("contact-modal");if(!a)return;const o=document.getElementById("contact-modal-close"),r=document.getElementById("contact-form"),n=t=>{var s;t&&t.preventDefault(),a.classList.add("is-open"),document.body.style.overflow="hidden",(s=a.querySelector("input"))==null||s.focus()},e=()=>{a.classList.remove("is-open"),document.body.style.overflow=""};document.querySelectorAll("[data-contact-open]").forEach(t=>{t.addEventListener("click",n)}),o==null||o.addEventListener("click",e),a.addEventListener("click",t=>{t.target===a&&e()}),document.addEventListener("keydown",t=>{t.key==="Escape"&&a.classList.contains("is-open")&&e()}),r==null||r.addEventListener("submit",t=>{t.preventDefault(),r.innerHTML=`<p style="font-weight:700;">Thanks — this form isn't connected yet, so nothing was sent. Please email the advisor directly for now (see footer).</p>`})}function x(){const a=document.getElementById("footer-year");a&&(a.textContent=new Date().getFullYear())}export{d as I,I as m,k as r};
