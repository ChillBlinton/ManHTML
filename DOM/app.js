document.addEventListener('DOMContentLoaded', function (event) {

    // Nice Message
    let btn = document.createElement('button')
    btn.className = 'niceButton'
    let btnText = document.createTextNode('DomButton')
    btn.appendChild(btnText)
    document.body.appendChild(btn)


    //btn.addEventListener('click', function () {
      //  alert('Nice Message Brah')
    //});


    let htmlButton = document.getElementById('htmlButton');
    htmlButton.addEventListener('click', function () {

        alert(document.getElementById('textBox').value);


    });

    //color change brah
    let colorDiv = document.getElementById('div1')
    colorDiv.addEventListener('mouseenter', function () {
        colorDiv.style.backgroundColor = 'red';
    })

    colorDiv.addEventListener('mouseleave', function () {
        colorDiv.style.backgroundColor = 'white';

    });

    //drop that graph
    let p = document.createElement('p')
    let pTxt = document.createTextNode('Paragraphing out')
    p.appendChild(pTxt)
    document.body.appendChild(p)

    p.addEventListener('click', function () {
        let colorChange = ['purple', 'white', 'yellow', 'blue', 'black', 'brown', 'green', 'red'];
        let randomIndex = Math.floor(Math.random() * colorChange.length)
        p.style.color = colorChange[randomIndex];
        p.style.cursor = 'pointer';

    });

    // Add name when click
    let emptyDiv = document.getElementById('emptyDiv')
    let emptyBtn = document.getElementById('emptyDivBtn')
    emptyBtn.addEventListener('click', function () {
        let newSpan = document.createElement('span')
        emptyDiv.appendChild(newSpan)
        let newSpanTxt = document.createTextNode('Yung Billiam')
        newSpan.appendChild(newSpanTxt)
    });

    // Add friendos 
    let friends = ['Chungus', 'Fungus', 'Amongus', 'Bruhngus', 'Jeb']
    let lastBtn = document.getElementById('lastBtn');
    let ul = document.getElementById('ul');

    lastBtn.addEventListener('click', function () {
        let randomFriend = Math.floor(Math.random() * friends.length)
        
            let li = document.createElement('li');
            let friendNames = document.createTextNode(friends[randomFriend])
            li.appendChild(friendNames)
            ul.appendChild(li);
        
    });

    // End of DOM Content Loaded tag
});