/**
 * DSS ENERGY SOLUTIONS - Official Main JavaScript
 * Handles Navigation, Mobile Drawer, Modals, Gallery Lightbox, Form Validation,
 * Service Details, Inquiry Cart, and Animations.
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // =========================================================================
  // 1. Data Store: Service Details & Inquiry Items
  // =========================================================================
  const servicesData = {
    'solar-power': {
      id: 'solar-power',
      title: 'Solar Power Systems',
      subtitle: 'Residential, Commercial & Industrial Solar Solutions',
      image: 'assets/solar-panels.jpg',
      badge: 'Most Popular',
      description: 'DSS Energy Private Limited delivers high-efficiency on-grid, off-grid, and hybrid solar power plants across Rajasthan tailored to your rooftop and energy demands. As a government-registered vendor, we handle complete turnkey projects including site assessment, engineering design, PM Surya Ghar subsidy processing, DISCOM net-metering approvals, premium Tier-1 mono-PERC/bifacial solar panels, and long-term performance monitoring.',
      features: [
        'Save up to 80-90% on electricity bills',
        'Tier-1 Monocrystalline & Bifacial Panels with 25-Year Warranty',
        'Turnkey execution with government subsidy and net metering assistance',
        'Real-time IoT cloud generation monitoring via smartphone app',
        'Robust weather-resistant aluminum mounting structures',
        'Fast payback period of 3 to 4 years for commercial installations'
      ],
      idealFor: 'Independent homes, villas, housing societies, factories, schools, and hospitals.'
    },
    'electrical-solutions': {
      id: 'electrical-solutions',
      title: 'Electrical Solutions',
      subtitle: 'Safe, Efficient and Reliable Electrical Engineering',
      image: 'assets/electrical-solutions.jpg',
      badge: 'Certified Experts',
      description: 'We provide end-to-end commercial and residential electrical contracting services. Our certified electrical engineers design, install, test, and maintain power distribution systems, low-voltage (LV) and high-voltage (HV) switchboards, panel boards, industrial conduit wiring, load balancing, and statutory electrical safety audits.',
      features: [
        'Complete LT/HT panel design and installation',
        'Industrial and commercial wiring complying with national safety codes',
        'Transformer and switchgear commissioning and maintenance',
        'Power factor correction (APFC panels) to eliminate utility penalties',
        'Earth pit testing and lightning protection systems',
        '24/7 emergency electrical troubleshooting and repair'
      ],
      idealFor: 'Commercial offices, industrial plants, warehouses, residential complexes, and retail spaces.'
    },
    'energy-efficient': {
      id: 'energy-efficient',
      title: 'Energy Efficient Products',
      subtitle: 'Smart LED Lighting & Energy-Saving Devices',
      image: 'assets/energy-efficient-products.jpg',
      badge: 'Eco-Smart',
      description: 'Upgrade your premises with cutting-edge energy conservation technologies. We supply and install high-lumen commercial LED fixtures, smart architectural lighting, solar streetlights, BLDC energy-saving fans, and intelligent motion sensors that dramatically reduce your carbon footprint and monthly utility costs.',
      features: [
        'Ultra-high efficiency LED luminaires with 50,000+ hours lifespan',
        'Smart occupancy sensors and automated daylight harvesting dimmers',
        'BLDC ceiling and exhaust fans saving up to 65% power',
        'Autonomous solar LED streetlights with integrated dusk-to-dawn sensors',
        'Surge protection devices (SPD) protecting sensitive electronics',
        'Comprehensive energy audit and ROI payback calculation report'
      ],
      idealFor: 'Corporate campuses, municipal roads, retail chains, hospitality, and residential properties.'
    },
    'inverters-batteries': {
      id: 'inverters-batteries',
      title: 'Inverters & Batteries',
      subtitle: 'Uninterrupted Clean Power for Home & Industry',
      image: 'assets/inverters-batteries.jpg',
      badge: 'Heavy Duty',
      description: 'Never let power outages interrupt your productivity. DSS Energy Solutions specializes in pure sine-wave solar hybrid inverters, modular Lithium Iron Phosphate (LiFePO4) energy storage systems, and heavy-duty tubular battery banks engineered for extreme Indian climates and frequent power fluctuations.',
      features: [
        'Pure sine wave hybrid solar inverters with zero switchover delay',
        'Advanced Lithium LiFePO4 battery banks with 10+ years design life',
        'Safe tubular lead-acid batteries with high charge acceptance',
        'Intelligent BMS (Battery Management System) with thermal safety',
        'Expandable modular battery capacity from 2.5 kWh to 100+ kWh',
        'Compatible with solar panels, grid supply, and diesel generators'
      ],
      idealFor: 'Homes with sensitive appliances, IT servers, medical clinics, and manufacturing units.'
    },
    'ev-charging': {
      id: 'ev-charging',
      title: 'EV Charging Solutions',
      subtitle: 'Future-Ready Electric Vehicle Charging Infrastructure',
      image: 'assets/ev-charging.jpg',
      badge: 'Next-Gen',
      description: 'Accelerate the transition to sustainable mobility. We provide complete turnkey EV charging installations for two-wheelers, four-wheelers, and commercial fleets. From compact 3.3 kW / 7.4 kW AC home chargers to ultra-fast 30 kW - 120 kW DC commercial charging hubs with smart OCPP cloud management.',
      features: [
        'Type-2 AC fast chargers (7.4 kW / 11 kW / 22 kW) for homes and workplaces',
        'CCS2 & CHAdeMO high-speed DC fast chargers for highway hubs',
        'OCPP 1.6J compliant cloud management and automated billing software',
        'Dedicated electrical infrastructure, cabling, and safety isolation',
        'Solar-powered EV charging station integration (Solar + Storage + EV)',
        'RFID card, mobile app, and QR code access authentication'
      ],
      idealFor: 'Residential parking, commercial malls, hotels, highway fuel stations, and EV fleet depots.'
    }
  };

  // State
  let inquiryCart = JSON.parse(localStorage.getItem('dss_inquiry_cart') || '[]');

  // =========================================================================
  // 2. Navigation & Header Behavior
  // =========================================================================
  const siteHeader = document.querySelector('.site-header');
  const mobileToggle = document.querySelector('.mobile-nav-toggle');
  const mobileDrawer = document.querySelector('.mobile-menu-drawer');
  const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
  const sections = document.querySelectorAll('section[id], header[id]');

  // Header scroll shadow & compact state
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      siteHeader.classList.add('scrolled');
    } else {
      siteHeader.classList.remove('scrolled');
    }

    // Back to top button visibility
    const backToTopBtn = document.getElementById('backToTopBtn');
    if (backToTopBtn) {
      if (window.scrollY > 350) {
        backToTopBtn.classList.add('is-visible');
      } else {
        backToTopBtn.classList.remove('is-visible');
      }
    }
  }, { passive: true });

  // Mobile menu toggle
  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = mobileDrawer.classList.contains('open');
      if (isOpen) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });

    // Close when clicking outside drawer
    document.addEventListener('click', (e) => {
      if (mobileDrawer.classList.contains('open') && 
          !mobileDrawer.contains(e.target) && 
          !mobileToggle.contains(e.target)) {
        closeMobileMenu();
      }
    });
  }

  function openMobileMenu() {
    mobileDrawer.classList.add('open');
    mobileToggle.classList.add('active');
    mobileToggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileMenu() {
    mobileDrawer.classList.remove('open');
    mobileToggle.classList.remove('active');
    mobileToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  // Smooth scroll and active link handler
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId && targetId.startsWith('#')) {
        e.preventDefault();
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          closeMobileMenu();
          const headerOffset = siteHeader.offsetHeight + 10;
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    });
  });

  // IntersectionObserver for active navigation highlighting
  const navObserverOptions = {
    root: null,
    rootMargin: '-20% 0px -70% 0px',
    threshold: 0
  };

  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, navObserverOptions);

  sections.forEach(section => {
    navObserver.observe(section);
  });

  // Back to top click
  const backToTopBtn = document.getElementById('backToTopBtn');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // =========================================================================
  // 2b. Enquiry Button — Scroll to Contact + Focus Name Field
  // =========================================================================
  const headerEnquiryBtn = document.getElementById('headerEnquiryBtn');
  const mobileEnquiryBtn = document.getElementById('mobileEnquiryBtn');

  function handleEnquiryClick(e) {
    e.preventDefault();
    closeMobileMenu();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const headerOffset = siteHeader.offsetHeight + 10;
      const top = contactSection.getBoundingClientRect().top + window.pageYOffset - headerOffset;
      window.scrollTo({ top, behavior: 'smooth' });
      setTimeout(() => {
        const nameField = document.getElementById('contactName');
        if (nameField) nameField.focus();
      }, 650);
    }
  }

  if (headerEnquiryBtn) headerEnquiryBtn.addEventListener('click', handleEnquiryClick);
  if (mobileEnquiryBtn) mobileEnquiryBtn.addEventListener('click', handleEnquiryClick);

  // =========================================================================
  // 3. Animated Statistics Counter
  // =========================================================================
  const statsElements = document.querySelectorAll('.stat-number');
  let statsAnimated = false;

  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !statsAnimated) {
        statsAnimated = true;
        statsElements.forEach(stat => {
          const target = parseInt(stat.getAttribute('data-target'), 10);
          const suffix = stat.getAttribute('data-suffix') || '';
          if (isNaN(target)) return;

          let count = 0;
          const duration = 2000;
          const stepTime = 30;
          const increment = Math.ceil(target / (duration / stepTime));

          const timer = setInterval(() => {
            count += increment;
            if (count >= target) {
              count = target;
              clearInterval(timer);
            }
            stat.textContent = count + suffix;
          }, stepTime);
        });
      }
    });
  }, { threshold: 0.3 });

  const statsSection = document.querySelector('.about-stats-card');
  if (statsSection) {
    statsObserver.observe(statsSection);
  }

  // =========================================================================
  // 4. Products / Services Detail Modal
  // =========================================================================
  const serviceModal = document.getElementById('serviceModal');
  const serviceModalClose = document.getElementById('serviceModalClose');
  const serviceDetailBtns = document.querySelectorAll('[data-service-key]');

  serviceDetailBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const serviceKey = btn.getAttribute('data-service-key');
      const data = servicesData[serviceKey];
      if (data) {
        populateServiceModal(data);
        openModal(serviceModal);
      }
    });
  });

  function populateServiceModal(data) {
    document.getElementById('serviceModalImg').src = data.image;
    document.getElementById('serviceModalImg').alt = data.title;
    document.getElementById('serviceModalBadge').textContent = data.badge;
    document.getElementById('serviceModalTitle').textContent = data.title;
    document.getElementById('serviceModalSubtitle').textContent = data.subtitle;
    document.getElementById('serviceModalDesc').textContent = data.description;
    document.getElementById('serviceModalIdeal').textContent = data.idealFor;

    const featuresList = document.getElementById('serviceModalFeatures');
    featuresList.innerHTML = '';
    data.features.forEach(feat => {
      const li = document.createElement('li');
      li.className = 'modal-feature-item';
      li.innerHTML = `<i class="fa-solid fa-circle-check"></i> <span>${feat}</span>`;
      featuresList.appendChild(li);
    });

    // Configure Quote and Cart buttons inside modal
    const requestQuoteBtn = document.getElementById('serviceModalQuoteBtn');
    requestQuoteBtn.onclick = () => {
      closeModal(serviceModal);
      prefillContactForm(data.title);
    };

    const addCartBtn = document.getElementById('serviceModalCartBtn');
    if (addCartBtn) {
      addCartBtn.onclick = () => {
        addToInquiryCart(data);
        addCartBtn.innerHTML = '<i class="fa-solid fa-check"></i> Added to Inquiry List';
        setTimeout(() => {
          addCartBtn.innerHTML = '<i class="fa-solid fa-cart-plus"></i> Add to Inquiry List';
        }, 2000);
      };
    }
  }

  if (serviceModalClose) {
    serviceModalClose.addEventListener('click', () => closeModal(serviceModal));
  }

  // =========================================================================
  // 5. Photo Gallery & Lightbox
  // =========================================================================
  const galleryItems = document.querySelectorAll('.gallery-item');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const viewMoreBtn = document.getElementById('viewMorePhotosBtn');
  const lightbox = document.getElementById('lightboxModal');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxTitle = document.getElementById('lightboxTitle');
  const lightboxSub = document.getElementById('lightboxSub');
  const lightboxClose = document.getElementById('lightboxClose');
  const lightboxPrev = document.getElementById('lightboxPrev');
  const lightboxNext = document.getElementById('lightboxNext');

  let currentGalleryIndex = 0;
  let activeGalleryItems = Array.from(galleryItems);

  // Gallery Filter Tabs
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      galleryItems.forEach(item => {
        const itemCategory = item.getAttribute('data-category');
        const isHiddenExtra = item.classList.contains('extra-item') && !viewMoreBtn.classList.contains('expanded');

        if (filterValue === 'all' || itemCategory === filterValue) {
          if (!isHiddenExtra) {
            item.style.display = 'block';
          } else {
            item.style.display = 'none';
          }
        } else {
          item.style.display = 'none';
        }
      });

      // Update visible list for lightbox navigation
      activeGalleryItems = Array.from(galleryItems).filter(item => item.style.display !== 'none');
    });
  });

  // View More Photos Toggle
  if (viewMoreBtn) {
    viewMoreBtn.addEventListener('click', () => {
      const isExpanded = viewMoreBtn.classList.contains('expanded');
      const hiddenItems = document.querySelectorAll('.gallery-item.extra-item');

      if (!isExpanded) {
        hiddenItems.forEach(item => item.classList.remove('hidden-item'));
        viewMoreBtn.classList.add('expanded');
        viewMoreBtn.innerHTML = 'Show Fewer Photos <i class="fa-solid fa-chevron-up"></i>';
      } else {
        hiddenItems.forEach(item => item.classList.add('hidden-item'));
        viewMoreBtn.classList.remove('expanded');
        viewMoreBtn.innerHTML = 'View More Photos <i class="fa-solid fa-chevron-down"></i>';
      }

      // Re-trigger current filter
      const activeFilter = document.querySelector('.filter-btn.active');
      if (activeFilter) activeFilter.click();
    });
  }

  // Open Lightbox on Gallery Item Click
  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      activeGalleryItems = Array.from(galleryItems).filter(i => i.style.display !== 'none');
      currentGalleryIndex = activeGalleryItems.indexOf(item);
      showLightboxImage(currentGalleryIndex);
      openModal(lightbox);
    });
  });

  function showLightboxImage(index) {
    if (index < 0) index = activeGalleryItems.length - 1;
    if (index >= activeGalleryItems.length) index = 0;
    currentGalleryIndex = index;

    const targetItem = activeGalleryItems[currentGalleryIndex];
    if (!targetItem) return;

    const img = targetItem.querySelector('img');
    const title = targetItem.getAttribute('data-title') || img.alt || 'Project Photo';
    const tag = targetItem.getAttribute('data-tag') || 'DSS Energy Solutions';

    lightboxImg.src = img.src;
    lightboxImg.alt = title;
    lightboxTitle.textContent = title;
    lightboxSub.textContent = tag;
  }

  if (lightboxPrev) {
    lightboxPrev.addEventListener('click', (e) => {
      e.stopPropagation();
      showLightboxImage(currentGalleryIndex - 1);
    });
  }

  if (lightboxNext) {
    lightboxNext.addEventListener('click', (e) => {
      e.stopPropagation();
      showLightboxImage(currentGalleryIndex + 1);
    });
  }

  if (lightboxClose) {
    lightboxClose.addEventListener('click', () => closeModal(lightbox));
  }

  // Lightbox Keyboard Navigation
  document.addEventListener('keydown', (e) => {
    if (lightbox.classList.contains('active')) {
      if (e.key === 'ArrowLeft') showLightboxImage(currentGalleryIndex - 1);
      if (e.key === 'ArrowRight') showLightboxImage(currentGalleryIndex + 1);
      if (e.key === 'Escape') closeModal(lightbox);
    }
  });

  // =========================================================================
  // 6. Client-Side Contact Form Validation & Submission
  // =========================================================================
  const contactForm = document.getElementById('contactForm');
  const formSuccessAlert = document.getElementById('formSuccessAlert');
  const formErrorAlert = document.getElementById('formErrorAlert');

  if (contactForm) {
    const nameInput = document.getElementById('contactName');
    const emailInput = document.getElementById('contactEmail');
    const phoneInput = document.getElementById('contactPhone');
    const messageInput = document.getElementById('contactMessage');

    // Realtime field validation on input & blur
    [nameInput, emailInput, phoneInput, messageInput].forEach(field => {
      if (!field) return;
      field.addEventListener('input', () => validateField(field));
      field.addEventListener('blur', () => validateField(field));
    });

    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const isNameValid = validateField(nameInput);
      const isEmailValid = validateField(emailInput);
      const isPhoneValid = validateField(phoneInput);
      const isMessageValid = validateField(messageInput);

      if (isNameValid && isEmailValid && isPhoneValid && isMessageValid) {
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;

        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sending Message...';

        // Simulate server transmission delay
        setTimeout(() => {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalText;

          // Show success banner
          formSuccessAlert.classList.add('is-visible');
          formErrorAlert.classList.remove('is-visible');

          // Reset inputs
          contactForm.reset();
          [nameInput, emailInput, phoneInput, messageInput].forEach(f => f.classList.remove('is-valid'));

          // Auto hide notification after 8s
          setTimeout(() => {
            formSuccessAlert.classList.remove('is-visible');
          }, 8000);
        }, 1200);
      } else {
        formErrorAlert.classList.add('is-visible');
        formSuccessAlert.classList.remove('is-visible');
        setTimeout(() => {
          formErrorAlert.classList.remove('is-visible');
        }, 5000);
      }
    });
  }

  function validateField(field) {
    if (!field) return false;
    const val = field.value.trim();
    let isValid = true;

    if (field.id === 'contactName') {
      isValid = val.length >= 2;
    } else if (field.id === 'contactEmail') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
      isValid = emailRegex.test(val);
    } else if (field.id === 'contactPhone') {
      // Allow 10 to 15 digits with optional +
      const cleanPhone = val.replace(/[\s\-\(\)]/g, '');
      isValid = /^\+?[0-9]{10,15}$/.test(cleanPhone);
    } else if (field.id === 'contactMessage') {
      isValid = val.length >= 10;
    }

    if (isValid) {
      field.classList.remove('is-invalid');
      field.classList.add('is-valid');
    } else {
      field.classList.remove('is-valid');
      field.classList.add('is-invalid');
    }

    return isValid;
  }

  function prefillContactForm(serviceTitle) {
    const contactSection = document.getElementById('contact');
    const serviceSelect = document.getElementById('contactService');
    const messageInput = document.getElementById('contactMessage');

    if (serviceSelect) {
      for (let i = 0; i < serviceSelect.options.length; i++) {
        if (serviceSelect.options[i].text.includes(serviceTitle)) {
          serviceSelect.selectedIndex = i;
          break;
        }
      }
    }

    if (messageInput) {
      messageInput.value = `Hello DSS Energy Solutions team, I am interested in a customized quotation for ${serviceTitle} in Rajasthan. Please reach out with site inspection and subsidy pricing details.`;
      messageInput.focus();
    }

    if (contactSection) {
      const headerOffset = siteHeader.offsetHeight + 10;
      const elementPosition = contactSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }

  // =========================================================================
  // 7. Inquiry Cart Drawer
  // =========================================================================
  const cartTrigger = document.getElementById('cartTrigger');
  const cartDrawerOverlay = document.getElementById('cartDrawerOverlay');
  const cartDrawerClose = document.getElementById('cartDrawerClose');
  const cartBadge = document.getElementById('cartBadge');
  const cartItemsList = document.getElementById('cartItemsList');
  const cartEmptyState = document.getElementById('cartEmptyState');
  const cartCheckoutBtn = document.getElementById('cartCheckoutBtn');

  function updateCartUI() {
    if (cartBadge) {
      cartBadge.textContent = inquiryCart.length;
      cartBadge.style.display = inquiryCart.length > 0 ? 'inline-block' : 'none';
    }

    if (!cartItemsList) return;

    if (inquiryCart.length === 0) {
      cartEmptyState.style.display = 'block';
      cartItemsList.style.display = 'none';
      if (cartCheckoutBtn) cartCheckoutBtn.disabled = true;
    } else {
      cartEmptyState.style.display = 'none';
      cartItemsList.style.display = 'flex';
      if (cartCheckoutBtn) cartCheckoutBtn.disabled = false;

      cartItemsList.innerHTML = '';
      inquiryCart.forEach((item, index) => {
        const div = document.createElement('div');
        div.className = 'cart-item-card';
        div.innerHTML = `
          <div class="cart-item-info">
            <h4>${item.title}</h4>
            <p>${item.subtitle}</p>
          </div>
          <button type="button" class="cart-remove-btn" data-index="${index}" title="Remove item" aria-label="Remove item">
            <i class="fa-solid fa-trash-can"></i>
          </button>
        `;
        cartItemsList.appendChild(div);
      });

      // Bind remove buttons
      cartItemsList.querySelectorAll('.cart-remove-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const idx = parseInt(btn.getAttribute('data-index'), 10);
          removeFromInquiryCart(idx);
        });
      });
    }

    localStorage.setItem('dss_inquiry_cart', JSON.stringify(inquiryCart));
  }

  function addToInquiryCart(item) {
    const exists = inquiryCart.some(c => c.id === item.id);
    if (!exists) {
      inquiryCart.push({ id: item.id, title: item.title, subtitle: item.subtitle });
      updateCartUI();
    }
  }

  function removeFromInquiryCart(index) {
    inquiryCart.splice(index, 1);
    updateCartUI();
  }

  if (cartTrigger && cartDrawerOverlay) {
    cartTrigger.addEventListener('click', (e) => {
      e.preventDefault();
      cartDrawerOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    });

    cartDrawerClose.addEventListener('click', () => {
      cartDrawerOverlay.classList.remove('active');
      document.body.style.overflow = '';
    });

    cartDrawerOverlay.addEventListener('click', (e) => {
      if (e.target === cartDrawerOverlay) {
        cartDrawerOverlay.classList.remove('active');
        document.body.style.overflow = '';
      }
    });

    if (cartCheckoutBtn) {
      cartCheckoutBtn.addEventListener('click', () => {
        cartDrawerOverlay.classList.remove('active');
        document.body.style.overflow = '';

        const itemNames = inquiryCart.map(c => c.title).join(', ');
        const messageInput = document.getElementById('contactMessage');
        if (messageInput) {
          messageInput.value = `I would like to request an official project quote for the following solutions:\n- ${itemNames}\n\nPlease contact me with proposal documents and pricing.`;
        }

        const contactSection = document.getElementById('contact');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }
      });
    }
  }

  // Initialize Cart display
  updateCartUI();

  // =========================================================================
  // 8. Online Payment Modal (DSS ENERGY PRIVATE LIMITED)
  // =========================================================================
  const paymentModal = document.getElementById('paymentModal');
  const paymentModalClose = document.getElementById('paymentModalClose');
  const payOnlineTriggers = document.querySelectorAll('.trigger-pay-online');
  const paymentForm = document.getElementById('paymentForm');
  const paymentReceiptBox = document.getElementById('paymentReceiptBox');

  payOnlineTriggers.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (paymentReceiptBox) paymentReceiptBox.style.display = 'none';
      if (paymentForm) paymentForm.style.display = 'block';
      openModal(paymentModal);
    });
  });

  if (paymentModalClose) {
    paymentModalClose.addEventListener('click', () => closeModal(paymentModal));
  }

  if (paymentForm) {
    paymentForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('payCustName').value.trim();
      const amount = document.getElementById('payAmount').value.trim();
      const ref = document.getElementById('payInvoiceRef').value.trim() || 'DSS-RAJ-' + Math.floor(100000 + Math.random() * 900000);
      const purpose = document.getElementById('payPurpose').value;
      const method = document.querySelector('input[name="paymentMethod"]:checked')?.value || 'UPI';

      const submitBtn = paymentForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Processing Secure Payment...';

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;

        paymentForm.style.display = 'none';
        paymentReceiptBox.style.display = 'block';

        document.getElementById('receiptTxnId').textContent = 'DSS_TXN_' + Date.now().toString().slice(-8);
        document.getElementById('receiptDate').textContent = new Date().toLocaleDateString('en-IN', {
          day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit'
        });
        document.getElementById('receiptName').textContent = name;
        document.getElementById('receiptInvoice').textContent = ref;
        document.getElementById('receiptPurpose').textContent = purpose;
        document.getElementById('receiptMethod').textContent = method.toUpperCase();
        document.getElementById('receiptAmount').textContent = '₹ ' + Number(amount).toLocaleString('en-IN');
      }, 1200);
    });
  }

  const receiptDoneBtn = document.getElementById('receiptDoneBtn');
  if (receiptDoneBtn) {
    receiptDoneBtn.addEventListener('click', () => {
      closeModal(paymentModal);
      if (paymentForm) paymentForm.reset();
    });
  }

  // =========================================================================
  // 9. About Us "Learn More" & Legal Modals (Privacy Policy, Terms)
  // =========================================================================
  const learnMoreBtn = document.getElementById('aboutLearnMoreBtn');
  const aboutModal = document.getElementById('aboutModal');
  const aboutModalClose = document.getElementById('aboutModalClose');

  if (learnMoreBtn && aboutModal) {
    learnMoreBtn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal(aboutModal);
    });
  }
  if (aboutModalClose) {
    aboutModalClose.addEventListener('click', () => closeModal(aboutModal));
  }

  const legalModal = document.getElementById('legalModal');
  const legalModalClose = document.getElementById('legalModalClose');
  const legalModalTitle = document.getElementById('legalModalTitle');
  const legalModalContent = document.getElementById('legalModalContent');
  const privacyLinks = document.querySelectorAll('.trigger-privacy-policy');
  const termsLinks = document.querySelectorAll('.trigger-terms-conditions');

  privacyLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      legalModalTitle.textContent = 'Privacy Policy — DSS ENERGY PRIVATE LIMITED';
      legalModalContent.innerHTML = `
        <p>At <strong>DSS ENERGY PRIVATE LIMITED</strong> (Brand: DSS Energy Solutions), your privacy and trust are paramount. This Privacy Policy outlines our transparent policies regarding the collection, use, and protection of customer information across Rajasthan.</p>
        <h4 style="margin: 16px 0 8px 0; color: #064E3B; font-weight: 700;">1. Information We Collect</h4>
        <p>We only collect information voluntarily provided via quote requests, subsidy applications, and site inquiries: full name, contact number, email, installation address in Rajasthan, electricity bills, and rooftop specifications.</p>
        <h4 style="margin: 16px 0 8px 0; color: #064E3B; font-weight: 700;">2. How We Use Your Data</h4>
        <p>Your details are used exclusively by our engineering team to assess rooftop solar feasibility, liaise with DISCOM authorities for net-metering approvals, process PM Surya Ghar Muft Bijli Yojana subsidies, and provide ongoing system maintenance. We never sell or share your data with unauthorized third parties.</p>
        <h4 style="margin: 16px 0 8px 0; color: #064E3B; font-weight: 700;">3. Registered Office & Contact</h4>
        <p><strong>DSS ENERGY PRIVATE LIMITED</strong><br>
        246, Bheruji Colony Khempura, Dakshini Sunderwas, Girwa, Udaipur, Rajasthan – 313001<br>
        Phone: +91 96492 47777 | Email: dssenergysolutions@gmail.com</p>
      `;
      openModal(legalModal);
    });
  });

  termsLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      legalModalTitle.textContent = 'Terms & Conditions — DSS ENERGY PRIVATE LIMITED';
      legalModalContent.innerHTML = `
        <p>Welcome to <strong>DSS ENERGY PRIVATE LIMITED</strong> (Brand: DSS Energy Solutions). By scheduling a site audit or commissioning solar installations with us, you agree to the following terms.</p>
        <h4 style="margin: 16px 0 8px 0; color: #064E3B; font-weight: 700;">1. Turnkey Scope & Solar Subsidies</h4>
        <p>Solar generation forecasts and subsidy calculations (including PM Surya Ghar schemes) are prepared based on actual rooftop irradiance, structural stability, and statutory guidelines established by Rajasthan state DISCOMs and the Ministry of New and Renewable Energy (MNRE).</p>
        <h4 style="margin: 16px 0 8px 0; color: #064E3B; font-weight: 700;">2. Equipment Warranties</h4>
        <p>Tier-1 solar photovoltaic panels carry manufacturer linear performance warranties of 25 years. Grid-tie and hybrid inverters, batteries, and mounting structures carry manufacturer warranties ranging from 5 to 10 years.</p>
        <h4 style="margin: 16px 0 8px 0; color: #064E3B; font-weight: 700;">3. Corporate Jurisdiction</h4>
        <p>All commercial agreements and proposals are subject to the legal jurisdiction of Udaipur, Rajasthan, India.</p>
      `;
      openModal(legalModal);
    });
  });

  if (legalModalClose) {
    legalModalClose.addEventListener('click', () => closeModal(legalModal));
  }

  // =========================================================================
  // 10. Universal Modal Helpers (Focus, Esc, Backdrop)
  // =========================================================================
  function openModal(modal) {
    if (!modal) return;
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeModal(modal) {
    if (!modal) return;
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  // Close modals when clicking dark backdrop
  document.querySelectorAll('.modal-overlay, .lightbox-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        closeModal(overlay);
      }
    });
  });

  // Global Escape key handler
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal-overlay.active, .lightbox-overlay.active').forEach(m => closeModal(m));
      if (cartDrawerOverlay && cartDrawerOverlay.classList.contains('active')) {
        cartDrawerOverlay.classList.remove('active');
        document.body.style.overflow = '';
      }
      if (mobileDrawer && mobileDrawer.classList.contains('open')) {
        closeMobileMenu();
      }
    }
  });

});

