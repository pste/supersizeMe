(function( $ ) {
  $.fn.supersizeMe = function() {
    var p = $(this);
    var size = {};
    var tmp = null;

    //
    size['width'] = p.width();
    size['innerWidth'] = p.innerWidth();
    size['outerWidth'] = p.outerWidth();
    size['outerWidthTrue'] = p.outerWidth(true);
    size['horizontalFrame'] = size.outerWidthTrue - size.width;
    size['horizontalPadding'] = size.innerWidth - size.width;
    size['horizontalBorder'] = size.outerWidth - size.innerWidth;
    size['horizontalMargin'] = size.outerWidthTrue - size.outerWidth;

    tmp = p.size('padding-left');           // save original value
    p.size('padding-left', '0px');
    size['paddingRight'] = p.innerWidth() - size.width; // recalc horizontalPadding with left = 0
    size['paddingLeft'] = size.horizontalPadding - size.paddingRight;
    p.size('padding-left', tmp);           // restore original value

    tmp = p.size('border-left-width');         // save original value
    p.size('border-left-width', '0px');
    size['borderRight'] = p.outerWidth() - p.innerWidth(); // recalc horizontalBorder with left = 0
    size['borderLeft'] = size.horizontalBorder - size.borderRight;
    p.size('border-left-width', tmp);          // restore original value

    tmp = p.size('margin-left');           // save original value
    p.size('margin-left', '0px');
    size['marginRight'] = p.outerWidth(true) - p.outerWidth(); // recalc horizontalMargin with left = 0
    size['marginLeft'] = size.horizontalMargin - size.marginRight;
    p.size('margin-left', tmp);            // restore original value

    //
    size['height'] = p.height();
    size['innerHeight'] = p.innerHeight();
    size['outerHeight'] = p.outerHeight();
    size['outerHeightTrue'] = p.outerHeight(true);
    size['verticalFrame'] = size.outerHeightTrue - size.height;
    size['verticalPadding'] = size.innerHeight - size.height;
    size['verticalBorder'] = size.outerHeight - size.innerHeight;
    size['verticalMargin'] = size.outerHeightTrue - size.outerHeight;

    tmp = p.size('padding-top');            // save original value
    p.size('padding-top', '0px');
    size['paddingBottom'] = p.innerHeight() - size.height; // recalc verticalPadding with top = 0
    size['paddingTop'] = size.verticalPadding - size.paddingBottom;
    p.size('padding-top', tmp);            // restore original value

    tmp = p.size('border-top-width');        // save original value
    p.size('border-top-width', '0px');
    size['borderBottom'] = p.outerHeight() - p.innerHeight(); // recalc verticalBorder with top = 0
    size['borderTop'] = size.verticalBorder - size.borderBottom;
    p.size('border-top-width', tmp);          // restore original value

    tmp = p.size('margin-top');            // save original value
    p.size('margin-top', '0px');
    size['marginBottom'] = p.outerHeight(true) - p.outerHeight(); // recalc verticalMargin with top = 0
    size['marginTop'] = size.verticalMargin - size.marginBottom;
    p.size('margin-top', tmp);            // restore original value

    return size;
  };
}(jQuery));