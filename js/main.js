/** ========================================================================
 * index.htmlが読み込むファイル
 * ここに実行したい処理を書く。処理に必要な機能は別ファイル化する。
 ======================================================================== */

import { dummies } from "./dummy.js";
import { drawClockChart, drawCoreChart, drawBitWidthChart, drawMemoryChart } from "./showChart.js";
import { myFetcher } from "./fetcher.js";

const FETCH_URL = "https://script.google.com/macros/s/AKfycbyANlLhTKZpl6sPbZhfo26lfvaPCBxySW_H50ecps04i3BLns8iunvIZ-p7evCfZA-Y/exec";

/**
 * DOMContentLoadedはDOMツリー構築完了直後、画像ファイルなどの外部リソースが読み込まれる
 * 前に発火するイベントである。このイベントに対してリスナ登録することで、イベント発火時にスクリプトを実行する。
 */
 document.addEventListener('DOMContentLoaded', async function() {
    
});

/**
 * この場合はページ読み込み完了後、すなわちDOMツリー構築、<img>タグによる
 * 画像ファイルの外部リソースのロードなどすべて完了した時点でスクリプトが実行される。
 */
window.onload = async function () {
    const datas = await myFetcher(FETCH_URL);

    // Load the Visualization API and the corechart package.
    google.charts.load('current', {'packages':['corechart']});

    // Set a callback to run when the Google Visualization API is loaded.
    google.charts.setOnLoadCallback(() => drawClockChart(datas));
    google.charts.setOnLoadCallback(() => drawCoreChart(datas));
    google.charts.setOnLoadCallback(() => drawBitWidthChart(datas));
    google.charts.setOnLoadCallback(() => drawMemoryChart(datas));
};
