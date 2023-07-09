function books() {
  var confirmation = confirm("The webpage is still in development phase.Users can upload and view all the files.So we request all the users to upload their content in any file type.Please be responsible and upload  the related content only.Thank you for spending your valuable time with us.");

  if (confirmation) {
    window.open("https://drive.google.com/drive/folders/1vIJNjg-uDIQuTV1HN1-tD18MiyYJqKlU","_blank"); 
  } else {
   
  }
}
function clubs() {
  window.open("index1.html", '_blank');
  
}
function sports() {
  window.open("https://anurag.edu.in/discover/campus-life/sports-and-fitness/", '_blank');
}
function club() {
  window.location.href = 'https://anurag.edu.in/discover/campus-life/clubs-activities/';
}
function chat() {
  window.open("https://discord.gg/m6sxyrxZ", '_blank');
  
}
function DM() {
  const emailAddress = '20eg104110@anurag.edu.in'; 
  const subject = 'replying as feedback for campusconnect webpage'; 
  const body = 'Thank you for being here and trying to give us the the feedback'; 

  const emailLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.open(emailLink);
}


