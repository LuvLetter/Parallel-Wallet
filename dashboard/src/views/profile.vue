<style scoped>
	.layout{
		border: 1px solid #d7dde4;
		background: #f5f7f9;
	}
	.layout-content{
		min-height: 200px;
		margin: 15px;
		overflow: hidden;
		background: #fff;
		border-radius: 4px;
	}
	.layout-content-main{
		padding: 10px;
	}
	.layout-copy{
		text-align: center;
		padding: 10px 0 20px;
		color: #9ea7b4;
	}
</style>
<template>
	<div class="layout">
		<TopMenu></TopMenu>
		<div class="layout-content">
			<Row>
				<Col span="5">
				<LeftMenu></LeftMenu>
				</Col>
				<Col span="19">
				<div class="layout-content-main">
					<ProfileCard></ProfileCard>
				</div>
				</Col>
			</Row>
		</div>
		<div class="layout-copy">
			2017 &copy; Bugzhang
		</div>
	</div>
</template>

<script>
    import TopMenu from '../views/comp/top-menu.vue';
    import LeftMenu from '../views/comp/left-menu.vue';
    import ProfileCard from '../views/comp/profile-card.vue';

    export default {
        components: {
            TopMenu,
            LeftMenu,
            ProfileCard
        },
        data () {
            return {

            }
        }
    }
</script>
