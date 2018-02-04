function matchOne(pattern, text) {
    if(!pattern) return true;
    if(!text) return false;
    if(pattern === ".") return true;
    return pattern === text;
}

function search(pattern, text) {

}

function match(pattern, text) {
    if(!pattern) return true;
    if(pattern === "$" && text === "") return true;
    else return matchOne(pattern[0], text[0]) && match(pattern.slice(1), text.slice(1));
}


module.exports = {
  matchOne,
  match,
  search
}
