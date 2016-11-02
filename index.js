/**
 * Homemade gulp options manager
 */
module.exports = {
    options: null,
    read: function(argv) {
        var optionsClean = {};
        argv.slice(2, argv.length).forEach(function(p) {
            if (p.indexOf('--') === 0 && p.length !== 2) {
                var splitParam = p.replace('--', '').split('=');
                var param = splitParam[0];
                var value = (splitParam[1] !== undefined) ? splitParam[1] : '';
                optionsClean[param] = value;
            }
        });
        return optionsClean;
    },

    has: function(param) {
        if (!this.options) {
            this.options = this.read(process.argv);
        }
        return (Object.prototype.hasOwnProperty.call(this.options, param));
    },

    get: function(param) {
        return (this.has(param)) ? this.options[param] : undefined;
    }
};
