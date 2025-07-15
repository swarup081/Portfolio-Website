function opentabproject(categoryId, element) {
    const allTabs = document.querySelectorAll('.project_content');
    const allBtns = document.querySelectorAll('.project_head');
  
    // Hide all sections
    allTabs.forEach(tab => {
      tab.style.display = 'none';
    });
  
    // Remove active class from all buttons
    allBtns.forEach(btn => {
      btn.classList.remove('active_project_link');
    });
  
    // Show the selected tab
    const selectedTab = document.getElementById(categoryId.toLowerCase());
    if (selectedTab) {
      selectedTab.style.display = 'flex'; // or 'grid' if you want
    }
  
    // Highlight the selected button
    element.classList.add('active_project_link');
  }

  window.addEventListener('DOMContentLoaded', () => {
    opentabproject('All', document.querySelector('.box_1'));
  });