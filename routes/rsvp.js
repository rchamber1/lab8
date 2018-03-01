var data = {
  rsvp: ['ixd@ucsd.edu']
};

/*
 * GET tasks page.
 */
exports.adminView = function(req, res){
  res.render('rsvp', data);
};

exports.addRSVP = function(req, res){
  var rsvpEmail = req.body.rsvpEmail;
  // This will print in the terminal when a POST is made
  console.log(rsvpEmail);
  // Add to the current data
  data.rsvp.push(rsvpEmail);
  // Send our task name back to the browser
  res.send(rsvpEmail);
}
