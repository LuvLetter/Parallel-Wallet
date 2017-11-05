<template>
	<Table :columns="columns1" :data="data1"></Table>
</template>
<script>
    export default {
        data () {
            return {
                columns1: [
	                {
	                    title: 'ID',
		                key: 'transactionId'
	                },
                    {
                        title: '日期',
                        key: 'timestamp'
                    },
                    {
                        title: '描述',
                        key: 'description'
                    },
                    {
                        title: '对象',
                        key: 'asset'
                    },
	                {
	                    title:'交易',
		                key:'exchange'
	                },
	                {
	                    title:'资产',
		                key:'For_asset'
	                }
                ],
                data1: [
    {
        transactionId: "1",
        timestamp: "2017-1-2",
        description: "交通",
        asset: "地铁",
        exchange: -7,
        For_asset: 1093,
        __v: 0
    },
    {

        transactionId: "2",
        timestamp: "2017-1-10",
        description: "交通",
        asset: "地铁",
        exchange: -2,
        For_asset: 1092,
        "__v": 0
    },
    {

        transactionId: "3",
        timestamp: "2017-1-13",
        description: "交通",
        asset: "公交",
        exchange: -20,
        For_asset: 1072,
        "__v": 0
    },
    {

        transactionId: "1001",
        timestamp: "2017-1-15",
        description: "转账给张三",
        asset: "张三",
        exchange: 200,
        For_asset: 200,
        "__v": 0
    },
     {

        transactionId: "1001",
        timestamp: "2017-1-15",
        description: "转账给张三",
        asset: "我",
        exchange: -200,
        For_asset: 892,
        "__v": 0
    },   
    {

        transactionId: "4",
        timestamp: "2017-2-1",
        description: "交通",
        asset: "公交",
        exchange: -20,
        For_asset: 852,
        __v: 0
    },
    {

        "transactionId": "5",
        "timestamp": "2017-2-2",
        "description": "交通",
        "asset": "公交",
        "exchange": -2,
        "For_asset": 850,
        "__v": 0
    },
    {

        "transactionId": "6",
        "timestamp": "2017-2-3",
        "description": "交通",
        "asset": "的士",
        "exchange": -6,
        "For_asset": 844,
        "__v": 0
    },
    {

        "transactionId": "7",
        "timestamp": "2017-2-6",
        "description": "交通",
        "asset": "的士",
        "exchange": -2,
        "For_asset": 842,
        "__v": 0
    },
    {

        "transactionId": "8",
        "timestamp": "2017-2-11",
        "description": "🏪便利店",
        "asset": "全家",
        "exchange": -5,
        "For_asset": 837,
        "__v": 0
    },
    {

        "transactionId": "9",
        "timestamp": "2017-2-23",
        "description": "🏪便利店",
        "asset": "全家",
        "exchange": -8,
        "For_asset": 829,
        "__v": 0
    },
    {

        "transactionId": "10",
        "timestamp": "2017-3-4",
        "description": "🏪便利店",
        "asset": "全家",
        "exchange": -5,
        "For_asset": 824,
        "__v": 0
    },
    {

        "transactionId": "11",
        "timestamp": "2017-3-11",
        "description": "🚄火车票",
        "asset": "高铁",
        "exchange": -78,
        "For_asset": 746,
        "__v": 0
    },
    {

        "transactionId": "12",
        "timestamp": "2017-3-18",
        "description": "🚄火车票",
        "asset": "高铁",
        "exchange": -24,
        "For_asset": 722,
        "__v": 0
    }
    
                ]
            }
        }
    }
</script>
