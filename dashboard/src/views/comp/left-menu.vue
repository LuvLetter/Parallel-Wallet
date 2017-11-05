<template>
	<div>
		<Menu active-name="1-2" width="auto" theme="light" :open-names="['1']" style="min-height: 800px;">
			<router-link to="/">
				<MenuItem>
					<Icon type="ios-navigate"></Icon>
					总览
				</MenuItem>
			</router-link>
			<router-link to="/analytics">
				<MenuItem>
					<Icon type="ios-analytics"></Icon>
					分析
				</MenuItem>
			</router-link>
			<router-link to="/export">
				<MenuItem>
					<Icon type="ios-keypad"></Icon>
					Export to Blockchain
				</MenuItem>
			</router-link>
		</Menu>
	</div>
</template>
<style>

</style>
<script>
    export default {
        data() {
            return {}
        },
        components: {}
    }
</script>
