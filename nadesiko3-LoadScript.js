/*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*
　nadesiko3-LoadScript.js　v1.0.0

　CDNからライブラリを読み込む。

　作者:雪乃☆雫　／　ライセンス:CC0　／　制作時のナデシコバージョン:3.6.26
*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*/
const PluginLoadScript = {
  'meta': {
    type: 'const',
    value: { // プラグインに関する情報を指定する
      pluginName: 'nadesiko3-LoadScript', // プラグインの名前
      description: 'ライブラリを読み込む', // プラグインの説明
      pluginVersion: '1.0.0', // プラグインのバージョン
      nakoRuntime: ['wnako'], // 対象ランタイム
      nakoVersion: '3.6.2' // 要求なでしこバージョン
    }
  },
  'ライブラリ読込': { // @ ライブラリを読み込む // @ らいぶらりよみこみ
    type: 'func', // 関数であれば func にする
    josi: [['の','から']],
    asyncFn: true,
    fn: async function (url, sys) {
        await sys.__loadScript(url)
    }, // 関数の実態
    return_none: true
  },
 'CSSリンク作成': { // @ CSSファイルを読み込む // @ CSSりんくさくせい
    type: 'func', // 関数であれば func にする
    josi: [['の','から']], // 助詞を配列で宣言する
    fn: function (url, sys) {
        const link = sys.__exec('DOM部品作成', ['link', sys])
        link.rel = 'stylesheet'
        link.href = url
    },
    return_none: true
  }
}

// なでしこ3の本体に関数を登録する
if (typeof (navigator) === 'object') {
  navigator.nako3.addPluginObject("PluginLoadScript", PluginLoadScript)
} else {
  module.exports = PluginLoadScript
}
