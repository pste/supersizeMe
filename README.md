It’s a pretty common task to work with object’s size just to move, pull, stretch, … them. Each time I tipically need to do something like this:

var width = $elem.width();
var hpadding = $elem.innerWidth()- width;
var hborder = $elem.outerWidth() - $elem.innerWidth();
var hmargin = $elem.outerWidth(true) - $elem.outerWidth();
...

I made a plugin to do all this dirty job in one place. It returns an object literal with a lot (25!) of numbers about the element. These are numbers so they can be used into calculations.

var size = $elem.supersizeMe();
var alpha = (size.borderLeft + size.marginTop) * size.outerHeightTrue; // some really strange calc :) 
