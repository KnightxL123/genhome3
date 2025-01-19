'use strict';

/**
 * navbar toggle
 */

const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navLinks = document.querySelectorAll("[data-nav-link]");

const navElemArr = [navOpenBtn, navCloseBtn, overlay];

const navToggleEvent = function (elem) {
  for (let i = 0; i < elem.length; i++) {
    elem[i].addEventListener("click", function () {
      navbar.classList.toggle("active");
      overlay.classList.toggle("active");
    });
  }
}

navToggleEvent(navElemArr);
navToggleEvent(navLinks);



/**
 * header sticky & go to top
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  if (window.scrollY >= 200) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }

});

document.querySelector('.tour-search-form').addEventListener('submit', function (event) {
  event.preventDefault();
  console.log('Form submitted'); // Add this line to check if the event listener is triggered

  const destination = document.querySelector('#destination').value;
  const people = document.querySelector('#people').value;
  const checkin = new Date(document.querySelector('#checkin').value);
  const checkout = new Date(document.querySelector('#checkout').value);

  const duration = Math.ceil((checkout - checkin) / (1000 * 60 * 60 * 24)) + 'D/' + (Math.ceil((checkout - checkin) / (1000 * 60 * 60 * 24)) - 1) + 'N';

  document.querySelector('#package-destination').textContent = destination;
  document.querySelector('#package-people').textContent = 'pax: ' + people;
  document.querySelector('#package-duration').textContent = duration;
});

function updatePackageDetails() {
  const destination = document.querySelector('#destination').value;
  const people = document.querySelector('#people').value;
  const checkin = new Date(document.querySelector('#checkin').value);
  const checkout = new Date(document.querySelector('#checkout').value);

  const duration = Math.ceil((checkout - checkin) / (1000 * 60 * 60 * 24)) + 'D/' + (Math.ceil((checkout - checkin) / (1000 * 60 * 60 * 24)) - 1) + 'N';

  // Update all package items
  for (let i = 1; i <= 3; i++) {
    document.querySelector(`#package-destination-${i}`).textContent = destination;
    document.querySelector(`#package-people-${i}`).textContent = 'pax: ' + people;
    document.querySelector(`#package-duration-${i}`).textContent = duration;
  }
}

document.addEventListener('DOMContentLoaded', (event) => {
  var modal = document.getElementById("privacyPolicyModal");
  var btn = document.getElementById("privacyPolicyLink");
  var span = document.getElementsByClassName("close")[0];

  btn.onclick = function(event) {
    event.preventDefault();
    modal.style.display = "block";
  }

  span.onclick = function() {
    modal.style.display = "none";
  }

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
});

document.addEventListener('DOMContentLoaded', (event) => {
  var privacyModal = document.getElementById("privacyPolicyModal");
  var termsModal = document.getElementById("termsConditionsModal");
  var privacyBtn = document.getElementById("privacyPolicyLink");
  var termsBtn = document.getElementById("termsConditionsLink");
  var privacySpan = privacyModal.getElementsByClassName("close")[0];
  var termsSpan = termsModal.getElementsByClassName("close")[0];
  var termsDeclineBtn = termsModal.querySelector("button.close");

  privacyBtn.onclick = function(event) {
    event.preventDefault();
    privacyModal.style.display = "block";
  }

  termsBtn.onclick = function(event) {
    event.preventDefault();
    termsModal.style.display = "block";
  }

  privacySpan.onclick = function() {
    privacyModal.style.display = "none";
  }

  termsSpan.onclick = function() {
    termsModal.style.display = "none";
  }

  termsDeclineBtn.onclick = function() {
    termsModal.style.display = "none";
  }

  window.onclick = function(event) {
    if (event.target == privacyModal) {
      privacyModal.style.display = "none";
    }
    if (event.target == termsModal) {
      termsModal.style.display = "none";
    }
  }
});