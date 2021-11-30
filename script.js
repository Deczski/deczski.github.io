// COLLAPSE MENU ON CLICK LINK INSIDE
  // get input (if it's checked is true, menu is visible, not visible on false)
  const input = document.querySelector("#menuToggle input");
  // get all "a" tags from #menu 
  const allA = document.querySelectorAll("#menu a");
  // iterate over all a's
  for(const a of allA){
    // make annonymous arrow function after click on every "a" tag
    a.onclick = () => {
      // hide menu on click.
      input.checked = false;
    }
  }

  
//   AOS.init({
//     duration: 1200,
//   })