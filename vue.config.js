module.exports = {
    transpileDependencies: ["vuetify"],
    chainWebpack: config => {
        config.plugin("html").tap(args => {
            args[0].title = "Userscripts by H. Kamran";
            return args;
        });
    }
};
