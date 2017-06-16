export default{
    path:'FormBuilder',
    getComponent(location,cb){
        require.ensure([],(require)=>{
            cb(null,require('./components/FormBuilder'))
        })
    }

}