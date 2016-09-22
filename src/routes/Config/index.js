export default{
    path:'Config',
    getComponent(location,cb){
        require.ensure([],(require)=>{
            cb(null,require('./components/Config'))
        })
    }

}