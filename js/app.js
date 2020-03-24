function Tebak(option) {
    self = this;
}
Tebak.prototype.answer = function(lv) {
    self = this;
    return level[lv];
}
Tebak.prototype.range = function(start, end) {
    self = this;
    return new Array((end+1) - start).fill().map((d, i) => i + start);
}