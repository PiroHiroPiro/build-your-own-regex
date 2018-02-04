function matchOne(pattern, text) {
    if (!pattern) return true;
    if (!text) return false;
    if (pattern === ".") return true;
    return pattern === text;
}

function search(pattern, text) {

}

function match(pattern, text) {
}


module.exports = {
  matchOne,
  match,
  search
}
