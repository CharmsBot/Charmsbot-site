function getCommandsData() {
  const _t = window.t || ((k, fb) => fb);
  return {

    character: [
      {
        id: 'character-add', name: '/character add',
        desc: _t('cmd_character_add_desc', 'Add a new character with stats, charm points, and charms'),
        hasImages: true,
        title: '📸 /character add — Flow',
        subtitle: _t('cmd_character_add_sub', 'Create a character, add charms by level, and save.'),
        images: [
          {src:'/assets/images/commands/character_management/character/add/01-characteradd.png', cap:_t('cmd_character_add_cap1','1) Fill character stats and submit the form.')},
          {src:'/assets/images/commands/character_management/character/add/02-characteradd.png', cap:_t('cmd_character_add_cap2','2) Click the dropdown below to select a charm level.')},
          {src:'/assets/images/commands/character_management/character/add/03-characteradd.png', cap:_t('cmd_character_add_cap3','3) Select a level first, then add the appropriate charms for that level.')},
          {src:'/assets/images/commands/character_management/character/add/04-characteradd.png', cap:_t('cmd_character_add_cap4','4) After adding charms, click Continue. Once everything looks correct, click Save.')},
          {src:'/assets/images/commands/character_management/character/add/05-characteradd.png', cap:_t('cmd_character_add_cap5','5) A summary is shown with character stats, charm points, saved charms, and usage limits.')}
        ]
      },
      {
        id: 'character-view', name: '/character view',
        desc: _t('cmd_character_view_desc', 'View all your saved characters and their configurations'),
        hasImages: true,
        title: '📸 /character view — Flow',
        subtitle: _t('cmd_character_view_sub', 'Select a character to view its saved information.'),
        images: [
          {src:'/assets/images/commands/character_management/character/view/01-characterview.png', cap:_t('cmd_character_view_cap1','1) Select the character you want to see from the list.')},
          {src:'/assets/images/commands/character_management/character/view/02-characterview.png', cap:_t('cmd_character_view_cap2','2) A summary is shown with character stats, charm points, saved charms, and usage limits.')}
        ]
      },
      {
        id: 'character-edit', name: '/character edit',
        desc: _t('cmd_character_edit_desc', "Edit an existing character's stats and charms"),
        hasImages: true,
        title: '📸 /character edit — Flow',
        subtitle: _t('cmd_character_edit_sub', 'Select a character, update stats, optionally update charms, and save.'),
        images: [
          {src:'/assets/images/commands/character_management/character/edit/01-characteredit.png', cap:_t('cmd_character_edit_cap1','1) Select a character to edit.')},
          {src:'/assets/images/commands/character_management/character/edit/02-characteredit.png', cap:_t('cmd_character_edit_cap2','2) Update the character stats in the form.')},
          {src:'/assets/images/commands/character_management/character/edit/03-characteredit.png', cap:_t('cmd_character_edit_cap3','3) Click Keep Charms to keep the current charms, or update them by selecting a charm level.')},
          {src:'/assets/images/commands/character_management/character/edit/04-characteredit.png', cap:_t('cmd_character_edit_cap4','4) After confirming charms, click Save to apply all changes.')},
          {src:'/assets/images/commands/character_management/character/edit/05-characteredit.png', cap:_t('cmd_character_edit_cap5','5) A summary is shown with the updated character stats, charm points, and saved charms.')}
        ]
      },
      {
        id: 'character-delete', name: '/character delete',
        desc: _t('cmd_character_delete_desc', 'Delete a character and all associated data'),
        hasImages: true,
        title: '📸 /character delete — Flow',
        subtitle: _t('cmd_character_delete_sub', 'Select a character, confirm deletion, and remove it permanently.'),
        images: [
          {src:'/assets/images/commands/character_management/character/delete/01-characterdelete.png', cap:_t('cmd_character_delete_cap1','1) Select the character you want to delete from the list.')},
          {src:'/assets/images/commands/character_management/character/delete/02-characterdelete.png', cap:_t('cmd_character_delete_cap2','2) Click Confirm Delete to permanently delete the character and all of its hunt data.')},
          {src:'/assets/images/commands/character_management/character/delete/03-characterdelete.png', cap:_t('cmd_character_delete_cap3','3) A confirmation message is shown. A counter shows how many character slots are available.')}
        ]
      }
    ],

    analysis: [
      {
        id: 'analysis', name: '/analysis',
        desc: _t('cmd_analysis_desc', "Analyze your hunt using your character's saved charms"),
        hasImages: true,
        title: '📸 /analysis — Flow',
        subtitle: _t('cmd_analysis_sub', 'Select a character, paste Hunt Analyzer data, and get optimal charm suggestions.'),
        images: [
          {src:'/assets/images/commands/hunt_analysis/analysis/01-analysis.png', cap:_t('cmd_analysis_cap1','1) Select a character to run the analysis.')},
          {src:'/assets/images/commands/hunt_analysis/analysis/03-analysis.png', cap:_t('cmd_analysis_cap2','2) Paste your Hunt Analyzer data into the analysis form.')},
          {src:'/assets/images/commands/hunt_analysis/analysis/04-analysis.png', cap:_t('cmd_analysis_cap3','3) Enter a hunt name if you want to save this configuration.')},
          {src:'/assets/images/commands/hunt_analysis/analysis/05-analysis.png', cap:_t('cmd_analysis_cap4','4) Best elemental damage efficiencies for the analyzed spawn.')},
          {src:'/assets/images/commands/hunt_analysis/analysis/06-analysis.png', cap:_t('cmd_analysis_cap5','5) Optimal charm assignment based on analyzed monster stats and saved charms.')},
          {src:'/assets/images/commands/hunt_analysis/analysis/07-analysis.png', cap:_t('cmd_analysis_cap6','6) If you entered a hunt name, this message confirms the analysis was saved successfully.')}
        ]
      },
      {
        id: 'bestcharms', name: '/bestcharms',
        desc: _t('cmd_bestcharms_desc', 'Find the optimal charm configuration using ALL available charms'),
        hasImages: true,
        title: '📸 /bestcharms — Flow',
        subtitle: _t('cmd_bestcharms_sub', 'Paste Hunt Analyzer data to see the absolute best charm setup possible.'),
        images: [
          {src:'/assets/images/commands/hunt_analysis/bestcharms/01-bestcharms.png', cap:_t('cmd_bestcharms_cap1','1) Select the character for the bestcharms analysis.')},
          {src:'/assets/images/commands/hunt_analysis/bestcharms/02-bestcharms.png', cap:_t('cmd_bestcharms_cap2','2) Paste your Hunt Analyzer data into the form.')},
          {src:'/assets/images/commands/hunt_analysis/bestcharms/03-bestcharms.png', cap:_t('cmd_bestcharms_cap3','3) Enter a hunt name if you want to save this configuration.')},
          {src:'/assets/images/commands/hunt_analysis/bestcharms/04-bestcharms.png', cap:_t('cmd_bestcharms_cap4','4) Best elemental damage efficiencies for the analyzed spawn.')},
          {src:'/assets/images/commands/hunt_analysis/bestcharms/05-bestcharms.png', cap:_t('cmd_bestcharms_cap5','5) Review the recommended charms, total cost, any missing charms, and the expected damage increase.')},
          {src:'/assets/images/commands/hunt_analysis/bestcharms/06-bestcharms.png', cap:_t('cmd_bestcharms_cap6','6) If you entered a hunt name, this message confirms the bestcharms was saved successfully.')}
        ]
      },
      {
        id: 'element', name: '/element',
        desc: _t('cmd_element_desc', 'Check elemental vulnerabilities and resistances for any spawn'),
        hasImages: true,
        title: '📸 /element — Flow',
        subtitle: _t('cmd_element_sub', 'Paste Hunt Analyzer data to get a full elemental breakdown.'),
        images: [
          {src:'/assets/images/commands/hunt_analysis/element/01-element.png', cap:_t('cmd_element_cap1','1) Paste your Hunt Analyzer data into the form.')},
          {src:'/assets/images/commands/hunt_analysis/element/02-element.png', cap:_t('cmd_element_cap2','2) A full elemental breakdown is shown for every creature in the spawn, including vulnerabilities and resistances.')}
        ]
      }
    ],

    hunt: [
      {
        id: 'hunt-view', name: '/hunt view',
        desc: _t('cmd_hunt_view_desc', 'View a saved hunt analysis or bestcharms configuration'),
        hasImages: true,
        title: '📸 /hunt view — Flow',
        subtitle: _t('cmd_hunt_view_sub', 'Select a character and hunt to review saved data.'),
        images: [
          {src:'/assets/images/commands/hunt_management/hunt/view/01-huntview.png', cap:_t('cmd_hunt_view_cap1','1) Select the character whose saved hunts you want to view.')},
          {src:'/assets/images/commands/hunt_management/hunt/view/02-huntview.png', cap:_t('cmd_hunt_view_cap2','2) Select the hunt type (Analysis/Bestcharms), then choose the saved hunt you want to open.')},
          {src:'/assets/images/commands/hunt_management/hunt/view/03-huntview.png', cap:_t('cmd_hunt_view_cap3','3) The saved hunt details are shown with its charm assignments.')}
        ]
      },
      {
        id: 'hunt-delete', name: '/hunt delete',
        desc: _t('cmd_hunt_delete_desc', 'Delete a specific saved hunt'),
        hasImages: true,
        title: '📸 /hunt delete — Flow',
        subtitle: _t('cmd_hunt_delete_sub', 'Select and confirm deletion of a saved hunt.'),
        images: [
          {src:'/assets/images/commands/hunt_management/hunt/delete/01-huntdelete.png', cap:_t('cmd_hunt_delete_cap1','1) Select the character whose saved hunt you want to delete.')},
          {src:'/assets/images/commands/hunt_management/hunt/delete/02-huntdelete.png', cap:_t('cmd_hunt_delete_cap2','2) Select the hunt type (Analysis/Bestcharms), then choose the saved hunt you want to delete. This action cannot be undone.')},
          {src:'/assets/images/commands/hunt_management/hunt/delete/03-huntdelete.png', cap:_t('cmd_hunt_delete_cap3','3) Click Confirm Delete to remove the saved hunt.')},
          {src:'/assets/images/commands/hunt_management/hunt/delete/04-huntdelete.png', cap:_t('cmd_hunt_delete_cap4','4) A summary is shown with the deleted hunt name and the updated remaining-hunts counter.')}
        ]
      },
      {
        id: 'hunt-rename', name: '/hunt rename',
        desc: _t('cmd_hunt_rename_desc', 'Rename a saved hunt'),
        hasImages: true,
        title: '📸 /hunt rename — Flow',
        subtitle: _t('cmd_hunt_rename_sub', 'Select a hunt and provide a new name.'),
        images: [
          {src:'/assets/images/commands/hunt_management/hunt/rename/01-huntrename.png', cap:_t('cmd_hunt_rename_cap1','1) Select a character from the list.')},
          {src:'/assets/images/commands/hunt_management/hunt/rename/02-huntrename.png', cap:_t('cmd_hunt_rename_cap2','2) Select the saved hunt type.')},
          {src:'/assets/images/commands/hunt_management/hunt/rename/03-huntrename.png', cap:_t('cmd_hunt_rename_cap3','3) Select the hunt and enter the new name.')},
          {src:'/assets/images/commands/hunt_management/hunt/rename/04-huntrename.png', cap:_t('cmd_hunt_rename_cap4','4) A summary is shown with the changes made.')}
        ]
      }
    ],

    utilities: [
      {
        id: 'help', name: '/help',
        desc: _t('cmd_help_desc', 'Get detailed information about all commands'),
        hasImages: true,
        title: '📸 /help — Output',
        subtitle: _t('cmd_help_sub', 'Display all available commands and usage information.'),
        images: [
          {src:'/assets/images/commands/utilities/help/01-help.png', cap:_t('cmd_help_cap1','1) A detailed list of available commands and information on how to use them is displayed.')}
        ]
      },
      {
        id: 'splitloot', name: '/splitloot',
        desc: _t('cmd_splitloot_desc', 'Split party hunt loot with optional extra expenses'),
        hasImages: true,
        title: '📸 /splitloot — Flow',
        subtitle: _t('cmd_splitloot_sub', 'Calculate loot distribution for your party hunt.'),
        images: [
          {src:'/assets/images/commands/utilities/splitloot/01-splitloot.png', cap:_t('cmd_splitloot_cap1','1) Paste the Party Hunt Analyzer.')},
          {src:'/assets/images/commands/utilities/splitloot/02-splitloot.png', cap:_t('cmd_splitloot_cap2','2) A summary of the party is displayed including damage, healing, waste, and a button to add extra expenses (e.g. prey cost) if needed.')},
          {src:'/assets/images/commands/utilities/splitloot/03-splitloot.png', cap:_t('cmd_splitloot_cap3',"3) If you clicked the \"Extra Expenses\" button, a modal shows party members where you can enter the extra amount to deduct for each member. The amount is in \"k's\" (e.g., 1000 for 1kk, 500 for 500k).")},
          {src:'/assets/images/commands/utilities/splitloot/04-splitloot.png', cap:_t('cmd_splitloot_cap4','4) The new summary is shown with updated transfer instructions, clearly indicating the extra expense amount added to each player.')}
        ]
      },
      {
        id: 'weaponxp', name: '/weaponxp',
        desc: _t('cmd_weaponxp_desc', 'Calculate weapon proficiency XP from your hunt'),
        hasImages: true,
        title: '📸 /weaponxp — Flow',
        subtitle: _t('cmd_weaponxp_sub', 'Analyze weapon proficiency XP gained during your hunt.'),
        images: [
          {src:'/assets/images/commands/utilities/weaponxp/01-weaponxp.png', cap:_t('cmd_weaponxp_cap1','1) Paste your Hunt Analyzer.')},
          {src:'/assets/images/commands/utilities/weaponxp/02-weaponxp.png', cap:_t('cmd_weaponxp_cap2','2) A summary is displayed with the number of monsters and bosses encountered, total proficiency XP gained in the hunt, and XP contribution from each monster and boss.')}
        ]
      },
      {
        id: 'hotcuisine', name: '/hotcuisine',
        desc: _t('cmd_hotcuisine_desc', 'Calculate ingredients for Hot Cuisine Quest'),
        hasImages: false
      },
      {
        id: 'deliverytask', name: '/deliverytask',
        desc: _t('cmd_deliverytask_desc', 'Search for Delivery Task items in your Hunt Analyzer and get price and NPC information'),
        hasImages: false
      },
      {
        id: 'soulcore', name: '/soulcore',
        desc: _t('cmd_soulcore_desc', 'Track your completed Soul Cores per character and monitor your Animus Mastery EXP bonuses'),
        hasImages: false
      }
    ],

    setup: [
      {
        id: 'setup-lang', name: '/setup lang',
        desc: _t('cmd_setup_lang_desc', 'Set your personal language preference. Your choice overrides the server default.'),
        hasImages: false
      },
      {
        id: 'setup-lang-server', name: '/setup lang-server',
        desc: _t('cmd_setup_lang_server_desc', 'Set the default language for all users in this server (requires Manage Server permission). Users with a personal preference keep theirs.'),
        hasImages: false
      },
      {
        id: 'setup-splitloot', name: '/setup splitloot',
        desc: _t('cmd_setup_splitloot_desc', 'Set the channel where /splitloot can be used. Run this command inside the desired channel. Requires Manage Server permission.'),
        hasImages: false
      }
    ]
  };
}

// ─── Modal ───────────────────────────────────────────────────
let currentCommand = null, currentImageIndex = 0;

function createCommandCard(cmd) {
  const viewBtn   = cmd.hasImages ? '<span class="view-details-btn">View Details →</span>' : '';
  const noImgNote = !cmd.hasImages ? '<p class="no-images-note">Command has no visual examples</p>' : '';
  return `<div class="command-card" data-command-id="${cmd.id}"><div class="command-header"><code class="command-name">${cmd.name}</code>${viewBtn}</div><p class="command-description">${cmd.desc}</p>${noImgNote}</div>`;
}

function openModal(cmd) {
  if (!cmd.hasImages) return;
  currentCommand = cmd; currentImageIndex = 0;
  document.getElementById('modalTitle').textContent    = cmd.title;
  document.getElementById('modalSubtitle').textContent = cmd.subtitle;
  document.getElementById('modalImageContainer').innerHTML = cmd.images.map((img, i) =>
    `<div class="modal-image-slide ${i===0?'active':''}" data-index="${i}"><img src="${img.src}" alt="${cmd.name}" loading="lazy" class="zoomable-image"><div class="modal-image-caption">${img.cap}</div></div>`).join('');
  updateImageCounter();
  document.getElementById('commandModal').classList.add('active');
  document.body.style.overflow = 'hidden';
  setTimeout(attachImageZoomListeners, 100);
}
function closeModal() {
  const m = document.getElementById('commandModal');
  if (m) m.classList.remove('active');
  document.body.style.overflow = '';
  currentCommand = null; currentImageIndex = 0;
}
function navigateImage(dir) {
  if (!currentCommand) return;
  currentImageIndex = (currentImageIndex + dir + currentCommand.images.length) % currentCommand.images.length;
  document.querySelectorAll('.modal-image-slide').forEach((s,i) => s.classList.toggle('active', i===currentImageIndex));
  updateImageCounter(); setTimeout(attachImageZoomListeners, 50);
}
function updateImageCounter() {
  if (!currentCommand) return;
  const el = document.getElementById('imageCounter');
  if (el) el.textContent = `${currentImageIndex+1} / ${currentCommand.images.length}`;
}
function openImageLightbox(src) {
  let lb = document.getElementById('imageLightbox');
  if (!lb) {
    lb = document.createElement('div'); lb.id='imageLightbox'; lb.className='image-lightbox';
    lb.innerHTML='<button class="lightbox-close" id="lightboxCloseBtn">×</button><img class="lightbox-image" id="lightboxImage" src="" alt="Zoomed image"><div class="lightbox-hint">Click image or press ESC to close</div>';
    document.body.appendChild(lb);
    document.getElementById('lightboxCloseBtn').addEventListener('click', e=>{e.stopPropagation();closeImageLightbox();});
    lb.addEventListener('click', e=>{if(e.target===lb||e.target.id==='lightboxImage')closeImageLightbox();});
  }
  document.getElementById('lightboxImage').src = src;
  lb.classList.add('active');
}
function closeImageLightbox() { const lb=document.getElementById('imageLightbox'); if(lb) lb.classList.remove('active'); }
function attachImageZoomListeners() {
  document.querySelectorAll('.modal-image-slide.active img.zoomable-image').forEach(img => {
    const fresh = img.cloneNode(true); img.parentNode.replaceChild(fresh, img);
    fresh.addEventListener('click', e=>{e.stopPropagation(); openImageLightbox(fresh.src);});
  });
}
function renderAllCommands() {
  const data = getCommandsData();
  ['character','analysis','hunt','utilities','setup'].forEach(cat => {
    const c = document.querySelector(`#tab-${cat} .commands-grid`);
    if (c) c.innerHTML = data[cat].map(createCommandCard).join('');
  });
}

document.addEventListener('DOMContentLoaded', function () {
  renderAllCommands();

  window.addEventListener('langchange', () => {
    renderAllCommands();
  });

  document.querySelectorAll('.tab-button').forEach(btn => {
    btn.addEventListener('click', function () {
      document.querySelectorAll('.tab-button').forEach(b=>b.classList.remove('active'));
      document.querySelectorAll('.tab-content').forEach(t=>t.classList.remove('active'));
      this.classList.add('active');
      const tab = this.dataset.tab;
      const content = document.getElementById('tab-' + tab);
      if (content) content.classList.add('active');
    });
  });

  document.getElementById('modalClose').addEventListener('click', closeModal);
  document.getElementById('modalPrev').addEventListener('click', ()=>navigateImage(-1));
  document.getElementById('modalNext').addEventListener('click', ()=>navigateImage(1));
  document.getElementById('commandModal').addEventListener('click', e=>{
    if (e.target === document.getElementById('commandModal')) closeModal();
  });

  document.addEventListener('keydown', e=>{
    if (e.key === 'Escape') { closeModal(); closeImageLightbox(); }
    if (e.key === 'ArrowLeft')  navigateImage(-1);
    if (e.key === 'ArrowRight') navigateImage(1);
  });

  document.addEventListener('click', function (e) {
    const card = e.target.closest('.command-card');
    if (!card) return;
    const id = card.dataset.commandId;
    const all = getCommandsData();
    const cmd = [...all.character,...all.analysis,...all.hunt,...all.utilities,...all.setup].find(c=>c.id===id);
    if (cmd) openModal(cmd);
  });
});