google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Operationell effektivitet', 'Entrepenörskap'],
          [ 2.2,      3.8],
          [ 4,      2.9],
          [ 1.1,     1.4],
          [ 4,      2.5],
          [ 3,      3.5],
          [ 1.5,    2.7]
        ]);

        var options = {
          title: 'Önskat läge vs upplevt värde',
          hAxis: {title: 'Operationell effektivitet', minValue: 0, maxValue: 5},
          vAxis: {title: 'Entrepenörskap', minValue: 0, maxValue: 5},
          legend: 'none'
        };

        var chart = new google.visualization.ScatterChart(document.getElementById('chartVy1'));

        chart.draw(data, options);
      }
