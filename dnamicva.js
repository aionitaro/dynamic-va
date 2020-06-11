
//get targeing keys

var slots = googletag.pubads().getSlots(); 
var i; 
for (i=0; i<= slots.length-1; i++ ) 
	{ console.log(slots[i].getAdUnitPath() + " " + slots[i].getTargetingKeys()); }

//set targeing keys push to googletag push queue

<script> 


googletag.cmd.push(function setva () {
  var slots = googletag.pubads().getSlots(); 
  var i; 
  for (i=0; i<= slots.length-1; i++ )  
	{ console.log("Setting viewbability for " + slots[i].getAdUnitPath() + " to " + i*2);
      slots[i].setTargeting("viewability", i*2); }
  
})



 </script>