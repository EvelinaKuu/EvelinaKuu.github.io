function init() {


  $(document).ready(function() {
    $('#fullpage').fullpage({
      anchors: ['home', 'about', 'work', 'skills', 'contact'],
      menu: '#menu',
      paddingBottom: '10px',
      scrollingSpeed: 630,
      loopBottom: true
      // autoScrolling: false


    });

  });
}

init();
