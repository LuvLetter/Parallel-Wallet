<template>
	<div>
		<Card style="width:49%;float: left;margin-left: 1%;margin-top:5px;"  v-for="item in paymentList">
			<ul>
				<li>
					<a :href="item.url" target="_blank">{{ item.name }}</a>
					<div>地址: {{ item.address }}</div>
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
                        name: '地址',
                        url: 'https://movie.douban.com/subject/1292052/',
                        address: '1429uoqwjr23ou1pr3j94104ju190'
                    }, {
                        name: '地址',
                        url: 'https://.douban.com/subject/1292052/',
                        address:'93u0147183wiwor38y5-1wjr19up3437uwri3h'
                    }, {
                        name: '地址',
                        url: 'https://.douban.com/subject/1292052/',
                        address:'93u0147183wiwor38y5-1wjr19up3437uwri3h'
                    }, {
                        name: '地址',
                        url: 'https://.douban.com/subject/1292052/',
                        address:'93u0147183wiwor38y5-1wjr19up3437uwri3h'
                    }, {
                        name: '地址',
                        url: 'https://.douban.com/subject/1292052/',
                        address:'93u0147183wiwor38y5-1wjr19up3437uwri3h'
                    },

                ],
                randomMovieList: []
            }
        }
    }
</script>
