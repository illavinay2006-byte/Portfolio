/**
 * ADMIN PORTAL INTERACTION SCRIPT - ILLA VINAY KUMAR PORTFOLIO
 * Vanilla JavaScript (ES6+)
 * Provides client-side data management, localStorage synchronization, and export
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // =========================================================================
  // 1. TAB CONTROLS (Defined first to guarantee tabs work immediately)
  // =========================================================================
  const tabsBar = document.querySelector('.admin-tabs-bar');
  const adminTabBtns = document.querySelectorAll('.admin-tab-btn');
  const adminTabPanes = document.querySelectorAll('.admin-tab-pane');

  function switchTab(targetId) {
    if (!targetId) return;

    // Update tab buttons
    adminTabBtns.forEach(btn => {
      if (btn.getAttribute('data-tab') === targetId) {
        btn.classList.add('active');
        btn.setAttribute('aria-selected', 'true');
      } else {
        btn.classList.remove('active');
        btn.setAttribute('aria-selected', 'false');
      }
    });

    // Update tab panes
    adminTabPanes.forEach(pane => {
      if (pane.id === targetId) {
        pane.classList.add('active');
      } else {
        pane.classList.remove('active');
      }
    });

    // Trigger panel-specific data refreshes safely
    try {
      if (targetId === 'tabManage') {
        renderExistingEntries();
      } else if (targetId === 'tabProfile') {
        populateProfileSettings();
      } else if (targetId === 'tabExport') {
        generateExportCode();
      }
    } catch (err) {
      console.error('Error refreshing tab content:', err);
    }
  }

  // Direct button listeners
  adminTabBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = btn.getAttribute('data-tab');
      if (targetId) switchTab(targetId);
    });
  });

  // Delegated bar listener for resilience
  if (tabsBar) {
    tabsBar.addEventListener('click', (e) => {
      const btn = e.target.closest('.admin-tab-btn');
      if (btn) {
        e.preventDefault();
        const targetId = btn.getAttribute('data-tab');
        if (targetId) switchTab(targetId);
      }
    });
  }

  // Expose switchTab globally for external triggers if needed
  window.switchAdminTab = switchTab;


  // =========================================================================
  // 2. ADD NEW PROJECT FORM HANDLER
  // =========================================================================
  const addProjectForm = document.getElementById('addProjectForm');
  if (addProjectForm) {
    addProjectForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const titleEl = document.getElementById('projTitle');
      const categoryEl = document.getElementById('projCategory');
      const problemEl = document.getElementById('projProblem');
      const descEl = document.getElementById('projDesc');
      const techEl = document.getElementById('projTech');
      const featEl = document.getElementById('projFeatures');
      const githubEl = document.getElementById('projGithub');
      const demoEl = document.getElementById('projDemo');
      const imageEl = document.getElementById('projImage');

      const title = titleEl ? titleEl.value.trim() : '';
      const category = categoryEl ? categoryEl.value : 'fullstack';
      const problemSolved = problemEl ? problemEl.value.trim() : '';
      const shortDesc = descEl ? descEl.value.trim() : '';
      const techInput = techEl ? techEl.value.trim() : '';
      const featInput = featEl ? featEl.value.trim() : '';
      const githubUrl = (githubEl && githubEl.value.trim()) || '#';
      const liveDemoUrl = (demoEl && demoEl.value.trim()) || '#';
      const imageSelect = (imageEl && imageEl.value) || 'assets/images/project-campus-portal.svg';

      if (!title || !shortDesc || !problemSolved || !techInput) {
        if (window.showToast) window.showToast('Please fill in all required fields.', 'info');
        return;
      }

      const categoryMap = {
        fullstack: 'Full Stack',
        backend: 'Backend',
        frontend: 'Frontend',
        academic: 'Academic'
      };

      const newProject = {
        id: 'proj-' + Date.now(),
        title: title,
        category: category,
        categoryDisplay: categoryMap[category] || 'Software',
        image: imageSelect,
        problemSolved: problemSolved,
        shortDescription: shortDesc,
        technologies: techInput.split(',').map(t => t.trim()).filter(Boolean),
        features: featInput.split('\n').map(f => f.trim()).filter(Boolean),
        githubUrl: githubUrl,
        liveDemoUrl: liveDemoUrl,
        isPlaceholder: false,
        note: 'Added via Admin Portal'
      };

      if (typeof PortfolioStorage !== 'undefined') {
        PortfolioStorage.addProject(newProject);
      }
      addProjectForm.reset();

      if (window.showToast) {
        window.showToast(`Project "${title}" added successfully! It is now live on the Projects page.`, 'success', 5000);
      }
      renderExistingEntries();
      generateExportCode();
    });
  }


  // =========================================================================
  // 3. UPLOAD CERTIFICATE HANDLER (NAME + LINKEDIN URL + PHOTO ONLY)
  // =========================================================================
  const addCertForm = document.getElementById('addCertForm');
  const certFileInput = document.getElementById('certFileInput');
  const certPreviewWrap = document.getElementById('certPreviewWrap');
  const certPhotoPreview = document.getElementById('certPhotoPreview');
  const resetCertFormBtn = document.getElementById('resetCertFormBtn');
  let uploadedCertPhotoDataUrl = '';

  if (certFileInput) {
    certFileInput.addEventListener('change', (e) => {
      const file = e.target.files && e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          uploadedCertPhotoDataUrl = event.target.result;
          if (certPhotoPreview && certPreviewWrap) {
            certPhotoPreview.src = uploadedCertPhotoDataUrl;
            certPreviewWrap.style.display = 'block';
          }
        };
        reader.readAsDataURL(file);
      } else {
        uploadedCertPhotoDataUrl = '';
        if (certPreviewWrap) certPreviewWrap.style.display = 'none';
      }
    });
  }

  if (resetCertFormBtn) {
    resetCertFormBtn.addEventListener('click', () => {
      uploadedCertPhotoDataUrl = '';
      if (certPreviewWrap) certPreviewWrap.style.display = 'none';
    });
  }

  if (addCertForm) {
    addCertForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const titleEl = document.getElementById('certTitle');
      const linkedinEl = document.getElementById('certLinkedinUrl');

      const title = titleEl ? titleEl.value.trim() : '';
      const linkedinUrl = linkedinEl ? linkedinEl.value.trim() : '';

      if (!title) {
        if (window.showToast) window.showToast('Please enter the certificate name.', 'info');
        return;
      }

      if (!linkedinUrl) {
        if (window.showToast) window.showToast('Please enter the LinkedIn certificate post URL.', 'info');
        return;
      }

      if (!uploadedCertPhotoDataUrl) {
        if (window.showToast) window.showToast('Please select a certificate photo to upload.', 'info');
        return;
      }

      const newCert = {
        id: 'cert-' + Date.now(),
        title: title,
        linkedinUrl: linkedinUrl,
        issuer: 'Verified Credential',
        date: new Date().getFullYear().toString(),
        image: uploadedCertPhotoDataUrl,
        skills: ['Certified Technical Achievement'],
        credentialId: '[Verified]',
        verifyUrl: linkedinUrl,
        isPlaceholder: false,
        description: `Certificate awarded for technical competency in ${title}. Verified via LinkedIn post.`
      };

      if (typeof PortfolioStorage !== 'undefined') {
        PortfolioStorage.addCertificate(newCert);
      }
      addCertForm.reset();
      uploadedCertPhotoDataUrl = '';
      if (certPreviewWrap) certPreviewWrap.style.display = 'none';

      if (window.showToast) {
        window.showToast(`Certificate "${title}" uploaded with LinkedIn link! It is now live on the Certificates page.`, 'success', 5000);
      }
      renderExistingEntries();
      generateExportCode();
    });
  }


  // =========================================================================
  // 4. PROFILE & SOCIAL LINKS SETTINGS HANDLER
  // =========================================================================
  const profileForm = document.getElementById('profileSettingsForm');
  const profileEmailInp = document.getElementById('profileEmail');
  const profilePhoneInp = document.getElementById('profilePhone');
  const profileLinkedinInp = document.getElementById('profileLinkedin');
  const profileGithubInp = document.getElementById('profileGithub');
  const profileWhatsappInp = document.getElementById('profileWhatsapp');

  function populateProfileSettings() {
    try {
      if (typeof PortfolioStorage === 'undefined') return;
      const profile = PortfolioStorage.getProfile() || {};
      if (profileEmailInp) profileEmailInp.value = profile.email || '';
      if (profilePhoneInp) profilePhoneInp.value = profile.phone || '';
      if (profileLinkedinInp) profileLinkedinInp.value = profile.linkedin || '';
      if (profileGithubInp) profileGithubInp.value = profile.github || '';
      if (profileWhatsappInp) profileWhatsappInp.value = profile.whatsapp || '';
    } catch (e) {
      console.warn('Error populating profile settings:', e);
    }
  }

  if (profileForm) {
    profileForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const updatedProfile = {
        email: profileEmailInp ? profileEmailInp.value.trim() : '',
        phone: profilePhoneInp ? profilePhoneInp.value.trim() : '',
        linkedin: profileLinkedinInp ? profileLinkedinInp.value.trim() : '',
        github: profileGithubInp ? profileGithubInp.value.trim() : '',
        whatsapp: profileWhatsappInp ? profileWhatsappInp.value.trim() : ''
      };
      if (typeof PortfolioStorage !== 'undefined') {
        PortfolioStorage.saveProfile(updatedProfile);
      }
      if (window.showToast) {
        window.showToast('Profile and social channels saved successfully! Links updated across your portfolio.', 'success');
      }
      generateExportCode();
    });
  }


  // =========================================================================
  // 5. MANAGE ENTRIES VIEW
  // =========================================================================
  function renderExistingEntries() {
    try {
      const projectsListEl = document.getElementById('adminProjectsList');
      const certsListEl = document.getElementById('adminCertsList');

      if (typeof PortfolioStorage === 'undefined') return;

      if (projectsListEl) {
        const allProjects = PortfolioStorage.getProjects() || [];
        let customProjects = [];
        try {
          customProjects = JSON.parse(localStorage.getItem(PortfolioStorage.STORAGE_KEY_PROJECTS) || '[]');
        } catch (_) {
          customProjects = [];
        }
        const customIds = new Set(customProjects.map(p => p.id));

        if (allProjects.length === 0) {
          projectsListEl.innerHTML = '<p style="color:var(--text-muted); font-size:0.9rem; padding:12px 0;">No projects currently registered. Use the "Add Project" tab to add genuine projects.</p>';
        } else {
          projectsListEl.innerHTML = allProjects.map(p => {
            const isCustom = customIds.has(p.id);
            const techList = Array.isArray(p.technologies) ? p.technologies.join(', ') : '';
            return `
              <div class="admin-list-item">
                <div>
                  <strong>${p.title || 'Untitled Project'}</strong>
                  <span class="badge badge-blue" style="margin-left:8px;">${p.categoryDisplay || 'Software'}</span>
                  ${isCustom ? '<span class="badge badge-emerald" style="margin-left:6px;">Custom Added</span>' : '<span class="badge" style="margin-left:6px;">Active</span>'}
                  <div style="font-size:0.8rem; color:var(--text-muted); margin-top:3px;">${techList}</div>
                </div>
                <div>
                  <button type="button" class="btn btn-outline btn-sm delete-proj-btn" data-id="${p.id}" style="color:#ef4444; border-color:#fca5a5;">Delete</button>
                </div>
              </div>
            `;
          }).join('');
        }

        // Attach delete listeners
        projectsListEl.querySelectorAll('.delete-proj-btn').forEach(btn => {
          btn.addEventListener('click', () => {
            const id = btn.getAttribute('data-id');
            PortfolioStorage.deleteProject(id);
            if (window.showToast) window.showToast('Project removed.', 'info');
            renderExistingEntries();
            generateExportCode();
          });
        });
      }

      if (certsListEl) {
        const allCerts = PortfolioStorage.getCertificates() || [];
        let customCerts = [];
        try {
          customCerts = JSON.parse(localStorage.getItem(PortfolioStorage.STORAGE_KEY_CERTS) || '[]');
        } catch (_) {
          customCerts = [];
        }
        const customIds = new Set(customCerts.map(c => c.id));

        if (allCerts.length === 0) {
          certsListEl.innerHTML = '<p style="color:var(--text-muted); font-size:0.9rem; padding:12px 0;">No certificates currently registered. Use the "Add Certificate" tab to upload your real certificates.</p>';
        } else {
          certsListEl.innerHTML = allCerts.map(c => {
            const isCustom = customIds.has(c.id);
            return `
              <div class="admin-list-item">
                <div>
                  <strong>${c.title || 'Untitled Certificate'}</strong>
                  <span class="badge badge-blue" style="margin-left:8px;">${c.issuer || 'Verified Credential'}</span>
                  ${isCustom ? '<span class="badge badge-emerald" style="margin-left:6px;">Custom Added</span>' : '<span class="badge" style="margin-left:6px;">Active</span>'}
                  <div style="font-size:0.8rem; color:var(--text-muted); margin-top:3px;">
                    Uploaded: ${c.date || new Date().getFullYear()}
                    ${c.linkedinUrl ? ` • <a href="${c.linkedinUrl}" target="_blank" rel="noopener noreferrer" style="color:var(--accent-blue); text-decoration:underline;">Test LinkedIn Link ↗</a>` : ''}
                  </div>
                </div>
                <div>
                  <button type="button" class="btn btn-outline btn-sm delete-cert-btn" data-id="${c.id}" style="color:#ef4444; border-color:#fca5a5;">Delete</button>
                </div>
              </div>
            `;
          }).join('');
        }

        // Attach delete listeners
        certsListEl.querySelectorAll('.delete-cert-btn').forEach(btn => {
          btn.addEventListener('click', () => {
            const id = btn.getAttribute('data-id');
            PortfolioStorage.deleteCertificate(id);
            if (window.showToast) window.showToast('Certificate removed.', 'info');
            renderExistingEntries();
            generateExportCode();
          });
        });
      }
    } catch (e) {
      console.warn('Error rendering existing entries:', e);
    }
  }

  // Reset all custom additions button
  const resetDataBtn = document.getElementById('resetAllCustomDataBtn');
  if (resetDataBtn) {
    resetDataBtn.addEventListener('click', () => {
      if (confirm('Are you sure you want to remove all custom projects, certificates, and profile settings stored in this browser?')) {
        if (typeof PortfolioStorage !== 'undefined') {
          PortfolioStorage.resetAllCustomData();
        }
        if (window.showToast) window.showToast('All custom data cleared.', 'info');
        renderExistingEntries();
        populateProfileSettings();
        generateExportCode();
      }
    });
  }


  // =========================================================================
  // 6. EXPORT CODE GENERATOR
  // =========================================================================
  function generateExportCode() {
    try {
      const exportBox = document.getElementById('exportCodeBox');
      if (!exportBox) return;

      const baseData = (typeof DEFAULT_PORTFOLIO_DATA !== 'undefined') ? DEFAULT_PORTFOLIO_DATA : {};
      const dataToExport = {
        ...baseData,
        projects: (typeof PortfolioStorage !== 'undefined') ? PortfolioStorage.getProjects() : [],
        certificates: (typeof PortfolioStorage !== 'undefined') ? PortfolioStorage.getCertificates() : [],
        profile: (typeof PortfolioStorage !== 'undefined') ? PortfolioStorage.getProfile() : {}
      };

      const formattedCode = `/**\n * EXPORTED PORTFOLIO DATA\n * Generated via Admin Portal on ${new Date().toLocaleDateString()}\n */\n\nconst DEFAULT_PORTFOLIO_DATA = ${JSON.stringify(dataToExport, null, 2)};\n`;
      exportBox.value = formattedCode;
    } catch (e) {
      console.warn('Error generating export code:', e);
    }
  }

  const copyExportBtn = document.getElementById('copyExportBtn');
  if (copyExportBtn) {
    copyExportBtn.addEventListener('click', () => {
      const exportBox = document.getElementById('exportCodeBox');
      if (exportBox) {
        exportBox.select();
        navigator.clipboard.writeText(exportBox.value).then(() => {
          if (window.showToast) window.showToast('Configuration code copied to clipboard! You can paste it into js/portfolio-data.js.', 'success');
        }).catch(() => {
          document.execCommand('copy');
          if (window.showToast) window.showToast('Code copied to clipboard!', 'success');
        });
      }
    });
  }


  // =========================================================================
  // 7. PIN AUTHENTICATION ENGINE (Initialized after all helpers are ready)
  // =========================================================================
  const DEFAULT_PIN = 'vinay2026';
  const pinModal = document.getElementById('adminPinModal');
  const pinForm = document.getElementById('pinForm');
  const pinInput = document.getElementById('adminPinInput');
  const pinSubmitBtn = document.getElementById('adminPinSubmitBtn');
  const pinError = document.getElementById('adminPinError');
  const adminMainDashboard = document.getElementById('adminMainDashboard');
  const adminLogoutBtn = document.getElementById('adminLogoutBtn');

  function handleAuthentication(e) {
    if (e) e.preventDefault();
    const entered = pinInput ? pinInput.value.trim() : '';
    if (entered === DEFAULT_PIN) {
      sessionStorage.setItem('ivk_admin_authed', 'true');
      if (pinError) pinError.style.display = 'none';
      if (window.showToast) window.showToast('Welcome to the Admin Portal, Vinay!', 'success');
      checkAuth();
    } else {
      if (pinError) pinError.style.display = 'block';
      if (pinInput) pinInput.focus();
    }
  }

  if (pinForm) {
    pinForm.addEventListener('submit', handleAuthentication);
  } else if (pinSubmitBtn) {
    pinSubmitBtn.addEventListener('click', handleAuthentication);
  }

  if (adminLogoutBtn) {
    adminLogoutBtn.addEventListener('click', () => {
      sessionStorage.removeItem('ivk_admin_authed');
      checkAuth();
      if (window.showToast) window.showToast('Logged out of Admin Portal', 'info');
    });
  }

  function checkAuth() {
    const isAuthed = sessionStorage.getItem('ivk_admin_authed') === 'true';
    if (isAuthed) {
      if (pinModal) pinModal.style.display = 'none';
      if (adminMainDashboard) adminMainDashboard.style.display = 'block';
      populateProfileSettings();
      renderExistingEntries();
      generateExportCode();
    } else {
      if (pinModal) pinModal.style.display = 'flex';
      if (adminMainDashboard) adminMainDashboard.style.display = 'none';
    }
  }

  // Initial check on DOM ready
  checkAuth();
});
