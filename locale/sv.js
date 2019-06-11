/**
 * @preserve date-and-time.js locale configuration
 * @preserve Swedish (se)
 * @preserve It is using moment.js locale configuration as a reference.
 */
(function (global) {
    'use strict';

    var locale = function (date) {
        date.setLocales('sv', {
            MMMM: ['Januari', 'Februari', 'Mar', 'April', 'Maj', 'Juni', 'Juli', 'Augusti', 'September', 'Oktober', 'November', 'December'],
            MMM: ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'Maj.', 'Jun.', 'Jul.', 'Aug.', 'Sep.', 'Okt.', 'Nov.', 'Dec.'],
            dddd: ['Söndag', 'Måndag', 'Tisdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lördag'],
            ddd: ['Sön.', 'Mån.', 'Tis.', 'Ons.', 'Tor.', 'Fre.', 'Lör.'],
            dd: ['Sö', 'Må', 'Ti', 'On', 'To', 'Fr', 'Lö'],
            A: ['på morgonen', 'på eftermiddagen', 'på natten'],
            formatter: {
                A: function (d) {
                    var h = d.getHours();
                    if (h < 12) {
                        return this.A[0];   // på morgonen
                    } else if (h < 19) {
                        return this.A[1];   // på eftermiddagen
                    }
                    return this.A[2];       // på natten
                }
            },
            parser: {
                h: function (h, a) {
                    if (a < 1) {
                        return h;   // på morgonen
                    }
                    return h > 11 ? h : h + 12; // på eftermiddagen, på natten
                }
            }
        });
    };

    if (typeof module === 'object' && typeof module.exports === 'object') {
        locale(require('../date-and-time'));
    } else if (typeof define === 'function' && define.amd) {
        define(['date-and-time'], locale);
    } else {
        locale(global.date);
    }

}(this));
