'use strict';

/** 
* @function 
* @event Event Click on language toggler
* @desc Click on .lang-toggle__line-box element. Toggle dot up or down.
*/
(function(){
	document.querySelector( '.lang-toggle__line-box' ).addEventListener( 'click', function(){
		document.querySelector( '.lang-toggle__dot' ).classList.toggle( 'lang-toggle__dot--en' )
	})
})();
