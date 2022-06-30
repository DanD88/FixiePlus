// Modal for subscribe
function toggleModal(modalID){
    document.getElementById(modalID).classList.toggle("hidden");
    document.getElementById(modalID + "-backdrop").classList.toggle("hidden");
    document.getElementById(modalID).classList.toggle("flex");
    document.getElementById(modalID + "-backdrop").classList.toggle("flex");
  }

  function toggleNavbar(collapseID) {
    document.getElementById(collapseID).classList.toggle("hidden");
    document.getElementById(collapseID).classList.toggle("block");
  }