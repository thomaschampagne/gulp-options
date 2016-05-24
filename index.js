/**
 * Homemade gulp options manager
 */
module.exports = {
    options: null,
    read: function(argv) {
        var optionsClean = [];
        argv.slice(2, argv.length).forEach(function(p) {
            if (p.indexOf('--') === 0 && p.length !== 2) {
                optionsClean.push(p.replace('--', ''));
            }
        });
        return optionsClean;
    },

    has: function(param) {
        if (!this.options) {
            this.options = this.read(process.argv);
        }
        return (this.options.indexOf(param) !== -1);
    }
};
