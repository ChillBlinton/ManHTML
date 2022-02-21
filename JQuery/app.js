let $ul = $('#ul')
$listBtn.click(function()   {
    let $randomFriend = Math.floor(Math.random() * $friends.length)
    for (let i = 0; i < 1; i++) {

        let $friendNames = ($friends[$randomFriend])
        let $li = $(`<li>${$friendNames} </li>`);
        $ul.append($li);
    }

})

$(document).ready(function (){

    let $button = $('<button>Nice Button</Button>');
    $('body').append($button)
    $button.click(function()    {
        alert('Hiya my dood')
    });
    
    let htmlButton = $('#htmlButton')
    htmlButton.click(function() {
        alert($('#textBox').val())
    });
    
    //change background color
    let $colorDiv = $('#div1')
    $colorDiv.mouseenter(function() {
       $(this).css('backgroundColor', 'red')
    });
    $colorDiv.mouseleave(function() {
        $(this).css('backgroundColor', 'green')
    
    });
    
    
        // Color change func
        let $p = $('<p>Paragraphing out</p>')
        $('body').append($p)
            
        $p.click(function() {
            let r = Math.floor((Math.random() * 255) + 1);
            let g = Math.floor((Math.random() * 255) + 1);
            let b = Math.floor((Math.random() * 255) + 1);
            $(this).css('color',  "rgb(" + r + ", " + g + ", " + b + ")")
        });
    
    
    

    });

