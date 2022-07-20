console.log('js')

//Blur

const getInput = document.getElementById( 'name' );

function getFocus() {
    return getInput.focus();
}

function loseFocus() {
    return getInput.blur();
}

//
const getFocusBtn = document.getElementById( 'focus-btn' );
const getLoseBtn = document.getElementById( 'lose-btn' );
const getKeyBtn = document.getElementById( 'age' );

// getFocusBtn.addEventListener( 'click', function ( e ) {
//     return getFocus();
// } )

// getLoseBtn.addEventListener( 'click', function ( e ) {
//     return loseFocus();
// } )

//OnKeyDown

// getKeyBtn.addEventListener( 'keydown', function ( e ) {
//     return keyDown();
// } )

// getKeyBtn.addEventListener( 'keyup', function ( e ) {
//     return keyUp();
// })

// function keyDown() {
//     return alert( 'keydown function' );
// }

//OnKeyUp

// function keyUp() {
//     return alert( 'keyup function' );
// }

//OnMouseOver
// const getImg = document.getElementsByTagName( 'img' );
// console.log(getImg)

// getImg[0].addEventListener( 'mouseover', function ( e ) {
//     return getBig()
// })



// function getBig() {
//     getImg[0].style.height = "800px";
//     getImg[0].style.width = "800px"
// }

// function getSmall() {
//     getImg[0].style.height = "";
//     getImg[0].style.width = ""
// }


//OnMouseOut

// getImg[0].addEventListener( 'mouseout', function ( e ) {
//     return getSmall()
// })


//OnReset (forms only)

const getResetBtn = document.getElementById( 'reset-action' );

getResetBtn.addEventListener( 'submit', function ( e ) {
    e.preventDefault();
    return successMessage();
} );

function successMessage() {
    const getMessageContainer = document.getElementById('message')
    let buildMessage = document.createElement( 'h1' );
    buildMessage.innerHTML = "Datos enviados correctamente";
    getMessageContainer.appendChild( buildMessage );
    getMessageContainer.style.backgroundColor =  'red'
    buildMessage.style.color =' white'

}