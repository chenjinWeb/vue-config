

export default function (Vue){
  Vue.directive('focus',{
    bind:(el)=>{
      console.info("钩子函数bind触发了");
    },
    inserted:(el)=>{
      console.info("钩子函数inserted触发了");
      el.focus()
    },
    update:(el)=>{
      console.info("钩子函数update触发了");
    },
    componentUpdated:(el)=>{
      console.info("钩子函数componentUpdated触发了");
    },
    unbind:(el)=>{
      console.info("钩子函数unbind触发了");
    }
  })

  Vue.directive('green',{
    inserted:(el)=>{
      el.style.background = 'green';
    },
    update:(el)=>{
      el.style.background = 'yellow'
    }
  })
}
