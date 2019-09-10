let wordlist = [
  'web developer',
  'college student',
  'graphic designer',
  'photographer',
  'audio engineer',
]

function buildSlotItem (text) {
    return $('<div>').addClass('slot-machine_item').text(text);
}

function buildSlotContents ($container, wordlist) {
    $items = wordlist.map(buildSlotItem);
    $container.append($items);
}

function popPushNItems ($container, n) {
    $children = $container.find('.slot-machine_item');
    $children.slice(0, n).insertAfter($children.last());

    if (n === $children.length) {
      popPushNItems($container, 1);
    }
}

function rotateContents ($container, n) {
    setTimeout(function () {
        popPushNItems($container, n);
        $container.css({top: 0});
    }, 300);    
}

/* Have an odd number of list and it will pass through each item in the given list. */
function slotIndex(max) {
    var randIndex = 4; // even for odd number list, odd for even number list
    return (randIndex > 0) ? randIndex : slotIndex(max);
}

function animate() {
    var index = slotIndex(wordlist.length);
    $descriptionBox.animate({top: -index*150}, 500, 'swing', () =>{
        rotateContents($descriptionBox, index);
    });
}

$(() => {
  $descriptionBox = $('#descriptionBox .slot-machine_items_container');
  buildSlotContents($descriptionBox, wordlist);  
  buildSlotContents($descriptionBox, wordlist);  
  buildSlotContents($descriptionBox, wordlist);  
  buildSlotContents($descriptionBox, wordlist);  
  
  setInterval(animate, 3000); // animates with a 3 second timer 
});