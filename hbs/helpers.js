const hbs = require('hbs');


hbs.registerHelper('getYear', () => new Date().getFullYear());
hbs.registerHelper('capitalize', (texts) => {
    let chars = texts.split(' ');
    chars.forEach((text, i) => {
        chars[i] = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
        
    });
    return chars.join(' ');
});
