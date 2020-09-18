export default {
    //1.先在所需模块import引入
    //2.掉接口后 输入传参和this
    //ex：tupianleixingyanzheng.tplxyz(file,this)
    tplxyz(file, n) {
        debugger
        const FileExt = n.file.name.replace(/.+\./, "");//取得文件的后缀名
        if (['jpg', 'png', 'jpeg', 'gif', 'svg', 'tiff', 'psd', 'swf', 'pcx', 'dxf', 'wmf', 'emf', 'lic', 'flic', 'eps', 'tga'
        , 'pjp', 'jfif', 'bmp', 'svgz', 'webp', 'ico', 'xbm', 'dib', 'tif', 'pjpeg', 'avif'].indexOf(FileExt.toLowerCase()) === -1) { //判断文件是否是mp3格式
                n.$Message.error('请上传图片格式的文件');
                n.file = null
                return true
        }
        return false
    }
}
