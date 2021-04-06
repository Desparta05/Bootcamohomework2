// Assistance from YouTube: https://www.youtube.com/watch?v=eg4e-FObyJ8
console.log("received!")

$(document).ready(function () {
    $('.submit').click(function (event) {
        event.preventDefault()
        console.log('clicked')

        const fName = $('.firstname').val()
        const lName = $('.lastname').val()
        const cName = $('.compname').val()
        const eMail = $('.email').val()
        const subject = $('.subject').val()

        const statusElm = $('.status')
        statusElm.empty()

        
        if(fName.length > 2) {
            statusElm.append('<div>First Name is valid.</div>')
        }else {
            statusElm.append('<div>First Name not valid.</div>')
        }

        if(lName.length > 2) {
            statusElm.append('<div>Last Name is valid.</div>')
        }else {
            statusElm.append('<div>Last Name not valid.</div>')
        }

        if(cName.length > 2) {
            statusElm.append('<div>Company is valid.</div>')
        }else {
            statusElm.append('<div>Company not valid.</div>')
        }

        if(eMail.length > 5 && eMail.includes('@') && eMail.includes('.')) {
            statusElm.append('<div>Email works</div>')
        }else {
            statusElm.append('<div>Email missing "@" or "."</div>')
        }
        
        if(subject.length > 2) {
            statusElm.append('<div>Subject is valid.</div>')
        }else {
            statusElm.append('<div>Subject not valid.</div>')
        }

    })
})