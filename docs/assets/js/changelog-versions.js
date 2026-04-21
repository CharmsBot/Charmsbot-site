// docs/assets/js/changelog-versions.js
// ─────────────────────────────────────────────────────────────────────────────
// CÓMO AGREGAR UNA VERSIÓN NUEVA:
//   1. Copia cualquier objeto del array como plantilla
//   2. Pégalo AL INICIO del array (más reciente primero)
//   3. Actualiza: version, pill, pill_es, en (HTML inglés), es (HTML español)
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
//   .bug-fix-box              → caja púrpura (bug fixes)
//   .command-list + .command-tag → fila de badges de comandos
//   .table-wrapper > table    → tabla estilizada
//   .new-badge                → badge verde "NEW" / "NUEVO"
//   .updated-badge            → badge amarillo "UPDATED" / "ACTUALIZADO"
// ─────────────────────────────────────────────────────────────────────────────

const CHANGELOG_VERSIONS = [

  // ── v3.0.0 ────────────────────────────────────────────────────────────────
  {
    version: 'v3.0.0',
    pill: 'Apr 2026',
    pill_es: 'Abr 2026',
    en: `
<h2>🔥 Partial Critical Charms & Minor Charms Update</h2>
<p>v3.0.0 brings a massive expansion to CharmsBot, introducing partial support for Critical Charms and 11 minor charms to optimize your hunts.</p>

<div class="feature-box green">
  <h3>💎 Major Charms Added</h3>
  <ul>
    <li>⭐ <strong>Low Blow</strong></li>
    <li>⭐ <strong>Savage Blow</strong></li>
  </ul>
</div>

<div class="note-box">
  <strong>Disclaimer - Critical Charms:</strong> Because the game client does not provide the necessary data to accurately calculate a character's raw DPS (which depends on level, vocation, and skills), it is currently not mathematically possible to automatically estimate optimal assignments for Critical Charms. Therefore, their assignment must be managed manually. Should the game expose these statistics in the future, the bot is prepared to handle these assignments automatically, just as it does with Elemental Charms.
</div>

<div class="feature-box green">
  <h3>✨ Minor Charms Added</h3>
  <div style="display:grid; grid-template-columns: 1fr 1fr; gap: 4px 20px;">
    <ul>
      <li>🔹 <strong>Vampiric Embrace</strong></li>
      <li>🔹 <strong>Void Call</strong></li>
      <li>🔹 <strong>Fatal Hold</strong></li>
      <li>🔹 <strong>Void Inversion</strong></li>
      <li>🔹 <strong>Gut</strong></li>
      <li>🔹 <strong>Adrenaline Burst</strong></li>
    </ul>
    <ul>
      <li>🔹 <strong>Cleanse</strong></li>
      <li>🔹 <strong>Scavenge</strong></li>
      <li>🔹 <strong>Cripple</strong></li>
      <li>🔹 <strong>Numb</strong></li>
      <li>🔹 <strong>Bless</strong></li>
    </ul>
  </div>
</div>

<h2>⚔️ Command Updates</h2>

<div class="highlight-box">
  <h3><code>/bestcharms</code> <span class="updated-badge">UPDATED</span></h3>
  <p>The command now features a <strong>Dynamic Echoes Budget</strong>, automatically calculating your remaining Minor Charms capacity based on your character's promotion and assigned Major Charms. It also recommends specific utilities based on your hunt's challenges:</p>
  <ul>
    <li><strong>Anti-Flee:</strong> <code>Fatal Hold</code> for creatures that run away.</li>
    <li><strong>Anti-Paralyze:</strong> <code>Cleanse</code> as priority for paralyzing monsters.</li>
    <li><strong>Anti-Mana Drain:</strong> <code>Void Inversion</code> for mana-draining targets.</li>
    <li><strong>Loot Optimization:</strong> <code>Gut</code> recommended for creatures with high creature-product drops.</li>
  </ul>
</div>

<div class="highlight-box">
  <h3><code>/analysis</code> <span class="updated-badge">UPDATED</span></h3>
  <p>The command now provides perfectly accurate hunt simulations using official Tibia damage rounding metrics. It respects your <strong>Dynamic Echoes Budget</strong> and will only analyze the Minor Charms you have explicitly unlocked using <code>/character edit</code>.</p>
</div>

<div class="highlight-box">
  <h3><code>/character edit</code> <span class="updated-badge">UPDATED</span></h3>
  <p>The command has been adjusted with a new flow to handle the addition of the new Critical Major Charms and Minor Charms to your profile.</p>
  <div class="note-box">
    <strong>Note:</strong> You must set your <strong>Critical HP Threshold</strong> (via <code>/character edit</code>) to enable the assignment of Critical Charms.
  </div>
</div>

<div class="highlight-box">
  <h3><code>/setup response</code> <span class="new-badge">NEW</span></h3>
  <p>Introducing <strong>Hybrid Visibility Mode</strong>. You can now choose whether command responses should be private (ephemeral) or public. This setting applies to the following 4 commands: <code>/analysis</code>, <code>/bestcharms</code>, <code>/element</code>, and <code>/hunt view</code>.</p>
</div>

<div class="highlight-box">
  <h3>🚀 Performance & Speed</h3>
  <p>We've completely upgraded the bot's engine to be faster and more reliable. Enjoy near-instant command responses even during peak hunting hours.</p>
</div>

<div class="feature-box">
  <h3>🛡️ Privacy First <span class="updated-badge">UPDATED</span></h3>
  <p>CharmsBot is now more secure and private. The bot only sees the commands you explicitly send, ensuring 100% privacy for your server conversations and members.</p>
</div>

<h2>🐛 Bug Fixes</h2>
<div class="bug-fix-box">
  <h3>Discord Bot</h3>
  <ul>
    <li>Fixed <code>/deliverytask</code> failing with very long item lists. The command now uses the embed description to increase capacity to 4,096 characters and includes an automatic truncation safeguard.</li>
    <li>Fixed UI alignment issues in <code>/setup</code> and <code>/character edit</code> menus on mobile devices. Implemented an invisible Braille padding system to ensure columns remain perfectly aligned across all platforms.</li>
  </ul>
</div>
`,
    es: `
<h2>🔥 Soporte Parcial de Charms Críticos y Minor Charms</h2>
<p>La v3.0.0 trae una expansión masiva a CharmsBot, introduciendo soporte parcial para Charms Críticos y 11 minor charms para optimizar tus hunts.</p>

<div class="feature-box green">
  <h3>💎 Major Charms Agregados</h3>
  <ul>
    <li>⭐ <strong>Low Blow</strong></li>
    <li>⭐ <strong>Savage Blow</strong></li>
  </ul>
</div>

<div class="note-box">
  <strong>Aclaración sobre Charms Críticos:</strong> Debido a que el cliente del juego no proporciona los datos necesarios para calcular el DPS puro de un personaje (basado en nivel, vocación y skills), actualmente no es posible obtener una estimación matemática para asignar inteligentemente los charms críticos. Por esta razón, su asignación debe realizarse manualmente por el jugador. Si en el futuro el juego incorpora estas estadísticas, el bot ya se encuentra preparado para realizar estas asignaciones automáticamente, tal como lo hace hoy con los charms elementales.
</div>

<div class="feature-box green">
  <h3>✨ Minor Charms Agregados</h3>
  <div style="display:grid; grid-template-columns: 1fr 1fr; gap: 4px 20px;">
    <ul>
      <li>🔹 <strong>Vampiric Embrace</strong></li>
      <li>🔹 <strong>Void Call</strong></li>
      <li>🔹 <strong>Fatal Hold</strong></li>
      <li>🔹 <strong>Void Inversion</strong></li>
      <li>🔹 <strong>Gut</strong></li>
      <li>🔹 <strong>Adrenaline Burst</strong></li>
    </ul>
    <ul>
      <li>🔹 <strong>Cleanse</strong></li>
      <li>🔹 <strong>Scavenge</strong></li>
      <li>🔹 <strong>Cripple</strong></li>
      <li>🔹 <strong>Numb</strong></li>
      <li>🔹 <strong>Bless</strong></li>
    </ul>
  </div>
</div>

<h2>⚔️ Actualización de Comandos</h2>

<div class="highlight-box">
  <h3><code>/bestcharms</code> <span class="updated-badge">ACTUALIZADO</span></h3>
  <p>El comando ahora incluye un <strong>Presupuesto Dinámico de Echoes</strong>, calculando automáticamente tu capacidad restante para Minor Charms basándose en tu promoción y los Major Charms asignados. Además, recomienda utilidades específicas según los retos de tu hunt:</p>
  <ul>
    <li><strong>Anti-Huida:</strong> <code>Fatal Hold</code> para criaturas que intentan escapar.</li>
    <li><strong>Anti-Paralización:</strong> <code>Cleanse</code> prioritario para monstruos que paralizan.</li>
    <li><strong>Anti-Mana Drain:</strong> <code>Void Inversion</code> para objetivos que drenan maná.</li>
    <li><strong>Optimización de Loot:</strong> <code>Gut</code> recomendado para criaturas con muchos creature products.</li>
  </ul>
</div>

<div class="highlight-box">
  <h3><code>/analysis</code> <span class="updated-badge">ACTUALIZADO</span></h3>
  <p>El comando ahora genera simulaciones perfectas utilizando el sistema de redondeo de daño oficial de Tibia. Además, respeta estrictamente tu <strong>Presupuesto de Echoes</strong> y solo analizará los Minor Charms que hayas desbloqueado mediante <code>/character edit</code>.</p>
</div>

<div class="highlight-box">
  <h3><code>/character edit</code> <span class="updated-badge">ACTUALIZADO</span></h3>
  <p>El comando ha sido ajustado con un nuevo flujo para manejar la adición de los nuevos Charms Críticos y Minor Charms a tu perfil.</p>
  <div class="note-box">
    <strong>Nota:</strong> Es necesario fijar un <strong>Umbral de Vida Crítica</strong> (vía <code>/character edit</code>) para poder asignar Charms Críticos.
  </div>
</div>

<div class="highlight-box">
  <h3><code>/setup response</code> <span class="new-badge">NUEVO</span></h3>
  <p>Presentamos el <strong>Modo de Visibilidad Híbrida</strong>. Ahora puedes elegir si las respuestas de los comandos deben ser privadas (efímeras) o públicas. Esta configuración se aplica a los siguientes 4 comandos: <code>/analysis</code>, <code>/bestcharms</code>, <code>/element</code> y <code>/hunt view</code>.</p>
</div>

<div class="highlight-box">
  <h3>🚀 Rendimiento y Velocidad</h3>
  <p>Hemos actualizado completamente el motor del bot para que sea más rápido y confiable. Disfruta de respuestas casi instantáneas incluso en las horas pico de juego.</p>
</div>

<div class="feature-box">
  <h3>🛡️ Privacidad Ante Todo <span class="updated-badge">ACTUALIZADO</span></h3>
  <p>CharmsBot es ahora más seguro y privado. El bot solo ve los comandos que envías explícitamente, garantizando privacidad total para tus conversaciones y miembros.</p>
</div>

<h2>🐛 Corrección de Bugs</h2>
<div class="bug-fix-box">
  <h3>Discord Bot</h3>
  <ul>
    <li>Corregido el error en <code>/deliverytask</code> al procesar listas de ítems muy extensas. El comando ahora utiliza la descripción del embed para aumentar la capacidad a 4,096 caracteres e incluye un sistema de truncado automático de seguridad.</li>
    <li>Corregidos problemas de alineación visual en los menús de <code>/setup</code> y <code>/character edit</code> en dispositivos móviles. Se implementó un sistema de padding con caracteres Braille invisibles para garantizar que las columnas se mantengan perfectamente alineadas en todas las plataformas.</li>
  </ul>
</div>
`,
  },

  // ── v2.6.0 ────────────────────────────────────────────────────────────────
  {
    version: 'v2.6.0',
    pill: 'Mar 2026',
    pill_es: 'Mar 2026',
    en: `
<h2>🏗️ Infrastructure Migration</h2>
<div class="highlight-box">
  <h3>Migrated to a new cloud server</h3>
  <p>CharmsBot and its database have been migrated to a new cloud infrastructure for improved reliability, performance, and long-term stability. No data was lost during the migration.</p>
</div>

<h2>⚙️ New /setup Command Group <span class="new-badge">NEW</span></h2>
<p>Language and configuration commands have been reorganized under a new <code>/setup</code> group.</p>
<div class="feature-box">
  <ul>
    <li><code>/setup lang</code> — Set your personal language (anyone)</li>
    <li><code>/setup lang-server</code> — Set the server default language (Manage Server required)</li>
    <li><code>/setup splitloot</code> — Configure the channel where <code>/splitloot</code> can be used (Manage Server required)</li>
  </ul>
</div>
<div class="note-box">
  <strong>Migration:</strong> <code>/lang personal</code> → <code>/setup lang</code> &nbsp;|&nbsp; <code>/lang server</code> → <code>/setup lang-server</code>
</div>

<h2>🧿 /soulcore <span class="new-badge">NEW</span></h2>
<p>Track your completed Soul Cores per character and monitor your Animus Mastery EXP bonuses.</p>
<div class="feature-box green">
  <ul>
    <li>Toggle soul cores as completed per character</li>
    <li>Tracks global EXP bonus (+1% at 100 completed, +2% at 200 completed)</li>
    <li>Shows creatures that give +4% EXP bonus</li>
    <li>🔍 Search soul cores by creature name</li>
  </ul>
</div>

<h2>🔀 /splitloot — Channel Configuration <span class="updated-badge">UPDATED</span></h2>
<p>Admins can now configure exactly which channel <code>/splitloot</code> is allowed in.</p>
<div class="feature-box green">
  <ul>
    <li>Run <code>/setup splitloot</code> inside the desired channel to configure it</li>
    <li>Clear error when used in the wrong channel, with a mention of the correct one</li>
    <li>Clear error when no channel has been configured yet</li>
  </ul>
</div>

<h2>🐛 Bug Fixes</h2>
<div class="bug-fix-box">
  <h3>Discord Bot</h3>
  <ul>
    <li>Fixed Hunt Analyser being silently accepted by <code>/splitloot</code> instead of showing an error</li>
    <li>Fixed <code>/soulcore</code> timeout not preserving the embed when there were unsaved changes</li>
    <li>Fixed language preference not being applied correctly on first interaction after a server restart</li>
    <li>Fixed rare case where modal submission could fail silently under high load</li>
  </ul>
</div>
<div class="bug-fix-box">
  <h3>Website</h3>
  <ul>
    <li>Fixed command cards not re-rendering when switching languages</li>
    <li>Fixed tab layout breaking to a second line in Spanish</li>
    <li>Fixed <code>/soulcore</code> missing from the Tools tab</li>
  </ul>
</div>`,
    es: `
<h2>🏗️ Migración de Infraestructura</h2>
<div class="highlight-box">
  <h3>Migración a un nuevo servidor en la nube</h3>
  <p>CharmsBot y su base de datos han sido migrados a una nueva infraestructura en la nube para mejorar la fiabilidad, el rendimiento y la estabilidad a largo plazo. No se perdió ningún dato durante la migración.</p>
</div>

<h2>⚙️ Nuevo Grupo de Comandos /setup <span class="new-badge">NUEVO</span></h2>
<p>Los comandos de idioma y configuración se reorganizaron bajo el nuevo grupo <code>/setup</code>.</p>
<div class="feature-box">
  <ul>
    <li><code>/setup lang</code> — Configura tu idioma personal (cualquier usuario)</li>
    <li><code>/setup lang-server</code> — Configura el idioma del servidor (requiere Administrar Servidor)</li>
    <li><code>/setup splitloot</code> — Configura el canal donde se puede usar <code>/splitloot</code> (requiere Administrar Servidor)</li>
  </ul>
</div>
<div class="note-box">
  <strong>Migración:</strong> <code>/lang personal</code> → <code>/setup lang</code> &nbsp;|&nbsp; <code>/lang server</code> → <code>/setup lang-server</code>
</div>

<h2>🧿 /soulcore <span class="new-badge">NUEVO</span></h2>
<p>Lleva el registro de tus Soul Cores completados por personaje y monitorea tus bonuses de EXP del Animus Mastery.</p>
<div class="feature-box green">
  <ul>
    <li>Marca soul cores como completados por personaje</li>
    <li>Rastrea el bonus global de EXP (+1% al completar 100, +2% al completar 200)</li>
    <li>Muestra criaturas que otorgan +4% de bonus de EXP</li>
    <li>🔍 Búsqueda de soul cores por nombre de criatura</li>
  </ul>
</div>

<h2>🔀 /splitloot — Configuración de Canal <span class="updated-badge">ACTUALIZADO</span></h2>
<p>Los admins ahora pueden configurar exactamente en qué canal se permite usar <code>/splitloot</code>.</p>
<div class="feature-box green">
  <ul>
    <li>Ejecuta <code>/setup splitloot</code> dentro del canal deseado para configurarlo</li>
    <li>Error claro al usar el comando en el canal incorrecto, con mención del canal correcto</li>
    <li>Error claro cuando aún no se ha configurado ningún canal</li>
  </ul>
</div>

<h2>🐛 Corrección de Bugs</h2>
<div class="bug-fix-box">
  <h3>Discord Bot</h3>
  <ul>
    <li>Corregido el Hunt Analyser siendo aceptado silenciosamente por <code>/splitloot</code> en lugar de mostrar un error</li>
    <li>Corregido el timeout de <code>/soulcore</code> que no preservaba el embed cuando había cambios sin guardar</li>
    <li>Corregida la preferencia de idioma que no se aplicaba correctamente en la primera interacción tras reiniciar el servidor</li>
    <li>Corregido un caso raro donde el envío de un modal podía fallar silenciosamente bajo carga alta</li>
  </ul>
</div>
<div class="bug-fix-box">
  <h3>Sitio Web</h3>
  <ul>
    <li>Corregido el re-renderizado de las tarjetas de comandos al cambiar de idioma</li>
    <li>Corregido el layout de tabs que se rompía a una segunda línea en español</li>
    <li>Corregido <code>/soulcore</code> que no aparecía en la pestaña Herramientas</li>
  </ul>
</div>`
  },
  
  // ── v2.5.0 ────────────────────────────────────────────────────────────────
  {
    version: 'v2.5.0',
    pill: 'Mar 2026',
    pill_es: 'Mar 2026',
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

<h2>⚔️ Command Updates</h2>

<h3><code>/deliverytask</code> <span class="new-badge">NEW</span></h3>
<p>Search for Delivery Task items directly from your Hunt Analyzer data and get instant price and NPC information — no manual lookup needed.</p>

<h3><code>/splitloot</code> <span class="updated-badge">UPDATED</span></h3>
<div class="feature-box green">
  <ul>
    <li><strong>Exclude players</strong> from the split — their loot and waste are removed from the pool entirely</li>
    <li>Raw session data attached as <code>session.txt</code> for reference</li>
  </ul>
</div>

<h2>🌍 Website — Now in English &amp; Spanish <span class="new-badge">NEW</span></h2>
<p>The CharmsBot website is now fully bilingual. Use the flag buttons in the header bar to switch languages — your preference is saved automatically.</p>
<div class="feature-box green">
  <ul>
    <li>Home, Commands, Changelog, Contact, Legal, Terms of Service, and Privacy Policy fully translated</li>
    <li>Changelog content switches language instantly — no reload needed</li>
  </ul>
</div>

<h2>🐛 Bug Fixes</h2>
<div class="bug-fix-box">
  <h3>Discord Bot</h3>
  <ul>
    <li>Fixed an issue where some modal submissions could fail silently</li>
    <li>Fixed incorrect error messages when pasting invalid Hunt Analyzer data</li>
    <li>Fixed edge cases in charm assignment calculations for certain spawn compositions</li>
  </ul>
</div>
<div class="bug-fix-box">
  <h3>Website</h3>
  <ul>
    <li>Fixed bot status showing raw text instead of the translated label on some pages</li>
    <li>Fixed boosted creature and boss images not loading on subpages</li>
  </ul>
</div>
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

<h2>⚔️ Actualizaciones de Comandos</h2>

<h3><code>/deliverytask</code> <span class="new-badge">NUEVO</span></h3>
<p>Busca ítems de Delivery Task directamente desde tu Hunt Analyzer y obtén precios e información del NPC al instante — sin búsqueda manual.</p>

<h3><code>/splitloot</code> <span class="updated-badge">ACTUALIZADO</span></h3>
<div class="feature-box green">
  <ul>
    <li><strong>Excluir jugadores</strong> del split — su loot y waste se eliminan completamente del pool</li>
    <li>Datos de sesión adjuntos como <code>session.txt</code> para referencia</li>
  </ul>
</div>

<h2>🌍 Sitio Web — Ahora en Inglés y Español <span class="new-badge">NUEVO</span></h2>
<p>El sitio web de CharmsBot es ahora completamente bilingüe. Usa los botones de banderas en la barra superior para cambiar de idioma — tu preferencia se guarda automáticamente.</p>
<div class="feature-box green">
  <ul>
    <li>Inicio, Comandos, Changelog, Contacto, Legal, Términos de Servicio y Política de Privacidad completamente traducidos</li>
    <li>El contenido del Changelog cambia de idioma al instante — sin recargar la página</li>
  </ul>
</div>

<h2>🐛 Corrección de Bugs</h2>
<div class="bug-fix-box">
  <h3>Bot de Discord</h3>
  <ul>
    <li>Corregido un problema donde algunos envíos de formularios podían fallar silenciosamente</li>
    <li>Corregidos mensajes de error incorrectos al pegar datos de Hunt Analyzer inválidos</li>
    <li>Corregidos casos límite en los cálculos de asignación de charms para ciertas composiciones de spawn</li>
  </ul>
</div>
<div class="bug-fix-box">
  <h3>Sitio Web</h3>
  <ul>
    <li>Corregido el estado del bot mostrando texto sin traducir en algunas páginas</li>
    <li>Corregidas las imágenes de criatura y boss del día que no cargaban en subpáginas</li>
  </ul>
</div>
`
  },

  // ── v2.0.0 ────────────────────────────────────────────────────────────────
  {
    version: 'v2.0.0',
    pill: 'Feb 2026',
    pill_es: 'Feb 2026',
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
    <thead>
      <tr><th>Command</th><th>Security Gate</th><th>Rate Limited</th></tr>
    </thead>
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
<div class="bug-fix-box">
  <ul>
    <li>Fixed unhandled exceptions in modal submissions</li>
    <li>Improved error messages for invalid Hunt Analyzer data</li>
    <li>Better edge case handling across all commands</li>
  </ul>
</div>
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
    <thead>
      <tr><th>Comando</th><th>Verificación de Seguridad</th><th>Rate Limited</th></tr>
    </thead>
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
<div class="bug-fix-box">
  <ul>
    <li>Corregidas excepciones no manejadas en envíos de modales</li>
    <li>Mejorados los mensajes de error para datos de Hunt Analyzer inválidos</li>
    <li>Mejor manejo de casos límite en todos los comandos</li>
  </ul>
</div>
`
  },

  // ── v1.5.0 ────────────────────────────────────────────────────────────────
  {
    version: 'v1.5.0',
    pill: '2025',
    pill_es: '2025',
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
    pill_es: '2025',
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
    pill_es: 'Principios de 2025',
    en: `
<h2>🚀 Initial Release</h2>
<p>CharmsBot launches with core character and hunt analysis functionality.</p>

<h2>🆕 Commands</h2>

<h3><code>/character add</code></h3>
<p>Register a Tibia character with your stats and unlocked charms.</p>
<div class="feature-box">
  <ul>
    <li>Name, level, max HP, max mana</li>
    <li>Charm points total</li>
    <li>Unlocked charms selection</li>
  </ul>
</div>

<h3><code>/character view</code> / <code>/character edit</code> / <code>/character delete</code></h3>
<p>Manage your registered characters — view stats, update data, or remove characters.</p>

<h3><code>/analysis</code></h3>
<p>Analyze a hunt session using your Hunt Analyzer data.</p>
<div class="feature-box">
  <ul>
    <li>Damage dealt per creature with charm efficiency</li>
    <li>Optimal charm assignments for the spawn</li>
    <li>Loot and balance summary</li>
  </ul>
</div>
`,
    es: `
<h2>🚀 Lanzamiento Inicial</h2>
<p>CharmsBot se lanza con funcionalidad principal de gestión de personajes y análisis de hunts.</p>

<h2>🆕 Comandos</h2>

<h3><code>/character add</code></h3>
<p>Registra un personaje de Tibia con tus estadísticas y charms desbloqueados.</p>
<div class="feature-box">
  <ul>
    <li>Nombre, nivel, HP máximo, mana máximo</li>
    <li>Total de charm points</li>
    <li>Selección de charms desbloqueados</li>
  </ul>
</div>

<h3><code>/character view</code> / <code>/character edit</code> / <code>/character delete</code></h3>
<p>Administra tus personajes registrados — consulta estadísticas, actualiza datos o elimina personajes.</p>

<h3><code>/analysis</code></h3>
<p>Analiza una sesión de hunt usando tus datos del Hunt Analyzer.</p>
<div class="feature-box">
  <ul>
    <li>Daño por criatura con eficiencia de charms</li>
    <li>Asignación óptima de charms para el spawn</li>
    <li>Resumen de loot y balance</li>
  </ul>
</div>
`
  }

];