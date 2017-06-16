export default{
    path:'ActualPage',
    getComponent(location,cb){
        require.ensure([],(require)=>{
            cb(null,require('./components/ActualPage'))
        })
    }

}