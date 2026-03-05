// docs/assets/js/changelog-versions.js
// ─────────────────────────────────────────────────────────────────────────────
// CÓMO AGREGAR UNA VERSIÓN NUEVA:
//   1. Copia cualquier objeto del array como plantilla
//   2. Pégalo AL INICIO del array (más reciente primero)
//   3. Actualiza: version, pill, en (HTML inglés), es (HTML español)
//   4. Guarda — el index.html lo renderiza automáticamente
//
// CLASES CSS DISPONIBLES:
//   .feature-box              → caja azul
//   .feature-box.green        → caja verde
//   .note-box                 → caja amarilla
//   .security-box             → caja roja
//   .highlight-box            → caja púrpura
//   .setup-guide              → caja verde (guía paso a paso)
//   .channel-restriction      → caja naranja
//   .command-list + .command-tag → fila de badges de comandos
//   .table-wrapper > table    → tabla estilizada
//   .new-badge                → badge verde "NEW" / "NUEVO"
//   .updated-badge            → badge amarillo "UPDATED" / "ACTUALIZADO"
// ─────────────────────────────────────────────────────────────────────────────

const CHANGELOG_VERSIONS = [

  // ── v2.5.0 ────────────────────────────────────────────────────────────────
  {
    version: 'v2.5.0',
    pill: 'Mar 2026',
    en: `
<h2>🌟 Major Update</h2>
<p>v2.5.0 brings full bilingual support to both the CharmsBot Discord bot and the website, a new command, and several bug fixes.</p>

<h2>🤖 CharmsBot Discord Bot — Now in English &amp; Spanish <span class="new-badge">NEW</span></h2>
<p>CharmsBot now responds in your preferred language. Set your language once and all bot responses, messages, and prompts will follow.</p>
<div class="feature-box green">
  <ul>
    <li>All command responses available in English and Spanish</li>
    <li>Interactive menus, buttons, and modals fully translated</li>
    <li>Error messages and confirmations in your language</li>
    <li>Language preference saved per user and per server — personal preference takes priority</li>
  </ul>
</div>

<h2>🚚 New Command: <code>/deliverytask</code> <span class="new-badge">NEW</span></h2>
<p>Search for Delivery Task items directly from your Hunt Analyzer data and get instant price and NPC information — no manual lookup needed.</p>

<h2>🌍 Website — Now in English &amp; Spanish <span class="new-badge">NEW</span></h2>
<p>The CharmsBot website is now fully bilingual. Use the flag buttons in the header bar to switch languages — your preference is saved automatically.</p>
<div class="feature-box green">
  <ul>
    <li>Home, Commands, Changelog, Contact, Legal, Terms of Service, and Privacy Policy fully translated</li>
    <li>Changelog content switches language instantly — no reload needed</li>
  </ul>
</div>

<h2>🐛 Bug Fixes</h2>
<h3>Discord Bot</h3>
<ul>
  <li>Fixed an issue where some modal submissions could fail silently</li>
  <li>Fixed incorrect error messages when pasting invalid Hunt Analyzer data</li>
  <li>Fixed edge cases in charm assignment calculations for certain spawn compositions</li>
</ul>
<h3>Website</h3>
<ul>
  <li>Fixed bot status showing raw text instead of the translated label on some pages</li>
  <li>Fixed boosted creature and boss images not loading on subpages</li>
</ul>
`,
    es: `
<h2>🌟 Actualización Mayor</h2>
<p>v2.5.0 incorpora soporte bilingüe completo tanto en el bot de Discord CharmsBot como en el sitio web, un nuevo comando y varias correcciones de bugs.</p>

<h2>🤖 CharmsBot Discord Bot — Ahora en Inglés y Español <span class="new-badge">NUEVO</span></h2>
<p>CharmsBot ahora responde en tu idioma preferido. Configúralo una vez y todas las respuestas, mensajes y formularios del bot lo seguirán.</p>
<div class="feature-box green">
  <ul>
    <li>Todas las respuestas de comandos disponibles en inglés y español</li>
    <li>Menús interactivos, botones y modales completamente traducidos</li>
    <li>Mensajes de error y confirmaciones en tu idioma</li>
    <li>Preferencia de idioma guardada por usuario y por servidor — la preferencia personal tiene prioridad</li>
  </ul>
</div>

<h2>🚚 Nuevo Comando: <code>/deliverytask</code> <span class="new-badge">NUEVO</span></h2>
<p>Busca ítems de Delivery Task directamente desde tu Hunt Analyzer y obtén precios e información del NPC al instante — sin búsqueda manual.</p>

<h2>🌍 Sitio Web — Ahora en Inglés y Español <span class="new-badge">NUEVO</span></h2>
<p>El sitio web de CharmsBot es ahora completamente bilingüe. Usa los botones de banderas en la barra superior para cambiar de idioma — tu preferencia se guarda automáticamente.</p>
<div class="feature-box green">
  <ul>
    <li>Inicio, Comandos, Changelog, Contacto, Legal, Términos de Servicio y Política de Privacidad completamente traducidos</li>
    <li>El contenido del Changelog cambia de idioma al instante — sin recargar la página</li>
  </ul>
</div>

<h2>🐛 Corrección de Bugs</h2>
<h3>Bot de Discord</h3>
<ul>
  <li>Corregido un problema donde algunos envíos de formularios podían fallar silenciosamente</li>
  <li>Corregidos mensajes de error incorrectos al pegar datos de Hunt Analyzer inválidos</li>
  <li>Corregidos casos límite en los cálculos de asignación de charms para ciertas composiciones de spawn</li>
</ul>
<h3>Sitio Web</h3>
<ul>
  <li>Corregido el estado del bot mostrando texto sin traducir en algunas páginas</li>
  <li>Corregidas las imágenes de criatura y boss del día que no cargaban en subpáginas</li>
</ul>
`
  },

  // ── v2.0.0 ────────────────────────────────────────────────────────────────
  {
    version: 'v2.0.0',
    pill: 'Feb 2026',
    en: `
<h2>🌟 Major Update</h2>
<p>v2.0.0 introduces the full charm points budget system, multi-level charm support, account security gates, and rate limiting.</p>

<h2>✨ Charm Points Budget System <span class="new-badge">NEW</span></h2>
<p>CharmsBot now works within your actual charm points budget.</p>
<div class="feature-box">
  <ul>
    <li>Set your total charm points when adding a character (found in <code>Cyclopedia → Bosstiary &amp; Charms</code>)</li>
    <li>Bot optimizes charm assignments without exceeding your budget</li>
    <li>Reset cost calculation included in <code>/bestcharms</code></li>
  </ul>
</div>

<h2>⭐ Multi-Level Charm Support <span class="new-badge">NEW</span></h2>
<p>Each charm can now be configured at three levels with different proc rates and charm points costs.</p>
<div class="feature-box">
  <ul>
    <li>🔹 Level 1 — 5% proc rate</li>
    <li>✨ Level 2 — 10% proc rate</li>
    <li>⭐ Level 3 — 11% proc rate</li>
  </ul>
</div>

<h2>🛡️ Security &amp; Rate Limiting <span class="new-badge">NEW</span></h2>
<h3>Account Age Gate</h3>
<p>A minimum account age is required to use CharmsBot, preventing abuse from throwaway accounts.</p>
<div class="security-box">
  <p><strong>Applies to all commands:</strong></p>
  <div class="command-list">
    <span class="command-tag">/character add</span>
    <span class="command-tag">/character view</span>
    <span class="command-tag">/character edit</span>
    <span class="command-tag">/character delete</span>
    <span class="command-tag">/hunt view</span>
    <span class="command-tag">/hunt delete</span>
    <span class="command-tag">/hunt rename</span>
    <span class="command-tag">/analysis</span>
    <span class="command-tag">/bestcharms</span>
    <span class="command-tag">/element</span>
    <span class="command-tag">/weaponxp</span>
    <span class="command-tag">/splitloot</span>
    <span class="command-tag">/hotcuisine</span>
  </div>
</div>
<h3>Bot Account Blocking</h3>
<p>All commands now block bot accounts. Only real users can interact with CharmsBot.</p>
<h3>Rate Limiting</h3>
<ul>
  <li><code>/analysis</code> — global and per-user cooldowns</li>
  <li><code>/bestcharms</code> — global and per-user cooldowns</li>
</ul>

<h2>🆘 Help Command Redesign <span class="updated-badge">UPDATED</span></h2>
<div class="setup-guide">
  <p><strong>New first-time setup guide:</strong></p>
  <ol>
    <li>Run <code>/character add</code></li>
    <li>Enter character name, level, max HP, max mana</li>
    <li>Enter your Total Charm Points (<code>Cyclopedia → Charms</code>)</li>
    <li>Select unlocked charms and set their levels</li>
    <li>Use <code>/analysis</code> or <code>/bestcharms</code> with your hunt data</li>
  </ol>
</div>

<h2>📊 Commands Summary</h2>
<div class="table-wrapper">
  <table>
    <thead><tr><th>Command</th><th>Security Gate</th><th>Rate Limited</th></tr></thead>
    <tbody>
      <tr><td><code>/character add</code></td><td>✅</td><td>—</td></tr>
      <tr><td><code>/character view</code></td><td>✅</td><td>—</td></tr>
      <tr><td><code>/character edit</code></td><td>✅</td><td>—</td></tr>
      <tr><td><code>/character delete</code></td><td>✅</td><td>—</td></tr>
      <tr><td><code>/hunt view</code></td><td>✅</td><td>—</td></tr>
      <tr><td><code>/hunt delete</code></td><td>✅</td><td>—</td></tr>
      <tr><td><code>/hunt rename</code></td><td>✅</td><td>—</td></tr>
      <tr><td><code>/analysis</code></td><td>✅</td><td>✅ Heavy</td></tr>
      <tr><td><code>/bestcharms</code></td><td>✅</td><td>✅ Heavy</td></tr>
      <tr><td><code>/element</code></td><td>✅</td><td>—</td></tr>
      <tr><td><code>/weaponxp</code></td><td>✅</td><td>—</td></tr>
      <tr><td><code>/splitloot</code></td><td>✅</td><td>—</td></tr>
      <tr><td><code>/hotcuisine</code></td><td>✅</td><td>—</td></tr>
    </tbody>
  </table>
</div>

<h2>🐛 Bug Fixes</h2>
<ul>
  <li>Fixed unhandled exceptions in modal submissions</li>
  <li>Improved error messages for invalid Hunt Analyzer data</li>
  <li>Better edge case handling across all commands</li>
</ul>
`,
    es: `
<h2>🌟 Actualización Mayor</h2>
<p>v2.0.0 introduce el sistema completo de presupuesto de charm points, soporte multi-nivel de charms, verificación de seguridad de cuenta y rate limiting.</p>

<h2>✨ Sistema de Presupuesto de Charm Points <span class="new-badge">NUEVO</span></h2>
<p>CharmsBot ahora trabaja dentro de tu presupuesto real de charm points.</p>
<div class="feature-box">
  <ul>
    <li>Define tu total de charm points al agregar un personaje (se encuentra en <code>Cyclopedia → Bosstiary &amp; Charms</code>)</li>
    <li>El bot optimiza las asignaciones de charms sin exceder tu presupuesto</li>
    <li>El cálculo de costo de reset está incluido en <code>/bestcharms</code></li>
  </ul>
</div>

<h2>⭐ Soporte Multi-Nivel de Charms <span class="new-badge">NUEVO</span></h2>
<p>Cada charm ahora puede configurarse en tres niveles con diferentes proc rates y costos en charm points.</p>
<div class="feature-box">
  <ul>
    <li>🔹 Nivel 1 — 5% proc rate</li>
    <li>✨ Nivel 2 — 10% proc rate</li>
    <li>⭐ Nivel 3 — 11% proc rate</li>
  </ul>
</div>

<h2>🛡️ Seguridad y Rate Limiting <span class="new-badge">NUEVO</span></h2>
<h3>Verificación de Antigüedad de Cuenta</h3>
<p>Se requiere una antigüedad mínima de cuenta para usar CharmsBot, previniendo abusos de cuentas desechables.</p>
<div class="security-box">
  <p><strong>Aplica a todos los comandos:</strong></p>
  <div class="command-list">
    <span class="command-tag">/character add</span>
    <span class="command-tag">/character view</span>
    <span class="command-tag">/character edit</span>
    <span class="command-tag">/character delete</span>
    <span class="command-tag">/hunt view</span>
    <span class="command-tag">/hunt delete</span>
    <span class="command-tag">/hunt rename</span>
    <span class="command-tag">/analysis</span>
    <span class="command-tag">/bestcharms</span>
    <span class="command-tag">/element</span>
    <span class="command-tag">/weaponxp</span>
    <span class="command-tag">/splitloot</span>
    <span class="command-tag">/hotcuisine</span>
  </div>
</div>
<h3>Bloqueo de Cuentas Bot</h3>
<p>Todos los comandos ahora bloquean cuentas bot. Solo usuarios reales pueden interactuar con CharmsBot.</p>
<h3>Rate Limiting</h3>
<ul>
  <li><code>/analysis</code> — cooldowns globales y por usuario</li>
  <li><code>/bestcharms</code> — cooldowns globales y por usuario</li>
</ul>

<h2>🆘 Rediseño del Comando Help <span class="updated-badge">ACTUALIZADO</span></h2>
<div class="setup-guide">
  <p><strong>Nueva guía de configuración inicial:</strong></p>
  <ol>
    <li>Ejecuta <code>/character add</code></li>
    <li>Ingresa nombre, nivel, HP máximo, mana máximo</li>
    <li>Ingresa tu Total de Charm Points (<code>Cyclopedia → Charms</code>)</li>
    <li>Selecciona los charms desbloqueados y configura sus niveles</li>
    <li>Usa <code>/analysis</code> o <code>/bestcharms</code> con los datos de tu hunt</li>
  </ol>
</div>

<h2>📊 Resumen de Comandos</h2>
<div class="table-wrapper">
  <table>
    <thead><tr><th>Comando</th><th>Verificación de Seguridad</th><th>Rate Limited</th></tr></thead>
    <tbody>
      <tr><td><code>/character add</code></td><td>✅</td><td>—</td></tr>
      <tr><td><code>/character view</code></td><td>✅</td><td>—</td></tr>
      <tr><td><code>/character edit</code></td><td>✅</td><td>—</td></tr>
      <tr><td><code>/character delete</code></td><td>✅</td><td>—</td></tr>
      <tr><td><code>/hunt view</code></td><td>✅</td><td>—</td></tr>
      <tr><td><code>/hunt delete</code></td><td>✅</td><td>—</td></tr>
      <tr><td><code>/hunt rename</code></td><td>✅</td><td>—</td></tr>
      <tr><td><code>/analysis</code></td><td>✅</td><td>✅ Heavy</td></tr>
      <tr><td><code>/bestcharms</code></td><td>✅</td><td>✅ Heavy</td></tr>
      <tr><td><code>/element</code></td><td>✅</td><td>—</td></tr>
      <tr><td><code>/weaponxp</code></td><td>✅</td><td>—</td></tr>
      <tr><td><code>/splitloot</code></td><td>✅</td><td>—</td></tr>
      <tr><td><code>/hotcuisine</code></td><td>✅</td><td>—</td></tr>
    </tbody>
  </table>
</div>

<h2>🐛 Corrección de Bugs</h2>
<ul>
  <li>Corregidas excepciones no manejadas en envíos de modales</li>
  <li>Mejorados los mensajes de error para datos de Hunt Analyzer inválidos</li>
  <li>Mejor manejo de casos límite en todos los comandos</li>
</ul>
`
  },

  // ── v1.5.0 ────────────────────────────────────────────────────────────────
  {
    version: 'v1.5.0',
    pill: '2025',
    en: `
<h2>🆕 New Commands</h2>

<h3><code>/element</code></h3>
<p>Quick element efficiency checker for any spawn. No character required.</p>
<div class="feature-box green">
  <ul>
    <li>Paste Hunt Analyzer data</li>
    <li>Overall element effectiveness for the spawn</li>
    <li>Per-monster weaknesses and resistances</li>
    <li>Which elements deal bonus damage or are resisted</li>
  </ul>
</div>
<div class="highlight-box">
  <strong>No character required</strong> — great for quick spawn scouting before hunting.
</div>

<h3><code>/splitloot</code></h3>
<p>Equitable loot distribution calculator for party hunts.</p>
<div class="feature-box green">
  <ul>
    <li>Paste Party Hunt Analyzer data</li>
    <li>Automatic balance calculation per member</li>
    <li>Damage and healing percentage breakdown</li>
    <li>Transfer instructions for settling debts</li>
    <li>Optional extra expenses per member (e.g. prey cost)</li>
  </ul>
</div>
<div class="channel-restriction">
  <strong>Channel restriction:</strong> must be used in channels named <code>hunt-analyser</code> or <code>split-loot</code>.
</div>

<h2>📌 Notes</h2>
<div class="note-box">
  <ul>
    <li>Charm calculations still use a fixed <strong>10% proc rate</strong></li>
    <li>No charm points budget system yet</li>
    <li>No charm level selection yet</li>
  </ul>
</div>
`,
    es: `
<h2>🆕 Nuevos Comandos</h2>

<h3><code>/element</code></h3>
<p>Verificador rápido de eficiencia elemental para cualquier spawn. No requiere personaje.</p>
<div class="feature-box green">
  <ul>
    <li>Pega los datos del Hunt Analyzer</li>
    <li>Efectividad elemental general para el spawn</li>
    <li>Vulnerabilidades y resistencias por monstruo</li>
    <li>Qué elementos hacen daño extra o son resistidos</li>
  </ul>
</div>
<div class="highlight-box">
  <strong>No requiere personaje</strong> — ideal para explorar nuevos spawns antes de cazar.
</div>

<h3><code>/splitloot</code></h3>
<p>Calculadora de reparto equitativo de botín para hunts en party.</p>
<div class="feature-box green">
  <ul>
    <li>Pega los datos del Party Hunt Analyzer</li>
    <li>Cálculo automático de balance por miembro</li>
    <li>Desglose de daño y curación en porcentaje</li>
    <li>Instrucciones de transferencia para saldar deudas</li>
    <li>Gastos extra opcionales por miembro (ej. costo de prey)</li>
  </ul>
</div>
<div class="channel-restriction">
  <strong>Restricción de canal:</strong> debe usarse en canales llamados <code>hunt-analyser</code> o <code>split-loot</code>.
</div>

<h2>📌 Notas</h2>
<div class="note-box">
  <ul>
    <li>Los cálculos de charms todavía usan un proc rate fijo de <strong>10%</strong></li>
    <li>Aún no hay sistema de presupuesto de charm points</li>
    <li>Aún no hay selección de nivel de charm</li>
  </ul>
</div>
`
  },

  // ── v1.0.0 ────────────────────────────────────────────────────────────────
  {
    version: 'v1.0.0',
    pill: '2025',
    en: `
<h2>🆕 New Commands</h2>

<h3><code>/bestcharms</code></h3>
<p>Find the optimal charm configuration using ALL available damage charms in the game.</p>
<div class="feature-box">
  <ul>
    <li>Evaluates all 9 damage charms</li>
    <li>Shows charm reset cost</li>
    <li>Damage efficiency breakdown per creature</li>
    <li>Save up to 20 configurations per character</li>
  </ul>
</div>

<h3><code>/hunt view</code> / <code>/hunt delete</code> / <code>/hunt rename</code></h3>
<p>Full hunt management — view, delete, and rename your saved analyses and bestcharms configurations.</p>

<h3><code>/weaponxp</code></h3>
<p>Calculate weapon proficiency XP from your hunt session.</p>
<div class="feature-box green">
  <ul>
    <li>XP breakdown by creature difficulty</li>
    <li>Boss XP by category (Bane, Archfoe, Nemesis)</li>
    <li>Total proficiency XP earned and XP per hour rate</li>
  </ul>
</div>

<h3><code>/hotcuisine</code></h3>
<p>Calculate ingredients needed for the Hot Cuisine Quest.</p>
<div class="feature-box green">
  <ul>
    <li>First-time and repeat completion support</li>
    <li>Multiplier for multiple characters</li>
    <li>Ingredients grouped by city and NPC with TibiaWiki links</li>
  </ul>
</div>

<h3><code>/help</code></h3>
<p>View all available commands and their descriptions.</p>

<h2>📌 Notes</h2>
<div class="note-box">
  <ul>
    <li>All charm calculations use a fixed <strong>10% proc rate</strong></li>
    <li>No charm points budget system yet</li>
    <li>No charm level selection yet</li>
  </ul>
</div>
`,
    es: `
<h2>🆕 Nuevos Comandos</h2>

<h3><code>/bestcharms</code></h3>
<p>Encuentra la configuración óptima de charms usando TODOS los charms de daño disponibles en el juego.</p>
<div class="feature-box">
  <ul>
    <li>Evalúa los 9 charms de daño</li>
    <li>Muestra el costo de reset de charms</li>
    <li>Desglose de eficiencia de daño por criatura</li>
    <li>Guarda hasta 20 configuraciones por personaje</li>
  </ul>
</div>

<h3><code>/hunt view</code> / <code>/hunt delete</code> / <code>/hunt rename</code></h3>
<p>Gestión completa de hunts — consulta, elimina y renombra tus análisis y configuraciones de bestcharms guardados.</p>

<h3><code>/weaponxp</code></h3>
<p>Calcula el weapon proficiency XP de tu sesión de hunt.</p>
<div class="feature-box green">
  <ul>
    <li>Desglose de XP por dificultad de criatura</li>
    <li>XP de boss por categoría (Bane, Archfoe, Nemesis)</li>
    <li>Total de proficiency XP ganado y tasa de XP por hora</li>
  </ul>
</div>

<h3><code>/hotcuisine</code></h3>
<p>Calcula los ingredientes necesarios para Hot Cuisine Quest.</p>
<div class="feature-box green">
  <ul>
    <li>Soporte para primera vez y repeticiones</li>
    <li>Multiplicador para múltiples personajes</li>
    <li>Ingredientes agrupados por ciudad y NPC con links a TibiaWiki</li>
  </ul>
</div>

<h3><code>/help</code></h3>
<p>Ver todos los comandos disponibles y sus descripciones.</p>

<h2>📌 Notas</h2>
<div class="note-box">
  <ul>
    <li>Todos los cálculos de charms usan un proc rate fijo de <strong>10%</strong></li>
    <li>Aún no hay sistema de presupuesto de charm points</li>
    <li>Aún no hay selección de nivel de charm</li>
  </ul>
</div>
`
  },

  // ── v0.1.0 ────────────────────────────────────────────────────────────────
  {
    version: 'v0.1.0',
    pill: 'Early 2025',
    en: `
<h2>🚀 Initial Release</h2>
<p>CharmsBot is a Discord bot designed to help Tibia players optimize their charm assignments for hunting.</p>

<h2>📊 Available Commands</h2>

<h3><code>/analysis</code></h3>
<p>Analyze your hunt using your selected charms.</p>
<div class="feature-box">
  <ul>
    <li>Paste Hunt Analyzer data from Tibia</li>
    <li>Optimal charm assignment calculation</li>
    <li>Element efficiency analysis</li>
  </ul>
</div>

<h3><code>/character add</code> / <code>/character view</code> / <code>/character edit</code> / <code>/character delete</code></h3>
<p>Full character management — add characters with their stats and charm selections, and manage them at any time.</p>

<h2>📌 Notes</h2>
<div class="note-box">
  <ul>
    <li>All charm calculations use a fixed <strong>10% proc rate</strong></li>
    <li>No charm points budget system</li>
    <li>No charm level selection</li>
  </ul>
</div>
`,
    es: `
<h2>🚀 Lanzamiento Inicial</h2>
<p>CharmsBot es un bot de Discord diseñado para ayudar a los jugadores de Tibia a optimizar sus asignaciones de charms para cazar.</p>

<h2>📊 Comandos Disponibles</h2>

<h3><code>/analysis</code></h3>
<p>Analiza tu hunt usando tus charms seleccionados.</p>
<div class="feature-box">
  <ul>
    <li>Pega los datos del Hunt Analyzer de Tibia</li>
    <li>Cálculo de asignación óptima de charms</li>
    <li>Análisis de eficiencia elemental</li>
  </ul>
</div>

<h3><code>/character add</code> / <code>/character view</code> / <code>/character edit</code> / <code>/character delete</code></h3>
<p>Gestión completa de personajes — agrega personajes con sus estadísticas y selección de charms, y gestiónalos en cualquier momento.</p>

<h2>📌 Notas</h2>
<div class="note-box">
  <ul>
    <li>Todos los cálculos de charms usan un proc rate fijo de <strong>10%</strong></li>
    <li>Sin sistema de presupuesto de charm points</li>
    <li>Sin selección de nivel de charm</li>
  </ul>
</div>
`
  }

];