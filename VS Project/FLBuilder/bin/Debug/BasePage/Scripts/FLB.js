function HighlightWorkingArea(value,color) {
    if (value)
        $('.working-area').attr('style', 'background-color:' + color);
    else
        $('.working-area').attr('style', '');
}

function InitializeFLB() {
    var items = $('.working-area').children('.flb');
    var center = $(window).width() / 2;
    for (var i = 0; i < items.length; i++) {
        var parentItem = $(items[i]).attr('data-position-parent');
        var parentX = center, parentY = 0;
        if (parentItem!='noparent'){
            var parentObject = $(parentItem);
            parentX += parseInt(parentObject.attr('data-position-x'));
            parentY = parseInt(parentObject.attr('data-position-y') + parentObject.height());
        }
        parentX += parseInt($(items[i]).attr('data-position-x'));
        parentY += parseInt($(items[i]).attr('data-position-y'));
        var w = $(items[i]).width();
        var floatW = parseFloat($(items[i]).attr('data-object-float-w')), floatH = parseFloat($(items[i]).attr('data-object-float-h'));
        if (floatW != 1 && floatW!=0) {
            parentX -= ($(items[i]).width() / floatW);
        }
        if (floatH != 1 && floatH!=0) {
            parentY -= ($(items[i]).height() / floatH);
        }
        $(items[i]).attr('style', 'position:absolute; top:'+parentY+'px; left:'+parentX+'px;');
    }
}