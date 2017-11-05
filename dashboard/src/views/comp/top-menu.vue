<template>
	<div>
		<Menu mode="horizontal" theme="dark" active-name="1">
			<div class="layout-logo"></div>
			<div class="layout-nav">
				<router-link to="/">
					<MenuItem name="1">
						<Icon type="ios-navigate"></Icon>
						首页
					</MenuItem>
				</router-link>
				<router-link to="/profile">
					<MenuItem name="2">
						<Icon type="ios-analytics"></Icon>
						支付方式
					</MenuItem>
				</router-link>
				<router-link to="/help">
					<MenuItem name="3">
						<Icon type="ios-paper"></Icon>
						帮助
					</MenuItem>
				</router-link>
			</div>
		</Menu>
	</div>

</template>
<script>
    export default {
        name: 'index',

        data() {
            return {
            }
        }
    };
</script>
