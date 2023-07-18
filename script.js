function changeText() {
    var body = document.getElementById("body_main");
    var header = document.getElementById("container");
    var footer = document.getElementById("container_footer");
    var color_base = window.getComputedStyle(footer).backgroundColor;

    var color_body = 'white'
    var color_body_text = 'white'

    if (color_base== 'rgb(73, 151, 71)') {
        color_base= 'red'
        color_body = 'white'
        color_body_text = 'black'

    } else {
        color_base='rgb(73, 151, 71)'
        color_body = 'rgb(39, 43, 40)'
        color_body_text = 'white'
    }
    header.style.backgroundColor = color_base;
    footer.style.backgroundColor = color_base;
    body.style.backgroundColor = color_body;
    body.style.color = color_body_text;
  }