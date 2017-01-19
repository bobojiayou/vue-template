<style lang="sass" scoped>
	.header {
		position: relative;
		line-height: 50px;
		color: #fff;
		text-align: left;
		background: #222;
		.title{
			font-size: 31px;
		}
	}
</style>
<template>
	<header class="header">
		<div class="title">{{title}}</div>
	</header>
</template>
<script>
    export default {
	    name : 'Pheader',
        props: {
            title: {
                type: String,
                default: ''
            }
        }
    }
</script>