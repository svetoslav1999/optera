/* ============================================================
   Optera — demo pública · 100% offline, sin backend
   ============================================================ */
(() => {
  "use strict";

  /* ---------------- i18n ---------------- */
  const I18N = {
    es: {
      "nav.benefits":"Beneficios","nav.modules":"Módulos","nav.cases":"Casos de uso",
      "nav.center":"Centro de Mando","nav.tech":"Tecnología","nav.cta":"Ver demo",
      "hero.eyebrow":"◆ Decision Intelligence para logística",
      "hero.t1":"Inteligencia logística","hero.t2":"impulsada por IA",
      "hero.tag":"Mueve todo. Desperdicia nada.",
      "hero.sub":"Optera transforma las operaciones logísticas mediante visibilidad en tiempo real, inteligencia predictiva, replanificación autónoma y soporte a la decisión impulsado por IA.",
      "hero.cta1":"Abrir centro de mando","hero.cta2":"Explorar módulos",
      "hero.s1":"menos kilómetros vacíos","hero.s2":"entregas a tiempo","hero.s3":"ahorro anual estimado",
      "ben.kicker":"Beneficios","ben.title":"Resultados operativos, no dashboards vacíos",
      "ben.b1t":"Visibilidad total en tiempo real","ben.b1d":"Cada vehículo, entrega e incidencia en un único pulso operativo vivo. Detecta desviaciones antes de que cuesten dinero.",
      "ben.b2t":"Decisiones asistidas por IA","ben.b2d":"El copiloto Optera AI explica qué pasa, por qué pasa y qué hacer — con métricas y acciones sugeridas, no solo gráficas.",
      "ben.b3t":"Replanificación autónoma","ben.b3d":"Ante un incidente, Optera evalúa, reroutea y recalcula la ETA en segundos. Menos paradas, menos coste, menos CO₂.",
      "ben.b4t":"Coste por entrega más bajo","ben.b4d":"Solver real de rutas (haversine + nearest-neighbour + 2-opt) que recorta kilómetros vacíos y consumo de combustible.",
      "ben.b5t":"Anticipación al riesgo","ben.b5d":"IA predictiva sobre tráfico, clima e incidencias que dispara alertas y recomendaciones antes del impacto.",
      "ben.b6t":"Sostenibilidad medible","ben.b6d":"Toneladas de CO₂ evitadas y combustible optimizado, cuantificados por día y por ruta.",
      "mod.kicker":"Plataforma","mod.title":"Ocho módulos, un solo cerebro operativo",
      "mod.sub":"Todos comparten el mismo motor de IA determinista sobre datos reales.",
      "mod.m1t":"Centro de Operaciones","mod.m1d":"Pulso en vivo de flota, entregas e incidencias.",
      "mod.m2t":"Motor de Optimización","mod.m2d":"Solver real de rutas con coste, tiempo y ahorro.",
      "mod.m3t":"Mapa Interactivo","mod.m3d":"Red logística animada con hubs y vehículos.",
      "mod.m4t":"IA Predictiva","mod.m4d":"Tráfico, clima e incidencias con alertas.",
      "mod.m5t":"Centro de Inteligencia","mod.m5d":"Analítica avanzada y scores globales.",
      "mod.m6t":"Optera AI","mod.m6d":"Copiloto que analiza, explica y recomienda.",
      "mod.m7t":"Replanificación Automática","mod.m7d":"Reroute autónomo ante incidentes.",
      "mod.m8t":"Simulador de Escenarios","mod.m8d":"Gemelo digital para decisiones what-if.",
      "case.kicker":"Casos de uso","case.title":"Diseñado para redes logísticas complejas",
      "case.c1t":"Última milla","case.c1d":"Densifica rutas urbanas y cumple ventanas de entrega ajustadas reduciendo kilómetros vacíos.",
      "case.c2t":"Transporte de larga distancia","case.c2d":"Optimiza cargas, descansos y combustible en corredores interurbanos.",
      "case.c3t":"Distribución multi-hub","case.c3d":"Equilibra demanda entre centros logísticos y anticipa cuellos de botella.",
      "case.c4t":"E-commerce y retail","case.c4d":"Absorbe picos de pedidos manteniendo SLA y coste por envío bajo control.",
      "case.c5t":"Cadena de frío","case.c5d":"Prioriza rutas sensibles al tiempo y reduce el riesgo de rotura de cadena.",
      "case.c6t":"Logística industrial","case.c6d":"Coordina flotas pesadas y materiales con replanificación ante imprevistos.",
      "cc.kicker":"Demo interactiva · sin instalación","cc.title":"Centro de Mando Logístico en Tiempo Real",
      "cc.sub":"Inteligencia operativa para redes logísticas complejas. Datos simulados que se actualizan en vivo.",
      "cc.net":"Estado de Red","cc.ontime":"Entregas a Tiempo","cc.risk":"Riesgos Activos","cc.savetoday":"Ahorro Hoy","cc.live":"EN VIVO",
      "kpi.vehicles":"Vehículos activos","kpi.deliveries":"Entregas hoy","kpi.incidents":"Incidencias abiertas","kpi.savings":"Ahorro generado",
      "kpi.fuel":"Combustible optimizado","kpi.co2":"CO₂ evitado","kpi.score":"Operational Score","kpi.fleet":"Utilización de flota",
      "map.title":"Mapa operativo · España","map.hub":"Hub","map.veh":"Vehículo","map.inc":"Incidencia",
      "ops.fleet":"Estado de flota","ops.moving":"En ruta","ops.loading":"Cargando","ops.idle":"En base","ops.alerts":"Alertas predictivas",
      "ai.kicker":"Optera AI · Copiloto","ai.title":"Pregunta. Entiende. Actúa.",
      "ai.sub":"El copiloto operativo analiza tus datos y responde con análisis, métricas y acciones.",
      "rep.kicker":"Replanificación automática","rep.title":"De incidente a nueva ruta en segundos",
      "rep.f1":"Accidente detectado","rep.f2":"Ruta afectada","rep.f3":"Evaluación IA","rep.f4":"Nueva ruta + ETA",
      "rep.run":"Simular incidente","rep.before":"ANTES","rep.after":"DESPUÉS",
      "rep.time":"Tiempo","rep.cost":"Coste","rep.emis":"Emisiones","rep.save":"Ahorro",
      "sim.kicker":"Simulador de escenarios · Gemelo digital","sim.title":"Decide con datos, no con intuición",
      "sim.demand":"Demanda","sim.fleet":"Tamaño de flota","sim.fuel":"Precio combustible","sim.hubs":"Centros logísticos","sim.orders":"Volumen de pedidos",
      "sim.run":"Simular escenario","sim.rcost":"Coste proyectado","sim.reff":"Eficiencia","sim.rdelay":"Retrasos","sim.rutil":"Utilización","sim.remis":"Emisiones",
      "tech.kicker":"Tecnología","tech.title":"Construido sobre un stack moderno",
      "tech.a1t":"Solver de rutas real","tech.a1d":"Haversine + nearest-neighbour + 2-opt sobre datos reales, no maquetas.",
      "tech.a2t":"Motor de IA compartido","tech.a2d":"Optimización, predicción y geo reutilizados por todos los módulos, con pulido LLM opcional y fallback seguro.",
      "tech.a3t":"Listo para escalar","tech.a3d":"SQLite en desarrollo, migración a PostgreSQL sin cambios de código.",
      "ct.title":"¿Listo para mover todo y no desperdiciar nada?","ct.sub":"Solicita una demostración guiada de Optera para tu red logística.","ct.cta":"Solicitar demo",
      "foot.tag":"Inteligencia logística impulsada por IA · Mueve todo, desperdicia nada.",
      "foot.note":"Demo pública con datos simulados. Sin backend, funciona offline.",
      "u.routesActive":"rutas activas",
      "ai.thinking":"Analizando datos operativos…"
    },
    en: {
      "nav.benefits":"Benefits","nav.modules":"Modules","nav.cases":"Use cases",
      "nav.center":"Command Center","nav.tech":"Technology","nav.cta":"View demo",
      "hero.eyebrow":"◆ Decision Intelligence for logistics",
      "hero.t1":"Logistics intelligence","hero.t2":"powered by AI",
      "hero.tag":"Move everything. Waste nothing.",
      "hero.sub":"Optera transforms logistics operations with real-time visibility, predictive intelligence, autonomous replanning and AI-driven decision support.",
      "hero.cta1":"Open command center","hero.cta2":"Explore modules",
      "hero.s1":"fewer empty miles","hero.s2":"on-time deliveries","hero.s3":"estimated annual savings",
      "ben.kicker":"Benefits","ben.title":"Operational outcomes, not empty dashboards",
      "ben.b1t":"Full real-time visibility","ben.b1d":"Every vehicle, delivery and incident in a single live operational pulse. Catch drift before it costs money.",
      "ben.b2t":"AI-assisted decisions","ben.b2d":"The Optera AI copilot explains what happens, why, and what to do — with metrics and suggested actions, not just charts.",
      "ben.b3t":"Autonomous replanning","ben.b3d":"On an incident, Optera evaluates, reroutes and recalculates ETA in seconds. Fewer stops, lower cost, less CO₂.",
      "ben.b4t":"Lower cost per delivery","ben.b4d":"Real route solver (haversine + nearest-neighbour + 2-opt) cutting empty miles and fuel use.",
      "ben.b5t":"Risk anticipation","ben.b5d":"Predictive AI over traffic, weather and incidents that fires alerts and recommendations before impact.",
      "ben.b6t":"Measurable sustainability","ben.b6d":"Tonnes of CO₂ avoided and fuel optimized, quantified per day and per route.",
      "mod.kicker":"Platform","mod.title":"Eight modules, one operational brain",
      "mod.sub":"All share the same deterministic AI engine over real data.",
      "mod.m1t":"Operations Center","mod.m1d":"Live pulse of fleet, deliveries and incidents.",
      "mod.m2t":"Optimization Engine","mod.m2d":"Real route solver with cost, time and savings.",
      "mod.m3t":"Interactive Map","mod.m3d":"Animated logistics network with hubs and vehicles.",
      "mod.m4t":"Predictive AI","mod.m4d":"Traffic, weather and incidents with alerts.",
      "mod.m5t":"Intelligence Center","mod.m5d":"Advanced analytics and global scores.",
      "mod.m6t":"Optera AI","mod.m6d":"Copilot that analyzes, explains and recommends.",
      "mod.m7t":"Automatic Replanning","mod.m7d":"Autonomous reroute on incidents.",
      "mod.m8t":"Scenario Simulator","mod.m8d":"Digital twin for what-if decisions.",
      "case.kicker":"Use cases","case.title":"Built for complex logistics networks",
      "case.c1t":"Last mile","case.c1d":"Densify urban routes and hit tight delivery windows while cutting empty miles.",
      "case.c2t":"Long-haul transport","case.c2d":"Optimize loads, rest stops and fuel across intercity corridors.",
      "case.c3t":"Multi-hub distribution","case.c3d":"Balance demand across hubs and anticipate bottlenecks.",
      "case.c4t":"E-commerce & retail","case.c4d":"Absorb order spikes while keeping SLA and cost per shipment under control.",
      "case.c5t":"Cold chain","case.c5d":"Prioritize time-sensitive routes and reduce chain-break risk.",
      "case.c6t":"Industrial logistics","case.c6d":"Coordinate heavy fleets and materials with replanning on disruptions.",
      "cc.kicker":"Interactive demo · no install","cc.title":"Real-Time Logistics Command Center",
      "cc.sub":"Operational intelligence for complex logistics networks. Simulated data updating live.",
      "cc.net":"Network Health","cc.ontime":"On-Time Deliveries","cc.risk":"Active Risks","cc.savetoday":"Savings Today","cc.live":"LIVE",
      "kpi.vehicles":"Active vehicles","kpi.deliveries":"Deliveries today","kpi.incidents":"Open incidents","kpi.savings":"Savings generated",
      "kpi.fuel":"Fuel optimized","kpi.co2":"CO₂ avoided","kpi.score":"Operational Score","kpi.fleet":"Fleet utilization",
      "map.title":"Operational map · Spain","map.hub":"Hub","map.veh":"Vehicle","map.inc":"Incident",
      "ops.fleet":"Fleet status","ops.moving":"On route","ops.loading":"Loading","ops.idle":"At base","ops.alerts":"Predictive alerts",
      "ai.kicker":"Optera AI · Copilot","ai.title":"Ask. Understand. Act.",
      "ai.sub":"The operational copilot analyzes your data and answers with analysis, metrics and actions.",
      "rep.kicker":"Automatic replanning","rep.title":"From incident to new route in seconds",
      "rep.f1":"Accident detected","rep.f2":"Route affected","rep.f3":"AI evaluation","rep.f4":"New route + ETA",
      "rep.run":"Simulate incident","rep.before":"BEFORE","rep.after":"AFTER",
      "rep.time":"Time","rep.cost":"Cost","rep.emis":"Emissions","rep.save":"Savings",
      "sim.kicker":"Scenario simulator · Digital twin","sim.title":"Decide with data, not intuition",
      "sim.demand":"Demand","sim.fleet":"Fleet size","sim.fuel":"Fuel price","sim.hubs":"Logistics hubs","sim.orders":"Order volume",
      "sim.run":"Run scenario","sim.rcost":"Projected cost","sim.reff":"Efficiency","sim.rdelay":"Delays","sim.rutil":"Utilization","sim.remis":"Emissions",
      "tech.kicker":"Technology","tech.title":"Built on a modern stack",
      "tech.a1t":"Real route solver","tech.a1d":"Haversine + nearest-neighbour + 2-opt over real data, not mockups.",
      "tech.a2t":"Shared AI engine","tech.a2d":"Optimization, prediction and geo reused across all modules, with optional LLM polish and safe fallback.",
      "tech.a3t":"Ready to scale","tech.a3d":"SQLite in development, migration to PostgreSQL with no code changes.",
      "ct.title":"Ready to move everything and waste nothing?","ct.sub":"Request a guided Optera demo for your logistics network.","ct.cta":"Request demo",
      "foot.tag":"AI-powered logistics intelligence · Move everything, waste nothing.",
      "foot.note":"Public demo with simulated data. No backend, works offline.",
      "u.routesActive":"active routes",
      "ai.thinking":"Analyzing operational data…"
    }
  };

  let lang = "es";
  const t = (k) => (I18N[lang] && I18N[lang][k]) || (I18N.es[k]) || k;

  function applyLang(l){
    lang = (l === "en") ? "en" : "es";
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach(el => { el.textContent = t(el.getAttribute("data-i18n")); });
    document.querySelectorAll(".lang-btn").forEach(b => {
      const on = b.dataset.lang === lang;
      b.classList.toggle("is-active", on);
      b.setAttribute("aria-pressed", String(on));
    });
    document.getElementById("map-routes").textContent = `8 ${t("u.routesActive")}`;
    renderSuggest();
    seedChat();
  }
  document.querySelectorAll(".lang-btn").forEach(b => b.addEventListener("click", () => applyLang(b.dataset.lang)));

  /* ---------------- helpers ---------------- */
  const $ = (s) => document.querySelector(s);
  const fmt = (n) => new Intl.NumberFormat(lang === "es" ? "es-ES" : "en-US").format(Math.round(n));
  const eur = (n) => fmt(n) + " €";
  const rand = (a, b) => a + Math.random() * (b - a);
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

  /* ---------------- count-up hero ---------------- */
  function countUp(el){
    const target = parseFloat(el.dataset.count), suf = el.dataset.suffix || "";
    const dec = target % 1 !== 0 ? 1 : 0;
    let cur = 0; const step = target / 40;
    const tick = () => { cur = Math.min(target, cur + step);
      el.textContent = cur.toFixed(dec).replace(".", lang==="es"?",":".") + suf;
      if (cur < target) requestAnimationFrame(tick); };
    tick();
  }

  /* ---------------- reveal ---------------- */
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting){ e.target.classList.add("reveal-in"); io.unobserve(e.target);
      if (e.target.id === "inicio" || e.target.classList.contains("hero")) {}
    }});
  }, { threshold: 0.12 });
  document.querySelectorAll(".section, .kpi, .statusbar").forEach(el => io.observe(el));
  // hero stats count once
  const heroIO = new IntersectionObserver((es) => es.forEach(e => { if(e.isIntersecting){ document.querySelectorAll(".hstat-num").forEach(countUp); heroIO.disconnect(); }}), {threshold:.4});
  heroIO.observe($(".hero-stats"));

  /* ---------------- LIVE KPIs ---------------- */
  const state = { veh:248, del:1827, inc:3, sav:12480, fuel:3140, co2:1.8, score:94, util:81,
                  net:98.4, ontime:94, risk:3 };
  const sparks = {};
  function setVal(id, txt, flash){
    const el = $(id); if(!el) return;
    if (el.querySelector(".kpi-unit")) el.childNodes[0].nodeValue = txt; // keep unit span
    else el.textContent = txt;
    if (flash){ el.classList.add("flash"); setTimeout(()=>el.classList.remove("flash"), 350); }
  }
  function pushSpark(key, v){ (sparks[key] = sparks[key] || []).push(v); if(sparks[key].length>24) sparks[key].shift(); drawSpark(key); }
  function drawSpark(key){
    const host = document.querySelector(`[data-spark="${key}"]`); if(!host) return;
    const d = sparks[key]; if(d.length<2) return;
    const w=120,h=22, mn=Math.min(...d), mx=Math.max(...d), rng=(mx-mn)||1;
    const pts = d.map((v,i)=>`${(i/(d.length-1))*w},${h-((v-mn)/rng)*h}`).join(" ");
    host.innerHTML = `<svg viewBox="0 0 ${w} ${h}" preserveAspectRatio="none" style="width:100%;height:100%">
      <polyline points="${pts}" fill="none" stroke="url(#sg)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <defs><linearGradient id="sg" x1="0" x2="1"><stop offset="0" stop-color="#21e1ff"/><stop offset="1" stop-color="#8b5cff"/></linearGradient></defs>
    </svg>`;
  }
  function tickKPI(){
    state.veh   = clamp(state.veh + Math.round(rand(-4,5)), 232, 264);
    state.del  += Math.round(rand(0,9));
    state.inc   = clamp(state.inc + (Math.random()<0.2?Math.round(rand(-1,1)):0), 1, 6);
    state.sav  += Math.round(rand(20,140));
    state.fuel += Math.round(rand(3,22));
    state.co2   = clamp(state.co2 + rand(0.005,0.03), 1.5, 3.2);
    state.score = clamp(state.score + rand(-0.5,0.5), 90, 97);
    state.util  = clamp(state.util + rand(-1.4,1.4), 72, 92);
    state.net   = clamp(state.net + rand(-0.15,0.15), 96.5, 99.4);
    state.ontime= clamp(state.ontime + rand(-0.4,0.4), 90, 97);
    state.risk  = state.inc <= 2 ? 2 : (state.inc>=5?4:3);

    setVal("#k-veh", fmt(state.veh), true);
    setVal("#k-del", fmt(state.del), true);
    setVal("#k-inc", fmt(state.inc));
    setVal("#k-sav", eur(state.sav), true);
    setVal("#k-fuel", fmt(state.fuel)+" L", true);
    setVal("#k-co2", state.co2.toFixed(1).replace(".",lang==="es"?",":".")+" T");
    $("#k-score").childNodes[0].nodeValue = Math.round(state.score);
    $("#k-util").childNodes[0].nodeValue = Math.round(state.util);

    $("#sb-net").textContent = state.net.toFixed(1).replace(".",lang==="es"?",":".")+"%";
    $("#sb-ontime").textContent = Math.round(state.ontime)+"%";
    $("#sb-risk").textContent = state.risk;
    $("#sb-save").textContent = eur(state.sav);

    pushSpark("veh",state.veh); pushSpark("del",state.del); pushSpark("inc",state.inc);
    pushSpark("sav",state.sav); pushSpark("fuel",state.fuel); pushSpark("co2",state.co2);
    pushSpark("score",state.score); pushSpark("util",state.util);
  }

  /* ---------------- SVG MAP ---------------- */
  const HUBS = {
    madrid:{x:300,y:270,n:"Madrid"}, barcelona:{x:470,y:175,n:"Barcelona"},
    valencia:{x:415,y:300,n:"Valencia"}, bilbao:{x:315,y:120,n:"Bilbao"}, sevilla:{x:215,y:400,n:"Sevilla"}
  };
  const ROUTES = [
    ["madrid","barcelona"],["madrid","valencia"],["madrid","bilbao"],["madrid","sevilla"],
    ["barcelona","valencia"],["bilbao","barcelona"],["valencia","sevilla"],["sevilla","madrid"]
  ];
  function buildMap(){
    const svg = $("#opmap");
    const NS = "http://www.w3.org/2000/svg";
    let h = `<defs>
      <linearGradient id="route" x1="0" x2="1"><stop offset="0" stop-color="#2f6bff"/><stop offset="1" stop-color="#21e1ff"/></linearGradient>
      <radialGradient id="hubg"><stop offset="0" stop-color="#21e1ff"/><stop offset="1" stop-color="#2f6bff"/></radialGradient>
    </defs>`;
    // faint españa silhouette frame
    h += `<rect x="120" y="70" width="400" height="380" rx="40" fill="none" stroke="rgba(255,255,255,.04)"/>`;
    // routes
    ROUTES.forEach(([a,b],i)=>{
      const A=HUBS[a],B=HUBS[b];
      h += `<line x1="${A.x}" y1="${A.y}" x2="${B.x}" y2="${B.y}" stroke="url(#route)" stroke-width="1.4" stroke-opacity=".5" stroke-dasharray="6 8" class="rline" style="animation:dash ${18+i*2}s linear infinite"/>`;
    });
    // hubs
    Object.values(HUBS).forEach(hub=>{
      h += `<g>
        <circle cx="${hub.x}" cy="${hub.y}" r="7" fill="url(#hubg)"/>
        <circle cx="${hub.x}" cy="${hub.y}" r="7" fill="none" stroke="#21e1ff" stroke-opacity=".5"><animate attributeName="r" values="7;18;7" dur="3s" repeatCount="indefinite"/><animate attributeName="stroke-opacity" values=".5;0;.5" dur="3s" repeatCount="indefinite"/></circle>
        <text x="${hub.x}" y="${hub.y-14}" fill="#9aa6c7" font-size="12" font-family="JetBrains Mono,monospace" text-anchor="middle">${hub.n}</text>
      </g>`;
    });
    // vehicles (animated along routes via SMIL)
    ROUTES.forEach(([a,b],i)=>{
      const A=HUBS[a],B=HUBS[b];
      const dur = (10+i*1.5);
      h += `<circle r="3.5" fill="#5ef2a8"><animateMotion dur="${dur}s" repeatCount="indefinite" path="M${A.x},${A.y} L${B.x},${B.y}"/></circle>`;
      h += `<circle r="3" fill="#2f6bff"><animateMotion dur="${dur}s" begin="${dur/2}s" repeatCount="indefinite" path="M${B.x},${B.y} L${A.x},${A.y}"/></circle>`;
    });
    // incident marker (valencia-sevilla mid)
    const va=HUBS.valencia, se=HUBS.sevilla;
    const ix=(va.x+se.x)/2, iy=(va.y+se.y)/2;
    h += `<g id="inc-marker"><circle cx="${ix}" cy="${iy}" r="6" fill="#ffb648"/>
      <circle cx="${ix}" cy="${iy}" r="6" fill="none" stroke="#ffb648"><animate attributeName="r" values="6;16;6" dur="1.6s" repeatCount="indefinite"/><animate attributeName="stroke-opacity" values=".8;0;.8" dur="1.6s" repeatCount="indefinite"/></circle></g>`;
    svg.innerHTML = h;
  }

  /* ---------------- ALERT FEED ---------------- */
  const ALERTS = {
    es:[
      {tag:"warn",txt:"Tráfico denso A-7 Valencia→Sevilla. ETA +18 min en 2 rutas."},
      {tag:"info",txt:"Predicción de lluvia en Bilbao a 14:00. Riesgo de retraso medio."},
      {tag:"ok",txt:"Ruta Madrid→Barcelona optimizada: -34 km, -12 € coste."},
      {tag:"warn",txt:"Vehículo 0142 con baja utilización (41%). Reasignación sugerida."},
      {tag:"info",txt:"Pico de pedidos detectado en Madrid (+22%) próximas 3 h."},
      {tag:"ok",txt:"Hub Sevilla por debajo de capacidad. Margen para 60 entregas."}
    ],
    en:[
      {tag:"warn",txt:"Heavy traffic A-7 Valencia→Sevilla. ETA +18 min on 2 routes."},
      {tag:"info",txt:"Rain forecast in Bilbao at 14:00. Medium delay risk."},
      {tag:"ok",txt:"Madrid→Barcelona route optimized: -34 km, -12 € cost."},
      {tag:"warn",txt:"Vehicle 0142 low utilization (41%). Reassignment suggested."},
      {tag:"info",txt:"Order spike detected in Madrid (+22%) next 3 h."},
      {tag:"ok",txt:"Sevilla hub below capacity. Room for 60 deliveries."}
    ]
  };
  let aIdx=0;
  function pushAlert(){
    const feed = $("#alert-feed"); if(!feed) return;
    const list = ALERTS[lang] || ALERTS.es;
    const a = list[aIdx % list.length]; aIdx++;
    const li = document.createElement("li");
    const time = new Date().toLocaleTimeString(lang==="es"?"es-ES":"en-US",{hour:"2-digit",minute:"2-digit"});
    li.innerHTML = `<span class="ftag ${a.tag}">${time}</span><span>${a.txt}</span>`;
    feed.prepend(li);
    while(feed.children.length>5) feed.removeChild(feed.lastChild);
  }

  /* ---------------- OPTERA AI ---------------- */
  const AI = {
    es:[
      {q:"¿Por qué cayó la eficiencia?",
       h:"Caída de eficiencia: causa principal identificada",
       a:"La eficiencia bajó 4,2 pts respecto a la media semanal. El 68% se explica por congestión en el corredor A-7 (Valencia→Sevilla) y un reparto sub-óptimo de cargas en el hub de Madrid.",
       m:["-4,2 pts eficiencia","68% por congestión A-7","Hub Madrid 91% ocupación"],
       r:["Reasignar 6 entregas del A-7 a la ruta costera","Adelantar 2 salidas del hub Madrid a las 06:30"]},
      {q:"¿Qué rutas generan más coste?",
       h:"Top rutas por coste operativo",
       a:"Tres rutas concentran el 41% del coste variable. Madrid→Sevilla lidera por kilómetros vacíos en el retorno (38%).",
       m:["Madrid→Sevilla 612 €/día","38% km vacíos retorno","Bilbao→Barcelona 488 €/día"],
       r:["Emparejar retornos con carga de Sevilla→Madrid","Consolidar Bilbao→Barcelona en 1 salida diaria"]},
      {q:"¿Cómo reducir combustible?",
       h:"Plan de reducción de combustible",
       a:"Combinando 2-opt en las 8 rutas activas y suavizado de aceleración se puede recortar el consumo un 9-12% sin afectar a las ventanas de entrega.",
       m:["-11% consumo estimado","-3.140 L / semana","-1,8 T CO₂"],
       r:["Activar reoptimización 2-opt nocturna","Aplicar perfil eco a 40 vehículos urbanos"]},
      {q:"¿Qué entregas tienen riesgo?",
       h:"Entregas en riesgo de incumplir SLA",
       a:"7 entregas presentan riesgo alto de retraso por la incidencia A-7 y la lluvia prevista en Bilbao. 3 son prioritarias (cliente premium).",
       m:["7 entregas en riesgo","3 prioritarias","ventana <90 min"],
       r:["Replanificar las 3 prioritarias ahora","Notificar ETA revisada a clientes afectados"]},
      {q:"¿Qué recursos están infrautilizados?",
       h:"Recursos infrautilizados detectados",
       a:"5 vehículos operan por debajo del 50% de utilización y el hub de Sevilla tiene capacidad ociosa. Hay margen para absorber el pico de Madrid.",
       m:["5 vehículos <50%","Hub Sevilla 64% uso","+60 entregas posibles"],
       r:["Reasignar 2 vehículos al pico de Madrid","Derivar 25 entregas al hub de Sevilla"]}
    ],
    en:[
      {q:"Why did efficiency drop?",
       h:"Efficiency drop: main cause identified",
       a:"Efficiency fell 4.2 pts vs the weekly average. 68% is explained by congestion on the A-7 corridor (Valencia→Sevilla) and sub-optimal load distribution at the Madrid hub.",
       m:["-4.2 pts efficiency","68% from A-7 congestion","Madrid hub 91% occupancy"],
       r:["Reassign 6 A-7 deliveries to the coastal route","Move 2 Madrid hub departures to 06:30"]},
      {q:"Which routes cost the most?",
       h:"Top routes by operating cost",
       a:"Three routes concentrate 41% of variable cost. Madrid→Sevilla leads due to empty return miles (38%).",
       m:["Madrid→Sevilla 612 €/day","38% empty return miles","Bilbao→Barcelona 488 €/day"],
       r:["Pair returns with Sevilla→Madrid freight","Consolidate Bilbao→Barcelona into 1 daily run"]},
      {q:"How can we cut fuel?",
       h:"Fuel reduction plan",
       a:"Combining 2-opt on the 8 active routes with acceleration smoothing can cut consumption 9-12% without affecting delivery windows.",
       m:["-11% estimated use","-3,140 L / week","-1.8 T CO₂"],
       r:["Enable nightly 2-opt reoptimization","Apply eco profile to 40 urban vehicles"]},
      {q:"Which deliveries are at risk?",
       h:"Deliveries at risk of SLA breach",
       a:"7 deliveries are at high delay risk from the A-7 incident and forecast rain in Bilbao. 3 are priority (premium customer).",
       m:["7 deliveries at risk","3 priority","window <90 min"],
       r:["Replan the 3 priority ones now","Notify revised ETA to affected customers"]},
      {q:"Which resources are underused?",
       h:"Underused resources detected",
       a:"5 vehicles run below 50% utilization and the Sevilla hub has idle capacity. There is room to absorb the Madrid spike.",
       m:["5 vehicles <50%","Sevilla hub 64% use","+60 deliveries possible"],
       r:["Reassign 2 vehicles to the Madrid spike","Divert 25 deliveries to the Sevilla hub"]}
    ]
  };
  function renderSuggest(){
    const host = $("#ai-suggest"); if(!host) return;
    host.innerHTML = "";
    (AI[lang]||AI.es).forEach((it,i)=>{
      const c = document.createElement("button");
      c.className="chip"; c.textContent=it.q; c.addEventListener("click",()=>askAI(i));
      host.appendChild(c);
    });
  }
  function bubble(cls, html){
    const b=document.createElement("div"); b.className="msg "+cls; b.innerHTML=html;
    $("#ai-chat").appendChild(b); $("#ai-chat").scrollTop = $("#ai-chat").scrollHeight; return b;
  }
  let aiBusy=false;
  function askAI(i){
    if(aiBusy) return; aiBusy=true;
    const it=(AI[lang]||AI.es)[i];
    bubble("user", it.q);
    const typing=bubble("ai", `<span class="typing"><i></i><i></i><i></i></span>`);
    setTimeout(()=>{
      const recoLabel = lang==="es"?"Acciones sugeridas":"Suggested actions";
      typing.innerHTML = `<h4>${it.h}</h4><p>${it.a}</p>
        <div>${it.m.map(x=>`<span class="metric">${x}</span>`).join("")}</div>
        <ul>${it.r.map(x=>`<li>${x}</li>`).join("")}</ul>
        <p style="margin-top:6px;color:var(--faint);font-size:12px">${recoLabel}</p>`;
      $("#ai-chat").scrollTop = $("#ai-chat").scrollHeight; aiBusy=false;
    }, 900);
  }
  function seedChat(){
    const chat=$("#ai-chat"); if(!chat) return; chat.innerHTML="";
    const greet = lang==="es"
      ? "Hola, soy Optera AI. Pregúntame por la eficiencia, el coste de las rutas, el combustible, los riesgos o los recursos infrautilizados."
      : "Hi, I'm Optera AI. Ask me about efficiency, route cost, fuel, risks or underused resources.";
    bubble("ai", `<h4>Optera AI</h4><p>${greet}</p>`);
  }

  /* ---------------- REPLANNING ---------------- */
  $("#replan-run").addEventListener("click", ()=>{
    const steps=[...document.querySelectorAll(".rf-step")];
    steps.forEach(s=>s.classList.remove("active"));
    $("#replan-cmp").hidden=true;
    let i=0;
    const adv=()=>{ if(i>0) steps[i-1].classList.remove("active");
      if(i<steps.length){ steps[i].classList.add("active"); i++; setTimeout(adv,650); }
      else { setTimeout(()=>{ steps.forEach(s=>s.classList.add("active")); $("#replan-cmp").hidden=false; },200); } };
    adv();
  });

  /* ---------------- SIMULATOR ---------------- */
  const sIn = ["demand","fleet","fuel","hubs","orders"];
  function syncOut(){
    $("#o-demand").textContent = $("#s-demand").value+"%";
    $("#o-fleet").textContent  = $("#s-fleet").value;
    $("#o-fuel").textContent   = (parseInt($("#s-fuel").value)/100*1.6).toFixed(2).replace(".",lang==="es"?",":".")+" €/L";
    $("#o-hubs").textContent   = $("#s-hubs").value;
    $("#o-orders").textContent = fmt(parseInt($("#s-orders").value));
  }
  sIn.forEach(k=>$("#s-"+k).addEventListener("input", syncOut));
  $("#sim-run").addEventListener("click", ()=>{
    const demand=+$("#s-demand").value/100, fleet=+$("#s-fleet").value, fuel=+$("#s-fuel").value/100,
          hubs=+$("#s-hubs").value, orders=+$("#s-orders").value;
    const loadPerVeh = (orders*demand)/fleet;
    const util = clamp(loadPerVeh/9*100, 30, 99);
    const baseCost = orders*demand*0.34*fuel*(1+ (5-hubs)*0.06);
    const eff = clamp(100 - Math.abs(util-82)*0.9 - Math.max(0,(5-hubs))*3, 45, 98);
    const delay = clamp((util>90? (util-90)*1.3:0) + (demand>1.3?(demand-1.3)*22:0) + Math.max(0,(4-hubs))*4, 0, 60);
    const emis = orders*demand*0.108*(1 - (eff-70)/400);

    $("#r-cost").textContent = eur(baseCost);
    $("#r-eff").textContent  = Math.round(eff)+"%";
    $("#r-delay").textContent= delay.toFixed(0)+(lang==="es"?" min":" min");
    $("#r-util").textContent = Math.round(util)+"%";
    $("#r-emis").textContent = (emis/1000).toFixed(1).replace(".",lang==="es"?",":".")+" T";

    const reco = $("#sim-reco"); reco.hidden=false;
    let msg;
    if(lang==="es"){
      if(util>92) msg="<b>Recomendación IA:</b> flota saturada — añade vehículos o un hub para bajar retrasos y emisiones.";
      else if(util<55) msg="<b>Recomendación IA:</b> flota infrautilizada — reduce vehículos o consolida rutas para recortar coste.";
      else if(hubs<3) msg="<b>Recomendación IA:</b> pocos hubs para esta demanda — abrir 1 hub mejoraría eficiencia y ETA.";
      else msg="<b>Recomendación IA:</b> escenario equilibrado. Margen de optimización vía 2-opt nocturno (-8% coste estimado).";
    } else {
      if(util>92) msg="<b>AI recommendation:</b> fleet saturated — add vehicles or a hub to cut delays and emissions.";
      else if(util<55) msg="<b>AI recommendation:</b> fleet underused — reduce vehicles or consolidate routes to cut cost.";
      else if(hubs<3) msg="<b>AI recommendation:</b> too few hubs for this demand — opening 1 hub would improve efficiency and ETA.";
      else msg="<b>AI recommendation:</b> balanced scenario. Optimization headroom via nightly 2-opt (-8% estimated cost).";
    }
    reco.innerHTML = msg;
  });

  /* ---------------- NAV scroll ---------------- */
  const nav=$("#nav");
  addEventListener("scroll", ()=>{ nav.style.boxShadow = scrollY>20 ? "0 8px 40px -20px rgba(0,0,0,.8)" : "none"; });

  /* ---------------- BOOT ---------------- */
  applyLang("es");
  buildMap();
  for(let k in state) {} // noop
  // prime sparks
  Object.keys({veh:1,del:1,inc:1,sav:1,fuel:1,co2:1,score:1,util:1}).forEach(k=>{ sparks[k]=[]; });
  tickKPI(); tickKPI(); tickKPI();
  pushAlert(); pushAlert();
  setInterval(tickKPI, 2200);
  setInterval(pushAlert, 4800);
  syncOut();
})();
