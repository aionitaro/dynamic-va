
//get targeing keys

var slots = googletag.pubads().getSlots(); 
var i; 
for (i=0; i<= slots.length-1; i++ ) 
	{ console.log(slots[i].getAdUnitPath() + " " + slots[i].getTargetingKeys()); }

//set targeing keys push to googletag push queue


-googletag.cmd.push(function setva () {
  var slots = googletag.pubads().getSlots(); 
  var i; 
  for (i=0; i<= slots.length-1; i++ )  
	{ console.log("Setting viewbability for " + slots[i].getAdUnitPath() + " to " + i*2);
      slots[i].setTargeting("viewability", i*2); }
  
})

<script> 

// get the AdX CPM from json report and set the kv to an increased CPM by percentage
for(j=0; j<=slots.length-1; j++) 
	{if(slots[j].getAdUnitPath() !== null){
		{ for(i=0; i<=json.length-1; i++) 
			{
			
			if(json[i]['Ad unit'] == slots[j].getAdUnitPath()) 
			{ console.log(slots[j].getAdUnitPath() + " has average AdX CPM of " + json[i]["Ad Exchange average eCPM"]);
				var newCPM = json[i]["Ad Exchange average eCPM"]*1.1;
				newCPM = newCPM.toFixed(2);
				slots[j].setTargeting("eCPM", newCPM);
				 console.log("becomes " + newCPM );
				}}
		}
	}}	
	
	


 </script>