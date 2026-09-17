/**
 * GLOBAL CLIENT INTERACTION SCRIPT - ILLA VINAY KUMAR PORTFOLIO
 * Vanilla JavaScript (ES6+)
 * Supports Multi-Page Navigation, Theme Switcher, Modals, Search & Dynamic Additions
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // -------------------------------------------------------------------------
  // 1. THEME SWITCHER (CALM LIGHT THEME DEFAULT)
  // -------------------------------------------------------------------------
  const themeToggleBtns = document.querySelectorAll('.theme-toggle-btn');
  const storedTheme = localStorage.getItem('ivk_portfolio_theme') || 'light';
  
  const applyTheme = (theme) => {
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
    localStorage.setItem('ivk_portfolio_theme', theme);
    
    themeToggleBtns.forEach(btn => {
      btn.innerHTML = theme === 'dark' 
        ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`
        : `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;
      btn.setAttribute('title', theme === 'dark' ? 'Switch to Light Theme' : 'Switch to Dark Theme');
    });
  };

  applyTheme(storedTheme);

  themeToggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
      applyTheme(current === 'dark' ? 'light' : 'dark');
    });
  });

  // -------------------------------------------------------------------------
  // 2. ACTIVE NAVIGATION LINK FOR MULTI-PAGE SITES
  // -------------------------------------------------------------------------
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const allNavLinks = document.querySelectorAll('.nav-link');

  allNavLinks.forEach(link => {
    const linkHref = link.getAttribute('href');
    if (linkHref === currentPath || (currentPath === '' && linkHref === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // -------------------------------------------------------------------------
  // 3. MOBILE NAVIGATION DRAWER
  // -------------------------------------------------------------------------
  const mobileToggleBtn = document.getElementById('mobileToggleBtn');
  const mobileCloseBtn = document.getElementById('mobileCloseBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const mobileNavOverlay = document.getElementById('mobileNavOverlay');

  const openDrawer = () => {
    if (mobileDrawer && mobileNavOverlay) {
      mobileDrawer.classList.add('open');
      mobileNavOverlay.classList.add('open');
      if (mobileToggleBtn) mobileToggleBtn.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    }
  };

  const closeDrawer = () => {
    if (mobileDrawer && mobileNavOverlay) {
      mobileDrawer.classList.remove('open');
      mobileNavOverlay.classList.remove('open');
      if (mobileToggleBtn) mobileToggleBtn.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  };

  if (mobileToggleBtn) mobileToggleBtn.addEventListener('click', openDrawer);
  if (mobileCloseBtn) mobileCloseBtn.addEventListener('click', closeDrawer);
  if (mobileNavOverlay) mobileNavOverlay.addEventListener('click', closeDrawer);

  // -------------------------------------------------------------------------
  // 4. TOAST NOTIFICATION UTILITY
  // -------------------------------------------------------------------------
  const toastContainer = document.getElementById('toastContainer');

  window.showToast = function(message, type = 'info', duration = 4000) {
    if (!toastContainer) return;

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;

    const iconSvg = type === 'success'
      ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>`
      : `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>`;

    toast.innerHTML = `${iconSvg}<span style="flex:1;">${message}</span>`;
    toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      setTimeout(() => {
        if (toast.parentNode) toast.parentNode.removeChild(toast);
      }, 300);
    }, duration);
  };

  // -------------------------------------------------------------------------
  // 5. MOUNT REAL PROJECTS & CERTIFICATES FROM STORAGE ENGINE
  // -------------------------------------------------------------------------
  const projectsContainer = document.getElementById('projectsContainer');
  if (projectsContainer && typeof PORTFOLIO_DATA !== 'undefined') {
    const allProjects = PORTFOLIO_DATA.projects;
    if (!allProjects || allProjects.length === 0) {
      projectsContainer.innerHTML = `
        <div class="empty-state-card card">
          <div class="empty-state-icon">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
          </div>
          <h3 class="empty-state-title">Engineering Projects Under Active Curation</h3>
          <p class="empty-state-text">Original full-stack applications, coursework implementations, and GitHub code repositories are currently being curated and updated. You can upload new projects directly via the Admin Portal or explore technical competencies.</p>
          <div class="btn-group" style="justify-content: center;">
            <a href="admin.html" class="btn btn-primary btn-sm">Add Project via Admin Portal</a>
            <a href="skills.html" class="btn btn-secondary btn-sm">Inspect Technical Skills</a>
            <a href="resume.html" class="btn btn-outline btn-sm">View Resume</a>
          </div>
        </div>
      `;
    } else {
      projectsContainer.innerHTML = '';
      allProjects.forEach(proj => {
        const art = document.createElement('article');
        art.className = 'card proj-card';
        art.setAttribute('data-category', proj.category);

        const techChips = (proj.technologies || []).map(t => `<span class="tech-tag">${t}</span>`).join(' ');
        const features = (proj.features || []).map(f => `<li>${f}</li>`).join('');

        art.innerHTML = `
          <div class="proj-img-wrap">
            <img src="${proj.image}" alt="${proj.title}" class="proj-img">
            <span class="badge badge-emerald proj-cat-badge">${proj.categoryDisplay}</span>
          </div>
          <div class="proj-body">
            <h2 class="proj-title">${proj.title}</h2>
            <div class="proj-problem">
              <strong>Problem Solved:</strong> ${proj.problemSolved}
            </div>
            <p class="proj-desc">${proj.shortDescription}</p>
            ${features ? `<ul class="proj-features-list">${features}</ul>` : ''}
            <div class="tech-chips-row">
              ${techChips}
            </div>
            <div class="proj-actions-row">
              <div class="btn-group" style="margin-top:0;">
                ${proj.githubUrl && proj.githubUrl !== '#' ? `<a href="${proj.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm">Source (GitHub)</a>` : ''}
                ${proj.liveDemoUrl && proj.liveDemoUrl !== '#' ? `<a href="${proj.liveDemoUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm">Live Demo</a>` : ''}
              </div>
              <button class="btn btn-primary btn-sm open-project-modal" data-project-id="${proj.id}">Details Modal</button>
            </div>
          </div>
        `;
        projectsContainer.appendChild(art);
      });
    }
  }

  const certificatesContainer = document.getElementById('certificatesContainer');
  if (certificatesContainer && typeof PORTFOLIO_DATA !== 'undefined') {
    const allCerts = PORTFOLIO_DATA.certificates;
    if (!allCerts || allCerts.length === 0) {
      certificatesContainer.innerHTML = `
        <div class="empty-state-card card">
          <div class="empty-state-icon">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
          </div>
          <h3 class="empty-state-title">Certifications In Curation</h3>
          <p class="empty-state-text">Official course credentials and verified technical certifications are currently being organized and linked to LinkedIn posts. You can add certificates anytime using the Admin Portal.</p>
          <div class="btn-group" style="justify-content: center;">
            <a href="admin.html" class="btn btn-primary btn-sm">Upload Certificate via Admin</a>
            <a href="skills.html" class="btn btn-secondary btn-sm">Inspect Technical Skills</a>
          </div>
        </div>
      `;
    } else {
      certificatesContainer.innerHTML = '';
      allCerts.forEach(cert => {
        const box = document.createElement('div');
        box.className = 'card cert-box';
        box.setAttribute('data-cert-id', cert.id);

        box.innerHTML = `
          <div class="cert-thumbnail open-cert-lightbox" data-cert-id="${cert.id}" style="cursor:pointer;" title="Click to inspect fullscreen">
            <img src="${cert.image}" alt="${cert.title}">
            <div class="cert-view-badge">
              <span class="btn btn-primary btn-sm">Inspect Fullscreen</span>
            </div>
          </div>
          <div class="cert-content">
            <div class="cert-org">${cert.issuer || 'Verified Credential'}</div>
            <h2 class="cert-name">${cert.title}</h2>
            <div style="font-size:0.85rem; color:var(--text-muted); margin-bottom:12px;">
              <span>Uploaded: ${cert.date || new Date().getFullYear()}</span>
            </div>
            
            <div class="cert-actions-row">
              <button class="btn btn-primary btn-sm open-cert-lightbox" data-cert-id="${cert.id}" style="flex:1; justify-content:center;">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                <span>View Certificate</span>
              </button>
              ${cert.linkedinUrl ? `
                <a href="${cert.linkedinUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-linkedin btn-sm" style="flex:1; justify-content:center;" title="View this certificate on LinkedIn">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.75A1.6 1.6 0 0 0 6.2 8.35a1.6 1.6 0 0 0 1.63 1.6 1.6 1.6 0 0 0 1.63-1.6 1.6 1.6 0 0 0-1.63-1.6z"/></svg>
                  <span>View on LinkedIn</span>
                </a>
              ` : ''}
            </div>
          </div>
        `;
        certificatesContainer.appendChild(box);
      });
    }
  }

  // -------------------------------------------------------------------------
  // 6. GLOBAL MODAL CONTROLLER (FOR PROJECTS & CERTIFICATES)
  // -------------------------------------------------------------------------
  const globalModalOverlay = document.getElementById('globalModalOverlay');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalContentBody = document.getElementById('modalContentBody');

  window.openModal = function(htmlContent) {
    if (!globalModalOverlay || !modalContentBody) return;
    modalContentBody.innerHTML = htmlContent;
    globalModalOverlay.classList.add('open');
    globalModalOverlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    if (modalCloseBtn) modalCloseBtn.focus();
    attachPlaceholderListeners();
  };

  window.closeModal = function() {
    if (!globalModalOverlay) return;
    globalModalOverlay.classList.remove('open');
    globalModalOverlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', window.closeModal);
  if (globalModalOverlay) {
    globalModalOverlay.addEventListener('click', (e) => {
      if (e.target === globalModalOverlay) window.closeModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      window.closeModal();
      closeDrawer();
    }
  });

  // -------------------------------------------------------------------------
  // 7. PROJECTS FILTERING & SEARCH
  // -------------------------------------------------------------------------
  const filterPills = document.querySelectorAll('.filter-pill');
  const projectSearchInput = document.getElementById('projectSearchInput');

  const filterProjects = () => {
    const activePill = document.querySelector('.filter-pill.active');
    const category = activePill ? activePill.getAttribute('data-filter') : 'all';
    const query = projectSearchInput ? projectSearchInput.value.trim().toLowerCase() : '';
    const cards = document.querySelectorAll('.proj-card');

    cards.forEach(card => {
      const cardCat = card.getAttribute('data-category') || '';
      const text = card.textContent.toLowerCase();

      const matchesCat = (category === 'all' || cardCat.includes(category));
      const matchesSearch = (!query || text.includes(query));

      if (matchesCat && matchesSearch) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    });
  };

  if (filterPills.length > 0) {
    filterPills.forEach(pill => {
      pill.addEventListener('click', () => {
        filterPills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        filterProjects();
      });
    });
  }

  if (projectSearchInput) {
    projectSearchInput.addEventListener('input', filterProjects);
  }

  // -------------------------------------------------------------------------
  // 8. SKILLS SEARCH
  // -------------------------------------------------------------------------
  const skillSearchInput = document.getElementById('skillSearchInput');
  const skillBoxes = document.querySelectorAll('.skill-box');

  if (skillSearchInput && skillBoxes.length > 0) {
    skillSearchInput.addEventListener('input', () => {
      const query = skillSearchInput.value.trim().toLowerCase();
      skillBoxes.forEach(box => {
        const text = box.textContent.toLowerCase();
        if (!query || text.includes(query)) {
          box.style.display = 'block';
        } else {
          box.style.display = 'none';
        }
      });
    });
  }

  // -------------------------------------------------------------------------
  // 9. PROJECT MODAL POPUPS (EVENT DELEGATION)
  // -------------------------------------------------------------------------
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.open-project-modal');
    if (!btn) return;

    const projId = btn.getAttribute('data-project-id');
    const allProjects = (typeof PORTFOLIO_DATA !== 'undefined') ? PORTFOLIO_DATA.projects : [];
    const project = allProjects.find(p => p.id === projId);

    if (!project) return;

    const techChips = project.technologies
      .map(t => `<span class="tech-tag">${t}</span>`)
      .join(' ');

    const features = project.features
      .map(f => `<li>${f}</li>`)
      .join('');

    const modalHtml = `
      <div>
        <img src="${project.image}" alt="${project.title}" style="width:100%; max-height:260px; object-fit:cover; border-radius:10px; margin-bottom:20px; border:1px solid var(--border-subtle);">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
          <span class="badge badge-blue">${project.categoryDisplay}</span>
          ${project.isPlaceholder ? '<span class="placeholder-pill">Project Template Blueprint</span>' : '<span class="badge badge-emerald">Active</span>'}
        </div>
        <h2 style="font-size:1.6rem; font-weight:800; color:var(--text-primary); margin-bottom:12px;">${project.title}</h2>
        
        <div style="background:var(--accent-blue-subtle); border-left:3px solid var(--accent-blue); padding:12px 16px; border-radius:4px; margin-bottom:18px;">
          <strong style="color:var(--accent-blue);">Problem Addressed:</strong>
          <p style="font-size:0.92rem; color:var(--text-secondary); margin-top:4px;">${project.problemSolved}</p>
        </div>

        <p style="font-size:0.98rem; color:var(--text-secondary); line-height:1.7; margin-bottom:20px;">
          ${project.shortDescription}
        </p>

        <h4 style="font-size:0.85rem; text-transform:uppercase; letter-spacing:1px; color:var(--text-muted); margin-bottom:10px;">Architectural Highlights</h4>
        <ul class="proj-features-list" style="margin-bottom:24px;">
          ${features}
        </ul>

        <h4 style="font-size:0.85rem; text-transform:uppercase; letter-spacing:1px; color:var(--text-muted); margin-bottom:10px;">Technologies Practiced</h4>
        <div class="tech-chips-row" style="margin-bottom:28px;">
          ${techChips}
        </div>

        <div class="btn-group" style="padding-top:18px; border-top:1px solid var(--border-subtle);">
          ${project.githubUrl && project.githubUrl !== '#' ? `<a href="${project.githubUrl}" target="_blank" rel="noopener" class="btn btn-primary btn-sm">View Source Code (GitHub)</a>` : `<button class="btn btn-primary btn-sm placeholder-trigger" data-title="${project.title}" data-type="github">View Source Code (GitHub)</button>`}
          ${project.liveDemoUrl && project.liveDemoUrl !== '#' ? `<a href="${project.liveDemoUrl}" target="_blank" rel="noopener" class="btn btn-secondary btn-sm">Live Application / Demo</a>` : `<button class="btn btn-secondary btn-sm placeholder-trigger" data-title="${project.title}" data-type="demo">Live Application / Demo</button>`}
        </div>
      </div>
    `;

    window.openModal(modalHtml);
  });

  // -------------------------------------------------------------------------
  // 10. CERTIFICATE LIGHTBOX POPUPS (EVENT DELEGATION)
  // -------------------------------------------------------------------------
  document.addEventListener('click', (e) => {
    const card = e.target.closest('.open-cert-lightbox');
    if (!card) return;

    const certId = card.getAttribute('data-cert-id');
    const allCerts = (typeof PORTFOLIO_DATA !== 'undefined') ? PORTFOLIO_DATA.certificates : [];
    const cert = allCerts.find(c => c.id === certId);

    if (!cert) return;

    const skillsHtml = (cert.skills && cert.skills.length > 0 && cert.skills[0] !== 'Certified Technical Achievement')
      ? `<h4 style="font-size:0.82rem; text-transform:uppercase; letter-spacing:1px; color:var(--text-muted); margin-bottom:10px;">Competencies Verified</h4>
         <div class="tech-chips-row" style="margin-bottom:24px;">${cert.skills.map(s => `<span class="tech-tag">${s}</span>`).join(' ')}</div>`
      : '';

    const modalHtml = `
      <div>
        <div style="border-radius:10px; overflow:hidden; border:1px solid var(--border-subtle); margin-bottom:20px; background:#f8fafc; text-align:center;">
          <img src="${cert.image}" alt="${cert.title}" style="max-width:100%; height:auto; display:block; max-height:560px; object-fit:contain; margin:0 auto;">
        </div>
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
          <span class="badge badge-blue">${cert.issuer || 'Verified Credential'}</span>
          <span class="badge badge-emerald">Verified Photo</span>
        </div>
        <h2 style="font-size:1.5rem; font-weight:800; color:var(--text-primary); margin-bottom:12px;">${cert.title}</h2>
        ${cert.description ? `<p style="font-size:0.95rem; color:var(--text-secondary); line-height:1.65; margin-bottom:20px;">${cert.description}</p>` : ''}
        ${skillsHtml}
        <div class="btn-group" style="padding-top:18px; border-top:1px solid var(--border-subtle); justify-content:space-between; align-items:center; flex-wrap:wrap;">
          ${cert.linkedinUrl ? `
            <a href="${cert.linkedinUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm" style="display:inline-flex; align-items:center; gap:8px;">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.75A1.6 1.6 0 0 0 6.2 8.35a1.6 1.6 0 0 0 1.63 1.6 1.6 1.6 0 0 0 1.63-1.6 1.6 1.6 0 0 0-1.63-1.6z"/></svg>
              <span>View Post on LinkedIn ↗</span>
            </a>
          ` : '<span></span>'}
          <button class="btn btn-secondary btn-sm" onclick="window.closeModal()">Close View</button>
        </div>
      </div>
    `;

    window.openModal(modalHtml);
  });

  // -------------------------------------------------------------------------
  // 11. PLACEHOLDER & COPY ACTIONS
  // -------------------------------------------------------------------------
  function attachPlaceholderListeners() {
    const triggers = document.querySelectorAll('.placeholder-trigger');
    triggers.forEach(trig => {
      trig.removeEventListener('click', handlePlaceholderNotice);
      trig.addEventListener('click', handlePlaceholderNotice);
    });
  }

  function handlePlaceholderNotice(e) {
    e.preventDefault();
    const title = this.getAttribute('data-title') || 'Item';
    const type = this.getAttribute('data-type') || 'link';
    window.showToast(`Notice: You can configure the ${type} URL for "${title}" using the Admin Portal.`, 'info');
  }

  attachPlaceholderListeners();

  // Copy Email Buttons
  const copyEmailBtns = document.querySelectorAll('.copy-email-btn');
  copyEmailBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const email = btn.getAttribute('data-email') || '';
      if (!email) {
        window.showToast('Please configure your contact email in the Admin Portal under Profile & Socials.', 'info');
        return;
      }
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(email).then(() => {
          window.showToast(`Email copied: ${email}`, 'success');
        }).catch(() => {
          window.showToast(`Contact email: ${email}`, 'info');
        });
      } else {
        window.showToast(`Contact email: ${email}`, 'info');
      }
    });
  });

  // -------------------------------------------------------------------------
  // 12. CONTACT FORM VALIDATION
  // -------------------------------------------------------------------------
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    const nameInp = document.getElementById('contactName');
    const emailInp = document.getElementById('contactEmail');
    const subInp = document.getElementById('contactSubject');
    const msgInp = document.getElementById('contactMessage');

    const nameErr = document.getElementById('nameError');
    const emailErr = document.getElementById('emailError');
    const subErr = document.getElementById('subjectError');
    const msgErr = document.getElementById('messageError');

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      let valid = true;

      if (!nameInp.value.trim() || nameInp.value.trim().length < 2) {
        nameErr.classList.add('visible');
        valid = false;
      } else {
        nameErr.classList.remove('visible');
      }

      if (!emailRegex.test(emailInp.value.trim())) {
        emailErr.classList.add('visible');
        valid = false;
      } else {
        emailErr.classList.remove('visible');
      }

      if (!subInp.value.trim() || subInp.value.trim().length < 3) {
        subErr.classList.add('visible');
        valid = false;
      } else {
        subErr.classList.remove('visible');
      }

      if (!msgInp.value.trim() || msgInp.value.trim().length < 10) {
        msgErr.classList.add('visible');
        valid = false;
      } else {
        msgErr.classList.remove('visible');
      }

      if (!valid) {
        window.showToast('Please correct the highlighted fields before submitting.', 'info');
        return;
      }

      const sender = nameInp.value.trim();
      contactForm.reset();
      window.showToast(
        `Thank you, ${sender}! Your message has been prepared successfully.`,
        'success',
        5000
      );
    });
  }

  // -------------------------------------------------------------------------
  // 13. DYNAMIC SOCIAL & PROFILE LINKS SYNC ACROSS ALL PAGES
  // -------------------------------------------------------------------------
  if (typeof PortfolioStorage !== 'undefined') {
    const profile = PortfolioStorage.getProfile();

    if (profile.linkedin) {
      document.querySelectorAll('a.social-link-linkedin, a[title*="LinkedIn"]').forEach(a => {
        a.href = profile.linkedin;
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
      });
      document.querySelectorAll('.user-linkedin-display').forEach(el => {
        el.textContent = profile.linkedin.replace(/^https?:\/\/(www\.)?/, '');
        if (el.tagName === 'A') {
          el.href = profile.linkedin;
          el.target = '_blank';
          el.rel = 'noopener noreferrer';
        }
      });
    }

    if (profile.github) {
      document.querySelectorAll('a.social-link-github, a[title*="GitHub"]').forEach(a => {
        a.href = profile.github;
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
      });
      document.querySelectorAll('.user-github-display').forEach(el => {
        el.textContent = profile.github.replace(/^https?:\/\/(www\.)?/, '');
        if (el.tagName === 'A') {
          el.href = profile.github;
          el.target = '_blank';
          el.rel = 'noopener noreferrer';
        }
      });
    }

    if (profile.email) {
      document.querySelectorAll('a.social-link-email, a[title*="Email"]').forEach(a => {
        a.href = 'mailto:' + profile.email;
      });
      document.querySelectorAll('.copy-email-btn').forEach(btn => {
        btn.setAttribute('data-email', profile.email);
      });
      document.querySelectorAll('.user-email-display').forEach(el => {
        el.textContent = profile.email;
        if (el.tagName === 'A') el.href = 'mailto:' + profile.email;
      });
    }

    if (profile.phone) {
      const cleanPhone = profile.phone.replace(/[^0-9+]/g, '');
      document.querySelectorAll('a.social-link-phone, a[title*="Phone"]').forEach(a => {
        a.href = 'tel:' + cleanPhone;
      });
      document.querySelectorAll('.user-phone-display').forEach(el => {
        el.textContent = profile.phone;
        if (el.tagName === 'A') el.href = 'tel:' + cleanPhone;
      });
    }

    if (profile.whatsapp) {
      const cleanDigits = profile.whatsapp.replace(/[^0-9]/g, '');
      const url = profile.whatsapp.startsWith('http')
        ? profile.whatsapp
        : 'https://wa.me/' + (cleanDigits.startsWith('91') ? cleanDigits : '91' + cleanDigits);
      document.querySelectorAll('a.social-link-whatsapp, a[title*="WhatsApp"]').forEach(a => {
        a.href = url;
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
      });
      document.querySelectorAll('.user-whatsapp-display').forEach(el => {
        el.textContent = profile.whatsapp;
      });
    }
  }

  // Update Footer Year
  const yr = document.getElementById('currentYear');
  if (yr) yr.textContent = new Date().getFullYear();
});
