let accordions = document.querySelectorAll(".accordion-wrapper .accordion");
console.log(accordions)
accordions.forEach((acco)=>{
    console.log(acco);
    acco.onclick = () =>{
        accordions.forEach((subcontent) =>{
            subcontent.classList.remove("active");
        })
        acco.classList.add("active");
    };
   });




   function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }