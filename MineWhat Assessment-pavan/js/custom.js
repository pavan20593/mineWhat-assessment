$(function() {

			Highcharts.setOptions({
				colors: ['#FDB37C', '#8ED09A', '#FB7879']
			});
			$('#container').highcharts({
				legend: {
					align: 'left',
					verticalAlign: 'top',
					layout: 'vertical',
					itemStyle:{
						color:'#999',
						fontWieght:'normal',
						textShadow:false,
						lineHeight:10,
						fontSize:12
					}
				},
				plotOptions: {
					pie: {
						showInLegend: true,
						dataLabels: {
							enabled: true,
							distance: -20,
							formatter: function() {
								console.log(this);
								return (this.y * 100 / this.total)+ '%'
							},
							style: {

								color: 'white',

								textShadow:false

							}
						},
						center: ['50%', '50%']
					}
				},
				title:{
					text:null
				},
				exporting:{
					enabled:false
				},
				credits:{
					enabled:false
				},
				series: [{
					type: 'pie',
					innerSize: '50%',
					startAngle: 220,
					data: [
					['MOBILE', 49],
					['IPAD', 35],
					['DESKTOP',16],
					]
				}]
			});
		});