class MyWebpackPlugin {
  apply(compiler) {
    // compiler.hooks.done.tap("My Plugin", (stats) => {
    //   console.log("MyPlugin: done");
    // });

    compiler.hooks.emit.tapAsync("emit", (compilation, callback) => {
      setTimeout(() => {
        const source = compilation.assets["main.js"].source(); // 아웃풋 main.js 소스

        console.log(source);
        compilation.assets["main.js"].source = () => {
          console.log("OK!!!!!!!!!!!");
          const banner = [
            "/**",
            " * 이것은 BannerPlugin이 처리한 결과입니다.",
            " * Build Date: 2021.03.18",
            " */",
          ].join("\n");
          return banner + "\n\n" + source;
        };

        callback();
      }, 1000);
    });
  }
}

module.exports = MyWebpackPlugin;
