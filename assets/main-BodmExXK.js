import{m as p}from"./layout-68O5ireW.js";import{E as b,T as E}from"./events-CdduMTY3.js";function $(){const t=document.getElementById("hero-video");t&&(t.addEventListener("loadeddata",()=>t.classList.add("is-ready")),t.addEventListener("error",()=>t.remove()))}const y=46,h=34,o=220,I=1e3/24;function S(){const t=document.querySelector(".hero-coin"),s=t==null?void 0:t.querySelector("video");if(!t||!s)return;const i=document.createElement("canvas");i.width=o,i.height=o,i.setAttribute("aria-hidden","true"),t.appendChild(i),s.style.visibility="hidden",s.style.position="absolute";const r=i.getContext("2d",{willReadFrequently:!0});if(!r)return;let u=0,l=null;function f(c){if(l=requestAnimationFrame(f),c-u<I||(u=c,s.readyState<2))return;r.drawImage(s,0,0,o,o);const e=r.getImageData(0,0,o,o),a=e.data;for(let n=0;n<a.length;n+=4){const m=(a[n]+a[n+1]+a[n+2])/3;m<=y?a[n+3]=0:m<y+h&&(a[n+3]=Math.round((m-y)/h*255))}r.putImageData(e,0,0)}new IntersectionObserver(c=>{var a;const e=(a=c[0])==null?void 0:a.isIntersecting;e&&l===null?l=requestAnimationFrame(f):!e&&l!==null&&(cancelAnimationFrame(l),l=null)}).observe(t)}const v={district:"linear-gradient(135deg,#2a0a0e,#5c1019)",state:"linear-gradient(135deg,#1a0507,#8c1522)",icdc:"linear-gradient(135deg,#0a0a0b,#cb1a26)"};function D(t){const s=new Date(`${t.date}T00:00:00`),i={month:"short",day:"numeric"};if(t.endDate&&t.endDate!==t.date){const r=new Date(`${t.endDate}T00:00:00`);return`${s.toLocaleDateString("en-US",i)} – ${r.toLocaleDateString("en-US",{...i,year:"numeric"})}`}return s.toLocaleDateString("en-US",{...i,year:"numeric"})}function C(t){if(!t)return;const s=b.filter(i=>i.featured);t.innerHTML=s.map(i=>`
    <a class="event-card" href="/VistaRidgeDECA/calendar/#${i.id}" data-reveal>
      <div style="position:absolute;inset:0;background:${v[i.tier]||v.district};"></div>
      <div class="event-card-scrim"></div>
      <div class="event-card-body">
        <span class="event-card-tag">${E[i.tier]||i.tier}</span>
        <h3 class="event-card-title">${i.shortTitle}</h3>
        <div class="event-card-meta">
          <span>${D(i)}</span>
          <span>${i.location}</span>
        </div>
      </div>
    </a>`).join("")}const d=[{year:2010,qualifiers:9,finalists:0},{year:2011,qualifiers:13,finalists:0},{year:2012,qualifiers:12,finalists:0},{year:2013,qualifiers:17,finalists:0},{year:2014,qualifiers:24,finalists:3},{year:2015,qualifiers:30,finalists:2},{year:2016,qualifiers:34,finalists:11},{year:2017,qualifiers:26,finalists:11},{year:2018,qualifiers:43,finalists:12},{year:2019,qualifiers:44,finalists:21},{year:2020,qualifiers:44,finalists:0},{year:2021,qualifiers:35,finalists:26},{year:2022,qualifiers:49,finalists:18},{year:2023,qualifiers:32,finalists:23},{year:2024,qualifiers:28,finalists:21},{year:2025,qualifiers:38,finalists:3},{year:2026,qualifiers:27,finalists:7}],q=260;function L(t){if(!t)return;const s=Math.max(...d.map(e=>Math.max(e.qualifiers,e.finalists))),i=d.map(e=>{const a=Math.round(e.qualifiers/s*q),n=Math.round(e.finalists/s*q);return`
      <div class="chart-col">
        <div class="chart-bars">
          <div class="bar qual" style="height:${a}px;" title="${e.qualifiers} ICDC Qualifiers">
            <span class="bar-value">${e.qualifiers}</span>
          </div>
          <div class="bar fin" style="height:${n}px;" title="${e.finalists} ICDC Finalists">
            <span class="bar-value">${e.finalists||""}</span>
          </div>
        </div>
        <span class="chart-year">'${String(e.year).slice(2)}</span>
      </div>`}).join("");t.innerHTML=`<div class="chart" id="icdc-chart">${i}</div>`;const r=t.querySelector("#icdc-chart"),u=d.reduce((e,a)=>e+a.qualifiers,0),l=d.reduce((e,a)=>e+a.finalists,0),f=d.reduce((e,a)=>a.qualifiers>e.qualifiers?a:e);if(document.querySelectorAll("[data-stat]").forEach(e=>{const a=e.dataset.stat;a==="total-qualifiers"&&(e.textContent=`${u}+`),a==="total-finalists"&&(e.textContent=`${l}+`),a==="best-year"&&(e.textContent=f.year)}),!("IntersectionObserver"in window)){r.classList.add("is-visible");return}const c=new IntersectionObserver(e=>{e.forEach(a=>{a.isIntersecting&&(r.classList.add("is-visible"),c.unobserve(a.target))})},{threshold:.3});c.observe(r)}C(document.getElementById("calendar-preview-grid"));L(document.getElementById("icdc-chart-wrap"));p({activePath:"/"});$();S();
