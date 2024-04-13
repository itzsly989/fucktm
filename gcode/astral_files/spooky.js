;(function () {
    var _0x192c1a = Math.random,
        _0x4499cd = 0,
        _0x37f925 = document,
        _0x85d462 = window,
        _0x267d36 = _0x37f925.createElement('img'),
        _0x2c7336 = _0x37f925.createElement('div'),
        _0x38e47e = _0x2c7336.style,
        _0x13402c = _0x85d462.innerWidth * _0x192c1a(),
        _0x325a73 = _0x85d462.innerHeight * _0x192c1a()
    _0x38e47e.position = 'fixed'
    _0x38e47e.left = 0
    _0x38e47e.top = 0
    _0x38e47e.opacity = 0
    _0x38e47e.zindex = 100000
    _0x2c7336.appendChild(_0x267d36)
    _0x267d36.src = 'data:image/gif;base64,R0lGODlhMAAwAJECAAAAAEJCQv///////yH/C05FVFNDQVBFMi4wAwEAAAAh+QQJAQACACwAAAAAMAAwAAACdpSPqcvtD6NcYNpbr4Z5ewV0UvhRohOe5UE+6cq0carCgpzQuM3ut16zvRBAH+/XKQ6PvaQyCFs+mbnWlEq0FrGi15XZJSmxP8OTRj4DyWY1lKdmV8fyLL3eXOPn6D3f6BcoOEhYaHiImKi4yNjo+AgZKTl5WAAAIfkECQEAAgAsAAAAADAAMAAAAnyUj6nL7Q+jdCDWicF9G1vdeWICao05ciUVpkrZIqjLwCdI16s+5wfck+F8JOBiR/zZZAJk0mAsDp/KIHRKvVqb2KxTu/Vdvt/nGFs2V5Bpta3tBcKp8m5WWL/z5PpbtH/0B/iyNGh4iJiouMjY6PgIGSk5SVlpeYmZqVkAACH5BAkBAAIALAAAAAAwADAAAAJhlI+py+0Po5y02ouz3rz7D4biSJbmiabq6gCs4B5AvM7GTKv4buby7vsAbT9gZ4h0JYmZpXO4YEKeVCk0QkVUlw+uYovE8ibgaVBSLm1Pa3W194rL5/S6/Y7P6/f8vp9SAAAh+QQJAQACACwAAAAAMAAwAAACZZSPqcvtD6OctNqLs968+w+G4kiW5omm6ooALeCusAHHclyzQs3rOz9jAXuqIRFlPJ6SQWRSaIQOpUBqtfjEZpfMJqmrHIFtpbGze2ZywWu0aUwWEbfiZvQdD4sXuWUj7gPos1EAACH5BAkBAAIALAAAAAAwADAAAAJrlI+py+0Po5y02ouz3rz7D4ZiCIxUaU4Amjrr+rDg+7ojXTdyh+e7kPP0egjabGg0EIVImHLJa6KaUam1aqVynNNsUvPTQjO/J84cFA3RzlaJO2495TF63Y7P6/f8vv8PGCg4SFhoeIg4UQAAIfkEBQEAAgAsAAAAADAAMAAAAnaUj6nL7Q+jXGDaW6+GeXsFdFL4UaITnuVBPunKtHGqwoKc0LjN7rdes70QQB/v1ykOj72kMghbPpm51pRKtBaxoteV2SUpsT/Dk0Y+A8lmNZSnZlfH8iy93lzj5+g93+gXKDhIWGh4iJiouMjY6PgIGSk5eVgAADs='
    _0x37f925.body.appendChild(_0x2c7336)
    function _0x3a5d45(_0x5a1357, _0x4acb23) {
        return Math.max(
            Math.min(_0x5a1357 + (_0x192c1a() - 0.5) * 400, _0x4acb23 - 50),
            50
        )
    }
    function _0x41c86c() {
        var _0x4f1f5b = _0x3a5d45(_0x13402c, _0x85d462.innerWidth),
            _0x2e3c74 = _0x3a5d45(_0x325a73, _0x85d462.innerHeight),
            _0x423642 =
                5 *
                Math.sqrt(
                    (_0x13402c - _0x4f1f5b) * (_0x13402c - _0x4f1f5b) +
                    (_0x325a73 - _0x2e3c74) * (_0x325a73 - _0x2e3c74)
                )
        _0x38e47e.opacity = _0x4499cd
        _0x4499cd = 1
        _0x38e47e.transition = _0x38e47e.webkitTransition = _0x423642 / 1000 + 's linear'
        _0x38e47e.transform = _0x38e47e.webkitTransform = 'translate(' + _0x4f1f5b + 'px,' + _0x2e3c74 + 'px)'
        _0x267d36.style.transform = _0x267d36.style.webkitTransform = _0x13402c > _0x4f1f5b ? '' : 'scaleX(-1)'
        _0x267d36.style.filter = _0x267d36.style.webkitFilter = 'invert(8%) sepia(69%) saturate(3326%) hue-rotate(354deg) brightness(91%) contrast(114%)'
        _0x13402c = _0x4f1f5b
        _0x325a73 = _0x2e3c74
        setTimeout(_0x41c86c, _0x423642)
    }
    setTimeout(_0x41c86c, _0x192c1a() * 3000)
})()
