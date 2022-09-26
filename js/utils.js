/**
 * 接頭辞のついた文字列を接頭辞を外した数値量に変換する。
 * dec -> 10^3で計算
 * "4.19MHz" => 4190000(Hz)
 * bin -> 2^10で計算
 * "4MB" => 4194304(B)
 * その他のタイプが指定された場合は、そのまま文字列を返す。
 * "4MB" => "4MB"
 * @param {string} amount 
 * @param {string} type "dec" | "bin"
 */
 export const removePrefix = (amount, type) => {
    const prefix = ["K", "M", "G", "T", "P", "E"];

    const temp = amount.split(/(K|M|G|T|P|E)/);
    const a = Number(temp[0]);
    const p = temp[1];
    let n = 0;
    while (p != prefix[n]) {
        n++;
    }
    n++;

    if (type === "dec") {
        return Math.trunc(a * 1000 ** n);
    } else if (type === "bin") {
        return Math.trunc(a * 1024 ** n);
    } else {
        return amount;
    }
}

/**
 * Google Chart用TooltipのHTMLを返す
 * @param {Object} d 
 * @returns HTMLstring
 */
export const generatetTooltipHtml = (d) => {
    const h = `
<div class="p-2 rounded">
    <p class="font-bold">${d.name}</p>
    <img src="${d.img}" class="max-h-40 m-auto"/>
    <table>
        <tbody>
            <tr>
                <td class="w-16">発売</td>
                <td>${d.release.format("YYYY年MM月DD日")}</td>
            </tr>
            <tr>
                <td>使用CPU</td>
                <td>${d.cpu.name}　${d.cpu.clock}, ${d.cpu.core}コア, ${d.cpu.bitWidth}bit</td>
                <td></td>
            </tr>
            <tr>
                <td>使用メモリ</td>
                <td>${d.memory.name}　${d.memory.size}</td>
            </tr>
            <tr>
                <td>使用OS</td>
                <td>${d.os || "なし"}</td>
            </tr>
            <tr>
                <td>説明</td>
                <td>${d.feature}</td>
            </tr>
        </tbody>
    </table>
</div>
        `;
    return h;
}

/**
 * 日付を年単位の少数で表示する。
 * @param {dayjs Object} day 
 */
export const dayToYear = (day) => {
    const year = day.format("YYYY") + "/01/01";
    const startYear = dayjs(year);
    const sub = day.unix() - startYear.unix();
    const ratio = sub / (365 * 24 * 60 * 60);
    return parseInt(day.format("YYYY")) + ratio;
}