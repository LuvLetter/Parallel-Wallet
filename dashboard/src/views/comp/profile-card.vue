<template>
	<div>
		<Card style="width:49%;float: left;margin-left: 1%;margin-top:5px;"  v-for="item in paymentList">
			<ul>
				<li>
					<a :href="item.url" target="_blank">{{ item.name }}</a>
					<div>BTC地址: {{ item.address }}</div>
				</li>
			</ul>
		</Card>
	</div>
</template>
<script>
    export default {
        data () {
            return {
                paymentList: [
                    {
                        name: '张三',
                        url: 'http://www.qukuai.com/search/address/18TMeb6Nvt2aPzaFommqYdn1A3dyiD5aDy',
                        address: '18TMeb6Nvt2aPzaFommqYdn1A3dyiD5aDy'
                    }, {
                        name: '小红',
                        url: 'https://blockchain.info/zh-cn/address/1DYca3usAboNkio3XqiCUUbRsQQsRwg7SX',
                        address:'1DYca3usAboNkio3XqiCUUbRsQQsRwg7SX'
                    }, {
                        name: '小明',
                        url: 'https://blockchain.info/zh-cn/address/1KaV5ZG9mWfMRMqdiV2Qm3rB7d558zeZVb',
                        address:'1KaV5ZG9mWfMRMqdiV2Qm3rB7d558zeZVb'
                    }, {
                        name: '小蓝',
                        url: 'https://blockchain.info/zh-cn/address/17mP3RxwWuMXVFuE5HWsLiV7Roa2WaywgW',
                        address:'17mP3RxwWuMXVFuE5HWsLiV7Roa2WaywgW'
                    }

                ],
                randomMovieList: []
            }
        }
    }
</script>
