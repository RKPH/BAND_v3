
//autp close menu when click on item
// Add an event listener to each menu item except the "More" item
const menuItems = document.querySelectorAll('.menu-item:not(.dropdown-toggle)');
  
menuItems.forEach(item => {
  item.addEventListener('click', () => {
    // Check if the navbar collapse button is visible (indicating it's a small screen)
    const collapseButton = document.querySelector('.navbar-toggler');
    if (collapseButton && getComputedStyle(collapseButton).display !== 'none') {
      // Close the navbar menu
      const navbarCollapse = document.querySelector('.navbar-collapse');
      if (navbarCollapse.classList.contains('show')) {
        collapseButton.click(); // Simulate a click on the collapse button to close the menu
      }
    }
  });
});

const moreDropdownItems = document.querySelectorAll('#navbarDropdown + .dropdown-menu .dropdown-item');
  
moreDropdownItems.forEach(item => {
    item.addEventListener('click', (event) => {
      // Check if the navbar collapse button is visible (indicating it's a small screen)
      const collapseButton = document.querySelector('.navbar-toggler');
      if (collapseButton && getComputedStyle(collapseButton).display !== 'none') {
        // Close the navbar menu
        const navbarCollapse = document.querySelector('.navbar-collapse');
        if (navbarCollapse.classList.contains('show')) {
          collapseButton.click(); // Simulate a click on the collapse button to close the menu
        }
      }

      // Prevent the default behavior of the anchor element (e.g., page navigation)
      event.preventDefault();
    });
  });

  //TICKER-MODAL CONTROL    
  const BuyBtns = document.querySelectorAll('.js-buy-tickets');
  const ModalTicket= document.querySelector('.modal-container');
  const closeBtns =document.querySelectorAll('.js-close');
  const TicketBox = document.querySelector('.modal-ticket')
  BuyBtns.forEach(BuyBtn => {
    BuyBtn.addEventListener('click', ()=>{
       ModalTicket.classList.remove('close');
        ModalTicket.classList.add('show-js');
    })
  })

  closeBtns.forEach(closeBtn=>{
    closeBtn.addEventListener('click',()=> {
        ModalTicket.classList.remove('show-js');
        ModalTicket.classList.add('closed-js');
    })
  })
  ModalTicket.addEventListener('click',()=>{
    ModalTicket.classList.remove('show-js');
     ModalTicket.classList.add('closed-js');
  })
  TicketBox.addEventListener('click',(event)=>{
    event.stopPropagation();
  })
