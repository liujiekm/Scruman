export default{
    path:'Chase',
    getComponent(location,cb){
        require.ensure([],(require)=>{
            cb(null,require('./components/Chase'))
        })
    }

}