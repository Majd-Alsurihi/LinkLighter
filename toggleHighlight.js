// Check if highlighting is already active
if (window.__highlightLinksActive__) {
    // Remove highlighting
    document.querySelectorAll('.highlight-links-extension').forEach(el => {
      el.classList.remove('highlight-links-extension');
    });
    window.__highlightLinksActive__ = false;
  } else {
    // Add highlighting
    const links = document.querySelectorAll('a, button, [role="button"], [onclick]');
    
    links.forEach(link => {
      link.classList.add('highlight-links-extension');
    });
  
    // Inject the CSS if not already added
    if (!document.getElementById('highlight-links-style')) {
      const style = document.createElement('style');
      style.id = 'highlight-links-style';
      style.textContent = `
        .highlight-links-extension {
          outline: 3px solid #ff5722;
          background-color: rgba(255, 87, 34, 0.1);
          border-radius: 4px;
        }
      `;
      document.head.appendChild(style);
    }
  
    window.__highlightLinksActive__ = true;
  }
  