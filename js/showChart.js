import { removePrefix, generatetTooltipHtml, dayToYear } from "./utils.js";

const ticks = [
    1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990,
    1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000,
    2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010,
    2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020,
    2021, 2022, 2023, 2024, 2025
]

export const drawClockChart = async(datas) => {
    const data = new google.visualization.DataTable();
    data.addColumn("number", "year");
    data.addColumn("number", "Hz");
    data.addColumn({type: "string", role: "tooltip", p: {'html': true}});
    
    datas.map(d => {
        var prefixed = removePrefix(d.cpu.clock, "dec");
        var y = dayToYear(d.release);
        if (typeof(prefixed) == "number" && prefixed != 0 && y) {
            var h = generatetTooltipHtml(d);
            var p = [y, prefixed, h];
            data.addRow(p);
        }
    });

    const options = {
        height: 600,
        hAxis: {title: '年', ticks: ticks},
        vAxis: {title: 'Hz', minValue: 0},
        legend: 'none',
        pointShape: "circle",
        colors: ["#fbbf24"],
        pointSize: 8,
        tooltip: {isHtml: true},
    };


    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.ScatterChart(document.getElementById('clock_chart'));
    chart.draw(data, options);
}

export const drawCoreChart = (datas) => {
    const data = new google.visualization.DataTable();
    data.addColumn("number", "year");
    data.addColumn("number", "core");
    data.addColumn({type: "string", role: "tooltip", p: {'html': true}});
    
    datas.map(d => {
        var y = dayToYear(d.release);
        if (typeof(d.cpu.core) == "number" && d.cpu.core != 0 && y) {
            var h = generatetTooltipHtml(d);
            var p = [y, d.cpu.core, h];
            data.addRow(p);
        }
    })

    const options = {
        height: 600,
        hAxis: {title: '年', ticks: ticks},
        vAxis: {title: '個', minValue: 0},
        legend: 'none',
        pointShape: "circle",
        colors: ["#a3e635"],
        pointSize: 8,
        tooltip: {isHtml: true},
    };

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.ScatterChart(document.getElementById('core_chart'));
    chart.draw(data, options);
}

export const drawBitWidthChart = (datas) => {
    const data = new google.visualization.DataTable();
    data.addColumn("number", "year");
    data.addColumn("number", "bitWidth");
    data.addColumn({type: "string", role: "tooltip", p: {'html': true}});
    
    datas.map(d => {
        var y = dayToYear(d.release);
        if (typeof(d.cpu.bitWidth) == "number" && d.cpu.bitWidth != 0 && y) {
            var h = generatetTooltipHtml(d);
            var p = [y, d.cpu.bitWidth, h];
            data.addRow(p);
        }
    })

    const options = {
        height: 600,
        hAxis: {title: '年', ticks: ticks},
        vAxis: {title: 'bit', minValue: 0},
        legend: 'none',
        pointShape: "circle",
        colors: ["#38bdf8"],
        pointSize: 8,
        tooltip: {isHtml: true},
    };

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.ScatterChart(document.getElementById('bitWidth_chart'));
    chart.draw(data, options);
}

export const drawMemoryChart = (datas) => {
    const data = new google.visualization.DataTable();
    data.addColumn("number", "year");
    data.addColumn("number", "B");
    data.addColumn({type: "string", role: "tooltip", p: {'html': true}});
    
    datas.map(d => {
        var prefixed = removePrefix(d.memory.size, "bin");
        var y = dayToYear(d.release);
        if (typeof(prefixed) == "number" && prefixed != 0 && y) {
            var h = generatetTooltipHtml(d);
            var p = [y, prefixed, h];
            data.addRow(p);
        }
    })

    const options = {
        height: 600,
        hAxis: {title: '年', ticks: ticks},
        vAxis: {title: 'バイト', minValue: 0},
        legend: 'none',
        pointShape: "circle",
        colors: ["#e879f9"],
        pointSize: 8,
        tooltip: {isHtml: true},
    };

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.ScatterChart(document.getElementById('memory_chart'));
    chart.draw(data, options);
}
