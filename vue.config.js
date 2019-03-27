const UglifyJsPlugin = require('uglifyjs-webpack-plugin'); //压缩js 移除config

module.exports = {
	// 基本路径
	publicPath: './',
	// 生产环境是否生成 sourceMap 文件
	productionSourceMap: false,

	configureWebpack: config => {
		if (process.env.NODE_ENV === 'production') {
			return {
				plugins: [
					new UglifyJsPlugin({
						uglifyOptions: {
							compress: {
								warnings: false,
								drop_console: true,
								drop_debugger: false,
								pure_funcs: ['console.log'] //移除console
							}
						},
						sourceMap: false,
						parallel: true
					}),
				]
			}
		}
	}
}
