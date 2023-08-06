(function () {
    var client = ZAFClient.init();
    client.invoke('resize', { width: '100%', height: '120px' });

    function showInfo() {
        var requester_data = {
          'name': 'Jane Doe',
          'tags': ['tag1', 'tag2'],
          'created_at': 'November 20, 2014',
          'last_login_at': 'June 27, 2016'
        };
      
        var source = document.getElementById("requester-template").innerHTML;
        var template = Handlebars.compile(source);
        var html = template(requester_data);
        document.getElementById("content").innerHTML = html;
      }

    function showError() {
        var error_data = {
            'status': 404,
            'statusText': 'Not found'
        };
        
        var source = document.getElementById("error-template").innerHTML;
        var template = Handlebars.compile(source);
        var html = template(error_data);
        document.getElementById("content").innerHTML = html;
    }

    // showInfo();
    showError();
  })();