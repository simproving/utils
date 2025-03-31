/**
 * homeButton.js - Adds a home button to the bottom of the page
 * 
 * This script can be imported into any project to add a consistent home button
 * that links back to your main page.
 * 
 * Usage:
 * 1. Include this script in your HTML: <script src="homeButton.js"></script>
 * 2. Optionally configure by setting window.homeButtonConfig before loading:
 *    window.homeButtonConfig = {
 *      url: "https://your-custom-url.com",
 *      text: "Custom Text",
 *      position: "top-right" // Options: "bottom-center", "top-right", "top-left", "bottom-right", "bottom-left"
 *    };
 */

(function() {
  // Default configuration
  const defaultConfig = {
    url: "https://simproving.github.io",
    text: "Home",
    position: "bottom-center" // Default position
  };

  // Merge user config with defaults
  const config = Object.assign({}, defaultConfig, window.homeButtonConfig || {});

  // Create button container
  const buttonContainer = document.createElement('div');
  buttonContainer.className = 'home-button-container no-print';
  
  // Create button
  const button = document.createElement('a');
  button.href = config.url;
  button.className = 'btn btn-primary home-button';
  
  // Create icon
  const icon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  icon.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
  icon.setAttribute('width', '16');
  icon.setAttribute('height', '16');
  icon.setAttribute('fill', 'currentColor');
  icon.setAttribute('class', 'bi bi-house-door');
  icon.setAttribute('viewBox', '0 0 16 16');
  
  const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path.setAttribute('d', 'M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146ZM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5Z');
  
  icon.appendChild(path);
  button.appendChild(icon);
  
  // Add text
  const textNode = document.createTextNode(' ' + config.text);
  button.appendChild(textNode);
  
  buttonContainer.appendChild(button);
  
  // Apply positioning styles
  const style = document.createElement('style');
  style.textContent = `
    .home-button-container {
      padding: 10px;
      z-index: 1000;
    }
    .home-button-container.bottom-center {
      position: relative;
      text-align: center;
      margin-top: 1.5rem;
    }
    .home-button-container.top-right {
      position: fixed;
      top: 10px;
      right: 10px;
    }
    .home-button-container.top-left {
      position: fixed;
      top: 10px;
      left: 10px;
    }
    .home-button-container.bottom-right {
      position: fixed;
      bottom: 10px;
      right: 10px;
    }
    .home-button-container.bottom-left {
      position: fixed;
      bottom: 10px;
      left: 10px;
    }
    @media print {
      .no-print {
        display: none !important;
      }
    }
  `;
  document.head.appendChild(style);
  
  // Add position class
  buttonContainer.classList.add(config.position);
  
  // Wait for DOM to be ready before appending
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', appendButton);
  } else {
    appendButton();
  }
  
  function appendButton() {
    if (config.position === 'bottom-center') {
      document.body.appendChild(buttonContainer);
    } else {
      // For fixed positions, insert at the beginning of body
      document.body.insertBefore(buttonContainer, document.body.firstChild);
    }
  }
})(); 