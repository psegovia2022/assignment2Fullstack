let language = (prompt('Please, enter the language you speak ("es", "de", "en", or "fr")')).toLowerCase();

switch (language) {
    case 'es':
        alert('Hello World translated in spanish is: Hola mundo.')
        break
    case 'de':
        alert('Hello World translated in german is: Hallo Welt')
        break
    case 'en':
        alert('Hello World is written in english')
        break
    case 'fr':
        alert('Hello World translated in french is: Salut le monde.')
    default:
        alert('That language is not included')
}