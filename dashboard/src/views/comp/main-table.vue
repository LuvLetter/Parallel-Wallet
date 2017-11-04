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
                        title: 'user',
                        key: 'asset'
                    },
	                {
	                    title:'exchange',
		                key:'exchange'
	                },
	                {
	                    title:'asset',
		                key:'For_asset'
	                }
                ],
                data1: [
                    {
						transactionId:'1',
	                    timestamp:'2',
                        description:'h',
	                    asset:'h',
                        exchange:'s',
	                    For_asset:'f',
                    },
                    {
                        transactionId:'1',
                        timestamp:'2',
                        description:'h',
                        asset:'h',
                        exchange:'s',
                        For_asset:'f',
                    },
                    {
                        transactionId:'1',
                        timestamp:'2',
                        description:'h',
                        asset:'h',
                        exchange:'s',
                        For_asset:'f',
                    }
                ]
            }
        }
    }
</script>
