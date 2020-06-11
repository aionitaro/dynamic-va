 function lineitem(){
 var slots = googletag.pubads().getSlots(); 
  var i; 
  var j = 0;
  var response = []
  for (i=0; i<= slots.length-1; i++ )  
  {  if(slots[i].getResponseInformation() !== null){
	  response[j] = slots[i].getResponseInformation().lineItemId;
	  console.log(j + response[j]);}
	  j++;
  } 
  return response;
 }

dataLayer.push('lineitems': lineitem().toString());


	
	
	