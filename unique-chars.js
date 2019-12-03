var uniqueString = function (string) {
    var characters = {};
    for (var i = 0; i < string.length; i++) {
        if (characters[string.charAt(i)]) {
            return false;
        }
        characters[string.charAt(i)] = "x";
    }
    return true;
};
uniqueString("a");
uniqueString("aa");
uniqueString("hello there");
uniqueString("groin");
