// === NAVBAR SCROLL BEHAVIOR ===
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', function () {
  if (window.scrollY > 100) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}, { passive: true });

// === MOBILE MENU ===
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const mobileMenuClose = document.getElementById('mobileMenuClose');
const mobileLinks = mobileMenu.querySelectorAll('.mobile-link');

function openMenu() {
  mobileMenu.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeMenu() {
  mobileMenu.classList.remove('open');
  document.body.style.overflow = '';
}

hamburger.addEventListener('click', openMenu);
mobileMenuClose.addEventListener('click', closeMenu);
mobileLinks.forEach(function (link) {
  link.addEventListener('click', closeMenu);
});
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') closeMenu();
});

// === SMOOTH SCROLL ===
document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
  anchor.addEventListener('click', function (e) {
    var target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// === SCROLL ANIMATIONS (IntersectionObserver) ===
var scrollObserver = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      scrollObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.animate-on-scroll').forEach(function (el) {
  scrollObserver.observe(el);
});

// === STATS COUNTER ===
var statsCounted = false;
var statsObserver = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting && !statsCounted) {
      statsCounted = true;
      var numbers = entry.target.querySelectorAll('.stat-number[data-target]');
      numbers.forEach(function (el) {
        var target = parseInt(el.getAttribute('data-target'), 10);
        var suffix = el.getAttribute('data-suffix') || '';
        var duration = 2000;
        var start = performance.now();

        function update(now) {
          var elapsed = now - start;
          var progress = Math.min(elapsed / duration, 1);
          // ease-out cubic
          var eased = 1 - Math.pow(1 - progress, 3);
          var current = Math.round(eased * target);
          el.textContent = current + suffix;
          if (progress < 1) {
            requestAnimationFrame(update);
          }
        }
        requestAnimationFrame(update);
      });
      statsObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

var statsSection = document.getElementById('stats');
if (statsSection) statsObserver.observe(statsSection);

// === TESTIMONIAL CAROUSEL ===
var slides = document.querySelectorAll('.carousel-slide');
var dots = document.querySelectorAll('.carousel-dot');
var leftArrow = document.querySelector('.carousel-arrow--left');
var rightArrow = document.querySelector('.carousel-arrow--right');
var currentIndex = 0;
var autoInterval = null;

var isTransitioning = false;
function showSlide(index, direction) {
  var newIndex = ((index % slides.length) + slides.length) % slides.length;
  if (newIndex === currentIndex || isTransitioning) return;
  isTransitioning = true;
  var dir = direction || (newIndex > currentIndex ? 'right' : 'left');
  var old = slides[currentIndex];
  old.classList.remove('active');
  old.classList.add(dir === 'right' ? 'exit-left' : 'exit-right');
  dots.forEach(function (d) { d.classList.remove('active'); });
  dots[newIndex].classList.add('active');
  currentIndex = newIndex;
  setTimeout(function () {
    old.classList.remove('exit-left', 'exit-right');
    var next = slides[newIndex];
    next.style.transition = 'none';
    next.style.transform = dir === 'right' ? 'translateX(60px)' : 'translateX(-60px)';
    next.style.opacity = '0';
    next.offsetHeight;
    next.style.transition = '';
    next.style.transform = '';
    next.style.opacity = '';
    next.classList.add('active');
    setTimeout(function () { isTransitioning = false; }, 400);
  }, 400);
}

function nextSlide() { showSlide(currentIndex + 1, 'right'); }
function prevSlide() { showSlide(currentIndex - 1, 'left'); }

function startAuto() {
  autoInterval = setInterval(nextSlide, 7000);
}
function stopAuto() {
  clearInterval(autoInterval);
}

if (leftArrow && rightArrow) {
  rightArrow.addEventListener('click', function () { stopAuto(); nextSlide(); startAuto(); });
  leftArrow.addEventListener('click', function () { stopAuto(); prevSlide(); startAuto(); });
}

dots.forEach(function (dot, i) {
  dot.addEventListener('click', function () { stopAuto(); showSlide(i); startAuto(); });
});

var carousel = document.getElementById('carousel');
if (carousel) {
  carousel.addEventListener('mouseenter', stopAuto);
  carousel.addEventListener('mouseleave', startAuto);
}

startAuto();

// === SALES CAROUSEL ===
var salesCarousel = document.getElementById('salesCarousel');
var salesLeft = document.querySelector('.sales-arrow--left');
var salesRight = document.querySelector('.sales-arrow--right');
if (salesCarousel && salesLeft && salesRight) {
  salesRight.addEventListener('click', function () {
    salesCarousel.scrollBy({ left: 240, behavior: 'smooth' });
  });
  salesLeft.addEventListener('click', function () {
    salesCarousel.scrollBy({ left: -240, behavior: 'smooth' });
  });
}

// === LISTINGS CAROUSEL ===
var listingsCarousel = document.getElementById('listingsCarousel');
var listingsLeft = document.querySelector('.listings-arrow--left');
var listingsRight = document.querySelector('.listings-arrow--right');

if (listingsCarousel && listingsLeft && listingsRight) {
  var scrollAmount = function () {
    var card = listingsCarousel.querySelector('.listing-card');
    return card ? card.offsetWidth + 28 : 300;
  };
  listingsRight.addEventListener('click', function () {
    listingsCarousel.scrollBy({ left: scrollAmount(), behavior: 'smooth' });
  });
  listingsLeft.addEventListener('click', function () {
    listingsCarousel.scrollBy({ left: -scrollAmount(), behavior: 'smooth' });
  });
}

// === BUILDING DETAIL MODALS ===
var buildingData = {
  belvedere: {
    name: 'The Belvedere',
    images: ['assets/buildings/belvedere-1.jpg','assets/buildings/belvedere-2.jpg','assets/buildings/belvedere-3.jpg','assets/buildings/belvedere-4.jpg'],
    details: [
      { label: 'Location', value: 'Rainey Street District' },
      { label: 'Status', value: 'Now Selling' },
      { label: 'Floors', value: '37' }
    ],
    desc: 'The Belvedere is Austin\'s newest luxury high-rise on Rainey Street, delivering refined living with panoramic views of Lady Bird Lake and the downtown skyline. Thoughtfully designed residences feature premium finishes, private balconies, and access to resort-caliber amenities.',
    highlights: ['Rooftop pool and sky lounge', 'Lady Bird Lake views', 'Concierge services', 'Private parking garage', 'State-of-the-art fitness center', 'Steps from Rainey Street dining']
  },
  spring: {
    name: 'Spring Condos',
    images: ['assets/buildings/spring-1.jpg','assets/buildings/spring-2.jpg','assets/buildings/spring-3.jpg','assets/buildings/spring-4.jpg'],
    details: [
      { label: 'Location', value: 'Market District' },
      { label: 'Type', value: 'Point Tower' },
      { label: 'Floors', value: '41' }
    ],
    desc: 'Austin\'s first true point tower, Spring rises 41 stories in the heart of the Market District. Every residence benefits from the building\'s slender profile with expansive windows and unobstructed views in every direction. A collaboration between world-class architects and designers.',
    highlights: ['360-degree views from every unit', 'Infinity-edge pool deck', 'Whole Foods steps away', 'Pet-friendly with dog run', 'Dedicated concierge', 'Wine storage and tasting room']
  },
  bridges: {
    name: 'Bridges on the Park',
    images: ['assets/buildings/bridges-1.jpg','assets/buildings/bridges-2.jpg','assets/buildings/bridges-3.jpg','assets/buildings/bridges-4.jpg'],
    details: [
      { label: 'Location', value: 'Barton Springs' },
      { label: 'Nicole\'s Record', value: '90+ Units Sold' },
      { label: 'Built', value: '2019' }
    ],
    desc: 'Situated along Barton Creek with direct access to the greenbelt, Bridges on the Park offers a rare combination of nature and urban convenience. Nicole has sold over 90 units here, setting record-breaking prices per square foot and establishing herself as the building\'s dominant agent.',
    highlights: ['Direct greenbelt access', 'Barton Springs Pool nearby', 'Record price per sq ft', 'Resort-style pool', 'Outdoor grilling areas', 'EV charging stations']
  },
  '5thwest': {
    name: '5th & West',
    images: ['assets/buildings/5thwest.jpg','assets/buildings/5thandwest-1.jpg','assets/buildings/5thandwest-2.jpg','assets/buildings/5thandwest-3.jpg','assets/buildings/5thandwest-4.jpg'],
    details: [
      { label: 'Location', value: '5th Street' },
      { label: 'Nicole\'s Home', value: 'Resident' },
      { label: 'Style', value: 'Boutique' }
    ],
    desc: 'Nicole doesn\'t just sell here. She lives here. As a resident of 5th & West, she has firsthand knowledge of the building, the community, and what makes it special. This boutique property offers a more intimate downtown experience with the walkability and energy that makes Austin\'s core irresistible.',
    highlights: ['Nicole\'s personal residence', 'Intimate boutique community', 'Walk to Congress Avenue', 'Rooftop views', 'Modern finishes throughout', 'Prime downtown location']
  },
  independent: {
    name: 'The Independent',
    images: ['assets/buildings/independent-1.jpg','assets/buildings/independent-2.jpg','assets/buildings/independent-3.jpg','assets/buildings/independent-4.jpg'],
    details: [
      { label: 'Location', value: 'West Avenue' },
      { label: 'Height', value: '685 Feet' },
      { label: 'Floors', value: '58' }
    ],
    desc: 'At 685 feet and 58 stories, The Independent is one of Austin\'s most iconic residential towers. Its distinctive stacked-block design by Rhode Partners has become one of the most recognizable silhouettes in Texas. Residences range from studios to expansive penthouses with sweeping views.',
    highlights: ['Iconic "Jenga" architecture', '685 feet, 58 stories', 'Sky pool on 32nd floor', 'Full-service concierge', 'Multiple dining options', '360-degree observation lounge']
  },
  fourseasons: {
    name: 'Four Seasons Residences',
    images: ['assets/buildings/fourseasons-1.jpg','assets/buildings/fourseasons-2.jpg','assets/buildings/fourseasons-3.jpg','assets/buildings/fourseasons-4.jpg'],
    details: [
      { label: 'Location', value: 'Congress Avenue' },
      { label: 'Tier', value: 'Ultra-Luxury' },
      { label: 'Service', value: 'White-Glove' }
    ],
    desc: 'The pinnacle of Austin luxury living. Four Seasons Residences deliver the legendary hospitality of the Four Seasons brand to a private collection of homes on Congress Avenue. Owners enjoy full hotel services including housekeeping, valet, room service, spa access, and the prestige of one of the world\'s most iconic addresses.',
    highlights: ['Four Seasons hotel services', 'In-residence dining', 'Lakefront location', 'World-class spa access', 'Valet and concierge', 'Private owner amenities']
  }
};

var modal = document.getElementById('buildingModal');
var modalGalleryTrack = document.getElementById('modalGalleryTrack');
var modalGalleryDots = document.getElementById('modalGalleryDots');
var modalGalleryLeft = document.getElementById('modalGalleryLeft');
var modalGalleryRight = document.getElementById('modalGalleryRight');
var modalTitle = document.getElementById('modalTitle');
var modalDetails = document.getElementById('modalDetails');
var modalDesc = document.getElementById('modalDesc');
var modalHighlights = document.getElementById('modalHighlights');
var modalGalleryIndex = 0;
var modalGalleryCount = 0;

function modalGalleryGo(i) {
  modalGalleryIndex = ((i % modalGalleryCount) + modalGalleryCount) % modalGalleryCount;
  modalGalleryTrack.style.transform = 'translateX(-' + (modalGalleryIndex * 100) + '%)';
  var allDots = modalGalleryDots.querySelectorAll('.building-modal-gallery-dot');
  allDots.forEach(function(d) { d.classList.remove('active'); });
  if (allDots[modalGalleryIndex]) allDots[modalGalleryIndex].classList.add('active');
}

function openBuildingModal(key) {
  var b = buildingData[key];
  if (!b) return;
  var imgs = b.images || [b.image];
  modalGalleryCount = imgs.length;
  modalGalleryIndex = 0;
  modalGalleryTrack.innerHTML = imgs.map(function(src) {
    return '<img src="' + src + '" alt="' + b.name + '" loading="lazy">';
  }).join('');
  modalGalleryTrack.style.transform = 'translateX(0)';
  modalGalleryDots.innerHTML = imgs.map(function(_, i) {
    return '<button class="building-modal-gallery-dot' + (i === 0 ? ' active' : '') + '" data-i="' + i + '"></button>';
  }).join('');
  modalGalleryDots.querySelectorAll('.building-modal-gallery-dot').forEach(function(dot) {
    dot.addEventListener('click', function() { modalGalleryGo(parseInt(this.dataset.i)); });
  });
  modalGalleryLeft.style.display = imgs.length > 1 ? '' : 'none';
  modalGalleryRight.style.display = imgs.length > 1 ? '' : 'none';
  modalTitle.textContent = b.name;
  modalDetails.innerHTML = b.details.map(function (d) {
    return '<div class="building-modal-detail"><span class="building-modal-detail-label">' + d.label + '</span><span class="building-modal-detail-value">' + d.value + '</span></div>';
  }).join('');
  modalDesc.textContent = b.desc;
  modalHighlights.innerHTML = '<h3>Amenities & Highlights</h3><ul>' + b.highlights.map(function (h) {
    return '<li>' + h + '</li>';
  }).join('') + '</ul>';
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

modalGalleryLeft.addEventListener('click', function() { modalGalleryGo(modalGalleryIndex - 1); });
modalGalleryRight.addEventListener('click', function() { modalGalleryGo(modalGalleryIndex + 1); });

function closeBuildingModal() {
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

document.querySelectorAll('.building-detail-btn').forEach(function (btn) {
  btn.addEventListener('click', function () {
    openBuildingModal(this.dataset.building);
  });
});

document.querySelector('.building-modal-overlay').addEventListener('click', closeBuildingModal);
document.querySelector('.building-modal-close').addEventListener('click', closeBuildingModal);
document.querySelector('.building-modal-cta').addEventListener('click', closeBuildingModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    if (modal.classList.contains('active')) closeBuildingModal();
    if (listingModal.classList.contains('active')) closeListingModal();
  }
});

// === LISTING DETAIL MODALS ===
var listingData = {
  mohle: {
    name: '1810 Mohle Dr',
    sub: 'Austin, Texas 78703',
    price: '$900,000',
    details: [
      { label: 'Type', value: 'Vacant Land' },
      { label: 'Area', value: 'Brykerwoods' },
      { label: 'Lot', value: 'Corner Lot' }
    ],
    images: [
      'https://d229qcohg01jma.cloudfront.net/UNLOCKMLS/04/960/601/1.jpg',
      'https://d229qcohg01jma.cloudfront.net/UNLOCKMLS/04/960/601/2.jpg',
      'https://d229qcohg01jma.cloudfront.net/UNLOCKMLS/04/960/601/3.jpg',
      'https://d229qcohg01jma.cloudfront.net/UNLOCKMLS/04/960/601/4.jpg',
      'https://d229qcohg01jma.cloudfront.net/UNLOCKMLS/04/960/601/5.jpg'
    ],
    desc: 'Incredible opportunity to build on a fully cleared and leveled corner lot in Brykerwoods, one of Austin\'s most established neighborhoods. The demolition process is already complete, a time-saver, especially in a historic district where permits can take 6-12 months to secure.'
  }
};

var listingModal = document.getElementById('listingModal');
var listingGalleryTrack = document.getElementById('listingGalleryTrack');
var listingGalleryDots = document.getElementById('listingGalleryDots');
var listingGalleryLeft = document.getElementById('listingGalleryLeft');
var listingGalleryRight = document.getElementById('listingGalleryRight');
var listingGalleryIndex = 0;
var listingGalleryCount = 0;

function listingGalleryGo(i) {
  listingGalleryIndex = ((i % listingGalleryCount) + listingGalleryCount) % listingGalleryCount;
  listingGalleryTrack.style.transform = 'translateX(-' + (listingGalleryIndex * 100) + '%)';
  var allDots = listingGalleryDots.querySelectorAll('.building-modal-gallery-dot');
  allDots.forEach(function(d) { d.classList.remove('active'); });
  if (allDots[listingGalleryIndex]) allDots[listingGalleryIndex].classList.add('active');
}

function openListingModal(key) {
  var l = listingData[key];
  if (!l) return;
  listingGalleryCount = l.images.length;
  listingGalleryIndex = 0;
  listingGalleryTrack.innerHTML = l.images.map(function(src) {
    return '<img src="' + src + '" alt="' + l.name + '" loading="lazy">';
  }).join('');
  listingGalleryTrack.style.transform = 'translateX(0)';
  listingGalleryDots.innerHTML = l.images.map(function(_, i) {
    return '<button class="building-modal-gallery-dot' + (i === 0 ? ' active' : '') + '" data-i="' + i + '"></button>';
  }).join('');
  listingGalleryDots.querySelectorAll('.building-modal-gallery-dot').forEach(function(dot) {
    dot.addEventListener('click', function() { listingGalleryGo(parseInt(this.dataset.i)); });
  });
  listingGalleryLeft.style.display = l.images.length > 1 ? '' : 'none';
  listingGalleryRight.style.display = l.images.length > 1 ? '' : 'none';
  document.getElementById('listingModalTitle').innerHTML = l.name + '<span style="display:block;font-size:14px;font-weight:400;color:#999;margin-top:4px">' + l.sub + '</span><span style="display:block;font-family:var(--font-accent);font-size:32px;margin-top:12px;color:var(--color-primary)">' + l.price + '</span>';
  document.getElementById('listingModalDetails').innerHTML = l.details.map(function(d) {
    return '<div class="building-modal-detail"><span class="building-modal-detail-label">' + d.label + '</span><span class="building-modal-detail-value">' + d.value + '</span></div>';
  }).join('');
  document.getElementById('listingModalDesc').textContent = l.desc;
  listingModal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeListingModal() {
  listingModal.classList.remove('active');
  document.body.style.overflow = '';
}

listingGalleryLeft.addEventListener('click', function() { listingGalleryGo(listingGalleryIndex - 1); });
listingGalleryRight.addEventListener('click', function() { listingGalleryGo(listingGalleryIndex + 1); });

document.querySelectorAll('.listing-detail-btn').forEach(function(btn) {
  btn.addEventListener('click', function() { openListingModal(this.dataset.listing); });
});

listingModal.querySelector('.building-modal-overlay').addEventListener('click', closeListingModal);
listingModal.querySelector('.building-modal-close').addEventListener('click', closeListingModal);
listingModal.querySelector('.building-modal-cta').addEventListener('click', closeListingModal);