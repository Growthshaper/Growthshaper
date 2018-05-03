google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['', 'Operationell effektivitet', 'Entrepenörskap', 'Markering'],
          ['', 4.2,      4.8, 'Önskat läge'],
          ['', 2,      2.9, 'Upplevt läge'],
          [ '',4,     4.4, 'Önskat läge'],
          [ '',2.2,      2.5, 'Upplevt läge'],
          ['', 4.8,      4.5, 'Önskat läge'],
          [ '',2.7,    2.7, 'Upplevt läge'],
          ['', 4.5,      4.5, 'Önskat läge'],
          [ '',1.8,    2, 'Upplevt läge'],
          ['', 4.4,      4, 'Önskat läge'],
          [ '',2.1,    2.1, 'Upplevt läge'],
          ['', 4.9,      4, 'Önskat läge'],
          [ '',2.9,    2.3, 'Upplevt läge']
        ]);

        var options = {
          title: 'Önskat läge och upplevt värde enligt estimering från ledning. Analysvy 1.',
          hAxis: {title: 'Operationell effektivitet', minValue: 1, maxValue: 5, ticks: [{v:1, f:'Låg'},{v:2, f:''},{v:3, f:''},{v:4, f:''},{v:5, f:'Hög'}]},
          vAxis: {title: 'Entrepenörskap', minValue: 1, maxValue: 5, ticks: [{v:1, f:''},{v:2, f:''},{v:3, f:''},{v:4, f:''},{v:5, f:'Hög'}]},
          sizeAxis: {minValue: 0, maxSize: 5},
          'width': 600,
          'height': 600,
          legend:{position: 'top'}
        };

        var chart = new google.visualization.BubbleChart(document.getElementById('chartVy1'));

        chart.draw(data, options);
      }
