<template>
	<div id="pieChart" :style="{width: '100%', height: '320px'}"></div>
</template>

<script>
    export default {
        name: 'pie',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        },
        mounted(){
            this.drawLine();
        },
        methods: {
            drawLine(){
                let myChart = this.$echarts.init(document.getElementById('pieChart'));
	            let option = {
                    title : {
                        text: '消费去向图',
                        subtext: '纯属虚构',
                        x:'center'
                    },
                    tooltip : {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    legend: {
                        orient: 'vertical',
                        left: 'left',
                        data: ['交通出行','线下消费','网上购物','虚拟消费']
                    },
                    series : [
                        {
                            name: '访问来源',
                            type: 'pie',
                            radius : '55%',
                            center: ['50%', '60%'],
                            data:[
                                {value:335, name:'交通出行'},
                                {value:310, name:'线下消费'},
                                {value:234, name:'网上购物'},
                                {value:135, name:'虚拟消费'}
                            ],
                            itemStyle: {
                                emphasis: {
                                    shadowBlur: 10,
                                    shadowOffsetX: 0,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                                }
                            }
                        }
                    ]
                };
                myChart.setOption(option);
            }
        }
    }
</script>