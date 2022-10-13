// Test Section A
// case 1 a i conditionals
function case1ai (e) {
  var named_values = e.namedValues
  if (named_values["Case 1ai"] < 2){
    return "Feedback a";
  } else {
  return "Feedback a for score >= 2";}
}

// case 1 a ii conditionals
function case1aii (e) {
  var named_values = e.namedValues
  if (named_values["Case 1aii"] >= 2){
    return "Feedback aii"
  } else {
  return "Feedback aii for score < 2"
  }
}  

// continue with case 2
// continue with case 2ai
function case2ai (e) {
  var named_values = e.namedValues
  if (named_values["Case 2ai"] == 2){
    return "Feedback 2ai"
  } else {
  return "Feedback 2ai for score != 2"
  }
} 
// demo for multiple conditionals
// continue with case 2aii
function case2aii (e) {
  var named_values = e.namedValues
  if (named_values["Case 2aii"] >= 5){
    return "Feedback for 2aii where score greater than or equal to5"
  }
  else if (named_values["Case 2aii"] >= 3) {
    return "Feedback for 2aii for score greater than or equal to 3"
  } else {
  return "Feedback for 2aii for score less than 3"
  }
} 


// function for sending emails
function sendEmail (e) {
  var named_values = e.namedValues
  var name = named_values["First name"]
  var recipient = named_values["Email Address"]

  MailApp.sendEmail({
    to: recipient.toString(),
    subject: "For " + name.toString() + ", Test Feedback",
    htmlBody: "Hey " + name.toString() + ", <br><br>" + "</br>" + "<b> From Test Section 1 </b>" + case1ai(e) + "<br>" + case1aii(e) + "<br>"  + "<b> From Test Section 2 </b>" + case2ai (e) + "<br>" + case2aii (e) + "This is a test product from String covering automated feedback."
  })
  console.log("Email successfully sent to " + name)
}
