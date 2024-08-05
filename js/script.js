let navIcon=document.getElementById("nav-icon")
let isNavOpen=false

navIcon.addEventListener('click',function(){
    if(isNavOpen===true){
        closeNav()
    }else{
        openNav()
    }
})

async function openNav(){
    isNavOpen=true
    navIcon.classList.replace("fa-bars","fa-x")
    $("nav").animate({
        left:`0px` 
    },1000,()=>{
        $(".nav-body .links #link1").animate({
            top:`0px` 
        },200,()=>{
            $(".nav-body .links #link2").animate({
                top:`0px`
            },200,()=>{
                $(".nav-body .links #link3").animate({
                    top:`0px`
                },200,()=>{
                    $(".nav-body .links #link4").animate({
                        top:`0px`
                    },200,()=>{
                        $(".nav-body .links #link5").animate({
                        top:`0px`},200)
                    })
                })
            })
        })
    })
   
}
function closeNav(){
    isNavOpen=false
    navIcon.classList.replace("fa-x","fa-bars")


        $(".nav-body .links #link5").animate({
            top:`300px` 
        },200,()=>{
            $(".nav-body .links #link4").animate({
                top:`300px`
            },200,()=>{
                $(".nav-body .links #link3").animate({
                    top:`300px`
                },200,()=>{
                    $(".nav-body .links #link2").animate({
                        top:`300px`
                    },200,()=>{
                        $(".nav-body .links #link1").animate({
                        top:`300px`},200,()=>{
                            $("nav").animate({
                                left:`-${document.getElementsByClassName("nav-body")[0].clientWidth}px` 
                            },1000)
                        })
                    })
                })
            })
        })
    
}