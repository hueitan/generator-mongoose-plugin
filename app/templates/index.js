
// based on http://mongoosejs.com/docs/plugins.html

module.exports = exports = function <%= safeSlugname %>Plugin (schema, options) {
    schema.add({ <%= safeSlugname %>: Date })

    schema.pre('save', function (next) {
        this.<%= safeSlugname %> = new Date
        next()
    })

    if (options && options.index) {
        schema.path('<%= safeSlugname %>').index(options.index)
    }
}