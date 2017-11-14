<template>
<div>
	<div class="test-button">
		<label class="btn" for="uploads">上传</label>
		<input type="file" id="uploads" style="position:absolute; clip:rect(0 0 0 0);"
		 accept="image/png, image/jpeg, image/gif, image/jpg" @change="uploadImg">
		<button @click="finish" class="btn">裁剪</button>
	</div>
	<div class="wrapper">
		<vueCropper
			ref="cropper"
			:img="option.img"
			:outputSize="option.size"
			:outputType="option.outputType"
			:info="true"
			:autoCrop="true"
			:autoCropWidth="150"
			:autoCropHeight="150"
			:fixedBox="true"
			@realTime="realTime"
		></vueCropper>
	</div>
	<img :src="resultUrl">
	<!-- <canvas id="canvas" height="150" width="150"></canvas> -->
<!-- 	<div class="show-preview" :style="{'width': previews.w + 'px', 'height': previews.h + 'px',  'overflow': 'hidden', 'margin': '5px'}">
		<div :style="previews.div">
			<img :src="previews.url" :style="previews.img">
		</div>
	</div>	 -->
</div>

</template>
<script>
import vueCropper from 'vue-cropper'
import test from '@/assets/test.png'

export default {
	data: function () {
		return {
			crap: false,
			previews: {

			},
			resultUrl: '',
			option: {
				img: '',
				size: 1,
				outputType: 'jpeg'
			},
			downImg: '#'
		}
	},
	methods: {
		// 实时预览函数
		realTime (data) {
			this.previews = data
		},
		finish () {
			// 输出
			this.$refs.cropper.getCropData((data) => {
				// this.resultUrl = data;
				var img = document.createElement("img"); //创建临时图片
				img.src = data;
				var canvas = document.createElement("canvas");
				// var canvas = document.getElementById("canvas");
				canvas.width = 150;
				canvas.height = 150;
				
				var img2 = document.createElement("img"); //创建临时图片
				img2.src = test;
				var vm = this;
				img2.onload = function(){
					var ctx = canvas.getContext("2d");
					ctx.clearRect(0, 0, 300, 300);
					ctx.drawImage(img, 0, 0, 150, 150);
					ctx.drawImage(img2, 0, 0, 150, 150);
					var dataURL = canvas.toDataURL("image/png");
					vm.resultUrl = dataURL;	
				}

			})
		},

		uploadImg (e, num) {
			//上传图片
			var file = e.target.files[0]
			if (!/\.(gif|jpg|jpeg|png|bmp|GIF|JPG|PNG)$/.test(e.target.value)) {
				 alert('图片类型必须是.gif,jpeg,jpg,png,bmp中的一种')
				 return false
			 }
			var reader = new FileReader(file);

			reader.onload = (e) => {
				let data
				if (typeof e.target.result === 'object') {
					// 把Array Buffer转化为blob 如果是base64不需要
					data = window.URL.createObjectURL(new Blob([e.target.result]))
				} else {
					data = e.target.result
				}
				this.option.img = data

			}
			// 转化为base64
			// reader.readAsDataURL(file)
			// 转化为blob
			reader.readAsArrayBuffer(file)
		}
	},
	components: {
		vueCropper
	},
}
</script>

<style lang="stylus" scoped>
.wrapper
	height: 300px
	width: 300px
	margin: auto
</style>
