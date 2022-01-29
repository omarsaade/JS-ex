var myInput = document.getElementById('my-input');

myInput.onfocus = function () {
    'use strict';
    // store placeholder Attr In Backup Attr
    this.setAttribute('data-place', this.getAttribute('placeholder'));
    //empty Placeholder Attribute
    this.setAttribute('placeholder', '');
};

myInput.onblur = function () {
    'use strict';
    //get placeholder Attr From Backup Attribute
    this.setAttribute('placeholder', this.getAttribute('data-place'));
    //empty backup Attribute
    this.setAttribute('data-place', '')
}



