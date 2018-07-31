var AppActions = require('../actions/AppActions');

module.exports = {
	addNote: function(note){
        $.ajax({
            url: "https://api.mlab.com/api/1/databases/stickynotez/collections/notes?apiKey=fIJu-cr5Wl2DucpQhUuxc1EH41s9pwtb",
            data: JSON.stringify(note),
            type: "POST",
            contentType: "application/json"
        });
    }
}

