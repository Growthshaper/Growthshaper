/*google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Operationell effektivitet', 'Entrepenörskap'],
          [ 2.2,      3.8],
          [ 4,      2.9],
          [ 1,     1.4],
          [ 4,      2.5],
          [ 3,      3.5],
          [ 1.5,    2.7]
        ]);

        var options = {
          title: 'Önskat läge vs upplevt värde',
          hAxis: {title: 'Operationell effektivitet', minValue: 1, maxValue: 5},
          vAxis: {title: 'Entrepenörskap', minValue: 1, maxValue: 5},
          legend: 'none',
          'width': 500,
          'height': 500
        };

        var chart = new google.visualization.ScatterChart(document.getElementById('chartVy1'));

        chart.draw(data, options);
      }*/

google.charts.load('current', {'packages':['corechart', 'scatter']});
  google.charts.setOnLoadCallback(drawStuff);

    function drawStuff() {

      //var button = document.getElementById('change-chart');
      var chartDiv = document.getElementById('chartVy2');

        var data = new google.visualization.DataTable();
          data.addColumn('number', 'Operationell effektivitet');
          data.addColumn('number', 'Önskat läge');
          data.addColumn('number', 'Upplevt läge');

            data.addRows([
              [4.6, 4.7, null], [1.8, null, 1.1],
              [4, 4.3, null], [2, null, 2.4],
              [4.6, 4.3, null], [3.2, null, 2.8],
              [4.2, 4, null], [3, null, 1.5],
              [4.5, 4.5, null], [2.5, null, 2.5],
              [4, 4.1, null], [3.1, null, 2]
            ]);

        var materialOptions = {
          chart: {
            title: 'Önskat läge vs upplevt värde',
            subtitle: 'baserat på estimering från ledning'
              },
              width: 800,
              height: 500,
              vAxis: {title: 'Entrepenörskap'}
            };

              function drawMaterialChart() {
                var materialChart = new google.charts.Scatter(chartDiv);
                materialChart.draw(data, google.charts.Scatter.convertOptions(materialOptions));
                button.innerText = 'Change to Classic';
                button.onclick = drawClassicChart;
              }

              drawMaterialChart();
          };
