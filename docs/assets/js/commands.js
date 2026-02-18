// commands.js - CharmsBot Commands Page with Modal System & Image Zoom

// Datos completos de TODOS los comandos con CAPTIONS ORIGINALES
const commandsData = {
  character: [
    {
      id: 'character-add',
      name: '/character add',
      desc: 'Add a new character with stats, charm points, and charms',
      hasImages: true,
      title: '📸 /character add — Flow',
      subtitle: 'Create a character, add charms by level, and save.',
      images: [
        {src: '/assets/images/commands/character_management/character/add/01-characteradd.png', cap: '1) Fill character stats and submit the form.'},
        {src: '/assets/images/commands/character_management/character/add/02-characteradd.png', cap: '2) Click the dropdown below to select a charm level.'},
        {src: '/assets/images/commands/character_management/character/add/03-characteradd.png', cap: '3) Select a level first, then add the appropriate charms for that level.'},
        {src: '/assets/images/commands/character_management/character/add/04-characteradd.png', cap: '4) After adding charms, click Continue. Once everything looks correct, click Save.'},
        {src: '/assets/images/commands/character_management/character/add/05-characteradd.png', cap: '5) A summary is shown with character stats, charm points, saved charms, and usage limits.'}
      ]
    },
    {
      id: 'character-view',
      name: '/character view',
      desc: 'View all your saved characters and their configurations',
      hasImages: true,
      title: '📸 /character view — Flow',
      subtitle: 'Select a character to view its saved information.',
      images: [
        {src: '/assets/images/commands/character_management/character/view/01-characterview.png', cap: '1) Select the character you want to see from the list.'},
        {src: '/assets/images/commands/character_management/character/view/02-characterview.png', cap: '2) A summary is shown with character stats, charm points, saved charms, and usage limits.'}
      ]
    },
    {
      id: 'character-edit',
      name: '/character edit',
      desc: 'Edit an existing character\'s stats and charms',
      hasImages: true,
      title: '📸 /character edit — Flow',
      subtitle: 'Select a character, update stats, optionally update charms, and save.',
      images: [
        {src: '/assets/images/commands/character_management/character/edit/01-characteredit.png', cap: '1) Select the character you want to edit from the list.'},
        {src: '/assets/images/commands/character_management/character/edit/02-characteredit.png', cap: '2) Fill in the character stats you want to update.'},
        {src: '/assets/images/commands/character_management/character/edit/03-characteredit.png', cap: '3) Update your charms if needed, then click Save to finish.'},
        {src: '/assets/images/commands/character_management/character/edit/04-characteredit.png', cap: '4) At the end, a summary is shown with the updated stats, charm points, and selected charms.'}
      ]
    },
    {
      id: 'character-delete',
      name: '/character delete',
      desc: 'Delete a character and all associated data',
      hasImages: true,
      title: '📸 /character delete — Flow',
      subtitle: 'Select a character, confirm deletion, and see the result.',
      images: [
        {src: '/assets/images/commands/character_management/character/delete/01-characterdelete.png', cap: '1) Select the character you want to delete from the list.'},
        {src: '/assets/images/commands/character_management/character/delete/02-characterdelete.png', cap: '2) Click Confirm Delete to remove the character, including all saved stats, analyses, and bestcharms. This action cannot be undone.'},
        {src: '/assets/images/commands/character_management/character/delete/03-characterdelete.png', cap: '3) The character was deleted successfully. A counter shows how many character slots are available.'}
      ]
    }
  ],
  analysis: [
    {
      id: 'analysis',
      name: '/analysis',
      desc: 'Analyze your hunt using your character\'s saved charms',
      hasImages: true,
      title: '📸 /analysis — Flow',
      subtitle: 'Upload your analyzer file, select a character, and get optimal charm suggestions.',
      images: [
        {src: '/assets/images/commands/hunt_analysis/analysis/01-analysis.png', cap: '1) Select a character to run the analysis.'},
        {src: '/assets/images/commands/hunt_analysis/analysis/03-analysis.png', cap: '2) Paste your Hunt Analyzer data into the analysis form.'},
        {src: '/assets/images/commands/hunt_analysis/analysis/04-analysis.png', cap: '3) Enter a hunt name if you want to save this configuration.'},
        {src: '/assets/images/commands/hunt_analysis/analysis/05-analysis.png', cap: '4) Best elemental damage efficiencies for the analyzed spawn.'},
        {src: '/assets/images/commands/hunt_analysis/analysis/06-analysis.png', cap: '5) Optimal charm assignment based on analyzed monsters stats and saved charms.'},
        {src: '/assets/images/commands/hunt_analysis/analysis/07-analysis.png', cap: '6) If you entered a hunt name, this message confirms the analysis was saved successfully.'}
      ]
    },
    {
      id: 'bestcharms',
      name: '/bestcharms',
      desc: 'Find the optimal charm configuration using ALL available charms',
      hasImages: true,
      title: '📸 /bestcharms — Flow',
      subtitle: 'Upload analyzer to see the absolute best charm setup possible.',
      images: [
        {src: '/assets/images/commands/hunt_analysis/bestcharms/01-bestcharms.png', cap: '1) Select the character for the bestcharms analysis.'},
        {src: '/assets/images/commands/hunt_analysis/bestcharms/02-bestcharms.png', cap: '2) Paste your Hunt Analyzer data into the form.'},
        {src: '/assets/images/commands/hunt_analysis/bestcharms/03-bestcharms.png', cap: '3) Enter a hunt name if you want to save this configuration.'},
        {src: '/assets/images/commands/hunt_analysis/bestcharms/04-bestcharms.png', cap: '4) Best elemental damage efficiencies for the analyzed spawn.'},
        {src: '/assets/images/commands/hunt_analysis/bestcharms/05-bestcharms.png', cap: '5) Review the recommended charms, total cost, any missing charms, and the expected damage increase.'},
        {src: '/assets/images/commands/hunt_analysis/bestcharms/06-bestcharms.png', cap: '6) Detailed creature assignments with recommended charm level and damage efficiency breakdown.'},
        {src: '/assets/images/commands/hunt_analysis/bestcharms/07-bestcharms.png', cap: '7) Bestcharms configuration saved successfully for the character.'}
      ]
    },
    {
      id: 'element',
      name: '/element',
      desc: 'Quick element efficiency checker (no character required)',
      hasImages: true,
      title: '📸 /element — Flow',
      subtitle: 'Upload analyzer to see element effectiveness.',
      images: [
        {src: '/assets/images/commands/hunt_analysis/element/01-element.png', cap: '1) Paste the Hunt Analyzer for the hunt you want to check.'},
        {src: '/assets/images/commands/hunt_analysis/element/02-element.png', cap: '2) View the overall best damage types for the spawn and a breakdown of each monster\'s elemental vulnerabilities.'}
      ]
    }
  ],
  hunt: [
    {
      id: 'hunt-view',
      name: '/hunt view',
      desc: 'View your saved analyses and bestcharms configurations',
      hasImages: true,
      title: '📸 /hunt view — Flow',
      subtitle: 'Select from your saved hunts to view details.',
      images: [
        {src: '/assets/images/commands/hunt_management/hunt/view/01-huntview.png', cap: '1) Select the character whose saved hunts you want to view.'},
        {src: '/assets/images/commands/hunt_management/hunt/view/02-huntview.png', cap: '2) Select the hunt type (Analysis/Bestcharms), then choose the saved hunt you want to open.'},
        {src: '/assets/images/commands/hunt_management/hunt/view/03-huntview.png', cap: '3) The saved hunt details are displayed with its charm assignments.'}
      ]
    },
    {
      id: 'hunt-delete',
      name: '/hunt delete',
      desc: 'Delete a specific saved hunt',
      hasImages: true,
      title: '📸 /hunt delete — Flow',
      subtitle: 'Select and confirm deletion of a saved hunt.',
      images: [
        {src: '/assets/images/commands/hunt_management/hunt/delete/01-huntdelete.png', cap: '1) Select the character whose saved hunt you want to delete.'},
        {src: '/assets/images/commands/hunt_management/hunt/delete/02-huntdelete.png', cap: '2) Select the hunt type (Analysis/Bestcharms), then choose the saved hunt you want to delete. This action cannot be undone.'},
        {src: '/assets/images/commands/hunt_management/hunt/delete/03-huntdelete.png', cap: '3) Click Confirm Delete to remove the saved hunt.'},
        {src: '/assets/images/commands/hunt_management/hunt/delete/04-huntdelete.png', cap: '4) A summary is shown with the deleted hunt name and the updated remaining-hunts counter.'}
      ]
    },
    {
      id: 'hunt-rename',
      name: '/hunt rename',
      desc: 'Rename a saved hunt',
      hasImages: true,
      title: '📸 /hunt rename — Flow',
      subtitle: 'Select a hunt and provide a new name.',
      images: [
        {src: '/assets/images/commands/hunt_management/hunt/rename/01-huntrename.png', cap: '1) Select a character from the list.'},
        {src: '/assets/images/commands/hunt_management/hunt/rename/02-huntrename.png', cap: '2) Select the saved hunt type.'},
        {src: '/assets/images/commands/hunt_management/hunt/rename/03-huntrename.png', cap: '3) Select the hunt and enter the new name.'},
        {src: '/assets/images/commands/hunt_management/hunt/rename/04-huntrename.png', cap: '4) A summary is shown with the changes made.'}
      ]
    }
  ],
  utilities: [
    {
      id: 'help',
      name: '/help',
      desc: 'Get detailed information about all commands',
      hasImages: true,
      title: '📸 /help — Output',
      subtitle: 'Display all available commands and usage information.',
      images: [
        {src: '/assets/images/commands/utilities/help/01-help.png', cap: '1) A detailed list of available commands and information on how to use them is displayed.'}
      ]
    },
    {
      id: 'splitloot',
      name: '/splitloot',
      desc: 'Split party hunt loot with optional extra expenses',
      hasImages: true,
      title: '📸 /splitloot — Flow',
      subtitle: 'Calculate loot distribution for your party hunt.',
      images: [
        {src: '/assets/images/commands/utilities/splitloot/01-splitloot.png', cap: '1) Paste the Party Hunt Analyzer.'},
        {src: '/assets/images/commands/utilities/splitloot/02-splitloot.png', cap: '2) A summary of the party is displayed including damage, healing, waste, and a button to add extra expenses (e.g. prey cost) if needed.'},
        {src: '/assets/images/commands/utilities/splitloot/03-splitloot.png', cap: '3) If you clicked the "Extra Expenses" button, a modal shows party members where you can enter the extra amount to deduct for each member. The amount is in "k\'s" (e.g., 1000 for 1kk, 500 for 500k).'},
        {src: '/assets/images/commands/utilities/splitloot/04-splitloot.png', cap: '4) The new summary is shown with updated transfer instructions, clearly indicating the extra expense amount added to each player.'}
      ]
    },
    {
      id: 'weaponxp',
      name: '/weaponxp',
      desc: 'Calculate weapon proficiency XP from your hunt',
      hasImages: true,
      title: '📸 /weaponxp — Flow',
      subtitle: 'Analyze weapon proficiency XP gained during your hunt.',
      images: [
        {src: '/assets/images/commands/utilities/weaponxp/01-weaponxp.png', cap: '1) Paste your Hunt Analyzer.'},
        {src: '/assets/images/commands/utilities/weaponxp/02-weaponxp.png', cap: '2) A summary is displayed with the number of monsters and bosses encountered, total Proficiency XP gained in the hunt, and XP contribution from each monster and boss.'}
      ]
    },
    {
      id: 'hotcuisine',
      name: '/hotcuisine',
      desc: 'Calculate ingredients for Hot Cuisine Quest',
      hasImages: false
    },
    {
      id: 'deliverytask',
      name: '/deliverytask',
      desc: 'Search for Delivery Task items in your Hunt Analyzer and get price and NPC information',
      hasImages: false
    }
  ]
};

let currentCommand = null;
let currentImageIndex = 0;

function createCommandCard(cmd) {
  const viewDetailsBtn = cmd.hasImages ? '<span class="view-details-btn">View Details →</span>' : '';
  const noImagesNote = !cmd.hasImages ? '<p class="no-images-note">Command has no visual examples</p>' : '';
  
  return '<div class="command-card" data-command-id="' + cmd.id + '">' +
    '<div class="command-header">' +
    '<code class="command-name">' + cmd.name + '</code>' +
    viewDetailsBtn +
    '</div>' +
    '<p class="command-description">' + cmd.desc + '</p>' +
    noImagesNote +
    '</div>';
}

function openModal(cmd) {
  if (!cmd.hasImages) return;
  currentCommand = cmd;
  currentImageIndex = 0;
  
  const modal = document.getElementById('commandModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalSubtitle = document.getElementById('modalSubtitle');
  const imageContainer = document.getElementById('modalImageContainer');
  
  modalTitle.textContent = cmd.title;
  modalSubtitle.textContent = cmd.subtitle;
  
  var imagesHTML = '';
  for (var i = 0; i < cmd.images.length; i++) {
    var activeClass = i === 0 ? 'active' : '';
    imagesHTML += '<div class="modal-image-slide ' + activeClass + '" data-index="' + i + '">' +
      '<img src="' + cmd.images[i].src + '" alt="' + cmd.name + '" loading="lazy" class="zoomable-image">' +
      '<div class="modal-image-caption">' + cmd.images[i].cap + '</div>' +
      '</div>';
  }
  imageContainer.innerHTML = imagesHTML;
  
  updateImageCounter();
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
  
  setTimeout(function() {
    attachImageZoomListeners();
  }, 100);
}

function closeModal() {
  const modal = document.getElementById('commandModal');
  modal.classList.remove('active');
  document.body.style.overflow = '';
  currentCommand = null;
  currentImageIndex = 0;
}

function navigateImage(direction) {
  if (!currentCommand) return;
  const totalImages = currentCommand.images.length;
  currentImageIndex = (currentImageIndex + direction + totalImages) % totalImages;
  
  const slides = document.querySelectorAll('.modal-image-slide');
  for (var i = 0; i < slides.length; i++) {
    slides[i].classList.toggle('active', i === currentImageIndex);
  }
  updateImageCounter();
  
  setTimeout(function() {
    attachImageZoomListeners();
  }, 50);
}

function updateImageCounter() {
  if (!currentCommand) return;
  const counter = document.getElementById('imageCounter');
  counter.textContent = (currentImageIndex + 1) + ' / ' + currentCommand.images.length;
}

function openImageLightbox(imageSrc) {
  console.log('Opening lightbox with image:', imageSrc);
  
  var lightbox = document.getElementById('imageLightbox');
  
  if (!lightbox) {
    console.log('Creating lightbox element');
    lightbox = document.createElement('div');
    lightbox.id = 'imageLightbox';
    lightbox.className = 'image-lightbox';
    lightbox.innerHTML = 
      '<button class="lightbox-close" id="lightboxCloseBtn">×</button>' +
      '<img class="lightbox-image" id="lightboxImage" src="" alt="Zoomed image">' +
      '<div class="lightbox-hint">Click image or press ESC to close</div>';
    document.body.appendChild(lightbox);
    
    document.getElementById('lightboxCloseBtn').addEventListener('click', function(e) {
      e.stopPropagation();
      closeImageLightbox();
    });
    
    lightbox.addEventListener('click', function(e) {
      if (e.target === lightbox || e.target.id === 'lightboxImage') {
        closeImageLightbox();
      }
    });
  }
  
  var lightboxImage = document.getElementById('lightboxImage');
  lightboxImage.src = imageSrc;
  lightbox.classList.add('active');
  console.log('Lightbox opened');
}

function closeImageLightbox() {
  console.log('Closing lightbox');
  var lightbox = document.getElementById('imageLightbox');
  if (lightbox) {
    lightbox.classList.remove('active');
  }
}

function attachImageZoomListeners() {
  var modalImages = document.querySelectorAll('.modal-image-slide.active img.zoomable-image');
  console.log('Attaching zoom listeners to', modalImages.length, 'images');
  
  for (var i = 0; i < modalImages.length; i++) {
    var newImage = modalImages[i].cloneNode(true);
    modalImages[i].parentNode.replaceChild(newImage, modalImages[i]);
    
    newImage.addEventListener('click', function(e) {
      e.stopPropagation();
      console.log('Image clicked!');
      var imageSrc = this.src;
      openImageLightbox(imageSrc);
    });
  }
}

document.addEventListener('DOMContentLoaded', function() {
  console.log('Commands.js loaded');
  
  // Renderizar comandos
  var categories = ['character', 'analysis', 'hunt', 'utilities'];
  for (var i = 0; i < categories.length; i++) {
    var category = categories[i];
    var container = document.querySelector('#tab-' + category + ' .commands-grid');
    if (container) {
      var html = '';
      var commands = commandsData[category];
      for (var j = 0; j < commands.length; j++) {
        html += createCommandCard(commands[j]);
      }
      container.innerHTML = html;
      console.log('Rendered ' + category + ' commands');
    }
  }
  
  // Sistema de tabs
  const tabButtons = document.querySelectorAll('.tab-button');
  const tabContents = document.querySelectorAll('.tab-content');
  
  for (var i = 0; i < tabButtons.length; i++) {
    tabButtons[i].addEventListener('click', function() {
      const targetTab = this.dataset.tab;
      for (var j = 0; j < tabButtons.length; j++) {
        tabButtons[j].classList.remove('active');
      }
      for (var j = 0; j < tabContents.length; j++) {
        tabContents[j].classList.remove('active');
      }
      this.classList.add('active');
      document.getElementById('tab-' + targetTab).classList.add('active');
    });
  }
  
  // Click en cards
  document.addEventListener('click', function(e) {
    const card = e.target.closest('.command-card');
    if (!card) return;
    
    const commandId = card.dataset.commandId;
    var command = null;
    
    var allCategories = [commandsData.character, commandsData.analysis, commandsData.hunt, commandsData.utilities];
    for (var i = 0; i < allCategories.length; i++) {
      for (var j = 0; j < allCategories[i].length; j++) {
        if (allCategories[i][j].id === commandId) {
          command = allCategories[i][j];
          break;
        }
      }
      if (command) break;
    }
    
    if (command && command.hasImages) {
      openModal(command);
    }
  });
  
  // Modal controls
  const modalClose = document.getElementById('modalClose');
  if (modalClose) {
    modalClose.addEventListener('click', closeModal);
  }
  
  const modalPrev = document.getElementById('modalPrev');
  if (modalPrev) {
    modalPrev.addEventListener('click', function() { navigateImage(-1); });
  }
  
  const modalNext = document.getElementById('modalNext');
  if (modalNext) {
    modalNext.addEventListener('click', function() { navigateImage(1); });
  }
  
  // Keyboard
  document.addEventListener('keydown', function(e) {
    const lightbox = document.getElementById('imageLightbox');
    
    if (lightbox && lightbox.classList.contains('active')) {
      if (e.key === 'Escape') {
        closeImageLightbox();
        return;
      }
    }
    
    const modal = document.getElementById('commandModal');
    if (modal && modal.classList.contains('active')) {
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowLeft') navigateImage(-1);
      if (e.key === 'ArrowRight') navigateImage(1);
    }
  });
  
  // Click outside modal
  const modal = document.getElementById('commandModal');
  if (modal) {
    modal.addEventListener('click', function(e) {
      if (e.target.id === 'commandModal') closeModal();
    });
  }
});