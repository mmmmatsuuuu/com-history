/**
 * ダミーデータファイル
 * ※ データの準備ができた段階で削除する。
 */

const dummy1 = {
    name: "ゲームボーイ",
    img: "https://soco-st.com/wp-content/themes/socost/upload/15124_color.svg",
    release: dayjs("1989/4/21"),
    cpu: {
        name: "LR35902",
        clock: "4.19MHz",
        core: 1,
        bitWidth: 16,
    },
    memory: {
        name: "",
        size: "8KB",
    },
    os: "",
    feature: "160×144px、モノクロ４階調の画面でゲームを遊ぶことができる",
}
const dummy2 = {
    name: "ゲームボーイカラー",
    img: "https://soco-st.com/wp-content/themes/socost/upload/15124_color.svg",
    release: dayjs("1998/10/21"),
    cpu: {
        name: "LR35902",
        clock: "4MHz",
        core: 1,
        bitWidth: 16,
    },
    memory: {
        name: "",
        size: "32KB",
    },
    os: "",
    feature: "160×144px、32768色中最大56色表示可能でゲームを遊ぶことができる",
}
const dummy3 = {
    name: "ゲームボーイアドバンス",
    img: "https://soco-st.com/wp-content/themes/socost/upload/15124_color.svg",
    release: dayjs("2001/3/21"),
    cpu: {
        name: "ARM7TDMI",
        clock: "16.78MHz",
        core: 1,
        bitWidth: 32,
    },
    memory: {
        name: "",
        size: "32KB",
    },
    os: "",
    feature: "240×160px、32768色でゲームを遊ぶことができる",
}
const dummy4 = {
    name: "ゲームボーイミクロ",
    img: "https://soco-st.com/wp-content/themes/socost/upload/15124_color.svg",
    release: dayjs("2005/9/13"),
    cpu: {
        name: "ARM7TDMI",
        clock: "16.78MHz",
        core: 1,
        bitWidth: 32,
    },
    memory: {
        name: "",
        size: "288KB",
    },
    os: "",
    feature: "ゲームボーイアドバンスよりもサイズを大幅に小型化し、240×160px、32768色でゲームを遊ぶことができる",
}

export const dummies = [
    dummy1, dummy2, dummy3, dummy4
]